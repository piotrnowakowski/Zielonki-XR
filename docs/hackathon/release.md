# Release procedure

Pushes run CI and never publish the site. The Pages workflow accepts manual dispatch only, with `publish` false by default. It uses `/Zielonki-XR/` as its base path. Pages is not enabled during repository setup, and the workflow has not been dispatched.

When the user authorizes a development deployment, enable GitHub Pages with GitHub Actions as the source and manually dispatch the workflow with the explicit publish option. Validate the served commit and every judge-facing URL separately from CI. This development release is not a submission-readiness assertion.

Before final submission:

1. Complete and evidence all gates in `hackathon.json`; run `npm run hackathon:submission-check`.
2. Test the final hosted flow and record the real application demonstration.
3. Set `submission.releaseTag` to an immutable version such as `submission-2026-11-18`; tag the tested commit and verify hosted asset identity.
4. Record the full commit hash and playable/video links before the user submits the form.
5. Keep that version and its assets available during judging. Freeze the submitted branch/build after the deadline; continue later development on a separate branch without changing the submitted URLs/assets.

The deadline is November 18, 2026 at 20:00 UTC / 21:00 Europe/Warsaw. Final submission and acceptance of event/account terms require a separate user instruction.
