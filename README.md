# Zielonki XR

Architectural review before construction: explore a proposed home at human scale, compare design options and record decisions using hand interactions.

Prepared for the [Meta VR Start Developer Competition 2026](https://start-developer-competition-26.devpost.com/) in **Productivity**, **Adapted / Significantly Updated Experience**.

**Current state: repository setup and a working desktop architecture editor. The XR review flow is not implemented or submission-ready.** Installing the XR dependency does not constitute a working VR experience.

## Start locally

Use Node.js 22.12 or newer within Node 22, and npm.

```sh
npm ci
npm run dev
```

Open `http://127.0.0.1:5198`. Choose the GLOWNY house project to inspect the inherited r82 house and garden. No production connection key is needed. Competition mode uses the separate `zielonki-xr-workspaces` IndexedDB database and disables all Mikrus synchronization. It does not import or overwrite the original editor's saved workspace.

```sh
npm run hackathon:check
npm test
npm run build
npm run build:sync
npm run preview
```

The local build preview uses port 5199. `npm run hackathon:submission-check` intentionally fails until the evidence-backed submission requirements in `hackathon.json` are completed.

## Origin and attribution

This repository is an independent copy of [House_Web_MCP](https://github.com/piotrnowakowski/House_Web_MCP), preserving its Git history and MIT license. GitHub does not allow the same account to own a repository and its native fork.

- `baseline/pre-competition`: `9307823`, an upstream commit dated September 16, 2026.
- `baseline/zielonki-r82`: `6736ebf`, the October 5 local consolidation of house r79, greenhouse garden r80 and compact garden/fire lounge r82.
- The current house source is `project-data/zielonki-rear-bath-room/project.json`. Its stable refs, revision and recovery snapshots remain unchanged.

The inherited editor, furniture library, garden and prior Blender videos are existing work. New competition work must be described separately in [the adaptation log](docs/hackathon/adaptation.md). Keep [LICENSE](LICENSE) and [ATTRIBUTIONS.md](ATTRIBUTIONS.md). The original editor documentation is retained in [docs/upstream-readme.md](docs/upstream-readme.md).

## Planned review flow

1. Select a room from a model of the house.
2. Teleport to a validated viewpoint and inspect the room at 1:1 scale while seated.
3. Compare a defined pair of design options.
4. Place a decision note, then return to the overview.

The initial scope is the ground floor, a small set of room viewpoints, one comparison and saved notes. React Three Fiber and the pinned `@react-three/xr` dependency are the implementation starting point. Headset/emulator validation must be recorded rather than inferred from desktop rendering.

## Competition preparation

- [Requirements and open gates](docs/hackathon/requirements.md)
- [Existing work and new adaptations](docs/hackathon/adaptation.md)
- [Device and emulator testing](docs/hackathon/testing.md)
- [English submission draft](docs/hackathon/submission.md)
- [Asset and branding review](docs/hackathon/assets.md)
- [Release and submission freeze](docs/hackathon/release.md)

## CI and deployment

Pushes and pull requests run validation, tests and builds only. **No push deploys this repository.** GitHub Pages has a separate manual workflow requiring an explicit publish choice. No hosted app, Pages site, Mikrus release or Devpost submission has been created by this setup. Upstream pushes are disabled locally.
