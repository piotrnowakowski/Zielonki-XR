import assert from 'node:assert/strict'
import { readFileSync, existsSync } from 'node:fs'
import { execFileSync } from 'node:child_process'

const json = path => JSON.parse(readFileSync(path, 'utf8').replace(/^\uFEFF/, ''))
const config = json('hackathon.json')
assert.equal(config.track, 'Productivity')
assert.equal(config.division, 'Adapted / Significantly Updated Experience')
assert.equal(config.language, 'en')
assert.equal(config.rulesUrl, 'https://start-developer-competition-26.devpost.com/rules')
assert.equal(config.deployment.automatic, false)
assert.equal(Date.parse(config.deadlineUtc), Date.parse(config.deadlineWarsaw))
assert.equal(config.deadlineUtc, '2026-11-18T20:00:00Z')

for (const key of ['preCompetitionCommit', 'adaptationBaselineCommit']) {
  const commit = config.source[key]
  assert.match(commit, /^[0-9a-f]{40}$/)
  execFileSync('git', ['cat-file', '-e', `${commit}^{commit}`])
  execFileSync('git', ['merge-base', '--is-ancestor', commit, 'HEAD'])
}
const preCompetitionDate = execFileSync('git', ['show', '-s', '--format=%cI', config.source.preCompetitionCommit], { encoding: 'utf8' }).trim()
assert(Date.parse(preCompetitionDate) < Date.parse(config.entryStartUtc), 'The existing-project baseline must predate the event')
const project = json(config.source.projectPath)
assert.equal(project.revision, config.source.projectRevision)
assert.equal(project.ref, 'project/zielonki-rear-bath-room')

for (const path of ['LICENSE', 'ATTRIBUTIONS.md', 'docs/hackathon/requirements.md', 'docs/hackathon/adaptation.md', 'docs/hackathon/testing.md', 'docs/hackathon/submission.md', 'docs/hackathon/assets.md', 'docs/hackathon/release.md']) assert(existsSync(path), `Missing ${path}`)
assert(readFileSync('LICENSE', 'utf8').includes('MIT License'))
const workflow = readFileSync('.github/workflows/publish-pages.yml', 'utf8')
assert(workflow.includes('workflow_dispatch:') && workflow.includes('default: false'))
assert(!/^\s+(push|pull_request|schedule|workflow_run):/m.test(workflow), 'Publishing must never run automatically')
assert(workflow.includes('inputs.publish == true'))
assert(workflow.includes('BASE_PATH: /Zielonki-XR/'))
assert(!existsSync('.github/workflows/pages.yml'), 'The inherited push-to-deploy workflow must be removed')

const required = ['eligibility', 'developer-account-and-start-membership', 'significant-adaptation', 'hands-end-to-end', 'english-experience-and-materials', 'asset-rights-and-unbranded-experience', 'meta-policy-review', 'device-performance-and-function', 'accessible-playable-build', 'demonstration-video', 'submission-form', 'immutable-release']
assert.equal(config.requirements.length, required.length)
assert.deepEqual([...new Set(config.requirements.map(r => r.id))].sort(), [...required].sort())
for (const requirement of config.requirements) {
  assert(['pending', 'verified'].includes(requirement.status))
  if (requirement.status === 'verified') assert(typeof requirement.evidence === 'string' && requirement.evidence.trim(), `Evidence missing: ${requirement.id}`)
}
console.log(`Repository configuration valid. Baseline: r${project.revision}; automatic deployment disabled.`)

if (process.argv.includes('--submission')) {
  const pending = config.requirements.filter(r => r.status !== 'verified').map(r => r.id)
  if (pending.length) {
    console.error(`Submission is not ready. Pending evidence: ${pending.join(', ')}`)
    process.exitCode = 1
  } else {
    const playable = new URL(config.deployment.publishedUrl)
    assert.equal(playable.protocol, 'https:')
    const video = new URL(config.submission.videoUrl)
    assert(['youtube.com', 'www.youtube.com', 'youtu.be', 'vimeo.com', 'www.vimeo.com'].includes(video.hostname))
    assert(config.submission.videoDurationSeconds > 0 && config.submission.videoDurationSeconds < 180)
    assert(typeof config.submission.releaseTag === 'string')
    const release = execFileSync('git', ['rev-parse', `${config.submission.releaseTag}^{commit}`], { encoding: 'utf8' }).trim()
    const head = execFileSync('git', ['rev-parse', 'HEAD'], { encoding: 'utf8' }).trim()
    assert.equal(release, head, 'Check the exact immutable submission commit')
    console.log('Submission records have evidence references and an immutable tag. Verify external claims and hosted access before submitting.')
  }
}
