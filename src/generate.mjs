// This port owns its application mappings. Inputs come only from the pinned local palette.


const kebab = (s) => s.replace(/[A-Z]/g, (m) => "-" + m.toLowerCase());

const tailwind = {
files: () => [],
all: (fs) => [{
    path: "living-code.css",
    content: `@theme inline {
${Object.keys(fs[0].colors).map((n) => `  --color-lc-${kebab(n)}: var(--lc-${kebab(n)});`).join("\n")}
${Object.keys(fs[0].roles).filter((r) => !(r in fs[0].colors)).map((r) => `  --color-lc-${kebab(r)}: var(--lc-${kebab(r)});`).join("\n")}
}
`,
  }]
};

export function generate(flavors) {
  return [...flavors.flatMap(f => tailwind.files(f)), ...(tailwind.all?.(flavors) ?? [])].filter(f => !["LICENSE", "README.md", "package.json", "extension.toml"].includes(f.path.split("/").at(-1)));
}
