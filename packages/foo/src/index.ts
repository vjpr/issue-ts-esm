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
