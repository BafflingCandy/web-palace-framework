# Web Palace Framework

Web Palace is an empty visual knowledge registry for websites you want to keep, revisit, and expand. Websites appear as nodes in an animated brain and can be searched or opened from an alphabetical index.

The template includes three project-local Codex skills that can turn structured notes or documents into teaching-first visual websites, register those websites in the brain, and independently review the result.

## What is included

- animated brain with deterministic node placement;
- device-local clock, search, and alphabetical index;
- an empty typed JSON registry;
- local Add Node and Remove from Brain controls;
- safe, idempotent registration shared by the interface and CLI;
- Architect, Builder, and Reviewer Codex skills;
- validation for routes, duplicate identities, destinations, and node capacity;
- responsive, keyboard-accessible controls and reduced-motion support.

## Requirements

- Node.js 20 or newer;
- npm 10 or newer;
- Codex is optional for adding existing websites and recommended for building new teaching palaces.

## Start locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

The **Add Node** control is intentionally available only in local development. It is hidden in production builds.

## Add an existing website

1. Start the development server.
2. Open the brain and select the plus button in the upper-left corner.
3. Enter a name, destination, subject, summary, and tags.
4. Submit **Add to brain**.

External destinations must be absolute HTTP or HTTPS URLs, for example:

```text
https://example.com/my-notes
```

Internal destinations must already resolve to a Next.js application route before they can be marked Live:

```text
/palaces/my-subject
```

Choose **Queued** only when intentionally registering a route that is not ready yet.

## Remove a node

Open Add Node, use the **Manage** section, select a website, and choose **Remove from brain**. Removal changes only the registry. It never deletes website routes or project files. A recoverable registry backup is written under `backups/`, which is ignored by Git.

## Build a new teaching palace with Codex

The repository contains these project-local skills:

```text
.agents/skills/web-palace-architect
.agents/skills/web-palace-builder
.agents/skills/web-palace-reviewer
```

A recommended workflow is:

```text
Use $web-palace-architect to turn my notes into a source-grounded teaching
architecture. Begin in plain language and make later routes progressively
deeper. Save the formal specification in docs/web-palace/<subject>/.
```

After reviewing the architecture:

```text
Use $web-palace-builder to implement the approved specification, verify the
website, and register exactly one brain node.
```

Then run an independent review:

```text
Use $web-palace-reviewer to review the completed website against its sources
and specification.
```

Structured Notion notes, PDFs, handwritten notes, slides, and pasted notes are appropriate primary curricula. Videos and playlists should normally remain optional references unless transcript ingestion and an extracted curriculum are explicitly approved.

## Register from the command line

The Builder skill prefers the shared registration command:

```bash
npm run palace:register -- --help
```

Example for a completed internal palace:

```bash
npm run palace:register -- \
  --id visual-math \
  --title "Visual Math" \
  --subject "Mathematics" \
  --destination "/palaces/visual-math" \
  --summary "A visual guide that teaches mathematical ideas through worked examples." \
  --tags "mathematics,visual learning,examples" \
  --cluster "Mathematics" \
  --status live
```

Running the same command again updates the existing stable ID instead of creating a duplicate.

## Registry format

The canonical registry is [`src/data/webPalaceRegistry.json`](src/data/webPalaceRegistry.json). New templates begin with an empty array.

Do not edit node positions manually unless you intentionally want to pin one. Automatic placement is deterministic and preserves valid existing pins.

## Security model

Browser-based registry mutation is deliberately restricted to:

- `NODE_ENV=development`;
- loopback hosts such as `localhost` and `127.0.0.1`;
- repository-controlled registry and application paths.

A public deployment is a read-only brain. This template does not provide authentication, hosted persistence, or safe remote registry editing.

## Verification

```bash
npm test
npx tsc --noEmit
npm run build
```

For a clean reproducibility check, use `npm ci` instead of `npm install`.

## Create your repository from this template

Select **Use this template** on GitHub, create a new repository, clone it, and follow the local startup instructions. Your repository starts with unrelated history, so it becomes your own project rather than a fork of the framework.

## Known limitations

- Registry changes are file-based and local-development-only.
- A development restart may be required for framework-level module changes.
- Internal Live nodes require an existing application route.
- The introduction shader loads Three.js from a CDN and falls back gracefully if it cannot load.

## Licence

MIT. See [LICENSE](LICENSE).

