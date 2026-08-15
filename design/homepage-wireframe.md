# Tatros Corporate Website Homepage Wireframe

## Document Control

| Attribute | Value |
|---|---|
| Document | Homepage Wireframe |
| Product | Tatros Corporate Website |
| Status | Structural design baseline |
| Page | Home (`/`) |
| Fidelity | Content and layout specification; no visual mockup |
| Primary audience | UX, UI, CRO, content, frontend engineering, accessibility, analytics, QA, and business stakeholders |
| Related documents | Homepage Blueprint, Information Architecture, Design System, User Personas, Accessibility, SEO Strategy |

# Overview

The homepage is Tatros's primary orientation, credibility, and routing experience. It must help startup, small-business, enterprise, and government visitors understand Tatros's role, locate relevant capabilities, validate delivery competence, and choose an appropriate next step.

The page is not intended to contain every service detail or function as a mandatory linear funnel. It provides a progressive decision sequence:

```text
Identity and relevance
→ Capability fit
→ Audience fit
→ Evidence and risk reduction
→ Delivery understanding
→ Contact decision
```

Visitors with a known task can bypass this sequence through global navigation. Every major section must provide a meaningful onward route without creating competing calls to action.

## Wireframe Objectives

- Establish Tatros as a credible technology consulting and digital engineering company.
- Communicate core services and AI capabilities in understandable business context.
- Help visitors self-select by organizational context.
- Substantiate claims through approved projects, testimonials, process information, and technical evidence.
- Generate qualified contact intent without manipulative conversion patterns.
- Support accessible, responsive, performant use across input modes and viewport sizes.

## Structural Assumptions

- Desktop uses a centered 12-column grid with the container and spacing rules defined by the Design System.
- Tablet uses an 8-column grid and adapts based on available content width.
- Mobile uses a 4-column grid and a single primary reading sequence.
- Long-form copy uses the governed reading width rather than the full content container.
- Full-bleed section backgrounds may provide rhythm, but meaningful content remains container-aligned.
- The page contains one first-level heading in the hero.
- The section sequence remains consistent across breakpoints unless documented otherwise.
- Conditional trust modules collapse completely when approved content is unavailable; empty placeholders are prohibited.

---

# Desktop Layout

## 1. Announcement Bar

### Purpose

Communicate one current, high-priority item that materially benefits most homepage visitors, such as a significant report, event, service update, operational notice, or verified corporate announcement.

### Content

- One short message.
- One descriptive inline link when a destination is required.
- Optional dismiss control only when dismissal persistence and privacy behavior are defined.
- No promotional countdowns, rotating messages, or unsupported urgency.

### Layout

- Full-width band above global navigation.
- Content aligns to the main page container.
- Message and action occupy a single horizontal row at wide widths.
- Optional dismiss control sits at the logical end and remains separate from the destination link.
- Recommended content height is compact; multiline wrapping is permitted rather than truncation.

### Visual Hierarchy

- Lower prominence than the hero and primary navigation.
- Sufficient surface contrast to be discoverable without resembling an error or warning unless it communicates that status.
- Link treatment is visually distinguishable from surrounding text.

### Primary CTA

The single announcement destination, using a descriptive label tied to the announcement.

### Secondary CTA

None. A dismiss control is a utility action, not a secondary conversion action.

### Accessibility Notes

- The bar must not receive automatic focus or be announced repeatedly.
- Dismissal requires a programmatic name and must not remove focus unexpectedly.
- Status semantics are used only for time-sensitive operational messages, not routine promotion.
- Content must remain available at text resize and high zoom.

### Publication Condition

This section is optional. Publish only when content has an owner, start date, end date, destination, and removal plan. When absent, Navigation becomes the first visible region without reserved whitespace.

## 2. Navigation

### Purpose

Provide persistent orientation and direct access to Tatros's primary information architecture.

### Content

- Tatros identity linked to Home.
- Services.
- Industries.
- Work.
- Resources.
- About.
- Contact.
- Optional approved utility navigation and site search.
- Skip link as the first focusable element.

### Layout

- Full-width header with content in the central container.
- Brand identity occupies the leading grid area.
- Primary links occupy the central or trailing area.
- Contact is visually distinct but remains within the same navigation hierarchy.
- Dropdown or expanded navigation is anchored to its trigger and constrained to the viewport.
- If sticky behavior is used, the scrolled state reduces vertical space without changing available destinations.

### Visual Hierarchy

- Brand identity and navigation labels form the highest persistent layer.
- Contact receives primary-action emphasis.
- Current section is visible but not confused with hover or focus state.
- Utility actions use lower emphasis than primary navigation.

### Primary CTA

Contact Tatros through the approved Contact destination.

### Secondary CTA

The visitor's selected primary navigation destination. No universal secondary button is required.

### Accessibility Notes

- Menus operate through explicit activation, not hover alone.
- Triggers communicate expanded state and relationship to controlled content.
- Escape closes open menus and returns focus to the trigger.
- Keyboard focus order follows visual and reading order.
- Sticky navigation must not obscure focused headings or controls.
- Link and button semantics must reflect behavior.

## 3. Hero

### Purpose

Explain what Tatros is, the problems it helps solve, and the two most relevant first actions.

### Content

- Optional concise eyebrow establishing the category.
- One descriptive first-level heading.
- Supporting statement connecting Tatros's strategic and engineering capabilities to organizational outcomes.
- Primary contact CTA.
- Secondary exploration CTA.
- Optional restrained supporting illustration or technical visual.

### Layout

- Two-column composition across the 12-column grid.
- Copy occupies approximately seven columns and media up to five columns, adjusted for actual line length and visual content.
- Copy remains vertically centered or aligned to the visual's meaningful focal point.
- Actions sit together below the supporting statement.
- Allow generous top and bottom spacing while keeping identity, value, and at least the primary action visible without excessive initial scrolling on representative desktop heights.
- If approved media does not improve comprehension, use a copy-led layout rather than an empty decorative column.

### Visual Hierarchy

1. First-level heading.
2. Primary CTA.
3. Supporting statement.
4. Secondary CTA.
5. Eyebrow and decorative visual.

The primary and secondary actions must remain visually distinct. The media must not compete with the heading.

### Primary CTA

Discuss a project or Contact Tatros, linking to `/contact/`.

### Secondary CTA

Explore Services or View Case Studies, selected through content and usability validation.

### Accessibility Notes

- Use a single first-level heading.
- Keep essential meaning in text, not embedded in the visual.
- Decorative visuals have an empty text alternative; informative visuals have an equivalent description.
- No autoplay video, animated headline, content carousel, or essential scroll-triggered reveal.
- CTA order in the document matches the visual order.

## 4. Trusted By

### Purpose

Provide rapid, verifiable reassurance through approved client, certification, partnership, or evidence signals.

### Content

- A modest heading such as “Trusted by” only when approved client evidence exists.
- A curated set of approved client marks, current certifications, or validated proof statements.
- Optional link to related case evidence or credentials.

### Layout

- Compact full-container band immediately after the hero.
- Heading appears above or at the leading edge of a static logo or evidence row.
- Client marks use consistent bounding areas and optical sizing rather than identical pixel dimensions.
- Evidence wraps into additional rows rather than becoming a marquee or essential carousel.

### Visual Hierarchy

- Secondary to the hero but visible before detailed service exploration.
- Marks use restrained treatment so no client appears endorsed above another.
- Any factual proof statement takes priority over decorative logo volume.

### Primary CTA

View the associated Case Study or Work collection when a relevant destination exists.

### Secondary CTA

None by default. A credentials destination may be added only if maintained.

### Accessibility Notes

- Each informative logo has an accurate text alternative; repeated accompanying text may permit decorative treatment.
- Logo contrast must remain sufficient and must not depend on full-color brand artwork against an incompatible surface.
- Avoid auto-scrolling, pause-dependent, or drag-only interactions.
- Link purpose must remain understandable outside the visual mark.

### Publication Condition

Client marks require permission. Certifications and partnerships require current verification, scope, owner, and expiry review. If substantiated evidence is unavailable, omit the entire section.

## 5. Services

### Purpose

Help visitors map recognizable business and technical needs to Tatros's principal services.

### Content

- Section heading and concise integrated-delivery introduction.
- Seven service items: Artificial Intelligence, Website Development, Mobile App Development, Software Development, IT Support, Cloud Solutions, and IT Consulting.
- Each item includes title, problem or outcome statement, concise capability summary, optional governed icon, and link.
- Link to all Services.

### Layout

- Section introduction spans six to eight columns.
- Service items use a repeatable card or structured-list pattern.
- Recommended desktop arrangement: three columns for the first six items and a final item aligned consistently without stretching content arbitrarily. A four-plus-three grid is acceptable when card width remains readable.
- The “All Services” action sits with the section introduction or after the collection, not inside an unrelated card.

### Visual Hierarchy

1. Section heading.
2. Service titles.
3. Problem or outcome statements.
4. Supporting summaries.
5. Individual links and collection action.

Icons remain supportive and do not determine hierarchy.

### Primary CTA

Open the selected canonical service page.

### Secondary CTA

View All Services.

### Accessibility Notes

- Each service title communicates destination and remains visible without hover.
- If a card is wholly interactive, avoid nested interactive controls and preserve text selection.
- Card focus treatment equals or exceeds hover treatment.
- Do not rely on icon shape or color to distinguish services.
- Avoid truncating service summaries at a fixed line count when it removes meaning.

## 6. AI Solutions

### Purpose

Establish Tatros's AI capability in the context of business value, data readiness, governance, security, and responsible implementation.

### Content

- Section heading and concise capability statement.
- Two to four AI solution areas, such as strategy and readiness, intelligent product features, workflow automation, and AI integration, subject to verified capability.
- Responsible-use and governance statement.
- Relevant case, result, or insight when approved.
- Link to Artificial Intelligence.

### Layout

- Distinct but restrained surface treatment.
- Asymmetric two-column layout: narrative and actions occupy five columns; solution areas or evidence occupy seven columns.
- Solution areas use a structured list or compact cards rather than a dense diagram.
- A technical illustration may sit behind or adjacent only if text contrast and reading order remain unaffected.

### Visual Hierarchy

1. AI section heading.
2. Outcome-led capability statement.
3. Primary AI action.
4. Solution areas.
5. Governance statement and supporting evidence.

### Primary CTA

Explore Artificial Intelligence.

### Secondary CTA

Read the relevant AI case study or insight, when one exists.

### Accessibility Notes

- Avoid essential relationships expressed only through a complex diagram.
- Explain abbreviations at first use when context requires it.
- Do not animate conceptual networks, particles, or data flows by default.
- Ensure the distinct surface retains text, link, focus, and control contrast.
- Claims about automation and decision support must be understandable without promotional imagery.

## 7. Why Tatros

### Purpose

Explain the delivery characteristics that differentiate Tatros and reduce organizational risk.

### Content

- Section heading and brief framing statement.
- Three to five substantiated differentiators.
- Each differentiator contains a concise title, behavioral explanation, and client implication.
- Candidate themes include business-first discovery, multidisciplinary delivery, secure and scalable engineering, transparent governance, measurable outcomes, and long-term support.

### Layout

- Section introduction occupies the leading four columns.
- Differentiators occupy the remaining eight columns in a two-column grid or vertical structured list.
- An alternative full-width grid is acceptable when each item contains similar information depth.
- Avoid large decorative numerals unless they represent meaningful sequence or evidence.

### Visual Hierarchy

1. Section heading.
2. Differentiator titles.
3. Practical client implications.
4. Supporting explanations.

### Primary CTA

Learn About Tatros or Review Our Process, based on final content ownership.

### Secondary CTA

View Case Studies when evidence directly substantiates the differentiators.

### Accessibility Notes

- Values or differentiators must remain understandable without icons.
- Use list or heading structure reflecting actual relationships.
- Do not animate statistics or use unsupported numerical counters.
- Ensure repeated blocks have distinguishable headings.

## 8. Industries

### Purpose

Allow visitors to self-select by organizational context and access relevant needs, constraints, services, and evidence.

### Content

- Section heading and short explanation.
- Startups.
- Small Business.
- Enterprise.
- Government.
- Each item includes an audience-specific need statement and canonical destination.

### Layout

- Four equal or optically balanced cards across the 12-column grid.
- Cards may use approved photography, illustration, or restrained iconography, but the title and need statement remain primary.
- If content depth differs substantially, use a two-by-two grid rather than forcing equal-height horizontal cards.

### Visual Hierarchy

1. Section heading.
2. Audience titles.
3. Audience need statements.
4. Individual links.

### Primary CTA

Open the selected Industry or audience page.

### Secondary CTA

View All Industries.

### Accessibility Notes

- Do not communicate the audience category through image alone.
- Card links need distinct, descriptive names.
- Avoid hover-revealed summaries.
- Sector or audience imagery must be inclusive, credible, and free of stereotypical representation.

## 9. Featured Projects

### Purpose

Substantiate capability claims through approved delivery work, context, and outcomes.

### Content

- Section heading and concise evidence framing.
- Two or three approved portfolio items or case studies.
- Each item includes project title, client or anonymized context, challenge, Tatros role, relevant services, outcome, and approved media.
- Link to Portfolio or Case Studies.

### Layout

- Lead project occupies approximately seven columns with a larger media region.
- One or two supporting projects occupy the remaining five columns in a vertical stack.
- If no project warrants lead status, use three equal cards to avoid artificial ranking.
- Media follows consistent aspect ratios within each presentation tier.

### Visual Hierarchy

1. Lead project title and outcome.
2. Lead media or evidence.
3. Supporting projects.
4. Collection action.

Visual size must reflect editorial priority, not client status or project value unless intentionally approved.

### Primary CTA

View the selected Project or Case Study.

### Secondary CTA

View All Work or View All Case Studies.

### Accessibility Notes

- Project context and outcome must be available as text.
- Screenshots require meaningful alternatives where informative and must not expose confidential information.
- Do not place critical case details solely inside imagery.
- Links need unique accessible names when visible labels repeat.
- Avoid auto-advancing project carousels.

### Publication Condition

Confirm client permission, confidentiality, factual accuracy, and outcome methodology. Hypothetical work must not be presented as delivered work. If approved evidence is unavailable, omit or replace with a factual capability pathway.

## 10. Technology Stack

### Purpose

Help technical evaluators understand Tatros's current technology breadth and likely compatibility without reducing the company to vendor logos.

### Content

- Section heading and short engineering-context statement.
- Maintained groups such as AI and Data, Application Engineering, Cloud and Infrastructure, Integration, Quality, and Observability.
- Verified technology names or approved marks within each group.
- Link to a relevant technical service or evidence page.

### Layout

- Horizontal category navigation is avoided unless it is operable and adds value.
- Preferred arrangement is three grouped columns per row, each with a heading and wrapping list of technology names or marks.
- Text-first representation is the default. Logos use consistent optical size and ample separation when approved.

### Visual Hierarchy

1. Section heading and capability context.
2. Technology category headings.
3. Individual technologies.
4. Supporting action.

### Primary CTA

Explore the most relevant technical service, such as Software Development, Cloud Solutions, or Artificial Intelligence.

### Secondary CTA

Discuss Technical Requirements, linking to Contact with non-sensitive context where appropriate.

### Accessibility Notes

- Technology logos require accurate text equivalents when the name is not otherwise present.
- Group headings must establish programmatic relationships.
- Do not use color or logo recognition as the only means of identification.
- Lists must wrap and reflow without horizontal scrolling.

### Publication Condition

Every technology requires a current capability owner. Vendor marks must not imply partnership or certification without authorization. If a maintained inventory is unavailable, use capability categories without product logos or omit the section.

## 11. Client Testimonials

### Purpose

Provide attributable qualitative evidence about collaboration, delivery behavior, and outcomes.

### Content

- One to three approved quotations.
- Speaker name, role, organization, engagement context, and optional approved portrait or logo.
- Related case-study link where available.

### Layout

- One featured testimonial may span seven to eight columns with attribution adjacent or below.
- Supporting testimonials may occupy the remaining columns or appear in a three-column grid.
- Prefer static presentation. If a disclosure pattern is required for volume, keep at least one complete testimonial visible.

### Visual Hierarchy

1. Quotation content.
2. Speaker identity and role.
3. Organization and engagement context.
4. Related evidence link.

### Primary CTA

Read the related Case Study when available.

### Secondary CTA

View All Case Studies or Contact Tatros, depending on adjacent page context.

### Accessibility Notes

- Use appropriate quotation semantics and plain-text attribution.
- Do not rely on portraits or logos to identify the speaker.
- Avoid auto-rotation, timed reading, or controls without accessible labels.
- Decorative quotation marks must be hidden from assistive technologies.

### Publication Condition

Written permission and approved wording are required. Do not invent, materially paraphrase, or anonymize a quotation without explicit approval. Omit the section when verified testimonials are unavailable.

## 12. Our Process

### Purpose

Reduce uncertainty by explaining how Tatros moves from initial understanding to sustained outcomes.

### Content

- Section heading and adaptive-process statement.
- Four to six ordered phases, such as Understand, Define, Design, Build, Validate, Launch, and Improve, consolidated based on approved delivery practice.
- Each phase includes primary activity, client participation, and output or decision.
- Link to About, an approved approach page, or Contact.

### Layout

- Horizontal ordered sequence across the content container when six or fewer phases remain readable.
- Phase number, title, and explanation align consistently.
- Connecting lines are decorative only; document structure expresses the sequence.
- If explanations require more depth, use two rows or a structured vertical sequence rather than reducing text size.

### Visual Hierarchy

1. Section heading.
2. Phase number and title.
3. Phase output or decision.
4. Supporting activity description.
5. Section action.

### Primary CTA

Discuss Your Project or Start a Conversation.

### Secondary CTA

Learn About Tatros or view the approved delivery-approach destination.

### Accessibility Notes

- Implement phases as an ordered list.
- Connecting graphics must not be required to understand sequence.
- Avoid scroll-triggered step activation as the only way to expose phase content.
- Ensure phase labels remain unique and concise.

## 13. Latest Insights

### Purpose

Demonstrate current expertise and provide a lower-commitment research path.

### Content

- Up to three maintained articles or resources.
- Content type, title, concise summary, topic, and publication or update date.
- Optional optimized image.
- Link to Blog or Resources.

### Layout

- Three-column card grid on wide desktop.
- Titles and summaries align through shared internal structure; fixed-height truncation is avoided when it removes meaning.
- Collection action appears with the section heading or after the grid.

### Visual Hierarchy

1. Article or resource title.
2. Content type and topic.
3. Summary.
4. Date and supporting metadata.
5. Collection action.

### Primary CTA

Open the selected Insight.

### Secondary CTA

View All Resources or Visit the Blog.

### Accessibility Notes

- Titles must remain descriptive outside the card context.
- Dates use understandable text and machine-readable values in implementation.
- Images cannot repeat the title as embedded text.
- Card interactions follow the Design System's card accessibility contract.

### Publication Condition

Use “Latest Insights” only when publishing operations can keep the selection current. Otherwise label the section “Featured Insights.” Omit stale placeholders.

## 14. CTA

### Purpose

Provide a focused decision point after visitors have reviewed capability, audience relevance, evidence, and process.

### Content

- Short outcome-oriented heading.
- One supporting sentence setting expectations for an initial discussion.
- Primary contact action.
- Optional lower-commitment secondary route.
- No form fields within this homepage section.

### Layout

- Full-width differentiated surface with content aligned to the central container.
- Copy occupies approximately seven to eight columns.
- Actions occupy the remaining area or sit directly below copy when that improves reading order.
- Maintain substantial separation from adjacent content without creating an oversized empty band.

### Visual Hierarchy

1. CTA heading.
2. Primary action.
3. Supporting statement.
4. Secondary action.

### Primary CTA

Discuss Your Project or Contact Tatros.

### Secondary CTA

Explore Services, View Case Studies, or Review FAQ. Select only one based on the approved journey.

### Accessibility Notes

- Action labels must accurately describe destination and next step.
- Distinct surface colors require validated text, link, button, and focus contrast.
- Primary and secondary actions must not become visually indistinguishable.
- Do not use animation, urgency, or countdown behavior to pressure conversion.

## 15. Footer

### Purpose

Provide navigation recovery, corporate verification, legal access, and secondary destinations.

### Content

- Tatros identity and concise descriptor.
- Services links.
- Company links.
- Explore links.
- Legal and governance links.
- Verified contact information.
- Approved social or professional links.
- Legal entity and copyright information.

### Layout

- Full-width footer surface with container-aligned content.
- Brand and descriptor occupy three to four columns.
- Navigation groups occupy the remaining columns with visible headings.
- Legal identity and copyright form a lower row separated through spacing or a restrained boundary.
- Do not reproduce the complete sitemap.

### Visual Hierarchy

1. Brand identity and contact route.
2. Navigation-group headings.
3. Links.
4. Legal identity and copyright.

### Primary CTA

Contact Tatros through the verified contact route.

### Secondary CTA

The user's selected footer destination; no separate promotional CTA is required.

### Accessibility Notes

- Use a footer landmark and semantic navigation groups with accessible labels.
- Maintain readable contrast for default, visited, hover, and focus states.
- Social icons require accessible names and current destinations.
- Link groups must reflow without loss or an illogical focus order.
- Newsletter signup is excluded unless consent, privacy, error handling, and operational ownership are defined.

---

# Tablet Layout

Tablet behavior applies primarily from 768 px through 1023 px, with layout decisions driven by actual content fit rather than device identity. The page uses an 8-column grid with 24–32 px outer margins and approximately 24 px gutters.

## Global Changes

- Primary navigation may remain expanded only when every label and action fits without compression. Otherwise use the disclosed navigation pattern before overlap occurs.
- Section spacing steps down one approved design-system token where needed.
- Two-column compositions generally become balanced four-by-four or three-by-five arrangements.
- Three- and four-column card grids reduce to two columns.
- Text size remains within the bounded type scale; content should reflow before typography becomes too small.
- Hover-dependent affordances are removed because input method cannot be inferred.

## Section Adaptation

| Section | Tablet layout change |
|---|---|
| Announcement Bar | Message wraps naturally. The dismiss control remains aligned to the logical end without overlaying text. |
| Navigation | Switch to disclosed navigation when labels do not fit. Contact remains discoverable inside or adjacent to the disclosed menu. |
| Hero | Use a five-by-three or four-by-four split while media remains useful; otherwise move media below the copy. Keep actions grouped beneath the statement. |
| Trusted By | Use a static two- or three-column wrapping grid with consistent logo bounds. |
| Services | Use two columns. The seventh service occupies one card width and is not stretched unless the component supports a meaningful featured variant. |
| AI Solutions | Use a three-by-five split or stack the narrative before solution areas when line length becomes constrained. |
| Why Tatros | Move the introduction above a two-column differentiator grid. |
| Industries | Use a two-by-two grid. |
| Featured Projects | Use one lead project across the full container followed by two supporting cards in two columns. If only two projects exist, use equal columns. |
| Technology Stack | Use two category columns per row; allow technology names to wrap. |
| Client Testimonials | Use one featured quotation followed by supporting items. Avoid horizontal paging as the only access method. |
| Our Process | Use two or three phases per row while retaining ordered document sequence; a vertical list is preferred when descriptions are long. |
| Latest Insights | Use two columns, with the third item spanning one standard card width on the next row. |
| CTA | Use a five-by-three copy/action split or stack actions beneath copy if labels wrap. |
| Footer | Brand spans the first row; navigation groups use two to four columns based on label fit. |

## Tablet Interaction Notes

- Touch targets follow the 44 px system preference.
- Expanded menus, disclosures, and testimonial controls must not depend on hover.
- Focus and reading order must follow the content sequence even when grid placement changes.
- Test portrait, landscape, split-screen, hardware keyboard, touch, stylus, and zoom conditions.

---

# Mobile Layout

Mobile uses a four-column grid below 768 px. The primary layout is a single content column, with two-column arrangements permitted only for short, comparable items that remain readable at the available width.

## Stacking Order

The document order remains:

1. Skip link.
2. Announcement Bar, when active.
3. Navigation.
4. Hero copy.
5. Hero actions.
6. Hero media, when retained.
7. Trusted By, when approved.
8. Services.
9. AI Solutions.
10. Why Tatros.
11. Industries.
12. Featured Projects.
13. Technology Stack, when approved.
14. Client Testimonials, when approved.
15. Our Process.
16. Latest or Featured Insights.
17. CTA.
18. Footer.

## Section Adaptation

| Section | Mobile layout |
|---|---|
| Announcement Bar | Stack message and link only when required. Keep the dismiss control reachable without reducing text width excessively. No horizontal ticker. |
| Navigation | Show brand identity and a clearly labeled menu control. Present destinations in a disclosed panel with managed focus and background interaction. |
| Hero | One column. Heading precedes statement, primary CTA, secondary CTA, then optional media. Actions may become full-width when labels benefit. |
| Trusted By | Use a static two-column logo or proof grid, or a vertical evidence list. Do not crop marks or use auto-scroll. |
| Services | Use a vertical list or one-column cards. A two-column title-only pattern is permitted only if summaries remain elsewhere and labels fit. |
| AI Solutions | Place heading, narrative, primary action, solution areas, governance note, evidence action, and optional media in that order. |
| Why Tatros | Place section framing before a vertical differentiator list. Preserve practical explanations rather than showing only icons and titles. |
| Industries | Use a vertical list. Two columns are acceptable only when cards remain readable with enlarged text. |
| Featured Projects | Lead with project title and outcome, then media and supporting context. Stack all projects; do not create a swipe-only carousel. |
| Technology Stack | Stack categories and allow names to wrap. Use text by default rather than a dense logo cloud. |
| Client Testimonials | Present quotations in document order. Show complete attribution with each quotation. Avoid auto-rotation. |
| Our Process | Use a vertical ordered list. Remove decorative horizontal connectors and retain phase relationships through numbering and headings. |
| Latest Insights | Stack cards. Load media below the fold only when needed. Preserve full meaningful titles. |
| CTA | Stack heading, statement, primary action, and one secondary action. Keep sufficient separation between controls. |
| Footer | Stack brand and contact first, followed by link groups and legal content. Collapsible groups are optional and must communicate state. |

## Mobile Content Priorities

- Preserve identity, value proposition, primary action, and navigation access within the early experience.
- Keep summaries concise without removing evidence, governance, or action context.
- Avoid sticky conversion controls unless testing demonstrates benefit and the control does not obscure content, focus, browser UI, or form interactions.
- Do not hide sections solely to shorten the mobile page. Conditional sections follow the same content-readiness rules across all breakpoints.

## Mobile Input and System Considerations

- Support touch, switch input, voice control, keyboard, screen readers, and browser zoom.
- Respect safe-area insets without encoding assumptions about specific devices.
- Inputs and controls must not trigger unintended zoom through undersized text.
- Orientation changes must not reset open navigation, disclosure state, or user input unnecessarily.

---

# Responsive Behavior

## Breakpoint Baseline

| Range | Grid | Primary behavior |
|---|---|---|
| Below 480 px | 4 columns | Compact single-column presentation |
| 480–767 px | 4 columns | Expanded mobile spacing and selective two-column micro-layouts |
| 768–1023 px | 8 columns | Tablet compositions and two-column card grids |
| 1024–1279 px | 12 columns | Desktop navigation and multicolumn sections |
| 1280–1439 px | 12 columns | Expanded container and spacing |
| 1440 px and above | 12 columns | Maximum container width; outer whitespace increases |

Breakpoints are thresholds for content fit, not device classifications. A component may adapt within its container before a global breakpoint when its content requires it.

## Reflow Rules

- Preserve DOM and reading order across breakpoints wherever possible.
- Move from multicolumn to single-column layout before content, controls, or labels collide.
- Avoid horizontal page scrolling at supported viewport and zoom combinations.
- Tables or code-like technical material may scroll within a labeled region when no readable reflow exists.
- Do not remove essential content, evidence, or actions on smaller screens.
- Maintain stable component anatomy so behavior remains predictable.
- Use governed spacing and typography tokens; do not introduce one-off responsive values.

## Media Behavior

- Images use responsive source sizes and retain meaningful focal points.
- Reserve intrinsic dimensions or aspect ratios to prevent layout shift.
- Decorative media may be removed at compact widths when it has no informational value.
- Informative media may not be removed unless an equivalent text representation remains.
- Video, if ever approved, requires user controls, captions, transcript where applicable, poster image, reduced-data handling, and reduced-motion behavior.

## Navigation and State

- Do not infer hover, touch, pointer precision, or keyboard availability from width.
- Expanded navigation changes behavior based on content fit while preserving destinations.
- Focus order must match the apparent reading order after reflow.
- Component states should survive harmless viewport changes where technically reasonable.
- Anchored destinations account for sticky header height at every breakpoint.

## Responsive Validation Matrix

Test:

- Minimum supported width and widths between named breakpoints.
- Portrait and landscape orientations.
- Browser zoom through 400% where applicable.
- Text-only enlargement and custom text spacing.
- Split-screen and resizable desktop windows.
- Long navigation labels, titles, names, and translated content.
- Missing, slow, failed, and unusually wide or tall media.
- Touch, mouse, keyboard, screen reader, and voice-control interaction.

---

# Animation Guidelines

## Purpose

Motion may clarify state change, preserve spatial context, provide feedback, or guide attention. It must not be required to understand the page or used to manufacture urgency.

## Permitted Motion

- Fast hover, focus, and pressed-state transitions.
- Menu and disclosure opening or closing with clear state continuity.
- Modest visual feedback after user-initiated actions.
- Optional restrained entrance transition for nonessential decoration when content remains immediately available.

## Timing

| Motion class | Duration | Use |
|---|---:|---|
| Instant | 0 ms | Reduced-motion alternative or immediate state |
| Fast | 100–150 ms | Hover and small state changes |
| Standard | 180–250 ms | Menus, disclosure, and feedback |
| Deliberate | 300–400 ms | Larger contextual transitions used sparingly |

## Prohibited or Restricted Motion

- No scroll-jacking.
- No animated headline replacement.
- No auto-advancing hero, project, testimonial, or trust carousel.
- No continuously moving logo marquee.
- No autoplay background video.
- No essential content concealed until a scroll-triggered animation completes.
- No cursor replacement or decorative pointer trails.
- No excessive parallax, bounce, flash, or looping particle field.
- No animated counters unless the final value and context are immediately available and the animation serves a validated purpose.

## Reduced Motion

- Honor the user's reduced-motion setting.
- Replace spatial movement with immediate state change or a minimal opacity transition where appropriate.
- Preserve content, hierarchy, and feedback when animation is removed.
- Do not require a separate site setting for the system preference to take effect.

---

# Accessibility

The homepage targets WCAG 2.2 Level AA and any stricter applicable contractual or jurisdictional requirements.

## Semantic Structure

- Use landmarks for header, navigation, main content, and footer.
- Provide one descriptive first-level heading and a logical heading hierarchy.
- Represent service, audience, project, technology, testimonial, process, and insight collections using appropriate list structures.
- Implement process phases as an ordered list.
- Use links for navigation and buttons for disclosure or actions.

## Keyboard and Focus

- Make every action keyboard operable.
- Provide a persistent, visible focus indicator with sufficient contrast and area.
- Maintain logical focus order matching reading order.
- Prevent keyboard traps in navigation or future overlays.
- Restore focus after menus or dismissible components close.
- Ensure sticky elements do not obscure focused content.

## Names, Roles, and States

- Give controls and landmarks clear accessible names.
- Communicate expanded, selected, current, invalid, loading, and disabled states programmatically.
- Ensure repeated card actions have unique accessible context.
- Announce important asynchronous changes without moving focus unexpectedly.

## Visual Access

- Validate text and non-text contrast in all interaction states.
- Do not use color, shape, position, motion, or iconography as the only means of communication.
- Support high contrast, forced colors, zoom, reflow, and user text spacing.
- Keep line length and type sizing within the Design System standards.
- Avoid text embedded in images.

## Media and Content

- Provide accurate alternatives for informative imagery and empty alternatives for decorative imagery.
- Caption and transcribe time-based media as required.
- Keep client, project, and technology identity available in text.
- Use plain, specific language and explain unfamiliar abbreviations.
- Avoid fabricated evidence, dark patterns, forced urgency, and ambiguous action labels.

## Testing

Release validation includes automated checks, keyboard-only use, manual semantic review, screen-reader testing with supported combinations, zoom and reflow, contrast, forced colors, reduced motion, touch target review, and representative content edge cases. Automated results alone do not establish conformance.

---

# Performance

## Loading Priority

1. Document structure, global navigation, hero heading, value statement, and primary action.
2. Above-the-fold styling and any essential hero media.
3. Visible section content and interaction behavior.
4. Below-the-fold images and optional enhancements.
5. Approved third-party functionality after consent and business rules permit it.

## Asset Requirements

- Define numeric page-weight and asset budgets during technical planning.
- Load only required font families, weights, character sets, and icon assets.
- Use appropriately sized responsive images and modern formats with necessary fallbacks.
- Reserve image dimensions to prevent layout shift.
- Lazy-load below-the-fold images and embeds; do not lazy-load a likely largest-contentful-paint asset.
- Prefer vector brand marks where authorized and appropriately optimized.
- Do not ship complete project, testimonial, technology, or insight collections to display a curated subset.

## Interaction and Script Budget

- The page remains navigable and readable if optional client-side enhancement fails.
- Avoid script-heavy carousels, marquees, counters, particle effects, and layout libraries when native layout and disclosure behavior are sufficient.
- Third-party analytics, chat, scheduling, video, testimonial, or consent tools require performance, security, privacy, accessibility, and ownership review.
- Defer noncritical scripts without delaying core actions.
- Prevent duplicate event handling and layout work during resize or scroll.

## Monitoring

- Measure Core Web Vitals and project performance budgets in lab and field conditions.
- Test representative compact and expanded layouts on constrained devices and networks.
- Include the homepage in performance regression checks.
- Monitor largest contentful paint, interaction responsiveness, cumulative layout shift, server response, asset failures, and third-party cost.
- Treat performance regressions as release defects according to agreed severity thresholds.

---

# Future Expansion

## Candidate Modules

- Verified certification, partner, or governance evidence.
- Responsible AI, security, privacy, accessibility, or quality assurance pathway.
- Additional industry paths backed by relevant expertise and content.
- Research reports, events, webinars, tools, or resource collections.
- Regional or language entry points after localization governance is established.
- Recruitment signal when sustained hiring warrants homepage prominence.
- Client portal access when a distinct authenticated product exists.
- Personalized content only with a transparent purpose, privacy basis, fallback, and measurable user benefit.

## Expansion Rules

- A new section requires a validated user need, measurable objective, content owner, source, maintenance plan, accessibility contract, analytics plan, and retirement condition.
- Reuse existing section patterns before creating a new homepage module.
- Do not add a homepage section merely because a new service or page is published.
- Time-bound content requires start, end, fallback, and responsible owner.
- New third-party embeds require performance, privacy, security, accessibility, and legal review.
- New trust evidence requires verification and review cadence.
- Conditional sections must collapse without whitespace or broken section relationships when absent.

## Structural Change Control

Changes to section order, CTA hierarchy, global navigation, or responsive reading order require review by UX, content, CRO, frontend engineering, accessibility, analytics, SEO, and the accountable business owner. Material decisions should be recorded in the project decision log and reflected in the Homepage Blueprint and Requirements Traceability Matrix.

## Optimization Approach

Use persona-based usability testing, first-click testing, accessibility review, behavioral analytics, contact-path analysis, lead-quality data, performance monitoring, and controlled experiments where traffic and measurement quality are sufficient. Optimize against a defined user or business problem. A short-term increase in clicks does not justify reduced comprehension, accessibility, performance, inquiry quality, or trust.
