<!-- living-code-readme:1 -->
# 🌬️ Living Code for Tailwind CSS v4

**Calm slate. Living color.** Living Code for Tailwind CSS v4. Repository-owned theme files, installation instructions and four color flavors.

[Installation](#installation) · [Flavors](#flavors) · [Configuration](#configuration) · [All ports](https://github.com/living-code-theme)

## Previews

Real application screenshots have not been captured yet.

## Installation

```sh
pnpm add @living-code/css @living-code/tailwind
```

```css
@import "tailwindcss";
@import "@living-code/css/living-code.css";
@import "@living-code/tailwind/living-code.css";
```

Then `bg-lc-base text-lc-text border-lc-surface1`, `text-lc-keyword`, etc.

## Flavors

Expand a flavor for its full-size preview and activation instructions.

<details data-lc-flavor="night">
<summary><strong>Night</strong> · Dark · full palette</summary>

A real application capture is not available yet.

Load both `@living-code/css` and `@living-code/tailwind`, then select:

```html
<html data-theme="living-code-night">
```

</details>

<details data-lc-flavor="frost">
<summary><strong>Frost</strong> · Dark · softer chroma</summary>

A real application capture is not available yet.

Load both `@living-code/css` and `@living-code/tailwind`, then select:

```html
<html data-theme="living-code-frost">
```

</details>

<details data-lc-flavor="paper">
<summary><strong>Paper</strong> · Light · near-white slate</summary>

A real application capture is not available yet.

Load both `@living-code/css` and `@living-code/tailwind`, then select:

```html
<html data-theme="living-code-paper">
```

</details>

<details data-lc-flavor="signal">
<summary><strong>Signal</strong> · Dark · teal accent</summary>

A real application capture is not available yet.

Load both `@living-code/css` and `@living-code/tailwind`, then select:

```html
<html data-theme="living-code-signal">
```

</details>

## Configuration

See [Tailwind CSS v4's documentation](https://tailwindcss.com) for application settings and reload behavior. The activation instructions above identify each supported flavor; keep your other application configuration.

## Compatibility

Preserves the npm package name `@living-code/tailwind` and its existing import paths. Package publication and registry credentials are separate from creating this repository.

## Contributing

Found a problem? [Open an issue](https://github.com/living-code-theme/tailwind/issues/new/choose) with the app version, the flavor and a screenshot. Want Living Code somewhere else? [Request a port](https://github.com/living-code-theme/core/issues/new?template=port-request.yml).

Pull requests are welcome. Keep this README, `port.json` and `images/` in sync, and use real screenshots of the app, never mockups.

🦎 **One chameleon, many habitats.** Part of [Living Code](https://github.com/living-code-theme).

## License

[MIT](LICENSE) © Elliot Luque
