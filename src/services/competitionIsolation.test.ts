import { afterEach, beforeEach, expect, it, vi } from 'vitest'
import { detectLocalConnection, detectPublicConnection, listSharedProjects, transferWorkspace, useSyncStatus } from './mikrusSync'

beforeEach(() => {
  vi.stubEnv('VITE_HACKATHON_MODE', 'true')
  vi.stubGlobal('fetch', vi.fn())
  useSyncStatus.setState({ busy: false, message: '', conflict: null })
})
afterEach(() => { vi.unstubAllEnvs(); vi.unstubAllGlobals() })

it('does not discover or read the original house server in competition builds', async () => {
  expect(await detectPublicConnection()).toBe(false)
  expect(await detectLocalConnection()).toBe(false)
  await expect(listSharedProjects()).rejects.toThrow('Remote synchronization is disabled')
  expect(fetch).not.toHaveBeenCalled()
})

it('cannot upload or download the original house even when invoked directly', async () => {
  await transferWorkspace('push')
  await transferWorkspace('get')
  expect(fetch).not.toHaveBeenCalled()
  expect(useSyncStatus.getState().busy).toBe(false)
  expect(useSyncStatus.getState().message).toContain('disabled')
})
