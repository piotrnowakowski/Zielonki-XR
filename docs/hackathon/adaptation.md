# Existing work and adaptation log

## Preserved baseline

Upstream: https://github.com/piotrnowakowski/House_Web_MCP

`baseline/pre-competition` points to `9307823dadbbca8a1d32eda64034e40a13c6f49b`, dated September 16, 2026. The project existed before the entry window.

The development starting point is `baseline/zielonki-r82` at `6736ebf17d0e576aea0e05f6e4829cf464e32f12`. It includes the existing semantic house generator, desktop editor, interior materials/furniture, local persistence, reporting, greenhouse garden and fire lounge. Some inherited changes were made after September 24; their existing commit dates are preserved, and they must not be represented as new work authored by this repository setup.

## Work completed in this repository

- Competition metadata, English project/submission documentation and release gates.
- Separate origin/repository and browser workspace database.
- Production house sync disabled in competition mode.
- Pinned React Three Fiber XR dependency for subsequent implementation.
- CI for checks/tests/builds; manually invoked publication only.

These are preparation steps, not a claim of significant VR adaptation.

## Planned feature record

| Feature | Existing behavior | Target behavior | State / evidence |
| --- | --- | --- | --- |
| Room navigation | Desktop orbit/pan camera | Hand-selected validated teleport points | Not implemented |
| Review scale | Desktop perspective view | Comfortable 1:1 seated exploration | Not implemented |
| Comparison | Existing editor configuration | Defined before/after pair usable with hands | Not implemented |
| Decisions | Existing edit/proposal data | Spatial notes saved through a controller-free flow | Not implemented |
| Onboarding | Existing project launcher | English, short hands-first onboarding | Not implemented |

For each implemented feature add its exact commit, a reproducible test and honest before/after footage. Prior Blender videos and desktop recordings are historical assets, not evidence that the XR flow works.
