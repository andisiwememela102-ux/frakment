# Security Policy

## Reporting a vulnerability

Please **do not open a public issue** for security vulnerabilities.

Report privately via GitHub Security Advisories:

1. Go to https://github.com/arrafipd/frakment/security/advisories/new
2. Describe the vulnerability, steps to reproduce, and impact.
3. Include a proof of concept or suggested fix if possible.

You will receive a response within **7 days**. If confirmed, a fix will be prepared and released as soon as possible. You will be credited in the advisory unless you prefer to remain anonymous.

## Scope

In scope:

- `frakment` CLI (`packages/cli`)
- `@frakment/mcp` server (`packages/mcp`)
- `@frakment/ai` engine (`packages/ai`)
- `@frakment/react` primitives (`packages/react`)
- Components in `registry/` and `public/r/`
- Documentation website (`app/`, `content/`)

Out of scope:

- Vulnerabilities in third-party dependencies. Report to the upstream project.
- Issues that require physical access to the user device.
- Social engineering or phishing.
- Resource exhaustion from intentional oversized input.

## Threat model

Frakment ships code that runs on the user's machine and fetches data from remote registries. The threat model covers three attack surfaces:

### CLI (`npx frakment add <name>`)

The CLI writes files into the user's project and installs npm dependencies from a remote registry.

Threats and mitigations:

- **Path traversal.** File paths from the registry are validated against the target directory. Paths containing `..` or absolute paths are rejected.
- **Arbitrary file overwrite.** Existing files are preserved unless `--overwrite` is passed. Overwrite requires per-file confirmation by default.
- **Untrusted dependency install.** The CLI installs only packages declared in the component's `dependencies` list and resolved by the user's package manager. Versions are not pinned by the CLI, so registry authors must pin or range correctly in `frakment.json`.
- **Remote registry integrity.** The CLI fetches JSON from the URL in `components.json`. If the registry is compromised, the fetched component code runs in the user's project. Use a trusted registry URL and review installed components before running them.
- **No integrity hash (current limitation).** Components are fetched without a content hash. A tampered registry can serve modified code between fetch and review. Planned: per-component integrity hash and `--dry-run` flag.

### MCP server (`npx -y @frakment/mcp`)

The MCP server is spawned by the agent's MCP client and speaks JSON-RPC over stdin/stdout.

Threats and mitigations:

- **Auto-execute from remote.** `npx -y` skips install confirmation. Users who run MCP from untrusted configs should pin the version (`@frakment/mcp@0.0.2`) or install locally and reference the local binary.
- **Registry content treated as untrusted data.** Component sources, descriptions, and install commands from the registry are returned to the agent as data. Agents must treat this as untrusted and not follow instructions embedded in component content.
- **No shell execution.** The MCP server never spawns a shell or executes commands. It reads registry JSON and returns strings.

### Registry content (`llms.txt`, `public/r/*.json`)

Component metadata, source code, and install commands published to the registry are read by humans, CLIs, and AI agents.

Threats and mitigations:

- **Prompt injection in descriptions or source.** Descriptions and code are treated as data. Agents must not interpret embedded instructions in registry content as commands.
- **Tampered registry.** Publishing to the registry requires npm and GitHub credentials. If the registry host is compromised, all consumers are affected. Report suspected tampering via Security Advisories.

## Known limitations

- Components are fetched without an integrity hash. Planned.
- CLI does not support `--dry-run` or `diff` against existing files. Planned.
- The MCP server returns registry strings as-is without content filtering. Agents must apply their own trust boundaries.

## Supported versions

Security fixes land on the current `0.0.x` line for each package. Older versions are not maintained.

| Package | Current line |
| :-- | :-- |
| `frakment` | `0.0.4` |
| `@frakment/ai` | `0.0.4` |
| `@frakment/react` | `0.0.2` |
| `@frakment/mcp` | `0.0.2` |

## Recognition

Valid reports are credited in the corresponding GitHub Security Advisory. Mention it in your report if you would like to be listed in a dedicated hall of fame.