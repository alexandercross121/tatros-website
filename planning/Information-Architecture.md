# Tatros Corporate Website Information Architecture

## Document Control

| Attribute | Value |
|---|---|
| Document | Information Architecture |
| Product | Tatros Corporate Website |
| Status | Planning baseline |
| Primary audience | UX, product, content, engineering, SEO, and business stakeholders |
| Related documents | Product Requirements Document, User Personas, Content Strategy, SEO Strategy, Project Glossary, Requirements Traceability Matrix |

## 1. Purpose

This document defines the structural and navigational model for the Tatros corporate website. It establishes how information is grouped, labeled, linked, discovered, and scaled so that prospective clients and other stakeholders can evaluate Tatros efficiently.

The architecture is intended to:

- Provide a shared implementation reference for UX, content, engineering, SEO, analytics, and governance teams.
- Support distinct startup, small-business, enterprise, and government decision journeys without creating disconnected website experiences.
- Make Tatros's capabilities, evidence, organizational credibility, and contact pathways easy to locate.
- Support search-engine discovery through stable, descriptive, and semantically organized content.
- Provide a maintainable foundation for future services, industries, resources, and regional expansion.

This document defines information relationships and navigation behavior. It does not prescribe visual layout, component styling, wireframes, or final page copy.

## 2. Website Goals

### 2.1 User Goals

- Understand what Tatros does and which organizational problems it can address.
- Determine whether Tatros has relevant experience, technical depth, and delivery maturity.
- Explore services by capability, business need, or organizational context.
- Validate claims through portfolio work, case studies, expertise, and assurance information.
- Understand how an engagement begins and what information is required.
- Locate policy, corporate, accessibility, security, and procurement-relevant information.
- Contact Tatros through a pathway appropriate to the user's intent and buying stage.

### 2.2 Business Goals

- Position Tatros as a premium technology consulting and digital engineering partner.
- Generate qualified opportunities across startup, commercial, enterprise, and government markets.
- Communicate the full service portfolio without presenting a fragmented list of unrelated offerings.
- Establish credibility through specific evidence and transparent delivery information.
- Support long consideration cycles and multi-stakeholder evaluation.
- Build organic search visibility for service, industry, problem, and insight topics.
- Provide a scalable publishing model for services, cases, industries, resources, and careers.

### 2.3 Experience Goals

- Enable users to identify a relevant pathway within the first navigation decision.
- Keep high-value content reachable through shallow, predictable navigation.
- Maintain consistent labels and relationships across navigation, page headings, URLs, breadcrumbs, and internal links.
- Support keyboard, assistive-technology, mobile, and low-bandwidth use.
- Preserve context as users move between services, industries, evidence, and contact routes.
- Prevent dead ends by providing a relevant onward action on every index and detail page.

## 3. Primary Navigation

Primary navigation represents the highest-priority user tasks and should remain stable across the public website. The recommended top-level model is:

| Label | Destination | Purpose | Typical child links |
|---|---|---|---|
| Services | `/services/` | Organize Tatros capabilities and route users to individual service detail pages. | Artificial Intelligence, Website Development, Mobile App Development, Software Development, IT Support, Cloud Solutions, IT Consulting |
| Industries | `/industries/` | Help users assess sector relevance and applicable use cases. | Startups, Small Business, Enterprise, Government; future sector pages |
| Work | `/portfolio/` | Provide evidence of delivery and outcomes. | Portfolio, Case Studies |
| Resources | `/resources/` | Support research, education, and expertise evaluation. | Resource library, Blog, FAQ |
| About | `/about/` | Establish corporate identity, approach, values, and organizational credibility. | About, Careers |
| Contact | `/contact/` | Provide a persistent high-intent route to an appropriate inquiry. | General inquiry; intent-based routing within the page |

### 3.1 Primary Navigation Rules

- The Tatros logo links to `/` and is the consistent route to Home.
- Home is not required as a text label in the desktop primary navigation but must remain available in breadcrumbs, mobile navigation where useful, and assistive labeling.
- Top-level labels use familiar user language and remain nouns or concise noun phrases.
- Services, Industries, Work, Resources, and About may expose structured child navigation. Contact should remain a direct destination.
- The current section and current page must be programmatically and visually identifiable.
- All destinations must remain operable without pointer hover; expanded menus require keyboard and touch support.
- Navigation must not rely on a mega-menu as the only way to access child pages. Every top-level section requires a navigable landing page.
- Primary navigation depth should not exceed two exposed levels.

## 4. Secondary Navigation

Secondary navigation provides contextual access within a section and supports users who need to compare related material.

### 4.1 Utility Navigation

Utility navigation contains lower-frequency but globally relevant links:

- Careers
- FAQ
- Blog
- Contact
- Site search, when enabled

Utility links may appear in a compact desktop utility area and within the mobile navigation hierarchy. Links must not be duplicated without a defined user need.

### 4.2 Section Navigation

Section navigation appears on landing and detail pages where a content family contains multiple peers.

| Section | Recommended contextual destinations |
|---|---|
| Services | All Services; individual service pages; related case studies; relevant industries |
| Industries | All Industries; individual industry or audience pages; related services; relevant cases |
| Work | Portfolio; Case Studies; filtered evidence where content volume justifies it |
| Resources | All Resources; Blog; FAQ; future guides, reports, and insights |
| About | Company overview; approach and values within About; Careers; Contact |

### 4.3 In-Page Navigation

Long pages may provide a table of contents or anchored section navigation when it materially improves orientation. In-page links must:

- Use descriptive labels that match section headings.
- Update focus correctly for keyboard and assistive-technology users.
- Account for persistent headers when scrolling to targets.
- Avoid replacing the browser's expected history and back behavior.
- Use stable fragment identifiers where links may be shared.

### 4.4 Contextual Actions

Contextual actions should reflect the user's page and decision stage. Examples include:

- Service page to related case study.
- Industry page to relevant services and evidence.
- Case study to the service or industry represented.
- Blog article to a related service, case, resource, or FAQ answer.
- Careers content to open opportunities or a defined recruitment contact route.
- Any high-intent page to Contact with inquiry context preserved where appropriate.

## 5. Footer Navigation

The footer is a persistent recovery, verification, and governance mechanism. It should not reproduce the entire sitemap indiscriminately.

### 5.1 Recommended Footer Groups

| Group | Links |
|---|---|
| Services | Services, Artificial Intelligence, Website Development, Mobile App Development, Software Development, IT Support, Cloud Solutions, IT Consulting |
| Company | About, Portfolio, Case Studies, Careers, Contact |
| Explore | Industries, Resources, Blog, FAQ |
| Legal and governance | Privacy Policy, Terms of Service; future Accessibility Statement, Cookie Notice, Security, and responsible disclosure pages when approved |

### 5.2 Footer Requirements

- Display the legal entity or approved trading identity and current copyright information.
- Provide verified contact information and approved social or professional network links, if maintained.
- Include a clearly labeled route to privacy and terms information.
- Preserve accessible heading structure and descriptive link text.
- Avoid unpublished certifications, partner badges, office locations, or legal claims.
- Treat newsletter subscription as a future capability unless consent, privacy, data retention, and operational ownership are defined.

## 6. Complete Site Map

### 6.1 Launch Baseline

```text
Home                                      /
├── About                                 /about/
│   └── Careers                           /careers/
├── Services                              /services/
│   ├── Artificial Intelligence           /services/artificial-intelligence/
│   ├── Website Development               /services/website-development/
│   ├── Mobile App Development            /services/mobile-app-development/
│   ├── Software Development              /services/software-development/
│   ├── IT Support                        /services/it-support/
│   ├── Cloud Solutions                   /services/cloud-solutions/
│   └── IT Consulting                     /services/it-consulting/
├── Industries                            /industries/
│   ├── Startups                          /industries/startups/
│   ├── Small Business                    /industries/small-business/
│   ├── Enterprise                        /industries/enterprise/
│   └── Government                        /industries/government/
├── Portfolio                             /portfolio/
│   └── Portfolio Item                    /portfolio/{project-slug}/
├── Case Studies                          /case-studies/
│   └── Case Study                        /case-studies/{case-study-slug}/
├── Resources                             /resources/
│   └── Resource Detail                   /resources/{resource-slug}/
├── Blog                                  /blog/
│   ├── Article                           /blog/{article-slug}/
│   ├── Topic Archive                     /blog/topic/{topic-slug}/
│   └── Author Archive                    /blog/author/{author-slug}/
├── FAQ                                   /faq/
├── Contact                               /contact/
├── Search Results                        /search/?q={query}
├── Privacy Policy                        /privacy-policy/
├── Terms of Service                      /terms-of-service/
├── 404 Not Found                         system route
└── HTML Sitemap                          /sitemap/ (optional at launch)
```

### 6.2 Page-Type Responsibilities

| Page type | Primary responsibility | Required onward pathways |
|---|---|---|
| Home | Establish identity, relevance, capability breadth, evidence, and next steps. | Services, Industries, Work, Resources, Contact |
| Section landing | Explain the category, support comparison, and route to child content. | Child details, related evidence, Contact |
| Service detail | Explain problems addressed, capability, process, considerations, and relevant outcomes. | Related industries, cases, resources, Contact |
| Industry detail | Explain sector context, needs, constraints, and relevant capabilities. | Related services, cases, resources, Contact |
| Portfolio index | Present a browsable overview of representative work. | Portfolio details, case studies, related services |
| Portfolio detail | Demonstrate delivered work at an appropriate level of disclosure. | Related service, industry, case study, Contact |
| Case study index | Enable evidence discovery by service, industry, or business outcome. | Case details, Services, Industries |
| Case study detail | Document context, challenge, role, approach, solution, and outcomes. | Related service, industry, resources, Contact |
| Resource index | Aggregate durable educational and decision-support material. | Resource details, Blog, FAQ, relevant services |
| Resource or article detail | Answer a specific need and demonstrate subject expertise. | Related content, service, case, Contact where relevant |
| About | Establish corporate identity, values, approach, and credibility. | Careers, Work, Contact |
| Careers | Explain employment context and route candidates to current opportunities or approved channels. | About, Contact or recruitment system |
| FAQ | Resolve common pre-engagement, delivery, service, and organizational questions. | Relevant services, policies, Contact |
| Contact | Route inquiries and set expectations for response and next steps. | Confirmation state, privacy information |
| Legal | State current policies with ownership and revision information. | Related policies, Contact where appropriate |

### 6.3 Sitemap Governance

- A page must have an identified audience, user need, owner, lifecycle state, and maintenance expectation before publication.
- A new page should not duplicate the intent of an existing page.
- Every indexable detail page must belong to a defined content type and at least one navigable collection.
- Pages may have multiple contextual parents but only one canonical URL and one primary breadcrumb lineage.
- Navigation labels, page titles, and URLs should differ only when user comprehension or search intent requires it.
- Empty categories, filters, tags, author archives, and search results must not be indexed by default.
- Retired pages require a redirect or deliberate gone response based on whether a meaningful replacement exists.

## 7. User Flows

The following flows describe intended information progression, not interface layouts. Users may enter at any indexed page; each page must support orientation and a logical next step.

### 7.1 Startup Flow

**Primary need:** Validate fit, reduce product uncertainty, and reach a credible delivery discussion quickly.

```text
Search, referral, article, or Home
→ Services or relevant capability detail
→ Related startup context, portfolio item, or case study
→ Delivery approach and engagement expectations
→ Contact with startup/product inquiry context
→ Confirmation and preparation guidance
```

**Alternative paths:**

- Blog article → related AI, software, web, mobile, or cloud service → relevant evidence → Contact.
- Industries: Startups → relevant capabilities → case study → Contact.
- Portfolio item → related service → Contact.

**Information required before conversion:** Capability fit, evidence of technical credibility, delivery model, ownership expectations, likely first step, and enough commercial context to decide whether to initiate discovery.

### 7.2 Enterprise Flow

**Primary need:** Establish strategic fit, delivery maturity, technical depth, and organizational risk posture across multiple evaluators.

```text
Referral, thought leadership, case study, industry page, or Home
→ Industries: Enterprise or strategic service page
→ Enterprise-relevant case study and measurable outcomes
→ Technical, governance, security, integration, and support information
→ About and organizational credibility
→ Contact for executive briefing, capability discussion, or discovery
→ Shareable confirmation and next-step materials
```

**Alternative paths:**

- Service detail → case study → related enterprise context → Contact.
- Case study → related service and industry → About → Contact.
- Procurement or IT stakeholder enters from a shared deep link → validates assurance and corporate information → Contact.

**Information required before conversion:** Business outcome relevance, delivery scale, architecture and integration competence, governance, security, references or evidence, engagement model, and a credible route to structured evaluation.

### 7.3 Government Flow

**Primary need:** Assess public-sector relevance, supplier competence, accessibility, governance, security, and procurement suitability.

```text
Market research, shared link, search, or Home
→ Industries: Government
→ Relevant services and public-sector use cases
→ Case study, portfolio evidence, or capability information
→ Governance, accessibility, privacy, security, and organizational information
→ FAQ and legal or policy content as required
→ Procurement-oriented Contact route
→ Accessible, reusable response and documentation
```

**Alternative paths:**

- Search engine → Government industry detail → relevant service → evidence → Contact.
- Shared case study → Government context → About and policies → Contact.
- Procurement stakeholder → About, service scope, policies, and FAQ → Contact.

**Information required before conversion:** Verifiable organizational identity, relevant capability, public-value alignment, delivery controls, accessibility and security posture, procurement contact, and materials suitable for internal review.

### 7.4 Flow Requirements

- Preserve the user's context when linking to Contact, provided this does not expose sensitive data or create accessibility issues.
- Confirmation states must explain response expectations, next steps, and alternative contact options.
- Do not require users to select a technical solution before describing their business need.
- Do not place critical evidence solely in downloadable files.
- Ensure each flow remains complete on mobile and through keyboard-only navigation.
- Instrument major flow transitions and qualified inquiry outcomes without collecting unnecessary personal data.

## 8. Internal Linking Strategy

### 8.1 Linking Objectives

- Connect business needs to relevant capabilities and credible evidence.
- Help users move laterally among services, industries, cases, and resources without returning to Home.
- Distribute discoverability to important detail pages.
- Prevent orphan pages and shallow content clusters.
- Support semantic understanding without repetitive or manipulative linking.

### 8.2 Link Relationship Model

| Source | Required or preferred targets |
|---|---|
| Home | Priority services, industries, representative cases, current resources, Contact |
| Service landing | Every active service detail; representative cases; key industries; Contact |
| Service detail | Parent Services; two to four related services; relevant industries; one or more cases or resources; Contact |
| Industry landing | Every active industry detail; relevant services and cases |
| Industry detail | Parent Industries; relevant services; cases; resources; Contact |
| Portfolio item | Portfolio index; represented services and industries; related case study where distinct; Contact |
| Case study | Case Studies index; represented services and industries; relevant resources; Contact |
| Resource or blog article | Parent collection; related topic content; relevant service, industry, case, or FAQ answer |
| FAQ answer | Relevant service, policy, resource, or Contact destination |
| About | Work, Careers, Contact, and approved governance content |
| Legal page | Related legal or governance pages and an appropriate contact route |

### 8.3 Linking Rules

- Use descriptive anchor text that communicates destination and purpose without surrounding context.
- Prefer editorially relevant links within content and a limited set of curated related-content links.
- Avoid generic anchors such as “click here,” repeated exact-match keyword patterns, and unrelated promotional links.
- Do not use the same anchor to describe materially different destinations.
- Links to external domains must be identifiable through context and should open in the same browsing context unless a documented need requires otherwise.
- Validate internal links automatically during build and before release.
- Review high-value pages for orphan status, broken links, redirect chains, and outdated relationships during content audits.

## 9. SEO URL Structure

### 9.1 URL Standards

- Use lowercase Latin characters, numerals where necessary, and hyphens between words.
- Use human-readable nouns that reflect stable content concepts.
- Keep URLs concise while retaining meaningful hierarchy.
- Use trailing slashes consistently for canonical content URLs.
- Exclude file extensions, implementation technologies, dates, session identifiers, and campaign parameters from canonical paths.
- Avoid changing published URLs for editorial preference alone.
- Use one canonical URL per page and normalize protocol, host, slash, and case variants.
- Percent-encode non-ASCII or reserved characters according to platform standards when unavoidable.

### 9.2 Approved Patterns

| Content type | Pattern | Example |
|---|---|---|
| Top-level page | `/{page-slug}/` | `/about/` |
| Service | `/services/{service-slug}/` | `/services/cloud-solutions/` |
| Industry | `/industries/{industry-slug}/` | `/industries/government/` |
| Portfolio item | `/portfolio/{project-slug}/` | `/portfolio/{project-slug}/` |
| Case study | `/case-studies/{case-study-slug}/` | `/case-studies/{case-study-slug}/` |
| Resource | `/resources/{resource-slug}/` | `/resources/{resource-slug}/` |
| Blog article | `/blog/{article-slug}/` | `/blog/{article-slug}/` |
| Blog topic | `/blog/topic/{topic-slug}/` | `/blog/topic/artificial-intelligence/` |
| Blog author | `/blog/author/{author-slug}/` | `/blog/author/{author-slug}/` |
| Search | `/search/?q={query}` | `/search/?q=cloud` |

### 9.3 Redirect and Indexation Rules

- Apply permanent redirects when a page has moved and a substantially equivalent destination exists.
- Avoid redirect chains; each retired URL should resolve directly to the final destination.
- Do not redirect every removed page to Home. Return an appropriate gone or not-found response when no equivalent exists.
- Canonicalize filtered, sorted, tracked, and paginated variants according to the approved SEO strategy.
- Noindex internal search results, form confirmation pages, preview environments, and low-value taxonomy archives.
- Include only canonical, indexable URLs in the XML sitemap.
- Maintain a redirect register with old URL, new URL, rationale, owner, and effective date.

## 10. Breadcrumb Strategy

### 10.1 Purpose

Breadcrumbs communicate location within the content model, support movement to broader categories, and reinforce page relationships for users and search systems.

### 10.2 Rules

- Show breadcrumbs on all detail pages and subordinate content pages.
- Breadcrumbs are optional on Home and may be omitted on top-level landing pages when they provide no additional orientation.
- Begin with Home and end with the current page as non-linked text.
- Use the page's canonical information hierarchy, not the visitor's browsing history.
- Keep labels consistent with navigation and page-title terminology.
- Mark up breadcrumbs with appropriate structured data when supported by the implementation and validated against current search guidelines.
- Use an ordered list with accessible separators that are not announced redundantly.
- Do not truncate essential labels in the accessible name; visual truncation must preserve access to the full text.

### 10.3 Examples

```text
Home > Services > Artificial Intelligence
Home > Industries > Government
Home > Case Studies > {Case Study Title}
Home > Blog > {Article Title}
```

Portfolio and case-study pages should use their collection as the primary breadcrumb parent even when associated with multiple services or industries. Those additional relationships should be expressed through contextual links and metadata.

## 11. Search Strategy

### 11.1 Scope and Launch Decision

Global site search should be introduced when content volume and user research demonstrate that navigation and browsing alone are insufficient. The architecture reserves a search route and content metadata model at launch, even if the search interface is deferred.

### 11.2 Searchable Content

- Services and service details.
- Industries and industry details.
- Portfolio items and case studies.
- Resources and blog articles.
- FAQ questions and answers.
- About and Careers content.
- Public policy and governance pages.

Form submissions, confirmation states, administrative content, previews, and intentionally non-public material must not appear in results.

### 11.3 Search Behavior

- Search titles, summaries, headings, body content, service relationships, industry relationships, topics, and approved synonyms.
- Weight exact title and heading matches above body-text matches.
- Support common terminology variants such as “AI” and “artificial intelligence,” “app” and “application,” and “IT support” and “managed IT services.”
- Offer spelling tolerance without silently replacing specialized or organizational terminology.
- Provide type and topic filters only when the result volume makes them useful.
- Return a clear result count, matched context, content type, and descriptive title.
- Preserve the query in the search field and URL so results can be shared and browser navigation remains predictable.

### 11.4 No-Result and Failure States

- State clearly when no results are found without implying user error.
- Suggest corrected or broader terms, primary service categories, FAQ, and Contact.
- Log anonymized no-result queries for vocabulary and content-gap analysis, subject to privacy requirements.
- Distinguish no results from a technical failure and provide a recovery path for each.

### 11.5 Search Governance and Measurement

- Maintain an approved synonym and stop-word list owned jointly by content and product stakeholders.
- Review popular queries, refinements, no-result terms, result click-through, and contact completion after search.
- Exclude personal or sensitive query data from analytics where it is unnecessary.
- Test relevance when new content types or large content collections are introduced.
- Prevent internal search-result pages from being indexed by external search engines.

## 12. Navigation Principles

### 12.1 User-Centered Labeling

Use terms users recognize from their decision context. Internal service names, methodologies, and organizational structures should not determine navigation unless research confirms comprehension.

### 12.2 Predictability

Navigation position, labels, destinations, and interaction patterns should remain consistent across templates and devices. A link must behave as a link, and a control that expands content must communicate its state.

### 12.3 Shallow but Meaningful Hierarchy

Keep important content within a small number of decisions while preserving meaningful parent-child relationships. Do not flatten the architecture so far that users must interpret an undifferentiated list.

### 12.4 Multiple Paths, One Canonical Destination

Users may reach the same content through services, industries, cases, resources, search, and contextual links. Every page must retain one canonical URL and primary breadcrumb lineage.

### 12.5 Progressive Disclosure

Present the information needed for the current decision and expose deeper technical, operational, and governance detail when relevant. Do not force all audience types through identical content depth.

### 12.6 Evidence Near Claims

Place relevant case studies, portfolio work, methods, and assurance information near the capability claims they substantiate. Avoid isolating all evidence in a single section.

### 12.7 Accessibility and Device Independence

Navigation must support keyboard, touch, screen readers, zoom, reflow, and reduced-motion preferences. Information must not depend on hover, color, animation, or viewport size alone.

### 12.8 Recovery and Orientation

Provide persistent access to Home, section parents, search when available, Contact, and meaningful related destinations. Error and empty states must help users recover.

### 12.9 Content Governance

Each navigation item and page requires a named owner and review cycle. Outdated or unsupported content should be revised, consolidated, redirected, archived, or removed through an approved lifecycle process.

### 12.10 Measurement and Validation

Validate the architecture through tree testing, first-click testing, search-log analysis, task-based usability testing, accessibility evaluation, and behavioral analytics. Revisions should respond to observed findability problems rather than isolated stakeholder preference.

## 13. Future Expansion

The architecture should support controlled expansion without changing established top-level labels or published URLs unnecessarily.

### 13.1 Candidate Content Families

- Additional services such as data analytics, business intelligence, cybersecurity, managed services, digital transformation, and market research.
- Sector-specific industry pages such as healthcare, financial services, education, retail, manufacturing, or nonprofit, subject to validated expertise and content depth.
- Resource types such as guides, reports, white papers, webinars, events, tools, and research.
- Dedicated capability and assurance content for accessibility, security, privacy, responsible AI, quality engineering, and sustainability.
- Team or leadership profiles where they materially support credibility and have an approved maintenance owner.
- Partner and technology ecosystem pages where relationships are current and verifiable.
- Regional or language variants when market need, localization operations, legal review, and long-term maintenance are funded.
- Client or support portals, which must remain architecturally and operationally distinct from the public marketing website.

### 13.2 Expansion Criteria

A new section or content type should be introduced only when:

- A validated user need and measurable business purpose exist.
- Enough distinct, maintainable content exists to justify a collection.
- The proposed information cannot be represented adequately within an existing page or type.
- Ownership, approval, review cadence, and retirement criteria are defined.
- Required privacy, accessibility, security, legal, SEO, and analytics considerations are resolved.
- The change has been assessed for navigation, taxonomy, search, breadcrumb, URL, redirect, and structured-data impact.

### 13.3 Internationalization and Localization

Future geographic or language expansion should use a documented locale strategy rather than ad hoc duplicate pages. Before implementation, define:

- Country and language targeting model.
- URL and canonicalization approach.
- Translation ownership and quality assurance.
- Locale-specific legal, privacy, accessibility, and contact requirements.
- Regional service availability and claim substantiation.
- Hreflang and sitemap implementation where applicable.

### 13.4 Governance for Structural Change

Material changes to top-level navigation, URL conventions, taxonomy, or content types require cross-functional review by UX, content, SEO, engineering, analytics, accessibility, legal or privacy stakeholders as applicable, and the accountable business owner. Approved changes should be recorded in the project decision log and reflected in requirements traceability documentation.
