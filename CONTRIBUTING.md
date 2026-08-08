# Contributing

Thank you for improving Web Palace.

## Setup

```bash
npm ci
npm run dev
```

## Before opening a pull request

```bash
npm test
npx tsc --noEmit
npm run build
```

Keep framework changes separate from subject-specific palace content. Tests should use synthetic examples rather than personal notes, URLs, or generated assets.

When changing registry behaviour, add tests for validation, duplicate prevention, destination safety, deterministic placement, and removal recovery as applicable.

## Pull requests

- Explain the user-facing reason for the change.
- Keep the scope focused.
- Include relevant tests.
- Document security or migration implications.
- Do not commit personal notes, credentials, build output, logs, registry backups, or copyrighted source files.

