# Tatros Corporate Website Design System

## Document Control

| Attribute | Value |
|---|---|
| Document | Design System |
| Product | Tatros Corporate Website |
| Status | Planning baseline |
| Primary audience | Product design, UX, frontend engineering, QA, accessibility, and content teams |
| Related documents | Design Principles, Accessibility, Brand Voice, Information Architecture, Coding Standards, Content Strategy |

## System Status and Governance

This document establishes the initial visual language, design tokens, component contracts, responsive behavior, and accessibility requirements for the Tatros corporate website. It is a specification, not a substitute for validated design assets, component implementation, or accessibility testing.

Values in this baseline are approved for initial design exploration and implementation planning. Brand-sensitive values—including typeface selection, primary color, photography, and illustration direction—must be validated against final brand assets and tested in representative interfaces before production release.

The system follows four layers:

1. **Foundations:** color, typography, spacing, grid, radius, elevation, iconography, and motion.
2. **Semantic tokens:** purpose-based aliases that express meaning independently of raw values.
3. **Components:** reusable interaction and content patterns with defined variants, states, and accessibility contracts.
4. **Patterns and templates:** governed assemblies of components for navigation, forms, content, and page-level experiences.

## 1. Design Philosophy

Tatros should communicate technical sophistication through clarity, discipline, and evidence rather than ornamental complexity. The interface must feel premium and contemporary while remaining credible to startup, enterprise, and government audiences.

The design language should be:

- **Precise:** Clear hierarchy, aligned geometry, purposeful language, and predictable behavior.
- **Confident:** Strong but restrained use of color, typography, and space.
- **Human:** Accessible content, readable typography, considerate feedback, and authentic imagery.
- **Technical:** Systematic, scalable, performance-conscious, and grounded in real capability.
- **Trustworthy:** Transparent interaction states, clear ownership, and no manipulative patterns.

Visual distinction should emerge from composition, typography, selective accent color, and high-quality evidence. Decoration must never reduce readability, performance, accessibility, or comprehension.

## 2. Design Principles

### 2.1 Clarity Before Novelty

Users should understand hierarchy, available actions, and system state without instruction. Novel treatments are appropriate only when they improve comprehension or brand recognition.

### 2.2 Evidence Before Assertion

Capabilities should be paired with relevant case evidence, technical detail, process information, or measurable outcomes. Visual prominence must not substitute for substantiation.

### 2.3 Progressive Disclosure

Present the information required for the current decision and reveal technical or contextual depth when requested. Avoid overwhelming users with every option at once.

### 2.4 Accessible by Default

Accessibility is a component acceptance criterion, not a remediation phase. Components must support keyboard, screen-reader, zoom, reflow, contrast, touch, and reduced-motion needs.

### 2.5 Responsive by Intent

Components adapt according to content and available space, not device labels alone. Essential information and actions must remain available at every supported width.

### 2.6 Consistency with Purpose

Shared functions use shared components and behaviors. Variation must communicate a meaningful difference in hierarchy, state, context, or task.

### 2.7 Performance is Experience

Typography, images, motion, and scripts must be selected and implemented with explicit performance budgets. The system should favor native platform capability and progressive enhancement.

### 2.8 Governed Evolution

New tokens and component variants require a demonstrated reusable need. One-off visual exceptions should not silently become system patterns.

## 3. Color System

### 3.1 Color Architecture

Color is organized into primitive palettes and semantic roles. Product interfaces must consume semantic roles rather than depend directly on primitive values. This allows palette adjustment, theme support, and accessible state management without component rewrites.

### 3.2 Primitive Palette

| Family | Step | Hex value | Intended role |
|---|---:|---|---|
| Neutral | 0 | `#FFFFFF` | Lightest surface |
| Neutral | 50 | `#F7F9FC` | Subtle surface |
| Neutral | 100 | `#EEF2F7` | Muted surface and border |
| Neutral | 200 | `#D9E1EA` | Standard border |
| Neutral | 300 | `#B8C4D1` | Strong border and disabled detail |
| Neutral | 500 | `#64748B` | Secondary text where contrast permits |
| Neutral | 700 | `#334155` | Strong secondary text |
| Neutral | 900 | `#0F172A` | Primary text and dark surface |
| Neutral | 950 | `#080D19` | Deepest brand surface |
| Blue | 50 | `#EFF6FF` | Informational subtle background |
| Blue | 100 | `#DBEAFE` | Selected or informational background |
| Blue | 300 | `#93C5FD` | Dark-theme accent detail |
| Blue | 500 | `#2563EB` | Brand accent candidate |
| Blue | 600 | `#1D4ED8` | Primary interactive candidate |
| Blue | 700 | `#1E40AF` | Hover or strong accent candidate |
| Blue | 900 | `#172554` | Deep accent surface |
| Green | 50 | `#ECFDF5` | Success subtle background |
| Green | 700 | `#047857` | Success foreground |
| Amber | 50 | `#FFFBEB` | Warning subtle background |
| Amber | 800 | `#92400E` | Warning foreground |
| Red | 50 | `#FEF2F2` | Error subtle background |
| Red | 700 | `#B91C1C` | Error foreground |

The blue family is an initial direction, not a final brand decision. Any palette replacement must preserve the semantic contract and pass contrast testing across every component state.

### 3.3 Semantic Roles

| Role | Light-theme baseline | Use |
|---|---|---|
| Background/default | Neutral 0 | Page background |
| Background/subtle | Neutral 50 | Section differentiation |
| Surface/default | Neutral 0 | Cards, dialogs, menus |
| Surface/strong | Neutral 900 | Dark brand sections |
| Text/primary | Neutral 900 | Headings and body text |
| Text/secondary | Neutral 700 | Supporting text |
| Text/muted | Neutral 500 | Metadata only after contrast validation |
| Text/inverse | Neutral 0 | Text on dark surfaces |
| Border/default | Neutral 200 | Standard boundaries |
| Border/strong | Neutral 300 | Emphasized boundaries |
| Action/primary | Blue 600 | Primary interactive control |
| Action/primary-hover | Blue 700 | Primary hover state |
| Action/primary-active | Blue 900 | Primary pressed state |
| Focus/ring | Blue 500 | Keyboard focus indicator |
| Status/info | Blue 700 | Informational foreground |
| Status/success | Green 700 | Success foreground |
| Status/warning | Amber 800 | Warning foreground |
| Status/error | Red 700 | Error foreground |

### 3.4 Usage Rules

- Never use color as the only means of communicating meaning or state.
- Validate foreground and background pairs, including hover, focus, active, disabled, visited, and selected states.
- Reserve status colors for status communication; do not reuse error red as decoration.
- Body links must be distinguishable from surrounding text without relying solely on color.
- Large dark surfaces should be purposeful and limited; long-form reading defaults to a light surface.
- Transparency may not be used to conceal an insufficient base contrast ratio.
- Gradients, if approved, use existing palette values and remain decorative rather than information-bearing.

## 4. Typography

### 4.1 Typeface Strategy

Use one primary sans-serif family for interface and editorial content. The preferred implementation is a licensed or open-source variable typeface with strong screen rendering, comprehensive language support, multiple weights, and tabular numerals. Until final brand typography is approved, use the platform sans-serif stack as the implementation fallback.

Introduce a secondary display family only if it provides a durable brand benefit and does not create performance, localization, or readability risk.

### 4.2 Type Scale

| Token | Minimum | Preferred/fluid target | Maximum | Line height | Typical use |
|---|---:|---:|---:|---:|---|
| Display | 44 px | 5.5 vw | 72 px | 1.05 | Select page introductions |
| Heading 1 | 40 px | 4.5 vw | 64 px | 1.08 | Primary page title |
| Heading 2 | 32 px | 3.3 vw | 48 px | 1.15 | Major section title |
| Heading 3 | 26 px | 2.3 vw | 34 px | 1.2 | Subsection title |
| Heading 4 | 22 px | 1.8 vw | 28 px | 1.25 | Component-group title |
| Heading 5 | 18 px | 1.4 vw | 22 px | 1.3 | Minor heading |
| Heading 6 | 16 px | 1.2 vw | 18 px | 1.35 | Dense content heading |
| Body large | 18 px | 1.2 vw | 20 px | 1.6 | Introductions and emphasized prose |
| Body | 16 px | 1 vw | 18 px | 1.6 | Standard reading text |
| Body small | 14 px | 0.9 vw | 15 px | 1.5 | Supporting content |
| Label | 14 px | Fixed | 14 px | 1.3 | Controls and compact labels |
| Caption | 12 px | Fixed | 12 px | 1.4 | Nonessential metadata |

Fluid sizing must use bounded values and be tested at 200% zoom and intermediate viewport widths. Browser text resizing must remain functional.

### 4.3 Weight and Hierarchy

- Body copy uses regular weight.
- Labels and minor emphasis use medium weight.
- Headings generally use semibold; display text may use semibold or bold after typeface testing.
- Avoid using font weight alone to communicate state.
- Limit a single view to the weights required for hierarchy and performance.

### 4.4 Readability Rules

- Target 45–75 characters per line for long-form text.
- Do not justify body copy.
- Use sentence case for headings, labels, buttons, and navigation unless a proper name requires otherwise.
- Avoid all-capital text for sentences or critical instructions.
- Underlines identify links and are not used as decorative emphasis in body content.
- Preserve semantic heading order independently of visual size.
- Enable comfortable paragraph and list spacing without inserting empty structural elements.

## 5. Grid System

### 5.1 Grid Model

The page grid is mobile-first and uses flexible columns within a centered maximum-width container.

| Viewport range | Columns | Gutter | Outer margin |
|---|---:|---:|---:|
| Compact, below 600 px | 4 | 16 px | 16–20 px |
| Medium, 600–1023 px | 8 | 24 px | 24–32 px |
| Expanded, 1024–1439 px | 12 | 24 px | 40–64 px |
| Wide, 1440 px and above | 12 | 32 px | Fluid around maximum container |

### 5.2 Container Standards

- Default content container maximum: 1280 px.
- Reading container maximum: approximately 760 px.
- Wide media or data container maximum: 1440 px when the content requires it.
- Full-bleed backgrounds may span the viewport; meaningful content remains aligned to a governed container.
- Nested grids inherit the parent alignment and must not create unrelated column systems.

### 5.3 Grid Rules

- Align primary page regions to shared grid lines.
- Permit controlled asymmetry when it reinforces hierarchy and remains stable across widths.
- Avoid arbitrary offsets that cannot be expressed through the grid or spacing scale.
- Components should respond to their available container when feasible, not assume viewport width.
- Validate layouts at widths between named breakpoints, not only at breakpoint boundaries.

## 6. Layout Guidelines

### 6.1 Page Composition

Pages should follow a recognizable structural rhythm:

1. Global header and orientation.
2. Page introduction with clear title, purpose, and optional primary action.
3. Core decision-support content.
4. Evidence or related content.
5. Contextual next step.
6. Global footer.

This order may vary when the content model requires it, but essential meaning must not depend on visual placement alone.

### 6.2 Density and Whitespace

- Use whitespace to group related information and separate decisions.
- Prefer fewer, stronger sections over repeated full-width promotional bands.
- Increase density for structured technical and operational content; preserve comfortable reading density for narrative content.
- Avoid excessive vertical spacing that delays access to substantive information.
- Use dividers only when spacing and hierarchy cannot establish the relationship clearly.

### 6.3 Content Width and Alignment

- Long-form copy uses the reading container.
- Forms should use a width appropriate to field content, generally no wider than 640 px for single-column forms.
- Actions align with the content they affect.
- Cards in the same comparison group use consistent internal alignment without forcing equal height when it damages reading order.
- Data tables may use horizontal scrolling within a labeled region at compact widths; critical content must not be hidden.

### 6.4 Layering

Use layering only for functional hierarchy such as menus, dialogs, and sticky navigation. Establish a documented stacking-order scale; do not introduce arbitrary component values. Sticky or fixed elements must not obscure focused content or consume excessive viewport area.

## 7. Spacing Scale

The spacing system uses a 4 px base unit with a curated scale.

| Token suffix | Value | Typical use |
|---:|---:|---|
| 0 | 0 | Explicit removal of space |
| 1 | 4 px | Icon detail and micro-gap |
| 2 | 8 px | Closely related inline items |
| 3 | 12 px | Compact component spacing |
| 4 | 16 px | Standard control and content spacing |
| 5 | 20 px | Moderate internal spacing |
| 6 | 24 px | Card padding and group separation |
| 8 | 32 px | Component-group separation |
| 10 | 40 px | Compact section spacing |
| 12 | 48 px | Section spacing |
| 16 | 64 px | Large section spacing |
| 20 | 80 px | Expanded section spacing |
| 24 | 96 px | Major page-region spacing |
| 32 | 128 px | Maximum editorial separation |

### 7.1 Spacing Rules

- Use tokens rather than arbitrary values.
- Internal component space should be smaller than space between component groups.
- Responsive spacing may step between approved tokens; it must not scale without bounds.
- Optical adjustments below 4 px require documented component-level rationale.
- Negative spacing is not part of the default system and requires design-system review.

## 8. Border Radius

| Token | Value | Use |
|---|---:|---|
| None | 0 | Edge-to-edge structures and tables |
| Small | 4 px | Tags, small controls, compact elements |
| Medium | 8 px | Inputs and standard buttons |
| Large | 12 px | Cards and menus |
| Extra large | 20 px | Prominent content surfaces |
| Full | 9999 px conceptually | Circular controls, avatars, pills |

Use a restrained radius language. Component family, size, and purpose determine radius; radius must not vary decoratively within the same family. Nested surfaces use an inner radius that remains visually compatible with the outer radius and padding.

## 9. Shadows

### 9.1 Elevation Levels

| Level | Visual intent | Typical use |
|---|---|---|
| 0 | No elevation | Default page sections and bordered cards |
| 1 | Subtle separation | Resting menu, interactive card where needed |
| 2 | Raised surface | Dropdown, sticky header in scrolled state |
| 3 | Floating surface | Popover and nonmodal overlay |
| 4 | Highest surface | Modal dialog |

### 9.2 Shadow Rules

- Prefer border, surface contrast, and spacing before shadow.
- Shadows communicate layering, not decoration or interactivity by themselves.
- Use neutral low-opacity shadows with a consistent light model.
- Dark-theme surfaces require separately validated elevation treatments.
- Focus indicators are not shadows and must remain independently visible.
- Elevation level must correspond to stacking behavior.

## 10. Buttons

### 10.1 Variants

| Variant | Purpose |
|---|---|
| Primary | Highest-priority action in a region |
| Secondary | Important alternative action |
| Tertiary | Lower-emphasis local action |
| Destructive | Explicit destructive action; unlikely on the public website |
| Icon button | Recognizable action with an accessible name |

Text links remain links; they must not be visually or behaviorally implemented as buttons when they navigate.

### 10.2 Sizes

| Size | Minimum height | Typical use |
|---|---:|---|
| Small | 36 px | Dense secondary interfaces only |
| Medium | 44 px | Default control |
| Large | 52 px | Prominent or touch-focused action |

### 10.3 States and Behavior

Every interactive variant defines default, hover, focus-visible, active, disabled, and loading states. Toggle buttons additionally define selected and unselected states.

- Use concise verb-led labels that describe the outcome.
- Limit each region to one primary action.
- Disabled controls must not be the sole explanation for unavailable behavior; provide nearby guidance.
- Loading actions preserve label context, prevent accidental duplicate submission, and announce state changes when necessary.
- Buttons may include leading or trailing icons only when the icon reinforces meaning.
- Icon-only buttons require a programmatic accessible name and a visible tooltip when the action is not universally understood.
- Touch targets should be at least 44 by 44 px unless a documented exception meets the applicable accessibility standard.

## 11. Cards

### 11.1 Card Types

- Service card.
- Industry card.
- Portfolio card.
- Case-study card.
- Resource or article card.
- Person or career card, if introduced.
- Stat or evidence card.
- Callout card.

### 11.2 Anatomy

A card may include an image or icon, category or eyebrow, title, summary, metadata, status, and action. Only elements required for the card's purpose should be included.

### 11.3 Rules

- Use one primary destination per card.
- If the entire card is interactive, preserve meaningful text selection and avoid nested interactive controls.
- Card titles must communicate the destination without relying on image or category.
- Maintain consistent image aspect ratios within a collection.
- Do not truncate decision-critical titles or descriptions merely to force equal heights.
- Use borders or elevation consistently within each card family.
- Hover treatments must have equivalent focus-visible treatments.
- Empty media regions must collapse rather than display placeholder decoration unless the placeholder conveys a defined state.

## 12. Forms

### 12.1 Field Anatomy

Each field may contain:

1. Persistent label.
2. Required or optional indicator.
3. Input control.
4. Format guidance or supporting text.
5. Validation or error message.

Placeholder text is an example or hint, never the only label.

### 12.2 Supported Controls

- Text, email, telephone, URL, and multiline text inputs.
- Select, radio group, and checkbox group.
- File upload only when business need, security, privacy, and retention rules are approved.
- Consent control when legally required and expressed separately from general submission.
- Date or other specialized input only when the task requires it.

### 12.3 Form Rules

- Use a single-column layout by default.
- Request only information necessary for routing and preparing the next interaction.
- Identify required fields consistently before submission.
- Group related controls with semantic labels and instructions.
- Validate at a helpful time without interrupting entry.
- Preserve entered values after validation failure unless security requires otherwise.
- Present an error summary for multi-field errors and link each item to the affected field.
- Associate field errors programmatically and explain how to resolve them.
- Do not identify errors through color alone.
- Support autocomplete attributes and appropriate input modes.
- Confirmation states must state what happened, expected response timing, and next steps.
- Protect submissions from abuse without inaccessible challenge patterns.

### 12.4 Control States

Controls define empty, populated, hover, focus-visible, disabled, read-only, valid where useful, invalid, and loading states. Disabled and read-only are semantically and visually distinct.

## 13. Navigation Components

### 13.1 Global Header

The header contains brand identity, primary navigation, and Contact. It may include utility navigation and search according to the information architecture.

- Maintain a stable location and clear hierarchy.
- If sticky, minimize vertical footprint and prevent focused content from being obscured.
- Indicate current top-level section and current page where applicable.
- Provide a skip link as the first focusable element.

### 13.2 Desktop Navigation

- Top-level items with child destinations use a disclosed menu button or an accessible equivalent.
- Menus open through explicit activation and support pointer, keyboard, and touch.
- Escape closes an open menu and restores focus to its trigger.
- Clicking outside may close a menu but is not the only close mechanism.
- Hover may enhance discovery but must not be required.

### 13.3 Mobile Navigation

- Use a clearly labeled menu control with expanded state.
- Preserve the same information model as desktop; do not remove essential destinations.
- Manage focus when the menu opens and closes.
- Prevent background interaction when navigation is presented as a modal layer.
- Keep nested navigation depth manageable and preserve visible parent context.

### 13.4 Contextual Navigation Components

- Breadcrumbs.
- Section navigation.
- In-page table of contents.
- Pagination.
- Related-content links.
- Tabs only for peer content that users do not need to compare simultaneously.

Each component must follow the behavior and hierarchy defined in the Information Architecture document.

## 14. Footer Components

### 14.1 Footer Anatomy

- Brand identity and concise organizational descriptor.
- Grouped navigation links.
- Verified contact information.
- Approved social or professional links.
- Legal and governance links.
- Copyright and legal identity.
- Optional subscription only when consent and operational ownership are established.

### 14.2 Footer Rules

- Use semantic groups with visible headings.
- Follow the approved footer taxonomy; do not reproduce every page.
- Ensure the footer remains usable at high zoom and narrow widths.
- Maintain adequate contrast for links, text, focus, and visited states.
- External network icons require accessible names and may not replace understandable link text without validation.
- Do not display certifications, offices, partners, or response claims unless current and verifiable.

## 15. Iconography

### 15.1 Style

- Use a unified outline or restrained duotone family, not mixed visual languages.
- Default to a 24 px design grid with consistent stroke weight, joins, caps, and optical alignment.
- Provide 16 px variants for compact contexts and larger variants where illustrations are inappropriate.
- Favor simple geometric forms that remain legible at target size.

### 15.2 Usage

- Icons reinforce labels; they do not replace unfamiliar concepts.
- Decorative icons are hidden from assistive technologies.
- Informative icons require an accessible text equivalent.
- Do not rely on icon color alone for status.
- Do not use brand logos as generic functional icons.
- Add icons to the system through design and accessibility review; avoid page-specific imports from unrelated libraries.

## 16. Illustration Style

Illustration should explain systems, relationships, transformation, or technical concepts that are difficult to communicate through photography or text alone.

### 16.1 Direction

- Abstract but intelligible geometric compositions.
- Structured linework, modular forms, data-inspired patterns, and controlled depth.
- Predominantly neutral surfaces with selective brand accent.
- Clear focal hierarchy and sufficient negative space.
- Inclusive and culturally neutral representation when people are depicted.

### 16.2 Constraints

- Avoid generic futuristic imagery, glowing brains, humanoid robots, decorative code, and unsubstantiated depictions of AI.
- Avoid implying a real product interface when the image is conceptual.
- Illustrations must remain secondary to the content and should not contain essential text.
- Motion-enhanced illustrations require a static alternative and reduced-motion behavior.
- Optimize delivery format and dimensions to meet performance budgets.

## 17. Photography Style

Photography should communicate real expertise, collaboration, technology in context, and credible outcomes.

### 17.1 Preferred Characteristics

- Authentic people, environments, and working situations.
- Natural or controlled directional light with restrained color grading.
- Clear subject, intentional composition, and sufficient space for responsive cropping.
- Diverse representation appropriate to Tatros's audiences and markets.
- Real client or team imagery when consent and disclosure agreements permit.

### 17.2 Avoid

- Staged handshake imagery and generic office clichés.
- Unrelated cityscapes, server rooms, or abstract screens presented as evidence.
- Images that expose confidential information, personal data, credentials, or client systems.
- AI-generated photorealistic people presented as real employees, clients, or delivered work.
- Text embedded in images when accessible HTML content is required.

### 17.3 Technical Standards

- Define focal points for responsive crops.
- Provide intrinsic dimensions to prevent layout shift.
- Use modern formats with tested fallbacks where required.
- Provide meaningful alternative text for informative images and empty alternatives for decorative images.
- Obtain and record rights, consent, attribution, retention, and permitted-use information.

## 18. Motion and Animation

### 18.1 Principles

Motion must clarify cause and effect, preserve spatial context, provide feedback, or direct attention. It is not a default decoration layer.

### 18.2 Timing Baseline

| Duration | Range | Use |
|---|---:|---|
| Instant | 0 ms | Reduced-motion replacement or immediate state |
| Fast | 100–150 ms | Hover and small state changes |
| Standard | 180–250 ms | Menus, disclosure, feedback |
| Deliberate | 300–400 ms | Larger contextual transitions |

Use ease-out for entrances, ease-in for exits, and a balanced easing curve for state-to-state movement. Avoid spring or bounce effects in core enterprise interactions.

### 18.3 Rules

- Honor the user's reduced-motion preference and provide a low-motion or no-motion equivalent.
- Never delay access to content for an entrance sequence.
- Avoid autoplay movement that competes with reading or requires precise timing.
- Pausable, stoppable, or hideable controls are required where applicable.
- Do not use scroll-jacking, cursor replacement, parallax that disrupts orientation, or essential scroll-triggered reveals.
- Loading indicators must not flash and should communicate determinate progress when available.
- Test motion for vestibular, seizure, attention, and cognitive accessibility concerns.

## 19. Responsive Breakpoints

Breakpoints are implementation thresholds, not target devices. Add a component-specific threshold only when content fails, and record the reason.

| Name | Minimum width | Typical behavior |
|---|---:|---|
| Compact | 0 px | Single-column content, compact margins, disclosed navigation |
| Small | 480 px | Increased control grouping and media flexibility |
| Medium | 768 px | Multicolumn content where comparison remains readable |
| Large | 1024 px | Desktop navigation and 12-column grid where content permits |
| Extra large | 1280 px | Expanded container and section spacing |
| Wide | 1440 px | Maximum container behavior; whitespace increases rather than uncontrolled line length |

### 19.1 Responsive Rules

- Design mobile-first and enhance as space becomes available.
- Avoid breakpoint-specific removal of essential content or actions.
- Allow text to reflow without horizontal page scrolling at supported zoom levels.
- Use component container behavior when a component appears in multiple layout contexts.
- Do not infer input method from viewport width.
- Test portrait, landscape, split-screen, browser zoom, dynamic text, and intermediate widths.

## 20. Accessibility Standards

### 20.1 Conformance Target

The baseline target is WCAG 2.2 Level AA for all public pages, templates, components, content, and states. Where applicable procurement, jurisdictional, or contractual standards exceed this baseline, the stricter approved requirement applies.

### 20.2 Core Requirements

- Use semantic structures, landmarks, headings, lists, tables, links, buttons, and form controls.
- Support complete keyboard operation with logical focus order and no keyboard traps.
- Provide a persistent, clearly visible focus indicator with sufficient contrast and area.
- Meet text and non-text contrast requirements across every state.
- Support 200% text resizing and reflow at the applicable equivalent width without loss of content or function.
- Provide text alternatives and accessible names appropriate to purpose.
- Associate instructions, errors, status messages, and relationships programmatically.
- Announce important asynchronous updates without moving focus unexpectedly.
- Use descriptive link and button labels.
- Provide captions, transcripts, audio description, and media controls as required by content.
- Avoid time limits; where unavoidable, allow extension or adjustment according to applicable criteria.
- Respect reduced-motion, forced-color, high-contrast, zoom, and user font settings.
- Define minimum target sizes and spacing consistent with applicable WCAG criteria and the 44 px system preference.

### 20.3 Testing Standard

Every release requires:

- Automated accessibility checks in the development pipeline.
- Keyboard-only review.
- Screen-reader testing with supported browser and assistive-technology combinations.
- Zoom, reflow, contrast, forced-colors, and reduced-motion testing.
- Manual review of semantics, names, roles, states, errors, and reading order.
- Issue severity, ownership, remediation target, and regression coverage.

Automated testing does not establish conformance by itself. Reusable components require accessibility acceptance criteria and documented usage constraints.

## 21. Design Tokens

### 21.1 Token Levels

| Level | Purpose | Example form |
|---|---|---|
| Primitive | Raw value in a category scale | `color.blue.600` |
| Semantic | Context-independent purpose | `color.action.primary` |
| Component | Controlled local decision | `button.primary.background.default` |

Components should consume semantic tokens by default. Component tokens are introduced only when a reusable component requires an intentional exception or state mapping.

### 21.2 Token Categories

- Color.
- Typography family, size, weight, line height, and letter spacing.
- Space.
- Size and control height.
- Border width, style, and radius.
- Elevation and shadow.
- Opacity.
- Motion duration and easing.
- Layer or stacking order.
- Breakpoint and container size.
- Icon size and stroke.

### 21.3 Token Requirements

- Each token has a unique name, value, description, owner, and lifecycle status.
- Names express purpose rather than page placement or temporary appearance.
- Token values are platform-neutral in the source of truth and transformed for supported platforms.
- Aliases must resolve without circular references.
- Changes to shared semantic tokens require impact analysis and visual regression testing.
- Deprecated tokens remain available for a defined migration period and identify their replacement.
- Theme differences are modeled as value modes, not duplicate token taxonomies.

## 22. CSS Variable Naming Convention

This section defines the naming model only; it does not provide CSS implementation.

### 22.1 Pattern

Use a Tatros namespace followed by category, semantic purpose, variant, and state as required:

```text
--tatros-{category}-{property-or-role}-{variant}-{state}
```

Illustrative names:

```text
--tatros-color-text-primary
--tatros-color-surface-subtle
--tatros-color-action-primary-hover
--tatros-space-6
--tatros-radius-medium
--tatros-type-size-body
--tatros-motion-duration-fast
--tatros-button-primary-background-default
```

### 22.2 Naming Rules

- Use lowercase kebab case.
- Use the `tatros` namespace for public system variables.
- Order segments from broad category to specific state.
- Prefer semantic purpose over literal color, page, or component location.
- State names use a controlled vocabulary: `default`, `hover`, `focus`, `active`, `selected`, `disabled`, `loading`, `invalid`, and `visited` where applicable.
- Do not encode viewport names in a token unless the value is intrinsically a breakpoint.
- Do not encode version numbers in variable names.
- Private implementation variables follow an engineering-defined prefix and must not be documented as public API.

## 23. Component Naming Convention

### 23.1 Component Taxonomy

| Category | Purpose | Examples |
|---|---|---|
| Foundation | Noncomponent system values and assets | Color, type, icon, spacing |
| Primitive | Low-level reusable interaction or structure | Button, Link, Input, Stack |
| Composite | Assembly with a defined task | Form Field, Card, Breadcrumbs, Pagination |
| Pattern | Cross-component workflow | Contact Form, Search Results, Global Navigation |
| Template | Page-level content arrangement | Service Detail, Case Study, Article |

### 23.2 Naming Rules

- Use clear singular PascalCase names in design and code documentation, such as `Button`, `ServiceCard`, and `GlobalNavigation`.
- Name components by role or task, not visual treatment: `Alert` rather than `RedBox`.
- Use explicit domain qualification only when behavior or content model differs: `ServiceCard` and `CaseStudyCard` may be distinct; `BlueCard` is invalid.
- Variants use controlled semantic names such as `primary`, `secondary`, `compact`, or `inverse`.
- Subparts use stable anatomy names such as `Card.Title` or an equivalent documented implementation convention.
- Boolean properties use affirmative names and avoid double negatives.
- Event names describe the user or system event, not an implementation detail.
- Do not create a new named component for a one-page composition unless reuse, behavior, accessibility, or testing warrants it.

### 23.3 Component Documentation Contract

Every production component must document:

- Purpose and appropriate use.
- Anatomy.
- Variants, sizes, states, and defaults.
- Content guidance and length constraints.
- Interaction and responsive behavior.
- Accessibility semantics, keyboard behavior, announcements, and focus management.
- Supported and prohibited compositions.
- Token dependencies.
- Examples and edge cases.
- Test coverage and maturity status.
- Change history, owner, and deprecation status.

## 24. Future Scalability

### 24.1 Governance Model

Establish a cross-functional design-system working group with product design, frontend engineering, accessibility, content, QA, and brand representation. The group owns foundations, contribution review, releases, documentation, and adoption measurement.

### 24.2 Contribution Process

1. Demonstrate a repeated user or product need.
2. Audit existing components and patterns.
3. Define proposed anatomy, behavior, content, tokens, and accessibility contract.
4. Design and implement representative states and responsive conditions.
5. Test with design, engineering, accessibility, content, and QA stakeholders.
6. Publish documentation, examples, migration guidance, and release notes.
7. Measure adoption and address defects or misuse.

### 24.3 Versioning and Deprecation

- Use semantic versioning or an equivalent documented release policy for the distributed system.
- Patch releases correct compatible defects; minor releases add compatible capability; major releases may contain breaking changes.
- Deprecations identify the reason, replacement, migration path, target removal version, and owner.
- Breaking changes require consumer impact assessment and coordinated migration.
- Maintain release notes for token, component, behavior, and accessibility changes.

### 24.4 Theme and Brand Extension

- Support light and dark contexts through semantic token modes if a validated need exists.
- Do not infer that every component must support every theme; publish supported contexts.
- Regional or sub-brand variation must preserve shared component behavior and accessibility contracts.
- Campaign treatments consume approved system foundations and should not create parallel component libraries.

### 24.5 Internationalization

- Allow text expansion, bidirectional content, locale-specific formatting, and non-Latin scripts where future markets require them.
- Do not encode meaning through word length, capitalization, or left-to-right spatial assumptions.
- Validate typeface glyph coverage and fallback behavior.
- Components must tolerate variable labels and content without clipping or inaccessible truncation.

### 24.6 Platform and Product Expansion

The token and component model should permit future reuse across authenticated portals, internal tools, product interfaces, and mobile applications. Expansion requires platform-specific interaction and accessibility review; website components must not be transferred unchanged merely because they share visual styling.

### 24.7 Quality and Adoption Metrics

Track:

- Percentage of production UI using governed components and tokens.
- Duplicate or locally overridden patterns.
- Accessibility defects by component and severity.
- Visual-regression and interaction-test coverage.
- Component defects, support requests, and change lead time.
- Design-to-code consistency.
- Performance cost of system assets.
- Consumer satisfaction and documentation findability.

The system is successful when it improves consistency, quality, accessibility, delivery speed, and maintainability without preventing justified product evolution.
