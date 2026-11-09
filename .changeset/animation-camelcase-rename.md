---
"frakment": minor
---

**Breaking:** animation constants renamed to camelCase in `lib/animation.ts`.

Renames:
- `SPRING_SMOOTH` -> `springSoft`
- `EASE_OUT` -> `easeOutExpo`
- `EASE_SMOOTH` -> `easeSmoothOut`
- `EASE_IN_OUT` -> `easeInOut`
- `DURATION_FAST` -> `durationFast`
- `DURATION_SMOOTH` -> `durationSlow`

New exports: `easeInOutQuad`, `durationNormal`, `delayTight`.

Migration: run `npx frakment@latest init` to regenerate `lib/animation.ts` (safe to overwrite - the old file only contains the renamed constants), or update imports in components that use these constants.

Also adds the Credit Card module: auto brand detection, number and expiry formatting, `masked` prop, `glass` variant, and compound sub-components (Header, Issuer, Brand, Number, Footer, Holder, Expiry).