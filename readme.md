# IntelliJ subpath export support

# Repro

- `pnpm install`
- Open in IntelliJ
- Go to `packages/foo/index.ts`
- Hold `cmd` key and hover/click on imports.
- Some work, some don't.

_packages/foo/index.ts_

```typescript
// Not working.
import '@test/bar/export'
import '@test/bar/export.ts'
import '@test/bar/export.js'

// Works.
import '@test/bar/src/export'
import '@test/bar/src/export.ts'

////////////////////////////////////////////////////////////////////////////////

// Works.
import '@test/bar/src/exportjs'
import '@test/bar/src/exportjs.js'

```

- Run action `TypeScript Compile`. After some time you will see this error:

```
/Users/Vaughan/dev/code/issue-ts-esm/packages/bar/tsconfig.json
Error:(6, 25) TS6046: Argument for '--moduleResolution' option must be: 'node', 'classic'.
```

- Run `npm run check` which runs `tsc --noEmit`.
  - Notice there are no errors and it works properly outside of IntelliJ

# Viewing errors

- Click on `TypeScript` in the status bar, and then `Restart TypeScript service`.
- Open `Problems` tool window

# Reference

https://www.jetbrains.com/help/idea/typescript-support.html#top

# Issues

- IntelliJ Issue - https://youtrack.jetbrains.com/issue/WEB-40509
- TypeScript Issue - https://github.com/microsoft/TypeScript/issues/39742
