"use strict";
exports.__esModule = true;
// Not working.
require("@test/bar/export");
require("@test/bar/export.ts");
require("@test/bar/export.js");
// Works.
require("@test/bar/src/export");
require("@test/bar/src/export.ts");
////////////////////////////////////////////////////////////////////////////////
// Not working.
require("@test/bar/src/exportjs");
// Works.
require("@test/bar/src/exportjs.js");
