# Testing plan

## Automated and desktop

Run repository checks, the inherited geometry/migration suite and the competition build. Verify that fresh and existing local workspaces preserve edits/deletions. Confirm that no network request reaches the original house server and that its storage is untouched.

## Emulated XR

After XR integration, use a WebXR emulator to inspect the same hand-input code path, room selection, valid destinations, return-to-overview and note saving. Record emulator/device profile, browser, commit, steps and failures. Mouse interactions alone are desktop evidence.

## Real Meta device

Use a Quest device to complete the flow with hands from entry to exit. Check seated reach, text readability, accidental selections, lost tracking, door/roof collisions, teleport comfort, pause/resume and reload persistence. Collect measured frame rate under the heaviest scene; desktop FPS is not a Quest measurement.

| Date | Commit | Device / OS / browser | Input | Scenario | Performance | Result / evidence |
| --- | --- | --- | --- | --- | --- | --- |
| Pending | Pending | Pending | Hands | Full ground-floor review | Pending | Not tested |

The retained `output/` files belong to upstream validations. New evidence must identify this repository's actual commit and environment.
