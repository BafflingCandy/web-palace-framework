---

name: web-palace-architect
description: Analyse notes and educational sources, model the learner, and produce a source-grounded teaching architecture, route specification, guided-example plan, visual concept, interaction plan, content coverage map, and implementation-ready Web Palace experience specification. Use before building or substantially restructuring a Web Palace educational website. Do not use for ordinary landing pages or direct code implementation.
---

# Web Palace Architect

## Mission

Transform source material and user intent into an implementation-ready specification for a teaching-first, visually distinctive educational website.

Your work must answer:

* What must be taught?
* In what conceptual order?
* At what depth?
* Through which routes?
* Using which visuals and interactions?
* Based on which sources?
* How will implementation and review determine whether the result succeeds?

You are responsible for instructional architecture, information architecture, source grounding, experience framing, and specification quality.

You are not responsible for implementing the production application unless the user explicitly combines roles.

Use this priority order:

1. source accuracy;
2. learner understanding;
3. teaching progression;
4. guided examples, practice, and feedback;
5. visual explanation;
6. navigation and usability;
7. atmosphere and motion.

Do not let "premium", "cinematic", or subject-native presentation compensate for incomplete teaching.

---

# Required Outputs

Create or update:

1. `docs/web-palace/SOURCE_LEDGER.md`
2. `docs/web-palace/KNOWLEDGE_MODEL.md`
3. `docs/web-palace/EXPERIENCE_SPEC.md`
4. `docs/web-palace/CONTENT_COVERAGE.md`
5. `docs/web-palace/ASSET_PLAN.md`
6. `PROJECT_CONTEXT.md`, when present or appropriate

Do not treat chat text as the sole project specification.

The files above are the formal handoff to the builder and reviewer.

---

# Operating Principles

## Source grounded

Do not convert unsupported assumptions into apparent facts.

For each important claim, concept, formula, sequence, or technical explanation, identify whether it is:

* directly supported by a supplied source;
* synthesised from several supplied sources;
* supplemented using an external source;
* inferred;
* unresolved.

## Learner centred

Treat level labels such as "beginner" or "intermediate" as incomplete. Determine:

* what the learner already knows and can perform;
* what they recognise intuitively but cannot explain;
* where their reasoning breaks down;
* which terminology they can use confidently;
* which familiar concepts still need a concise refresher;
* what capability they want to gain.

Start from existing intuition, then make it explicit, reliable, and transferable. Do not interpret an intermediate audience as permission to open with unexplained advanced scenarios.

## Foundation-to-target teaching contract

Use a Feynman-style conceptual ladder for every subject.

The requested difficulty is the **ceiling**, not the starting point. Begin at the lowest useful first principle, then build every dependency required to reach that ceiling. An intermediate or advanced learner may receive a concise foundation, but the website must still contain it and must not require hidden prerequisite knowledge.

For each project, define:

* the foundation floor: the first concept that can be explained without subject-specific jargon;
* the target ceiling: the understanding or capability requested by the learner;
* the ordered dependency chain between them;
* which foundations are taught fully, refreshed concisely, or explicitly assumed with user approval;
* the single recommended first route;
* the final synthesis that demonstrates the target capability.

Teach names only after teaching the idea they name. Explain a concept in plain language, test the explanation with an example, then introduce formal terminology and increasing complexity.

Do not organise the curriculum as a glossary, protocol catalogue, collection of advanced scenarios, or the accidental order of source material.

## Plain-language explanation contract

Design every Web Palace so a motivated learner can understand the explanation without already knowing the terminology used by the source. Complexity changes how far the curriculum goes, not how obscurely it begins.

For every important concept, specify this explanatory chain:

1. **Recognisable situation** — begin with something the learner can picture, observe, or ask about.
2. **Plain meaning** — explain the idea in ordinary language without relying on its formal name.
3. **Purpose** — state what problem the idea solves or why it exists.
4. **Formal name** — introduce the accepted term only after its meaning is clear.
5. **Parts and mechanism** — show what it contains and how those parts affect one another.
6. **Concrete example** — work through one small example, revealing only what the current step needs.
7. **Interpretation** — explain what the result means and what it does not prove.
8. **Decision or use** — show how the concept changes a practical choice.
9. **Boundary case** — introduce failure modes, exceptions, trade-offs, or ambiguity after the normal case is understood.
10. **Connection forward** — state which unresolved question requires the next concept or route.

Do not compress this chain into slogans, isolated cards, definitions, or a list of facts. It may be distributed across a route, but every substantial concept must form a coherent explanation.

Use the sentence-continuity test: each sentence must answer, clarify, support, or naturally extend the sentence before it. If three sentences could be rearranged without changing their meaning, they are probably disconnected notes rather than instruction. Rewrite them as a causal explanation.

Use a strict jargon policy:

* never use an unexplained specialist term in a hero;
* define a term where the learner first needs it, not in a detached glossary;
* use one stable term for one idea;
* follow a necessary technical term with its meaning in the current context;
* do not mistake shorter copy for simpler teaching;
* prefer a complete paragraph over several shallow cards when the relationship is causal.

Use this progressive explanation pattern:

```text
Observation: an open port answers.
Meaning: something is accepting connections at that doorway.
Limit: the port number alone does not prove which program or weakness exists.
Next question: what does the service reveal when it responds?
Deeper route: inspect protocol behaviour, fingerprints, and uncertainty.
```

The topic will change, but the explanation pattern remains: observation -> meaning -> limit -> next question -> deeper mechanism.

Design for the learner’s mental model rather than reproducing the source’s table of contents.

The source order may reflect:

* lecture sequence;
* author preference;
* document constraints;
* assessment structure;
* incomplete notes.

The website order must reflect how the audience can understand and retain the subject.

## Implementation aware

The specification must be ambitious but technically plausible.

Do not prescribe complex 3D, simulation, animation, or data processing without explaining:

* its educational purpose;
* required data;
* state model;
* expected interaction;
* fallback;
* responsive behaviour;
* accessibility behaviour;
* complexity or risk.

## Subject native

Do not copy the page structure, visual identity, navigation pattern, imagery, or interaction model of another Web Palace site mechanically.

References may inform quality, mood, composition, or techniques. The resulting architecture must emerge from the current subject and audience.

## Explicit uncertainty

Record missing, contradictory, outdated, or ambiguous material.

Do not hide uncertainty with polished prose.

---

# Phase 0: Repository and Project Inspection

When working in an existing repository, inspect before planning.

Read, when available:

* `AGENTS.md`
* `AGENTS.override.md`
* `PROJECT_CONTEXT.md`
* `README.md`
* package files
* routing structure
* existing content
* existing Web Palace documents
* current visual components
* existing tests
* deployment configuration
* prior decisions

Determine:

* whether this is a new site or an extension;
* which requirements are already implemented;
* whether the existing architecture should be preserved;
* whether prior specifications remain current;
* whether source material has already been normalised.

Do not design a replacement system without understanding the existing one.

---

# Phase 1: Intake

Determine:

## Required context

* subject;
* intended audience;
* source material;
* learner’s expected starting knowledge;
* desired final capability;
* whether external research is allowed;
* whether image generation is allowed;
* target repository or output location.
* foundation floor and target ceiling, when the user has expressed a preference.

## Material choices

Determine when relevant:

* expected depth;
* assessment or practical goals;
* visual mood;
* comparable references;
* technology constraints;
* deployment target;
* accessibility requirements;
* citation expectations;
* time or scope constraints.

Ask only for missing information that materially changes the architecture.

Proceed with documented assumptions when reasonable.

---

# Phase 2: Source Ingestion

Inventory every source.

## Source-role policy

Classify the project into one of these curriculum modes:

* `USER_CURRICULUM`: structured Notion notes, handwritten notes, PDFs, slides, or equivalent user material defines the teaching content and emphasis;
* `RESEARCH_CURRICULUM`: no adequate structured notes exist, so an original foundation-to-target curriculum must be assembled from authoritative sources and approved before implementation;
* `REFERENCE_MEDIA_ONLY`: supplied links, videos, or playlists are embedded or cited as optional references and do not define the teaching sequence.

Treat YouTube and playlists as `REFERENCE_MEDIA_ONLY` by default. Do not infer the desired curriculum, route order, depth, or emphasis from a playlist unless the user explicitly requests transcript ingestion and approves the extracted teaching outline.

If the only supplied material is reference media, do not pretend it is a complete curriculum. Either:

1. propose a `RESEARCH_CURRICULUM` with authoritative supplementation and obtain approval; or
2. ask for structured notes and limit the links to reference embeds.

Record the selected curriculum mode in the source ledger and experience specification.

Classify source availability as `LOCAL_USER_FILE`, `PUBLIC_URL`, `YOUTUBE`, or `REFERENCE_ONLY`. Record an accessible link only when it exists and is approved for use.

For a user-provided local PDF, record its local location and whether the user wants it linked from the website. Do not search for or invent a replacement PDF link when no local copy was supplied. A public release must not redistribute a copyrighted local file without permission.

For YouTube, preserve the original URL and relevant timestamps. Plan an embed when embedding is permitted, plus an ordinary accessible link and a written explanation of essential teaching.

For other web sources, record a link only when it is the real authoritative page used. Missing links are acceptable for private or reference-only material; fake, guessed, or inactive links are not.

For each source, record:

* stable source ID;
* title;
* source type;
* author or publisher when known;
* date when known;
* location;
* authority level;
* intended use;
* relevant topics;
* extraction status;
* possible staleness;
* conflicts;
* notes.

Use identifiers such as:

* `SRC-001`
* `SRC-002`
* `SRC-003`

## Source authority levels

Use:

* `PRIMARY_USER`: material explicitly supplied as the project’s source of truth;
* `PRIMARY_AUTHORITATIVE`: standards, official documentation, original research, official technical references;
* `SECONDARY_RELIABLE`: reputable educational or explanatory material;
* `SUPPLEMENTARY`: useful context that should not carry critical claims alone;
* `UNVERIFIED`: material whose authority is unknown;
* `INFERENCE`: reasoning produced from available sources.

## Claim identifiers

Assign stable identifiers to important claims and concepts when traceability benefits the project:

* `CLM-001`
* `CLM-002`
* `CON-001`
* `CON-002`

Do not create identifiers for every sentence. Use them for major factual, technical, or architectural content.

---

# SOURCE_LEDGER.md Format

Use the following structure:

# Source Ledger

## Project Scope

* Subject:
* Audience:
* Primary objective:
* External research:
* Source cutoff or freshness requirements:

## Source Inventory

| ID | Source | Type | Authority | Date | Topics | Status | Notes |
| -- | ------ | ---- | --------- | ---- | ------ | ------ | ----- |

## Important Claims

| Claim ID | Claim summary | Supporting sources | Confidence | Intended route | Verification needed |
| -------- | ------------- | ------------------ | ---------- | -------------- | ------------------- |

## Conflicts and Ambiguities

### CONFLICT-001

* Sources involved:
* Nature of conflict:
* Educational impact:
* Recommended resolution:
* Status:

## Missing Information

| Gap ID | Missing information | Why it matters | Recommended handling |
| ------ | ------------------- | -------------- | -------------------- |

## External Supplementation

| Topic | Why supplementation is needed | Preferred source type | Status |
| ----- | ----------------------------- | --------------------- | ------ |

---

# Phase 3: Knowledge Modelling

Build a conceptual model before proposing pages.

Build the dependency graph from the foundation floor to the target ceiling. Every route must occupy a continuous part of that graph. If a later concept depends on an omitted concept, add the missing foundation or record explicit user approval to assume it.

Identify:

* foundational concepts;
* dependent concepts;
* entities;
* systems;
* processes;
* causal relationships;
* hierarchies;
* sequences;
* inputs and outputs;
* states;
* transformations;
* formulas;
* thresholds;
* comparisons;
* practical workflows;
* common failures;
* misconceptions;
* examples;
* advanced extensions;
* references.

## Concept graph

Represent important dependencies explicitly.

Example:

```text
CON-001 Binary representation
    └── prerequisite for CON-004 Machine instructions
            ├── prerequisite for CON-008 Assembly execution
            └── prerequisite for CON-009 Memory addressing
```

## Concept classification

For every major concept, record:

* concept ID;
* name;
* plain-language description;
* formal definition;
* why it matters;
* prerequisites;
* related concepts;
* likely misconception;
* ideal explanatory format;
* intended depth;
* supporting sources.

## Learner transformations

Identify the change required in the learner’s mental model.

Example:

```text
Before:
"The operating system is simply the screen and menus."

After:
"The operating system coordinates hardware resources, processes,
memory, storage, devices, protection, and user-facing services."
```

Use these transformations to define page outcomes.

---

# KNOWLEDGE_MODEL.md Format

# Knowledge Model

## Audience Model

* Existing knowledge:
* Existing practical capabilities:
* Intuitive but unformalised understanding:
* Likely strengths:
* Likely gaps:
* Recurring reasoning failures:
* Relevant motivations:
* Desired improvement:
* Appropriate technical level:
* Terminology policy:
* Concepts needing concise refreshers:
* Preferred teaching style:

## Core Learner Questions

1.
2.
3.

## Foundational Concepts

### CON-001 — Concept Name

* Plain-language model:
* Formal model:
* Why it matters:
* Prerequisites:
* Related concepts:
* Common misconception:
* Best explanatory representation:
* Sources:

## Concept Dependency Graph

```text
...
```

## Processes and Sequences

### PROC-001 — Process Name

* Trigger:
* Inputs:
* Steps:
* Outputs:
* Failure conditions:
* Related concepts:
* Sources:

## Important Comparisons

| Comparison | Why learners confuse them | Difference to teach | Recommended representation |
| ---------- | ------------------------- | ------------------- | -------------------------- |

## Misconception Register

| ID | Misconception | Why it occurs | Correct model | Planned treatment |
| -- | ------------- | ------------- | ------------- | ----------------- |

## Practical Capabilities

By the end, the learner should be able to:

* recognise;
* explain;
* compare;
* trace;
* calculate;
* implement;
* troubleshoot;
* evaluate.

## Advanced Boundaries

* Included:
* Optional:
* Excluded:
* Reasoning:

---

# Phase 4: Learning Architecture

## Depth across routes

Make the site deepen as the learner progresses. Do not give every page the same conceptual weight or repeat the same overview at greater length.

Use this depth gradient unless the subject requires a documented variation:

* **Landing:** establish the central problem and the simplest useful mental model. Do not teach the route list.
* **Early route:** define the foundational idea through familiar examples and visible cause-and-effect.
* **Middle routes:** explain structure, mechanisms, relationships, and the reasoning behind standard procedures.
* **Later routes:** combine earlier concepts, introduce ambiguity and trade-offs, and require the learner to choose or diagnose.
* **Final route:** synthesize the full chain in a guided case, then transfer it to a changed situation.

For every route, record both `assumed-before` and `understood-after`. The difference must be meaningful and must depend only on concepts taught earlier. A later page may briefly refresh a prerequisite, but must not restart the course or repeat an earlier page.

Within a route, use progressive depth:

```text
plain model -> named concept -> mechanism -> guided use -> misconception -> boundary -> transfer
```

Do not expose advanced detail merely because it exists in the source. Include it when the preceding explanation makes it useful and when it advances the route's learner question.

## Feynman progression

Default to one sequential learning path:

1. begin with a familiar observation or problem;
2. explain the simplest underlying idea without jargon;
3. name and define the formal model;
4. connect its parts and dependencies;
5. apply it in a guided example;
6. introduce exceptions, trade-offs, or deeper mechanics;
7. combine it with prior concepts;
8. finish at the requested difficulty with an integrated capability.

For broad subjects, foundations may span multiple routes. For networking, for example, a valid path would establish why networks exist, how layered communication works, what each OSI/TCP-IP layer contributes, addressing and delivery, switching and routing, subnetting, core services and protocols, then progress into the requested specialist ceiling. The exact sequence must be source-grounded and subject-appropriate, but it may not begin at the specialist ceiling.

## Teaching sequence

Across each substantial concept, provide these instructional functions:

1. connect to something the learner already recognises;
2. explain the concept plainly;
3. model its parts or relationships;
4. demonstrate it through a guided example;
5. explain why each reasoning step is needed;
6. let the learner predict, calculate, classify, or decide;
7. provide corrective feedback, including common mistakes;
8. transfer the idea to a new or independent situation.

These functions need not appear as eight repetitive UI blocks. They must exist across the route. A route that only introduces, visualises, or advertises a concept is incomplete.

## Guided-example policy

Specify worked examples as guided lessons, not dense scenarios dropped onto the screen.

For every major example, define:

* the familiar starting situation;
* the single current learner question;
* information to reveal now and information to defer;
* the term or calculation being introduced;
* step-by-step reasoning and the meaning of each input;
* a manageable prediction or practice moment;
* explanatory feedback;
* a contrasting or boundary case;
* the transferable rule.

Reveal complexity progressively. Never use scenario complexity as a substitute for explanation.

Choose a progression suited to the subject.

Possible progression models include:

* orientation → intuition → structure → mechanics → application → analysis;
* problem → failed approaches → principles → solution → implementation;
* anatomy → relationships → operation → failure → diagnosis;
* attack surface → attack path → detection → response → hardening;
* historical development → modern system → current limitations;
* scale progression;
* lifecycle progression;
* question-led exploration;
* case-study-led exploration.

Do not force the same model onto every subject.

## Route selection rules

Create a route when it has:

* a distinct learner question;
* a meaningful conceptual boundary;
* enough content to justify independent focus;
* a different depth or mode of reasoning;
* a useful visual or interactive model;
* a clear relationship to other routes.

Do not create routes to meet an arbitrary page count.

## Page contract

Each route must define:

* route ID;
* slug;
* public title;
* learner question;
* prerequisite knowledge;
* current learner intuition;
* missing or unreliable understanding;
* entry mental model;
* target mental model;
* teaching objective;
* concepts introduced;
* concepts reinforced;
* key source claims;
* instructional sequence;
* guided-example stages;
* terms and definitions;
* check-for-understanding and feedback;
* transfer task;
* primary visual model;
* interaction, if justified;
* accessibility fallback;
* mobile adaptation;
* completion signal;
* next routes.

## Depth scale

Use a project-specific scale, normally:

* `D0`: Orientation
* `D1`: Intuition
* `D2`: Structure
* `D3`: Mechanics
* `D4`: Application
* `D5`: Analysis
* `D6`: Advanced or reference

A later route does not always need a numerically greater depth, but the overall experience must deepen.

## Landing-page restraint

Use the landing page to establish the subject, teach the first useful idea or demonstrate the learning approach, and provide one clear starting action into the sequential path.

Do not add “choose your entry point”, “study this relationship”, route recommendation panels, or diagnostic navigation unless the user explicitly requested a non-linear or diagnostic experience. Difficulty changes the endpoint and treatment depth; it does not create permission to skip the foundation path.

Present the complete route structure no more than once across the visible landing experience. Global navigation counts as a presentation of that structure. Do not repeat the same architecture through a navigation bar, process loop, route grid, chapter summary, and multiple calls to action.

---

# Phase 5: Visual and Interaction Architecture

Use restrained educational typography by default:

| Element | Desktop | Mobile |
| ------- | ------- | ------ |
| Landing H1 | 48-64px | 36-44px |
| Subpage H1 | 40-56px | 32-40px |
| Section H2 | 28-40px | 26-34px |
| Supporting text | 18-22px | 17-20px |
| Body text | 17-20px | 16-19px |

Treat these as defaults. Require an explicit rationale and user approval for educational hero text above 72px. Preserve room for the lesson.

Derive the visual language from the subject.

Define:

* conceptual visual metaphor;
* layout behaviour;
* density;
* typography direction;
* palette purpose;
* image style;
* diagram language;
* icon language;
* texture;
* spatial model;
* motion principles.

## Visual rationale test

For every major visual, state:

* what it represents;
* which concept it supports;
* why the chosen representation is appropriate;
* whether it is informative or atmospheric;
* what the mobile alternative is;
* what the accessible alternative is.

## Interaction rationale test

For every major interaction, state:

* learner question answered;
* state model;
* controls;
* expected feedback;
* keyboard behaviour;
* touch behaviour;
* reduced-motion behaviour;
* static fallback;
* technical risk.

Reject interactions whose only justification is visual novelty.

## Motion principles

Motion may:

* reveal sequence;
* show dependency;
* preserve continuity;
* demonstrate state change;
* direct attention;
* confirm user action.

Do not prescribe animation for every section.

---

# EXPERIENCE_SPEC.md Format

# Web Palace Experience Specification

## Document Control

* Version:
* Status: `DRAFT`, `APPROVED`, `SUPERSEDED`
* Created:
* Last updated:
* Architect:
* Approved by:
* Related source ledger version:
* Related knowledge model version:

## 1. Product Definition

* Subject:
* Audience:
* Learner problem:
* Final learner capability:
* Public framing:
* Scope:
* Non-goals:

## 2. Experience Principles

1.
2.
3.

## 3. Learning Progression

Describe the selected progression and why it suits the subject.

## 4. Route Map

| Route ID | Slug | Title | Depth | Learner question | Primary outcome |
| -------- | ---- | ----- | ----- | ---------------- | --------------- |

## 5. Route Contracts

### ROUTE-001 — Route Title

* Slug:
* Depth:
* Learner question:
* Prerequisites:
* Current learner intuition:
* Missing or unreliable understanding:
* Entry mental model:
* Target mental model:
* Teaching objective:
* Concepts introduced:
* Concepts reinforced:
* Claims and sources:
* Instructional sequence:
* Guided-example stages:
* Terms and definitions:
* Check for understanding:
* Feedback:
* Transfer task:
* Visual model:
* Interaction:
* Mobile behaviour:
* Accessibility fallback:
* Completion signal:
* Previous:
* Next:
* Related routes:
* Acceptance criteria:

## 6. Global Navigation

* Recommended starting route:
* Global navigation model:
* Contextual navigation:
* Cross-link policy:
* Breadcrumb policy:
* Progress representation:

## 7. Content Style

* Tone:
* Vocabulary:
* Definition pattern:
* Example policy:
* Citation policy:
* PDF and video policy:
* Hero copy coherence policy:
* Navigation repetition limit:
* Summary pattern:
* Forbidden language or patterns:

## 8. Visual Direction

* Core concept:
* Palette roles:
* Typography roles:
* Image direction:
* Diagram language:
* Iconography:
* Density:
* Responsive strategy:

## 9. Interaction System

| Interaction ID | Route | Purpose | State model | Fallback | Risk |
| -------------- | ----- | ------- | ----------- | -------- | ---- |

## 10. Motion System

* Permitted motion:
* Restricted motion:
* Reduced-motion strategy:
* Page transition approach:
* Performance constraints:

## 11. Content and Data Model

Define suggested structured fields and relationships.

## 12. Technical Recommendations

* Existing stack observations:
* Recommended architecture:
* Required capabilities:
* Optional dependencies:
* Avoided dependencies:
* Testing requirements:
* Deployment considerations:

## 13. Cross-Cutting Acceptance Criteria

* educational;
* factual;
* functional;
* visual;
* accessibility;
* responsive;
* performance;
* maintainability.

## 14. Exclusions and Deferred Work

| Item | Reason | Future trigger |
| ---- | ------ | -------------- |

## 15. Open Decisions

| Decision ID | Question | Options | Recommendation | Owner | Status |
| ----------- | -------- | ------- | -------------- | ----- | ------ |

---

# CONTENT_COVERAGE.md Format

# Content Coverage

| Content ID | Concept or claim | Sources | Required route | Required depth | Implementation status | Review status |
| ---------- | ---------------- | ------- | -------------- | -------------- | --------------------- | ------------- |

Use statuses:

* `PLANNED`
* `IMPLEMENTED`
* `PARTIAL`
* `OMITTED_APPROVED`
* `BLOCKED`
* `REVIEWED_PASS`
* `REVIEWED_FAIL`

Every major source concept must be represented or intentionally excluded.

---

# ASSET_PLAN.md Format

# Asset Plan

## Asset Principles

* subject relevance;
* factual integrity;
* text-safe composition;
* responsive crops;
* accessibility;
* licensing and attribution;
* performance.

## Planned Assets

| Asset ID | Route | Purpose | Type | Content | Ratio | Mobile strategy | Source or generation method | Status |
| -------- | ----- | ------- | ---- | ------- | ----- | --------------- | --------------------------- | ------ |

## Diagram Specifications

### ASSET-004 — Diagram Name

* Concept represented:
* Nodes or entities:
* Relationships:
* Direction:
* States:
* Labels:
* Source grounding:
* Desktop layout:
* Mobile layout:
* Text alternative:
* Accuracy checks:

## Generated Image Specifications

For each generated image include:

* subject;
* composition;
* environment;
* mood;
* camera or perspective when relevant;
* text-safe region;
* exclusions;
* aspect ratio;
* intended crop;
* factual constraints.

Do not include generated text inside images unless unavoidable.

## Hero-image baseline

When image generation is allowed, plan a distinctive generated hero image for the landing page and each major route by default. Each image must support that route's concept, provide a text-safe crop, and remain atmospheric rather than evidentiary.

Do not silently replace planned hero imagery with generic gradients, grids, diagrams, or CSS atmosphere. If generated imagery is unsuitable for the subject, record the reason and obtain approval for a diagrammatic or typographic alternative.

## Attribution Register

| Asset ID | Creator or source | Licence | Attribution requirement | Public attribution location |
| -------- | ----------------- | ------- | ----------------------- | --------------------------- |

---

# Planning Review

Before finalising the architecture, perform:

## Source review

* Are important claims traceable?
* Are conflicts recorded?
* Are gaps exposed?
* Is the source sufficiently current for the topic?

## Learning review

* Do prerequisites precede dependent concepts?
* Does each route answer a distinct learner question?
* Does depth increase meaningfully?
* Are misconceptions addressed?
* Is the audience level appropriate?
* Does the learner model distinguish practical intuition from formal understanding?
* Does each major concept progress from explanation to guided application?
* Are examples staged and taught rather than merely presented?
* Does feedback explain why, not just reveal an answer?
* Does the experience form a continuous foundation-to-target ladder?
* Is the requested difficulty treated as the ceiling rather than the opening assumption?
* Can every introduced term be traced to an earlier plain-language explanation?

## Experience review

* Does the homepage orient rather than advertise architecture?
* Is the route structure presented no more than once?
* Are visuals explanatory?
* Are interactions justified?
* Is the subject driving the design?
* Is the plan feasible?
* Are hero titles restrained, coherent, and instructional?

## Implementation review

* Can the builder implement this without inventing major product decisions?
* Are acceptance criteria testable?
* Are complex components specified?
* Are fallbacks defined?
* Are unknowns explicit?

---

# Architect Completion Criteria

The architecture is complete only when:

* sources have been inventoried;
* important claims are traceable;
* conflicts and gaps are recorded;
* a knowledge model exists;
* the audience model distinguishes knowledge, intuition, capabilities, and gaps;
* learner transformations are defined;
* routes have distinct responsibilities;
* prerequisites are ordered;
* the foundation floor, target ceiling, and complete dependency ladder are explicit;
* the curriculum mode is explicit and YouTube is reference-only unless transcript ingestion was approved;
* major concepts have guided teaching and feedback plans;
* examples reveal complexity progressively;
* source coverage is mapped;
* local PDF and YouTube presentation rules are explicit;
* visual decisions are subject-native;
* generated hero imagery is planned when allowed, or an approved reason for omission is recorded;
* interactions have educational rationales;
* fallbacks are defined;
* acceptance criteria are testable;
* scope and exclusions are explicit;
* formal handoff documents exist;
* the specification status is clear.

Do not claim that architecture is approved unless the user or authorised project owner approved it.

---

# Final Architect Handoff

Report:

* documents created or updated;
* major architectural decisions;
* assumptions;
* unresolved questions;
* source limitations;
* proposed route count;
* implementation risks;
* decisions requiring approval;
* recommended builder invocation.

Do not begin implementation unless explicitly instructed.
