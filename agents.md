# Agents Guide – Portfolio Codebase

This document defines how AI agents (GitHub Copilot, Cursor, ChatGPT, etc.)
should interact with this codebase.

The goal is to ensure:
- consistency
- no hallucinated components
- no architectural drift
- clean, composable UI

---

## 1. Project Overview

This is a **personal portfolio website** built with:

- Next.js (App Router)
- Magic UI–style components
- Tailwind CSS (as provided by the template)
- Component composition over generators

The portfolio emphasizes:
- engineering credibility
- calm, premium UI
- minimal sales language
- conversation-first contact (no resume download)

---

## 2. Important Constraints (READ FIRST)


## 2a. Componentization Rule

**Do not write direct code inside pages.**
Always create components and import them into pages to keep the codebase maintainable and modular.

Agents MUST follow these rules:

### ❌ Do NOT
- Add new UI libraries (no shadcn CLI, no Radix installs, no new animation libs)
- Invent Magic UI components that do not exist in the codebase
- Use `npx shadcn add` or similar generators
- Introduce heavy canvas / WebGL / Three.js effects
- Hardcode large copy blocks inside JSX
- Add resume download CTAs

### ✅ DO
- Use existing components only
- Compose layouts using Grid / Card / Flex / Box patterns
- Keep animations subtle and purposeful
- Prefer clarity over cleverness
- Respect the existing design system

---

## 3. Styling & UI Philosophy

- Magic UI–inspired, but **composition-based**
- Bento grids are layouts, not dependencies
- Animations only where they add meaning
- Homepage can have animated backgrounds
- Other pages should remain mostly static

Visual goals:
- dark
- cinematic
- calm
- engineer-first

---

## 4. Page-Specific Rules

### Home Page (`/`)
- Allowed: animated backgrounds, gradients, subtle motion
- Should feel premium and focused
- Single primary CTA: **Contact / Let’s Work Together**
- No sticky CTAs
- No modal popups

### Contact Page
- NO forms
- Display contact details only:
  - email (primary)
  - one optional social link
- Simple, low-friction, human

### Projects Page
- Depth over quantity
- Frame projects as systems, not visuals
- Avoid buzzwords

---

## 5. Content Architecture

All copy and data should live in centralized content/config files
(e.g. `content.ts`, `resources`, or similar).

Agents should:
- Extend schemas when needed
- Avoid inline strings in JSX
- Keep components content-agnostic

---

## 6. Animation Guidelines

Allowed:
- CSS transitions
- Framer Motion (if already present)
- Opacity, transform, blur, gradient animations

Avoid:
- Infinite loops
- Distracting motion
- Animation for decoration only

Rule of thumb:
> If the animation is removed, the UI should still look good.

---

## 7. Navigation & Routing

- `/projects` is the canonical projects route
- Avoid legacy routes like `/work` or `/gallery`
- Navigation labels must stay consistent

---

## 8. How Agents Should Respond

When making changes, agents should:
1. Explain **what** they are changing
2. Explain **why**
3. Prefer small, incremental edits
4. Ask before large refactors

When unsure:
- Choose the simpler solution
- Follow existing patterns
- Defer polish over correctness

---

## 9. Success Criteria

A change is successful if:
- It feels intentional, not flashy
- It improves clarity or usability
- It does not introduce unnecessary complexity
- A human reviewer can easily understand it

---

## 10. Core Intent (Do Not Violate)

This portfolio should make people think:

> “This engineer is calm, capable, and serious about building real things.”

Not:

> “This looks like a marketing site.”

Agents should optimize for **trust**, not novelty.
