# Clannect Support Center: Documentation Guidelines

## 1. Purpose

This document defines the standards for all Support Center content.

Our goals:

* Maintain consistency across all articles
* Deliver clear and fast problem resolution
* Reduce repetitive support tickets
* Improve user onboarding

The Support Center is **not a blog**.
It is a structured problem-solving system.

---

# 2. Writing Tone & Style

## Language

* Use clear, simple sentences.
* Prefer short paragraphs (2–4 lines max).
* Avoid unnecessary technical jargon.
* If a technical term must be used, briefly explain it.

## Tone

Content must be:

* Professional
* Direct
* Helpful
* Neutral

Avoid:

* Overly casual language
* Internal jokes
* Marketing hype
* Emotional exaggeration

---

# 3. Article Structure (Mandatory Format)

Every article must follow this structure:

```md
# Article Title (Single H1 Only)

Short introduction (1–2 sentences explaining what this article solves).

## Step-by-step instructions

1. Step one
2. Step two
3. Step three

## Additional Notes (Optional)

Clarifications, edge cases, limitations.

## Still need help?

If this didn’t solve your issue, contact our support team at [support email/link].
```

Rules:

* Only one `# H1` per article.
* Use `## H2` for sections.
* Do not skip heading hierarchy.
* Keep structure consistent across all documents.

---

# 4. Markdown Standards

## Headings

```md
# H1 (Only once)
## H2
### H3 (Only if necessary)
```

Do not use H4+ unless absolutely required.

---

## Lists

Use numbered lists for step-by-step instructions.

```md
1. First step
2. Second step
3. Third step
```

Use bullet points only for non-sequential information.

---

## Bold & Emphasis

Use bold sparingly for:

* Important actions
* UI labels
* Warnings

Example:

```md
Click **Settings** → **Account**
```

Do not overuse bold text.

---

## Links

Internal links:

```md
[How to delete your account](../account/delete-account)
```

External links:

* Only use when necessary.
* Must be reliable and secure (HTTPS).

---

## Code Blocks

Use code blocks for:

* Commands
* Technical configuration
* Snippets

Example:

````md
```bash
git pull origin main
```
````

---

# 5. Screenshots Policy

Screenshots are required when:

* UI navigation is complex
* A feature is new
* A setting location may be confusing

Rules:

* Crop unnecessary areas.
* Highlight the relevant section if needed.
* Do not upload low-resolution images.
* Keep image naming descriptive:

  * `account-settings-location.png`
  * `cloin-reward-dashboard.png`

---

# 6. Naming Convention

File names must be:

* Lowercase
* Hyphen-separated
* Descriptive

Correct:

```
how-to-earn-cloin.md
delete-account.md
reset-password.md
```

Incorrect:

```
HowToEarn.md
doc1.md
final_version2.md
```

---

# 7. Content Principles

Every article must:

* Solve one specific problem
* Be scannable
* Be actionable
* Avoid duplication

If a topic overlaps with another article, link to it instead of repeating content.

---

# 8. Update Policy

When updating an article:

* Do not rewrite the entire document unless necessary.
* Preserve structure.
* Update screenshots if UI changed.
* Verify internal links after editing.

PR title format:

```
[DOC] Add article about Cloin rewards
[UPDATE] Improve account deletion guide
[FIX] Correct broken link in moderation article
```

---

# 9. Quality Checklist (Before Submitting PR)

* [ ] Grammar checked
* [ ] No broken internal links
* [ ] Clear step-by-step structure
* [ ] No duplicated content
* [ ] Screenshot added (if required)
* [ ] Title accurately reflects content

---

# 10. What This Support Center Is Not

It is not:

* A marketing page
* An empty wall
* An internal operations center
* An opinion space

It exists to provide clear answers and reduce user friction.
