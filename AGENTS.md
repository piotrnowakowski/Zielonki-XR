# Zielonki XR development

This is the user's explicitly requested independent competition repository. Development and pushes to this repository are allowed within an authorized task. The upstream repository's historical main freeze and Mikrus deployment instructions do not govern this repository; they remain archived in `docs/upstream-agent-guidance.md`.

## Scope and evidence

- Target Productivity / Adapted / Significantly Updated Experience. Read `hackathon.json` and `docs/hackathon/requirements.md` before changing the competition flow.
- Keep inherited functionality separate from new adaptations. Never claim XR, hand interactions, headset performance, eligibility, membership or submission has been verified without evidence.
- Default competition builds must remain independent of the original Mikrus server and browser storage. Never copy `.env`, browser credentials or production connection keys from House_Web_MCP.
- Do not deploy, enable Pages, change upstream, register for the event, accept legal terms or submit to Devpost without a user instruction authorizing that action. Repository publication is not application deployment.
- Use public, licensed SDKs and assets. The submitted app must have English UI and material. Replace commercial names, product links and recognizable branded models in the submission experience; preserve license notices in the repository.

## Project data

- Treat `project-data/zielonki-rear-bath-room/project.json` as the current GLOWNY canonical model (inherited r82). Other project identities and migration/recovery baselines remain independent.
- Preserve stable refs and original geometry. Never replace a saved user workspace merely to match a test fixture. Capture and back up the actual originating workspace before any task that transfers or replaces browser data; never treat a test browser as the user's house workspace.
- Merge model edits by baseline and entity refs, preserving deletions. Record conflicts and keep both versions until resolved.
- When changing or merging house/roof geometry, recompute each main slope and ridge from the final footprint. Retain the inherited 37-45 degree slope constraint and symmetric gables. Check roof junctions in exterior and interior views. This model check does not prove whole-building planning compliance.

## Validation and release

- Run `npm run hackathon:check`, tests appropriate to the change, and `npm run build`. Run `npm run build:sync` if inherited API code or its dependency configuration changes.
- Use the T3 collaborative browser when available. Distinguish desktop, emulated XR, real-device and deployed evidence.
- Record device model, OS/browser, commit, input mode, performance and comfort in `docs/hackathon/testing.md`.
- A final submission must pass `npm run hackathon:submission-check`, use an immutable submission tag and remain accessible without post-deadline changes. CI alone does not establish readiness.
- Do not edit historical screenshots or videos to make them look like current VR evidence.
