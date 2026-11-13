# PSTrophyGuides — Trophy Guide Archive & Documentation Platform

PSTrophyGuides is an independent trophy guide and game documentation platform focused on completionist content, walkthrough design, documentation preservation, and long-term guide maintenance.

Created by lead frontend documentation engineer and platform architect Kitty_Paine, PSTrophyGuides was built to solve a systemic failure in gaming infrastructure: the rampant decay of abandoned, unmaintainable community guides that shatter the moment a live-service title patches, adjusts balance, adds DLC, or revises a trophy list. 

Rather than treating guides as disposable forum posts, PSTrophyGuides approaches them as living software documentation—leveraging semantic HTML5, CSS-first responsive layouts, custom vanilla JavaScript filtering engines, and programmatic JSON-LD linked data schemas to maintain production-grade reliability across a multi-node publishing architecture.

---

## Repository Purpose

This repository serves as a version-controlled archive of PSTrophyGuides content and platform development.

Unlike a traditional software repository, the primary objective of this project is documentation preservation, modernization tracking, structural organization, and long-term archival management.

This repository exists to:

- Preserve trophy guide history.
- Maintain archived guide versions.
- Track modernization efforts.
- Organize content evolution.
- Provide rollback and comparison points.
- Improve discoverability of PSTrophyGuides documentation.

---

## Repository Structure

### Completed Version 1.0.0

Contains guides that have been successfully modernized to current PSTrophyGuides standards.

These guides are considered stable archive releases and represent the current documentation format moving forward.

### In Progress

Contains guides currently undergoing modernization, conversion, restructuring, quality review, or expansion.

These guides are actively being transitioned toward the Version 1.0.0 standard.

### Legacy Code Version 0.5.0 - 0.9.0

Preserved archive of the original PSTrophyGuides guide library and platform structure spanning versions 0.5.0 through 0.9.0.

This archive serves as:

- Historical preservation
- Development reference
- Content backup
- Structural comparison
- Rollback protection

Legacy content remains preserved in its original form while modernization work is performed separately.

### Structural

Contains shared platform assets, editor productivity tools, and supporting theme infrastructure including:

- **Stylesheets & Scripts:** Core CSS-first layout rules and vanilla JavaScript filtering/search logic.
- **HTML Component & Snippet Library (`HTML Components.html`):** Standardized, semantic HTML reference templates and editor snippets (game breakdown, trophy card, media elements, warning callout, and DLC containers) used to ensure visual and structural consistency across Version 1.0.0 guides.
- **Targeted HTML Element Blocks:** Specialized reusable code blocks (such as the *Metal Gear Solid Delta* mission, location, and collectible structures) engineered for rapid, manual data insertion across specific sprawling game guides.
- **Custom Blogger Widgets:** Modular XML/HTML widget implementations engineered for platform navigation, directory filtering, and ad-free presentation.
- **Linked Data Schema (`schema.jsonld`):** System-wide JSON-LD structured data definitions for automated entity resolution and search engine indexing.

---

## Archive Statistics

Current archive includes:

- 40+ Trophy and Specialized Guides
- Multiple live-service games maintained after launch
- Coverage across PS3, PS4, PS5 and Vita platforms
- Tactical shooters, detective games, visual novels, RPGs, horror titles, and cooperative multiplayer games
- Documentation spanning multiple years of game updates and platform revisions

---

## 📖 Origin & Mission

PSTrophyGuides has roots tracing back to 2017, when Kitty_Paine began authoring professional trophy guides for TrueTrophies. However, navigating the rigid publishing queues and slow approval processes of legacy platforms created a major operational bottleneck—especially for live-service games requiring rapid updates when patches dropped.

To bypass these delays and take full control over documentation quality, PSTrophyGuides was launched as an independent blog in Nov. 2020. The platform was built around four foundational pillars: **Accuracy, Accessibility, Minimalism, and Long-Term Maintenance**. The primary goal is to lower the skill ceiling so that every completionist can achieve 100% confidence, backed by fully accessible code (such as strict screen-reader support) and clean minimalism.

The breaking point for launching the platform came after repeatedly encountering abandoned, outdated guides for games like _Tom Clancy's Rainbow Six Siege_ and _PAYDAY 2: CRIMEWAVE EDITION_, where major balance changes, DLC drops, and trophy-list revisions rendered existing community resources obsolete. 

I despise abandoning documentation without at least a clear notice that it's no longer being maintained. There should never be ambiguity regarding whether information is still viable or when it was last verified against the in-game version (for example, tracking milestones like my personal final session in *Metal Gear Survive* and the Heist list required for *OVERKILL Salutes You!* in Payday 2: Crimewave* in Nov. 2020 as the hard cutoff for data verification).

The mission of PSTrophyGuides is simple:

- Preserve accurate completion information.
- Maintain guides after major updates without bureaucratic delays.
- Document alternative strategies and evolving methods.
- Provide players with information that reflects the current state of the game, complete with last-verified timestamps against live patch versions.

Every guide is written from firsthand completion experience, testing, research, and long-term game knowledge.

---

## 📝 Documentation Philosophy

Unlike traditional guide sites that focus solely on publication, PSTrophyGuides prioritizes long-term documentation management.

Documentation is reviewed when:

- Major patches are released.
- Trophy requirements change.
- New strategies become available.
- DLC expansions introduce additional content.
- Existing methods become outdated.
- Structural modernization becomes necessary.

Where appropriate, guides include verification notes and update dates so players can determine whether methods have been confirmed under current game mechanics.

For live-service games, update dates should be interpreted as verification dates rather than publication dates.

This philosophy originated from maintaining large live-service titles and continues throughout the archive.

---

## 🎯 Areas of Focus

PSTrophyGuides primarily covers:

### Tactical Shooters

- Tom Clancy's Rainbow Six Siege
- Tom Clancy's Rainbow Six Extraction
- Ready or Not

### Detective & Mystery Games

- Ace Attorney Series
- Danganronpa Series
- Master Detective Archives: RAIN CODE+
- Ghost Trick: Phantom Detective
- Zero Escape
- Paradise Killer
- Process of Elimination

### Cooperative & Live-Service Games

- PAYDAY Series
- Dead by Daylight
- Diablo IV
- Overwatch 2
- Killing Floor 3
- The First Descendant

### Completion-Focused Single Player Titles

- Metal Gear Series
- Silent Hill 2
- Disney Dreamlight Valley
- The Sims 4
- 60 Seconds! Reatomized

---

## 🚀 Platform Features

### Guide Architecture & Walkthrough Design

Guides are structured dynamically based on game design rather than a one-size-fits-all template:
- **Standard Lists:** Follow the native PSN trophy order, supplemented by curated external walkthrough links where required.
- **Open-World & Multiplayer Titles:** Trophy types are grouped strategically, acknowledging that non-linear sandboxes and multiplayer environments lack a definitive unlock sequence.
- **Specialized Mastery Guides:** Strict chronological ordering (such as the *Metal Gear Solid Delta* collectibles directory) designed for maximum routing efficiency, tracking missables, and minimizing backtracking.

### Live-Service Maintenance

High-priority guides receive ongoing updates when games introduce balance changes, trophy revisions, new mechanics, or additional content.

### Point of No Return Warnings

Critical progression locks and irreversible events are clearly identified throughout the guides.

### Alternative Strategy Documentation

Whenever practical, multiple trophy methods are documented so players can select approaches that best suit their playstyle and skill level.

### Search & Navigation Tools

Custom search and filtering interfaces allow visitors to query active guides using targeted data attributes rather than an unmaintained tag taxonomy:
- **Standard & DLC Filters:** Dynamically parse trophy titles, DLC names, and whether an expansion is paid or free.
- **Specialized Directory Parameters:** Micro-level data attributes (such as explicit mission and location groupings used in guides like *Metal Gear Solid Delta*) to instantly filter complex collectible trees.

---

## 📚 Preservation Strategy

PSTrophyGuides follows a preservation-first approach to documentation.

Legacy guides are archived rather than discarded, allowing historical versions to remain available for reference, comparison, and recovery.

Modernization efforts are performed on separate working copies, ensuring the original content remains preserved while improvements are developed.

This approach maintains both documentation history and future flexibility.

---

## 📚 Archive Scope

The archive spans multiple genres and platforms, ranging from visual novels and detective games to tactical shooters and live-service multiplayer experiences.

Many guides continue to serve as active reference material years after publication and are periodically reviewed as games evolve.

The long-term objective of PSTrophyGuides is to create a reliable, searchable, maintainable, and historically preserved knowledge base that helps players achieve 100% completion with confidence.

---

### 🌐 Programmatic Semantic Engine

- **Asset Implementation:** `schema.jsonld`
- **Methodology:** Integrated custom JSON-LD linked data schemas inside the core theme architecture utilizing Blogger XML conditional tags (`b:if cond`).
- **Impact:** Automates system-wide data validation across 40+ live production nodes, dynamically transitioning between `ProfilePage`, `CollectionPage`, and `TechArticle` logic. This explicitly resolves cross-platform entity identity across GitHub, LinkedIn, and trusted validation ledgers, bypassing the crawl-priority limitations of free subdomains through explicit machine-readable metadata.

---

_"Guides should age like documentation, not forum posts."_
