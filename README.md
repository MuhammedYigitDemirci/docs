# Clannect Support Center Documentation

This repository contains the **official documentation source** for the Clannect Support Center.

All content published on:

**[https://support.clannect.com](https://support.clannect.com)**

is generated from the Markdown files stored in this repository.

---

## Purpose of This Repository

This repository exists to:

* Maintain structured and version-controlled documentation
* Enable collaborative editing via pull requests
* Ensure consistency and quality across all support content
* Provide a scalable documentation workflow

This is the single source of truth for all Support Center articles.

---

## How It Works

Clannect Support Center is powered by Mintlify and deployed automatically from this repository.

Workflow:

1. Documentation is written or updated in Markdown.
2. Changes are submitted via Pull Request.
3. PR is reviewed and approved.
4. Once merged into `main`, Mintlify automatically deploys the update.

There is no direct editing in the Mintlify dashboard.

All changes must go through GitHub.

---

## Repository Structure

Example structure:

```
/docs
  /getting-started
  /account
  /cloin
  /moderation
mint.json
```

* All documentation files are located inside `/docs`
* Configuration files (such as `mint.json`) must not be modified unless necessary

---

## Contribution Guidelines

All contributors must follow the documentation standards defined in:

```
/docs/CONTRIBUTING.md
```

Key principles:

* One H1 per article
* Clear step-by-step structure
* Professional and neutral tone
* No marketing language
* No duplication of content

Pull Requests that do not follow the guidelines may be rejected.

---

## Pull Request Rules

* Do not push directly to `main`
* All changes require a Pull Request
* At least one approval is required before merging
* Use proper PR title format:

```
[DOC] Add article about Cloin rewards
[UPDATE] Improve onboarding guide
[FIX] Correct broken link
```

---

## Roles & Responsibilities

Support Team:

* Create and update documentation
* Maintain clarity and accuracy
* Follow formatting standards

Repository Maintainers:

* Review Pull Requests
* Ensure structural consistency
* Protect documentation integrity

---

## Important Notes

* This repository is strictly for documentation.
* Do not use it for roadmap discussions.
* Do not commit experimental drafts directly to `main`.
* Avoid large structural changes without discussion.

---

## Contact

For internal questions regarding documentation workflow, contact the repository maintainers.

For user-facing support inquiries, direct users to:

**support@clannect.com**

---

Clannect
Official Documentation Repository
