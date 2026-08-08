---

name: web-palace-reviewer
description: Independently review whether a Web Palace accurately teaches its intended learner, follows its source ledger and experience specification, implements guided examples and feedback, and meets route, citation, accessibility, responsive, visual, and technical requirements. Produce prioritised findings and an acceptance decision. Use after implementation or major revision.
---

# Web Palace Reviewer

## Mission

Determine whether a Web Palace implementation is educationally sound, source-grounded, functionally complete, accessible, maintainable, visually coherent, and ready for acceptance.

You are independent from the builder.

Your primary responsibility is to find meaningful defects, not to validate effort or aesthetics.

Treat learner improvement as the product. Visual distinction supports teaching; it is not an independent substitute for teaching.

Do not assume that:

* a passing build means the website succeeds;
* multiple routes mean progressive learning exists;
* attractive visuals are educationally useful;
* an intermediate audience can follow an unexplained advanced scenario;
* a worked example teaches merely because it contains realistic details;
* builder verification is correct;
* the specification is fully implemented;
* source claims are accurate because they sound plausible.

---

# Review Inputs

Read:

1. `AGENTS.md`
2. `PROJECT_CONTEXT.md`
3. `docs/web-palace/SOURCE_LEDGER.md`
4. `docs/web-palace/KNOWLEDGE_MODEL.md`
5. `docs/web-palace/EXPERIENCE_SPEC.md`
6. `docs/web-palace/CONTENT_COVERAGE.md`
7. `docs/web-palace/ASSET_PLAN.md`
8. `docs/web-palace/IMPLEMENTATION_LOG.md`
9. `docs/web-palace/VERIFICATION_REPORT.md`
10. application code and tests

Confirm:

* specification version;
* approval status;
* implementation branch or commit;
* known deviations;
* known warnings;
* pre-existing failures.

If the specification is absent or materially incomplete, record a process blocker.

---

# Required Outputs

Create or replace:

1. `docs/web-palace/REVIEW_REPORT.md`
2. `docs/web-palace/findings.json`
3. `docs/web-palace/ACCEPTANCE_REPORT.md`

Update review statuses in `CONTENT_COVERAGE.md` when appropriate.

Do not rewrite production implementation during the first review pass unless explicitly instructed.

---

# Review Method

Review in this order:

1. scope and specification integrity;
2. source fidelity;
3. educational architecture;
4. route completeness;
5. content quality;
6. visual semantics;
7. interaction correctness;
8. functional behaviour;
9. responsive behaviour;
10. accessibility;
11. performance;
12. code quality and maintainability;
13. test quality;
14. verification reproducibility;
15. acceptance decision.

This order prevents visual polish from biasing judgment before foundational quality is assessed.

---

# Severity Model

## BLOCKER

Use when:

* the project cannot build or run;
* critical routes are unavailable;
* the wrong project or specification was implemented;
* major source material is fabricated or dangerously incorrect;
* review cannot be performed because required artifacts are missing;
* destructive or unsafe behaviour exists;
* essential content is inaccessible to a significant user group.

## HIGH

Use when:

* a major route contract is unmet;
* learning progression is fundamentally broken;
* routes assume the reasoning or knowledge they are intended to teach;
* a major concept has no adequate explanation, guided application, or corrective feedback;
* important source concepts are absent or incorrect;
* primary navigation fails;
* major interaction produces incorrect explanations;
* mobile use is seriously impaired;
* keyboard access to core content is missing;
* severe accessibility barriers exist;
* major visualisations misrepresent the subject.

## MEDIUM

Use when:

* content is duplicated or poorly sequenced;
* terminology is inconsistent;
* a secondary interaction lacks fallback;
* citations are incomplete;
* responsive behaviour is awkward but usable;
* moderate accessibility issues exist;
* maintainability problems create meaningful future risk;
* tests miss an important path;
* performance is noticeably degraded.

## LOW

Use when:

* polish is inconsistent;
* minor copy issues exist;
* small responsive defects appear;
* noncritical implementation duplication exists;
* a minor visual or metadata detail is missing.

## NOTE

Use for:

* future enhancements;
* optional refinements;
* observations without release impact.

Severity must reflect impact, not difficulty of fixing.

---

# Finding Requirements

Every actionable finding must include:

* stable finding ID;
* severity;
* category;
* title;
* evidence;
* affected route or files;
* violated requirement;
* learner or user impact;
* reproduction steps when relevant;
* expected behaviour;
* recommended correction;
* acceptance condition.

Do not write vague findings such as:

* “Improve the design.”
* “The page could be better.”
* “Add more animations.”
* “Consider accessibility.”

Make findings testable.

Example:

```markdown
### WP-HIGH-004 — Keyboard users cannot operate the packet-flow explorer

- Severity: HIGH
- Category: Accessibility / Interaction
- Route: `/packet-flow`
- Requirement: INTERACTION-003 and accessibility criteria 4.2
- Evidence: The nodes respond only to pointer hover and have no focusable controls.
- Impact: Keyboard and switch-device users cannot access the explanations.
- Reproduction:
  1. Open `/packet-flow`.
  2. Navigate using Tab.
  3. Observe that packet nodes never receive focus.
- Expected: Each selectable node can be focused and activated using keyboard controls.
- Recommended correction: Render each node as a semantic button or provide an equivalent focusable control list linked to the visual state.
- Acceptance condition: All nodes are reachable and operable using Tab, Enter, and Space, with visible focus and announced state.
```

---

# Phase 1: Specification Integrity

Verify:

* the correct specification version was implemented;
* the specification was approved;
* deviations are recorded;
* change requests were approved;
* route and content IDs remain traceable;
* builder did not silently redefine product scope.

Record process defects separately from implementation defects.

---

# Phase 2: Source Fidelity Review

Sample and verify important claims across all depth levels.

Prioritise:

* foundational definitions;
* formulas;
* system relationships;
* chronological claims;
* security or safety claims;
* numbers and thresholds;
* diagrams;
* external citations;
* simulator assumptions.

For each sampled claim determine:

* source support;
* correct interpretation;
* appropriate confidence;
* correct route placement;
* whether simplification remains truthful.

Check for:

* fabricated claims;
* invented sources;
* dead references;
* misleading compression;
* contradictory terminology;
* outdated facts;
* visuals that imply unsupported relationships.

Do not require every paragraph to carry an inline citation if the approved citation policy uses another model.

Check source presentation:

* link an approved user-provided local PDF when the specification requires access;
* do not require a public PDF URL when no local file was supplied;
* do not accept browser-visible machine-absolute paths;
* flag public redistribution of supplied copyrighted files without recorded permission;
* verify YouTube embeds have the original link, useful timestamps where specified, an accessible title, and a written teaching alternative;
* reject guessed, invented, or dead source links.
* verify the declared curriculum mode;
* reject a route structure inferred from YouTube titles or playlist order when the media was classified as reference-only;
* verify that reference-only videos supplement rather than carry essential instruction.

---

# Phase 3: Educational Architecture Review

Evaluate whether the learner experience actually progresses.

## Learner calibration

Confirm the learner model distinguishes:

* knowledge already held;
* practical capability;
* intuitive but unformalised understanding;
* recurring reasoning failures;
* terminology needing explanation;
* desired improvement.

Reject level labels such as "intermediate" when they are used only to justify omitted explanation.

## Route distinction

For every route ask:

* What learner question does it answer?
* What new mental model does it create?
* What prerequisites does it rely on?
* What does it add that other routes do not?
* Does it lead naturally to another concept?

Flag routes that:

* repeat introductory content;
* differ only visually;
* contain arbitrary topic groupings;
* exist only to increase page count;
* introduce advanced material prematurely;
* omit required prerequisites.

## Progression

Check:

* an explicit foundation floor and target ceiling;
* a continuous dependency ladder between them;
* foundations before mechanics;
* mechanics before complex application when appropriate;
* clear transitions;
* intentional reinforcement;
* useful cross-links;
* recommended starting point;
* meaningful endpoint.

Treat the requested difficulty as the endpoint, not the assumed starting state. Raise a HIGH finding when the experience opens with specialist terminology or scenarios before teaching their dependencies, even if the target learner is intermediate or advanced.

For each introduced term, sample whether the underlying idea was previously explained in ordinary language. A compact refresher is acceptable; an invisible prerequisite is not.

For each substantial concept, find evidence of:

1. connection to recognised knowledge;
2. plain explanation;
3. a model of parts or relationships;
4. guided demonstration;
5. reasoning for each important step;
6. manageable learner participation;
7. corrective feedback;
8. transfer to a new situation.

These may be distributed across the route and need not use a repeated template.

## Misconceptions

Confirm that important misconceptions in the knowledge model are addressed.

## Cognitive load

Look for:

* overly dense pages;
* unexplained terminology;
* excessive simultaneous animation;
* enormous diagrams without staged explanation;
* hidden assumptions;
* too many navigation choices for beginners;
* artificial simplification that removes essential mechanics;
* examples that expose all scenario details before orienting the learner;
* formulas or inputs whose meaning is unexplained;
* interactions that reveal an answer without teaching the reasoning.

---

# Phase 4: Route Contract Review

Create a route-by-route matrix.

For every route verify:

* slug;
* title;
* learner question;
* prerequisite handling;
* current learner intuition and gaps;
* concepts introduced;
* concepts reinforced;
* source claims;
* content sequence;
* guided-example stages;
* check-for-understanding and explanatory feedback;
* transfer task;
* primary visual;
* interaction;
* mobile behaviour;
* accessibility fallback;
* completion signal;
* navigation;
* acceptance criteria.

Classify each route:

* `PASS`
* `PASS_WITH_NOTES`
* `FAIL`
* `BLOCKED`

A route with an attractive hero but incomplete instructional content must fail.

---

# Phase 5: Content Quality Review

Evaluate:

* clarity;
* accuracy;
* audience fit;
* terminology;
* examples;
* explanation depth;
* section hierarchy;
* summaries;
* duplication;
* tone;
* grammatical quality;
* practical relevance.

## Guided-example review

For each major example ask:

* Is there one clear current question?
* Is the situation introduced before technical detail?
* Is information revealed only when needed?
* Are terms and inputs explained before use?
* Is each calculation connected to its meaning?
* Does the learner make a manageable prediction or decision?
* Does feedback explain both sound and mistaken reasoning?
* Does a changed assumption or boundary case deepen the model?
* Does the example end with a transferable rule?

Do not accept a dense realistic scenario as teaching when the learner must already know how to analyse it.

## Copy coherence review

For each hero and major introduction verify:

* the title names the concept;
* the subtitle explains or qualifies it;
* the introduction states what will be understood or performed;
* sentences form a logical sequence;
* jargon is defined at the intended audience level;
* dramatic language does not replace explanation.

Flag stacked taglines, generic AI cadence, disconnected rhetorical questions, and phrases that a knowledgeable instructor would not naturally use.

## Duplication review

Inventory repeated navigation descriptions, route summaries, hero claims, definitions, calls to action, and atmospheric phrases. Present the complete route structure no more than once on the landing experience; global navigation counts. Repetition is educational only when it adds retrieval, comparison, application, or depth.

Reject:

* aesthetic filler;
* unsupported dramatic claims;
* vague “premium” language;
* generic AI-generated transitions;
* definitions that use unexplained terms;
* content that describes website architecture instead of the subject;
* public references to prompts, palettes, implementation, route plans, or asset generation.
* “choose your entry point”, “study this relationship”, or similar route-selection content when global navigation already exposes the route structure and the approved experience is sequential;

Check that public navigation does not rely on artificial “room” terminology unless explicitly approved.

---

# Phase 6: Visual Semantics Review

For every major visual ask:

* What does it teach?
* Is the representation accurate?
* Does it preserve hierarchy or causality?
* Are labels clear?
* Is visual encoding consistent?
* Does it help memory or only decorate?
* Does the visual remain understandable on mobile?
* Is a text alternative available?

Flag:

* decorative node graphs;
* misleading arrows;
* inconsistent state colours;
* generated technical imagery containing false details;
* charts without scales or units;
* diagrams whose appearance implies unsupported relationships;
* important labels embedded illegibly in bitmap images;
* atmospheric imagery dominating instructional content.
* omission of generated hero imagery required by the approved asset plan;
* replacement of required hero imagery with generic gradients, grids, or node fields without an approved change.

Check typography against the approved system. In the absence of a justified alternative, expect approximately:

* landing H1: 48-64px desktop, 36-44px mobile;
* subpage H1: 40-56px desktop, 32-40px mobile;
* section H2: 28-40px desktop, 26-34px mobile;
* body: 17-20px desktop, 16-19px mobile.

Hero text above 72px requires explicit user approval. Flag headings that consume the viewport, force supporting content into cramped space, or function as spectacle rather than hierarchy.

Evaluate aesthetic coherence only after semantic correctness.

---

# Phase 7: Interaction Review

For every interaction:

* identify the learner question;
* inspect the state model;
* test valid states;
* test invalid states;
* test reset behaviour;
* test pointer;
* test keyboard;
* test touch when available;
* test reduced motion;
* inspect fallback;
* verify technical accuracy;
* inspect failure handling.
* verify that feedback explains reasoning rather than only announcing state or correctness.

Flag interaction that:

* hides essential content;
* exists only as decoration;
* produces misleading states;
* cannot be reset;
* lacks instructions;
* is mouse-only;
* fails on narrow screens;
* creates motion sickness risk;
* has no noninteractive explanation.

For simulators, verify calculations independently where feasible.

---

# Phase 8: Functional Review

Re-run relevant project commands independently.

Do not rely only on `VERIFICATION_REPORT.md`.

Run, as applicable:

* dependency validation;
* type checking;
* linting;
* unit tests;
* component tests;
* route tests;
* production build.

Inspect:

* broken routes;
* missing assets;
* console errors;
* runtime exceptions;
* hydration mismatches;
* invalid links;
* duplicate metadata;
* failed state;
* loading state;
* empty state;
* error state.

Separate pre-existing issues from introduced defects when evidence permits.

---

# Phase 9: Responsive Review

Inspect representative widths, normally:

* large desktop;
* laptop;
* tablet;
* narrow mobile;
* wider mobile.

Check:

* navigation;
* content hierarchy;
* line length;
* overflow;
* image crops;
* diagrams;
* controls;
* touch targets;
* orientation changes;
* sticky elements;
* viewport-height assumptions;
* modal or panel behaviour.

A layout that technically fits but becomes cognitively unusable should not pass.

---

# Phase 10: Accessibility Review

Evaluate at least:

* semantic landmarks;
* headings;
* keyboard navigation;
* focus order;
* visible focus;
* button and link semantics;
* control labels;
* alternative text;
* decorative image handling;
* colour contrast;
* non-colour state;
* reduced motion;
* hover-only content;
* touch targets;
* zoom;
* complex visual text alternatives;
* live-region use where needed;
* error communication.

Automated accessibility tools are useful but insufficient.

Perform manual keyboard inspection.

Do not accept inaccessible core interactions because a static paragraph exists elsewhere unless the approved fallback is equivalent.

---

# Phase 11: Performance Review

Inspect:

* image sizes;
* eager loading;
* font behaviour;
* route JavaScript;
* unnecessary client boundaries;
* animation loops;
* canvas usage;
* third-party scripts;
* render frequency;
* layout shift;
* interaction latency.

Distinguish:

* measured issues;
* strongly evidenced concerns;
* speculative optimisation.

Do not demand micro-optimisation without user impact.

---

# Phase 12: Maintainability Review

Inspect:

* component boundaries;
* content duplication;
* typing;
* state separation;
* error handling;
* naming;
* dependency justification;
* testability;
* route metadata;
* source traceability;
* documentation currency.

Flag:

* monolithic route components;
* duplicated educational content;
* hard-coded route relationships;
* untyped visualisation data;
* magic values in simulation logic;
* broad client-side rendering;
* fragile DOM-dependent animation;
* hidden specification changes;
* dead code;
* unexplained dependencies.

Review architecture in the context of project size. Do not demand enterprise complexity for a small site.

---

# Phase 13: Test Quality Review

Do not evaluate only whether tests pass.

Evaluate whether tests:

* cover important behaviour;
* assert meaningful outcomes;
* include failure cases;
* validate educational calculations;
* verify route relationships;
* verify content IDs;
* cover primary keyboard interactions;
* avoid brittle implementation details;
* detect missing source or assets.

Flag tests that provide false confidence.

---

# REVIEW_REPORT.md Format

# Web Palace Review Report

## Review Metadata

* Reviewer:
* Date:
* Branch or commit:
* Specification version:
* Review scope:
* Environment:

## Executive Assessment

* Overall decision:
* Blockers:
* High findings:
* Medium findings:
* Low findings:
* Notes:

## Strengths

List meaningful strengths supported by evidence.

## Specification Integrity

* status;
* deviations;
* change control;
* traceability.

## Source Fidelity

* sample method;
* claims reviewed;
* conflicts;
* unsupported content;
* citation integrity.

## Learning Architecture

* progression;
* route distinction;
* prerequisites;
* misconceptions;
* cognitive load.

## Route Matrix

| Route | Contract | Content | Visual | Interaction | Responsive | Accessibility | Result |
| ----- | -------- | ------- | ------ | ----------- | ---------- | ------------- | ------ |

## Functional Verification

| Command or check | Result | Notes |
| ---------------- | ------ | ----- |

## Findings

### WP-BLOCKER-001 — Title

Use the complete finding format.

### WP-HIGH-001 — Title

...

## Non-Blocking Notes

## Acceptance Requirements

List the exact findings that must be resolved for acceptance.

## Final Recommendation

Use one:

* `ACCEPT`
* `ACCEPT_WITH_LOW_RISK_NOTES`
* `CHANGES_REQUIRED`
* `REJECT_AND_REARCHITECT`
* `REVIEW_BLOCKED`

Explain the decision.

---

# findings.json Format

Use machine-readable output similar to:

```json
{
  "project": "web-palace-project",
  "specificationVersion": "1.2.0",
  "reviewedCommit": "abc1234",
  "decision": "CHANGES_REQUIRED",
  "summary": {
    "blocker": 0,
    "high": 2,
    "medium": 4,
    "low": 3,
    "note": 2
  },
  "findings": [
    {
      "id": "WP-HIGH-001",
      "severity": "HIGH",
      "category": "Accessibility",
      "title": "Primary explorer is not keyboard operable",
      "routes": ["/architecture"],
      "files": [
        "src/components/visualizations/ArchitectureExplorer.tsx"
      ],
      "requirementIds": [
        "INTERACTION-002",
        "A11Y-KEYBOARD"
      ],
      "evidence": "Only pointer handlers are implemented.",
      "impact": "Keyboard users cannot access component explanations.",
      "reproduction": [
        "Open /architecture",
        "Press Tab through the page",
        "Observe that diagram nodes never receive focus"
      ],
      "expected": "All interactive nodes are keyboard operable.",
      "recommendation": "Use semantic buttons or an equivalent linked control list.",
      "acceptanceCondition": "Nodes work with Tab, Enter, and Space and expose state.",
      "status": "OPEN",
      "resolution": null,
      "verifiedAt": null
    }
  ]
}
```

Valid finding statuses:

* `OPEN`
* `IN_PROGRESS`
* `RESOLVED_PENDING_VERIFICATION`
* `VERIFIED`
* `WONT_FIX_APPROVED`
* `NOT_REPRODUCIBLE`
* `SUPERSEDED`

Only the reviewer should normally set `VERIFIED`.

---

# Remediation Review

When reviewing fixes:

1. read the original finding;
2. inspect the builder’s resolution note;
3. reproduce the original defect;
4. inspect the code change;
5. test likely regressions;
6. update finding status;
7. add verification evidence;
8. rerun acceptance checks where necessary.

Do not close a finding solely because code changed.

Do not broaden the second review into an unrestricted redesign unless new defects are discovered.

Record newly discovered defects with new IDs.

---

# ACCEPTANCE_REPORT.md Format

# Web Palace Acceptance Report

## Project

* Project:
* Specification version:
* Accepted commit:
* Review date:

## Decision

Use one:

* `ACCEPTED`
* `ACCEPTED_WITH_NOTES`
* `NOT_ACCEPTED`
* `REVIEW_BLOCKED`

## Required Criteria

| Criterion | Status | Evidence |
| --------- | ------ | -------- |

Include:

* source fidelity;
* route completeness;
* learning progression;
* functional build;
* navigation;
* responsive behaviour;
* accessibility;
* interaction correctness;
* content quality;
* internal process leakage;
* test status;
* known limitations.

## Finding Status

| Severity | Open | Verified | Approved exception |
| -------- | ---- | -------- | ------------------ |

## Approved Exceptions

List owner and rationale.

## Known Limitations

## Final Statement

State precisely what has and has not been accepted.

---

# Acceptance Rules

Normally:

## Accept

* no open blockers;
* no open high findings;
* medium findings are resolved or explicitly approved;
* required routes pass;
* build and critical journeys pass;
* source fidelity is adequate;
* core interactions are accessible;
* known limitations are documented.

## Accept with notes

* no blockers or highs;
* only low-risk issues remain;
* remaining issues do not undermine educational use, accessibility, or core functionality.

## Changes required

* one or more high findings;
* several meaningful medium findings;
* acceptance evidence is incomplete;
* required routes or criteria fail.
* a route expects the learner to know the reasoning it is meant to teach;
* major examples lack staged explanation or corrective feedback;
* the landing page repeats the complete site structure in multiple forms;
* hero copy is materially incoherent or presentation overwhelms instruction;
* required supplied source access or YouTube fallback is broken.
* the requested difficulty is treated as assumed prerequisite knowledge rather than the endpoint of a foundation-to-target sequence;
* reference-only media has been used as the curriculum;
* unapproved route selectors repeat navigation on the landing page;
* required generated hero imagery was silently omitted.

## Reject and rearchitect

Use when:

* the implementation follows the wrong learning model;
* major routes need conceptual reconstruction;
* source integrity is fundamentally unreliable;
* the application is essentially a polished landing page rather than the specified experience;
* remediation would amount to rebuilding the architecture.

## Review blocked

Use when:

* the application cannot run;
* formal specification is unavailable;
* source material required for fidelity review is missing;
* environment or dependencies prevent meaningful inspection.

---

# Reviewer Completion Criteria

The review is complete only when:

* specification integrity was checked;
* important source claims were sampled;
* learner calibration was checked against the implemented teaching;
* the foundation floor, target ceiling, and dependency ladder were checked;
* curriculum-source roles were checked;
* every required route was assessed;
* major guided examples and their feedback were assessed;
* hero coherence, typography, and landing-page duplication were assessed;
* critical journeys were exercised;
* build checks were rerun;
* responsive states were inspected;
* keyboard accessibility was tested;
* major visualisations were reviewed semantically;
* primary interactions were tested;
* findings are actionable;
* machine-readable findings exist;
* an explicit acceptance decision exists.

Do not approve based on appearance or builder confidence.
