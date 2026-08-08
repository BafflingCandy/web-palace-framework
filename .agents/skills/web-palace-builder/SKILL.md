---

name: web-palace-builder
description: Implement or extend a teaching-first Web Palace educational website from an approved experience specification. Use for repository inspection, route construction, structured lessons, guided examples, educational components, visual assets, interactions, responsive design, accessibility, testing, and verification. Do not use to invent an entire learning architecture when no usable specification exists.
---

# Web Palace Builder

## Mission

Implement a maintainable, source-grounded, multi-page educational website that teaches the subject from the learner's actual starting point.

You are accountable for:

* repository-safe implementation;
* route completeness;
* content fidelity;
* visual quality;
* educational interactions;
* responsive behaviour;
* accessibility;
* performance;
* verification;
* traceable handoff.

You are not authorised to silently redesign the approved learning architecture.

Prioritise accuracy, understanding, teaching progression, guided practice, and explanatory feedback before visual atmosphere. A visually polished route that does not teach its stated outcome is incomplete.

---

# Required Inputs

Before substantial implementation, locate:

1. `docs/web-palace/EXPERIENCE_SPEC.md`
2. `docs/web-palace/KNOWLEDGE_MODEL.md`
3. `docs/web-palace/SOURCE_LEDGER.md`
4. `docs/web-palace/CONTENT_COVERAGE.md`
5. `docs/web-palace/ASSET_PLAN.md`
6. `PROJECT_CONTEXT.md`
7. repository instructions such as `AGENTS.md`

If these do not exist:

* determine whether the task is a small extension that can safely proceed;
* otherwise stop architectural invention;
* create a clear missing-specification report;
* recommend invoking `web-palace-architect`.

Do not generate a large multi-page product from an underspecified sentence while pretending requirements are settled.

---

# Required Outputs

Create or update:

* production application code;
* tests;
* `docs/web-palace/IMPLEMENTATION_LOG.md`;
* `docs/web-palace/VERIFICATION_REPORT.md`;
* implementation status in `CONTENT_COVERAGE.md`;
* realised asset status in `ASSET_PLAN.md`;
* `PROJECT_CONTEXT.md`;
* relevant architecture decisions.
* the Web Palace brain registry entry when the repository contains a registry.

---

# Phase 0: Preflight Inspection

Before editing:

## Repository state

Inspect:

* Git status;
* current branch;
* uncommitted changes;
* project root;
* package manager;
* lockfile;
* framework and version;
* Node or runtime expectations;
* build scripts;
* lint scripts;
* test scripts;
* route structure;
* styling;
* component conventions;
* content conventions;
* Web Palace registry data, node-assignment utilities, and registry tests;
* deployment configuration;
* environment variables;
* existing warnings.

Do not overwrite unrelated uncommitted user changes.

Do not remove files merely because their purpose is initially unclear.

## Instruction hierarchy

Read all applicable instruction files.

Follow the most local applicable project instructions.

## Specification status

Confirm:

* specification version;
* approval status;
* intended routes;
* required content;
* mandatory interactions;
* assets;
* acceptance criteria;
* exclusions;
* unresolved decisions.

Record the specification version in `IMPLEMENTATION_LOG.md`.

Confirm that the specification contains:

* a curriculum mode;
* a foundation floor;
* a target ceiling;
* an ordered concept dependency ladder;
* one recommended first route;
* route contracts that cover the ladder without hidden prerequisite gaps.

For a substantial educational website, treat any missing item above as an incomplete specification. Stop and request an Architect revision instead of inventing a curriculum during implementation.

## Baseline verification

Run the existing checks before modification when practical:

* type check;
* lint;
* tests;
* production build.

Record pre-existing failures separately.

Do not attribute old failures to your implementation.

---

# Phase 1: Implementation Plan

Produce a repository-specific plan before broad changes.

The plan must include:

* files and directories likely to change;
* route implementation order;
* content model;
* component boundaries;
* asset production order;
* interaction order;
* tests to add;
* risks;
* expected dependencies;
* verification commands.

Prefer vertical slices.

Recommended order:

1. project foundation and metadata;
2. global navigation and layout;
3. first complete route;
4. one deeper complete route;
5. remaining routes;
6. educational interactions;
7. visual polish and motion;
8. accessibility and responsive hardening;
9. performance;
10. full verification.

---

# Specification Traceability

Every significant implementation requirement should be traceable to:

* a route contract;
* a content coverage item;
* an asset item;
* a cross-cutting criterion;
* an approved change request.

Use IDs in implementation notes and, where useful, tests.

Examples:

* `ROUTE-003`
* `CON-012`
* `CLM-007`
* `ASSET-005`
* `INTERACTION-002`

Do not clutter public UI or ordinary code with excessive specification comments.

Traceability belongs primarily in:

* tests;
* implementation log;
* coverage documents;
* architecture decisions.

---

# Change Control

You may make minor implementation decisions independently.

Examples:

* component naming;
* spacing values;
* internal file organisation;
* responsive breakpoint details;
* small copy corrections;
* equivalent technical libraries already present in the project.

Create a specification change proposal when changing:

* route count;
* route responsibility;
* learning order;
* important terminology;
* source interpretation;
* learning outcomes;
* major interactions;
* primary visual metaphor;
* scope;
* important accessibility fallback;
* externally visible behaviour.

Record approved changes in the specification and project context.

Do not bury product changes in code.

---

# Architecture Principles

## Preserve the existing stack

Prefer existing:

* framework;
* router;
* styling;
* design tokens;
* component library;
* testing tools;
* state management;
* content format;
* package manager.

Add a dependency only when:

* existing capabilities are insufficient;
* the dependency is maintained;
* its value exceeds its complexity;
* bundle and security implications are acceptable;
* the reason is recorded.

## Separate content from presentation

Store substantial educational content in structured form where practical.

Avoid embedding all route copy directly inside large JSX components.

Possible structures:

```ts
type RouteContent = {
  id: string;
  slug: string;
  title: string;
  learnerQuestion: string;
  depth: number;
  prerequisites: string[];
  learningOutcomes: string[];
  sections: ContentSection[];
  relatedRoutes: string[];
  sources: SourceReference[];
};
```

Choose JSON, TypeScript, MDX, Markdown, or a content system based on repository conventions.

## Use typed domain models

Type:

* route metadata;
* source references;
* concept identifiers;
* interactive state;
* visualisation data;
* navigation relationships.

Avoid `any` for core content and interaction models.

## Keep educational components explicit

Good abstractions include:

* system diagram;
* sequence explorer;
* annotated comparison;
* formula walkthrough;
* layered architecture;
* state simulator;
* misconception treatment;
* case study;
* contextual next step.

Do not force all content into generic card components.

## Server and client boundaries

Use server-rendered or static content by default.

Use client components only when state, browser APIs, animation, or direct interaction requires them.

Do not mark entire route trees as client-side merely for one animated component.

---

# Route Implementation

For every route:

1. Read its route contract.
2. Confirm the learner's existing intuition, prerequisites, gaps, and target mental model.
3. Implement real content before decorative polish.
4. Implement the explanation and guided example before summary cards.
5. Implement source references and approved source media.
6. Implement the primary visual representation.
7. Add interaction only when specified or clearly justified.
8. Add previous, next, and contextual navigation.
9. Implement mobile behaviour.
10. Implement the accessibility fallback.
11. Add route and instructional-behaviour tests.
12. Update content coverage.

Implement routes in dependency order. The requested difficulty level defines how far the sequence travels and how deeply later routes reason; it does not permit removal of foundational routes. Concisely refresh familiar foundations when appropriate, but keep them available in the website.

## Route completeness

A route is not complete when it contains:

* only a hero;
* placeholder sections;
* repeated homepage content;
* generic cards without substantive explanation;
* examples that assume the reasoning they are meant to teach;
* calculations without explaining inputs and meaning;
* answers without corrective feedback;
* missing references;
* a nonfunctional interactive mockup;
* desktop-only layouts;
* inaccessible controls.

---

# Landing Page Implementation

The landing page should:

* establish the subject;
* explain why it matters;
* create an intuitive entry model;
* communicate the final capability;
* provide one clear starting action into the first lesson;
* preview depth without exposing internal planning;
* feel native to the subject.
* teach one useful idea or demonstrate the learning approach.

Do not make it:

* a specification summary;
* a sitemap card grid;
* a course admin panel;
* a list of technology features;
* a design-system demonstration;
* a gallery disconnected from learning.

Present the complete route structure no more than once. Global navigation counts. Do not repeat it as a process loop, route grid, chapter list, and several route summaries.

Do not implement “choose your entry point”, “study this relationship”, diagnostic route selectors, or contextual links whose purpose is to restate the sitemap unless the approved specification explicitly requires a non-linear experience. Default to a single sequential start and previous/next progression.

---

# Brain Registry Integration

When the repository contains a Web Palace brain registry, registering the completed website is part of the build.

After the website route exists and passes its relevant checks:

1. Locate the repository's canonical palace or website registry.
2. Identify the website by stable `id` first and destination route or URL second.
3. If an entry already exists, update its metadata instead of adding a duplicate.
4. If no entry exists, add one using the registry's existing typed schema.
5. Prefer the repository's registration command, then its shared node-assignment utility. Do not manually invent a trace-node index when automatic placement exists.
6. Preserve manually assigned nodes unless the user explicitly requests repositioning.
7. Set the entry to `live` only when its destination resolves and required verification passes.
8. Verify that the website appears as a brain node, in registry search, and in the alphabetical index when those features exist.
9. Add or update tests for duplicate prevention, registry validity, destination validity, and deterministic node placement.
10. Record the registry change in `IMPLEMENTATION_LOG.md` and `VERIFICATION_REPORT.md`.

Registration must be idempotent: repeating the Builder workflow for the same website must update one entry, never create duplicate nodes.

## Registration Command Preference

After the website route and relevant checks pass:

1. Inspect `package.json` for a registration script such as `palace:register` and identify the repository package manager.
2. If present, run its help command before constructing arguments:

```bash
npm run palace:register -- --help
```

3. Run the command from the repository root with the completed website's stable ID, title, subject, destination, summary, tags, cluster and verified status. Supply a trace-node only when preserving an approved explicit pin.
4. Treat a successful command result as the registry write. Do not also edit the canonical registry manually.
5. Verify the returned ID, destination and assigned trace node, then verify the brain, search and alphabetical index.
6. If the command is absent, fall back to the repository's shared registration service or canonical typed registry while preserving the same ID-first idempotency rules.

For repositories exposing the standard command, use this shape with the detected package manager (the example uses npm):

```bash
npm run palace:register -- \
  --id <stable-kebab-id> \
  --title "<website title>" \
  --subject "<subject>" \
  --destination "<internal route or https URL>" \
  --summary "<concise registry summary>" \
  --tags "<comma-separated tags>" \
  --cluster "<category>" \
  --status live
```

Never mark an internal entry `live` before its route exists and passes relevant verification. Use `queued` only when the route is intentionally not ready.

If the repository has no brain registry, do not create an unrelated registry system merely to satisfy this step. Report that registration was not applicable.

Do not mark a website complete inside a Web Palace repository while its registry entry is missing, duplicated, queued without reason, or linked to a broken destination.

---

# Content Fidelity

Use source material and approved synthesis.

Do not:

* fabricate claims;
* invent statistics;
* invent quotations;
* present speculation as established fact;
* over-compress technical explanations until they become misleading;
* replace terminology with aesthetic metaphors;
* silently contradict the source.

When implementation copy requires clarification not specified in the architecture:

* consult the source ledger;
* use approved authoritative supplementation;
* record the addition;
* request architectural review when the change is material.

## Citation implementation

Implement the specified citation strategy.

Citation UI must be:

* traceable;
* readable;
* unobtrusive enough for the audience;
* accessible;
* stable.

Do not create dead or invented links.

## Source media

Respect the specification's curriculum mode:

* use structured user notes and documents as primary teaching material in `USER_CURRICULUM`;
* use the approved authoritative outline in `RESEARCH_CURRICULUM`;
* treat videos and playlists as optional embeds or citations in `REFERENCE_MEDIA_ONLY`.

Do not turn video titles, playlist order, thumbnails, or superficial summaries into the website curriculum. Do not promote reference media into essential instruction without an approved specification change.

For a user-provided local PDF:

* link the local file only when the approved specification says it should be accessible;
* preserve useful page or section locators;
* do not search for a substitute PDF URL merely to fill the interface;
* do not expose machine-absolute paths in browser UI;
* do not include a copyrighted file in a public release without redistribution permission.

For YouTube:

* preserve the supplied URL and timestamps;
* embed the video when embedding is permitted;
* provide a normal accessible link as fallback;
* title the embed meaningfully;
* do not make the video the only delivery of essential instruction.

For other sources, link only to the authoritative page actually used. It is better to show an honest unlinked private or reference-only source than a guessed or dead link.

---

# Teaching Implementation

## Explanation is the primary deliverable

Treat the website as an instructor, not a decorated index of source material. The learner should be able to read each route from top to bottom and hear one coherent explanation in a knowledgeable teacher's voice.

Implement each substantial concept using this sequence:

```text
recognisable situation
-> plain-language meaning
-> why it matters
-> formal term
-> parts and mechanism
-> small guided example
-> interpretation and limits
-> practical decision
-> boundary or misconception
-> reason to continue
```

The sequence may use paragraphs, diagrams, interactions, or examples, but it must remain legible as one argument. Never replace the connecting explanation with a row of cards.

Before styling a route, perform a teaching-copy pass:

1. Read only its headings and introductory paragraphs. They must form a logical outline by themselves.
2. For each section, identify the learner question it answers.
3. Check that the first paragraph answers that question directly in plain language.
4. Check that every technical term was explained earlier on the same route or a prerequisite route.
5. Check that examples explain each input, action, result, and inference.
6. Check that the closing sentence creates a real conceptual bridge to what follows.
7. Remove cards, labels, statistics, and atmospheric copy that do not improve understanding.

Use the sentence-continuity test: every sentence must answer, qualify, demonstrate, or extend the previous sentence. Disconnected statements that merely share a topic must be rewritten into a causal explanation.

Use the substitution test for simplicity: if a beginner-friendly word communicates the same idea accurately, use it first and introduce the technical word afterward. Do not remove necessary technical depth; sequence it.

Examples of the required transformation:

```text
Weak:
"TCP. Reliable transport. SYN, SYN-ACK, ACK. Stateful communication."

Teach:
"Before two computers exchange application data reliably, they first confirm
that both sides can send and receive. TCP performs that check with three
messages. These messages are called SYN, SYN-ACK, and ACK; together they form
the three-way handshake. Once it succeeds, each side can track the connection
and notice when data is missing."
```

The second version is not better because it is longer. It is better because every sentence prepares the next one.

## Increasing depth across subpages

Make later routes genuinely deeper rather than equally difficult pages with different nouns.

* The landing page explains the central idea and offers one sequential start.
* The first route teaches the minimum foundation without assuming specialist vocabulary.
* Middle routes explain mechanisms and make the learner use earlier concepts.
* Later routes introduce competing explanations, edge cases, diagnosis, and trade-offs.
* The final route integrates the subject in a guided case and then changes one condition so the learner must transfer the reasoning.

At the start of every subpage, connect explicitly to what the learner already established. At the end, name the remaining question that the next subpage answers. Avoid repeating the complete site outline, earlier hero copy, or generic statements about why the overall subject matters.

For each page, verify:

* `assumed-before` is taught on earlier pages;
* `understood-after` is more capable than recognition or recall;
* at least one explanation moves from plain model to mechanism;
* at least one example shows reasoning, not only a finished scenario;
* the page contains a misconception, limit, or contrasting case when the concept warrants it;
* the next-page transition follows from an unresolved conceptual question.

## Instructional progression

Implement each substantial concept so the route collectively:

1. connects to recognised knowledge;
2. explains the concept plainly;
3. models its parts or relationships;
4. demonstrates it step by step;
5. explains why each step is needed;
6. asks for a manageable prediction, calculation, classification, or decision;
7. explains correct and common incorrect reasoning;
8. transfers the concept to a new situation.

Vary the visual composition; do not turn this sequence into eight identical cards.

## Guided examples

Treat worked examples as guided lessons. Begin with one clear question and reveal only the information required for the current step. Define terms before using them, explain what each number or input represents, and show how the result affects the decision.

For complex scenarios, use progressive disclosure:

* situation;
* current question;
* relevant information;
* reasoning or calculation;
* interpretation;
* decision;
* changed assumption or boundary case;
* transferable lesson.

Do not open with a dense live scenario, formula, notation block, or data set merely because the learner is intermediate. Familiarity with the setting does not imply fluency in the analysis.

## Instructor-style copy

For every hero and major section:

* make the title name the concept;
* make the subtitle explain or qualify the title;
* make the introduction state what the learner will understand or do;
* ensure each sentence develops the previous sentence;
* define necessary jargon;
* remove phrases included only for drama.

Read important copy aloud mentally. If a knowledgeable instructor would not naturally teach this way, rewrite it. Do not stack several taglines in one hero or replace explanation with aesthetic metaphors.

Do not use fragments as a substitute for explanation. Headings such as “Observe. Exploit. Escalate.” may label a sequence, but the surrounding copy must explain what changes between those stages and why.

Do not make the hero perform the entire lesson. A good hero names the subject, gives the learner one clear question, and establishes the simplest accurate mental model. The route body earns technical depth progressively.

## Typography defaults

Use these default ranges unless the approved specification gives a justified alternative:

| Element | Desktop | Mobile |
| ------- | ------- | ------ |
| Landing H1 | 48-64px | 36-44px |
| Subpage H1 | 40-56px | 32-40px |
| Section H2 | 28-40px | 26-34px |
| Supporting text | 18-22px | 17-20px |
| Body text | 17-20px | 16-19px |

Do not exceed 72px for educational hero text without explicit user approval. Keep instructional titles readable within about two lines and preserve viewport space for useful content.

---

# Asset Implementation

For each planned asset:

* verify purpose;
* verify source or generation method;
* record actual path;
* optimise dimensions and format;
* add responsive behaviour;
* add alternative text or mark decorative;
* record attribution;
* update status.

## Generated imagery

Create every generated hero image required by the approved asset plan before declaring visual implementation complete. Use the configured image-generation capability when available.

Generated images must:

* reflect the subject accurately;
* respect composition requirements;
* avoid generated UI text unless required;
* provide text-safe areas;
* support target crops;
* avoid misleading technical details.

Do not use generated imagery as evidence for factual claims.

Do not silently omit planned hero imagery or replace it with generic gradients, grids, node fields, or CSS atmosphere. If image generation is unavailable or a planned image is unsuitable, record the blocker or specification change and obtain approval for the replacement.

## Diagrams

Prefer:

* semantic HTML;
* SVG;
* CSS;
* canvas only where justified;
* structured data driving the diagram.

A diagram must preserve the relationships specified in the knowledge model.

Provide a textual alternative for complex diagrams.

---

# Interaction Implementation

Every educational interaction needs:

* typed state;
* deterministic behaviour;
* clear controls;
* reset behaviour where relevant;
* keyboard support;
* touch support;
* focus management;
* screen-reader labels;
* reduced-motion handling;
* static or textual fallback;
* tests for core state transitions.

Do not hide required content behind interaction alone.

## Simulation accuracy

For simulators:

* define model assumptions;
* constrain invalid states;
* label simplifications;
* keep calculations separate from rendering;
* add unit tests for calculation logic;
* do not imply greater fidelity than implemented.

## Interaction failure

If complex interaction fails or JavaScript is unavailable, the learner should still receive the essential explanation.

---

# Motion Implementation

Add motion after core content and interactions work.

Use:

* CSS for simple transitions and ambient effects;
* the existing motion library for component and route transitions;
* GSAP only for justified complex sequences.

Motion must not:

* block access;
* delay reading unnecessarily;
* create scroll traps;
* induce horizontal overflow;
* break reduced-motion behaviour;
* cause essential state to become invisible;
* create excessive main-thread work.

Test both normal and reduced-motion modes.

---

# Responsive Implementation

Do not scale desktop composition mechanically.

For every major route and component, verify:

* text hierarchy;
* reading width;
* image crop;
* control sizing;
* navigation;
* diagram legibility;
* interaction replacement or reflow;
* absence of horizontal overflow;
* touch behaviour.

For complex diagrams, use one or more:

* stacked representation;
* controlled horizontal scroll;
* step-based mobile mode;
* simplified diagram;
* static summary;
* expandable detail.

Essential concepts must remain available.

---

# Accessibility Implementation

Minimum requirements:

* semantic page landmarks;
* logical headings;
* keyboard navigation;
* visible focus;
* labelled controls;
* meaningful link text;
* correct button and link semantics;
* informative alternative text;
* decorative asset handling;
* adequate contrast;
* non-colour state indicators;
* reduced motion;
* no hover-only essential information;
* touch target sizing;
* text alternatives for complex visualisation;
* usable zoom and narrow viewport behaviour.

Do not use ARIA to repair avoidable non-semantic markup.

Prefer native elements.

---

# Performance Implementation

Control:

* image dimensions;
* image formats;
* font loading;
* route code splitting;
* animation cost;
* bundle size;
* third-party scripts;
* client component boundaries;
* render frequency;
* canvas loops;
* layout shift.

Avoid:

* loading all route assets on the homepage;
* full-resolution images where thumbnails suffice;
* unbounded continuous animation;
* large libraries for small effects;
* unnecessary hydration.

Record significant performance trade-offs.

---

# Testing Strategy

Use the existing test stack where possible.

## Unit tests

Test:

* calculation logic;
* state transitions;
* content validators;
* route metadata;
* source mappings;
* navigation helpers.

## Component tests

Test:

* interaction controls;
* fallback states;
* keyboard behaviour;
* conditional rendering;
* error handling.

## Route tests

Verify:

* all specified routes exist;
* titles and metadata exist;
* previous and next links are valid;
* no route references missing content;
* no duplicate slugs;
* no broken internal relationships.
* every live palace registry entry resolves to a valid internal route or approved external URL;
* every completed website in a Web Palace repository has exactly one registry entry.

## Content validation

Add automated checks where practical:

* every route ID in the specification is implemented;
* every required concept maps to a route;
* every source reference resolves;
* approved local source links resolve without exposing machine paths;
* YouTube embeds have accessible link fallbacks;
* every planned asset has a file or approved status;
* no placeholder strings remain;
* no internal planning language appears publicly.
* complete route architecture is not repeated across the landing page;
* guided examples include explanation and feedback, not only inputs and answers.
* every route's prerequisites are taught earlier in the implemented sequence;
* the implementation begins at the approved foundation floor and reaches the target ceiling;
* the landing page has one primary sequential start and contains no unapproved entry-point selector;
* reference-only video material does not define the route structure;
* every required generated hero image exists and is used with an appropriate responsive crop.

Potential banned placeholders:

```text
Lorem ipsum
Coming soon
TODO
TBD
Page sequence
Implementation plan
Design rationale
Image prompt
Module list
```

Allow exceptions only when intentionally part of the subject.

## End-to-end or browser checks

Test critical journeys:

* landing to recommended start;
* sequential progression;
* cross-route navigation;
* mobile navigation;
* primary interaction;
* keyboard journey;
* reduced-motion journey.

---

# IMPLEMENTATION_LOG.md Format

# Implementation Log

## Document Control

* Specification version:
* Build branch:
* Started:
* Last updated:
* Builder:

## Baseline

* Existing stack:
* Package manager:
* Existing failures:
* Existing uncommitted changes:
* Constraints:

## Implementation Decisions

### IMP-001 — Decision title

* Requirement:
* Decision:
* Alternatives:
* Reason:
* Impact:
* Files:
* Status:

## Specification Change Requests

### SPEC-CHANGE-001

* Requirement:
* Problem:
* Proposed change:
* Educational impact:
* Technical impact:
* Status:
* Approval:

## Route Progress

| Route ID | Skeleton | Content | Visual | Interaction | Responsive | Accessibility | Tests | Status |
| -------- | -------- | ------- | ------ | ----------- | ---------- | ------------- | ----- | ------ |

## Assets

| Asset ID | Planned | Created | Optimised | Responsive | Accessible | Attributed | Status |
| -------- | ------- | ------- | --------- | ---------- | ---------- | ---------- | ------ |

## Dependencies Added

| Package | Version | Reason | Alternatives considered |
| ------- | ------- | ------ | ----------------------- |

## Known Technical Debt

| ID | Description | Impact | Recommendation |
| -- | ----------- | ------ | -------------- |

---

# VERIFICATION_REPORT.md Format

# Verification Report

## Environment

* OS:
* Runtime:
* Package manager:
* Branch or commit:
* Specification version:
* Date:

## Commands Executed

| Command | Result | Notes |
| ------- | ------ | ----- |

## Build and Static Analysis

* install:
* type check:
* lint:
* unit tests:
* component tests:
* production build:

## Route Verification

| Route | Resolves | Content | Navigation | Assets | Console | Responsive | Status |
| ----- | -------- | ------- | ---------- | ------ | ------- | ---------- | ------ |

## Browser Verification

* browsers or engines:
* desktop sizes:
* mobile sizes:
* console findings:
* hydration findings:
* interaction findings:

## Accessibility Verification

* keyboard:
* focus:
* labels:
* heading order:
* contrast:
* reduced motion:
* text alternatives:
* known limitations:

## Content Verification

* source coverage:
* unsupported claims:
* terminology:
* placeholders:
* internal process leakage:
* citation integrity:

## Performance Observations

* image loading:
* layout shift:
* heavy JavaScript:
* animation cost:
* known concerns:

## Failures

Separate actual failures from warnings.

## Warnings

## Conclusion

Use one:

* `READY_FOR_INDEPENDENT_REVIEW`
* `NOT_READY_FOR_REVIEW`

Provide reasons.

---

# Builder Self-Review

Before handoff, inspect the result as if reviewing another engineer’s work.

Check:

## Product

* Is it a real multi-page experience?
* Does each route fulfil its contract?
* Does understanding deepen?
* Is the homepage an orientation rather than an architecture map?
* Does the site begin at first principles and progress continuously to the requested difficulty?
* Is there one obvious sequential start rather than repeated route selection?

## Content

* Are claims grounded?
* Are explanations clear?
* Are terms introduced?
* Is content duplicated?
* Are advanced details appropriately placed?
* Does each major concept progress from explanation to guided use?
* Do examples reveal complexity gradually?
* Does feedback explain why an answer is sound or mistaken?
* Could the intended learner follow the page without already knowing the lesson?
* Do hero title, subtitle, and introduction form one coherent explanation?

## Visual

* Is the visual system native to the subject?
* Are major visuals informative?
* Does the mobile version preserve meaning?
* Is polish consistent?
* Is typography proportionate to an educational interface?
* Does content receive more attention than atmosphere?

## Engineering

* Is content structured?
* Are components maintainable?
* Are dependencies justified?
* Are errors handled?
* Are tests meaningful?

## Accessibility and performance

* Can the site be navigated by keyboard?
* Is reduced motion respected?
* Are complex visuals explained textually?
* Are assets optimised?
* Is client-side JavaScript controlled?

---

# Builder Completion Criteria

The builder may hand off only when:

* all approved required routes exist;
* route contracts are materially satisfied;
* the intended learner can follow guided examples without assumed hidden reasoning;
* content coverage is updated;
* required assets are implemented or explicitly blocked;
* the foundation-to-target ladder is materially implemented without hidden prerequisite gaps;
* primary interactions work;
* responsive behaviour is checked;
* accessibility requirements are implemented;
* tests are added and run;
* the production build passes, unless a documented external blocker exists;
* the completed website has exactly one verified brain-registry entry when the repository contains a Web Palace registry;
* new failures are absent or reported;
* implementation documents are current;
* `PROJECT_CONTEXT.md` is updated;
* the status is `READY_FOR_INDEPENDENT_REVIEW`.

Do not mark a project complete merely because it builds.

---

# Final Builder Handoff

Report:

* specification version implemented;
* routes delivered;
* interactions delivered;
* brain registry entry created, updated, or not applicable;
* assets delivered;
* files substantially changed;
* dependencies added;
* commands and tests run;
* known warnings;
* specification deviations;
* remaining blockers;
* exact recommendation to invoke `web-palace-reviewer`.

Do not declare final acceptance. Acceptance belongs to the reviewer or project owner.
