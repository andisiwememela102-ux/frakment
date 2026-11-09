<div align="center">

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="assets/logo-dark.svg">
  <img src="assets/logo.svg" width="72" height="72" alt="Frakment">
</picture>

# Frakment

**The Fragments behind your Design System.**

Composable, accessible, customizable - inherently reusable.<br/>
One-time setup. Built in AI and motion. Minimal configuration.

[![License](https://img.shields.io/badge/license-source--available-blue?style=for-the-badge)](LICENSE)
[![npm](https://img.shields.io/npm/v/frakment?style=for-the-badge&color=000)](https://www.npmjs.com/package/frakment)
[![CI](https://img.shields.io/github/actions/workflow/status/arrafipd/frakment/ci.yml?style=for-the-badge&label=CI)](https://github.com/arrafipd/frakment/actions/workflows/ci.yml)

<img src="assets/hero-dark.webp" alt="Frakment homepage" width="100%">

</div>

---

**Frakment** is a component registry for React interfaces. Every component ships as source you copy into your project - depends only on a small set of well-known libraries, and stays yours to edit.


> **Pre-1.0 (`0.0.x`)** - APIs and component APIs may change between releases. Pin a specific version and read the changelog before upgrading.
## Highlights

**Installable via CLI** - `npx frakment add <name>` fetches the component and every registry dependency it needs. Files land in your repo, fully editable.

**AI and motion, built in** - chat and agent primitives ship with AI support and Motion. Baseline primitives stay motion-ready without extra setup.

**Built for agents** - MCP server and Agent Skills let tools discover, fetch, and install components autonomously.

**You own the source** - every component lands as source in your repo. Edit it, upgrade it, or leave it - no hidden dependency tree to debug.

## Components

46 components across three surfaces.

**Base** - Accordion, Avatar, Badge, Breadcrumb, Button, Button Group, Card, Checkbox, Collapsible, Code Block, Dialog, Dropdown Menu, Empty, Field, Hover Card, Input, Input Group, Input OTP, Item, Label, Marker, Pagination, Progress, Radio Group, Select, Separator, Sheet, Slider, Sonner, Spinner, Switch, Tabs, Textarea, Toggle, Toggle Group, Tooltip.

**AI Elements** - Attachment, Bubble, Message, Message Animated, Message Scroller, Trace.

**Modules** - Questionnaire, Pulse, Text Morph.

Browse the full catalog: **[www.arrafi.dev/frakment/docs/components](https://www.arrafi.dev/frakment/docs/components)**

## Requirements

- **Node.js** `>=22` (see `.nvmrc`)
- **React** `19`
- **Tailwind CSS** `v4`

## Quick start

```bash
npx frakment@latest init      # once per project
npx frakment@latest add button
```

`init` sets up `components.json`, injects the theme block into `globals.css`, and installs base dependencies. `add` fetches a component plus every registry dependency it needs. Run `add` again for each new component.

## Updating components

Frakment copies source into your project - `npx frakment add <name>` overwrites the existing file. To update safely:

1. **Commit your current version** so you can review diffs.
2. Run `npx frakment add <name>` to fetch the latest version.
3. Run `git diff` to review changes and merge any local customizations.

Read the changelog at https://github.com/arrafipd/frakment/releases before updating - component APIs may change between `0.0.x` releases.

## Built for agents

Frakment ships with an MCP server and Agent Skills so AI tools can discover and install components without scraping HTML.

```bash
npx -y @frakment/mcp
```

- **MCP server** -> [www.arrafi.dev/frakment/docs/utilities/mcp](https://www.arrafi.dev/frakment/docs/utilities/mcp)
- **Agent Skills** -> [www.arrafi.dev/frakment/docs/utilities/skills](https://www.arrafi.dev/frakment/docs/utilities/skills)
- **llms.txt** -> [www.arrafi.dev/frakment/llms.txt](https://www.arrafi.dev/frakment/llms.txt)

## Documentation

| | |
| :--- | :--- |
| [**Components**](https://www.arrafi.dev/frakment/docs/components) | Baseline primitives - Button, Input, Field, Card, and more |
| [**AI Elements**](https://www.arrafi.dev/frakment/docs/ai-elements) | Chat and agent primitives |
| [**Installation**](https://www.arrafi.dev/frakment/docs/installation) | Setup for Next.js, Vite, Astro, and manual |
| [**Theming**](https://www.arrafi.dev/frakment/docs/theming) | CSS variables, dark mode, and tokens |
| [**MCP Server**](https://www.arrafi.dev/frakment/docs/utilities/mcp) | Registry discovery for AI tools |
| [**Changelog**](https://www.arrafi.dev/frakment/docs/changelog) | What shipped, when |

## Contributing

Contributions are welcome - typo fixes, docs, tests, translations, or new components. See [CONTRIBUTING.md](./CONTRIBUTING.md).

A merged pull request satisfies the commercial-use requirement in the license.

## License

See [THIRD_PARTY_NOTICES.md](./THIRD_PARTY_NOTICES.md) for upstream attributions.

Source-available. Free for personal and educational use. Commercial use requires one qualifying contribution - see [LICENSE](./LICENSE) Section 4.

Attribution required - see [ATTRIBUTION.md](./ATTRIBUTION.md).

## Utilities

| Utility | Description |
| :--- | :--- |
| [Scroll fade](https://www.arrafi.dev/frakment/docs/utilities/scroll-fade) | Scroll-aware mask gradients for overflow containers |
| [Shimmer](https://www.arrafi.dev/frakment/docs/utilities/shimmer) | Animated gradient over text for loading states |
| [MCP Server](https://www.arrafi.dev/frakment/docs/utilities/mcp) | Registry discovery for AI tools |
| [Skills](https://www.arrafi.dev/frakment/docs/utilities/skills) | Agent skill definitions |
| [Agents](https://www.arrafi.dev/frakment/docs/utilities/agents) | AI agent patterns |

