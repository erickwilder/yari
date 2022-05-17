export const path = require("path");

require("dotenv").config({
  path: path.join(__dirname, "..", process.env.ENV_FILE || ".env"),
});

export const BUILD_OUT_ROOT =
  process.env.BUILD_OUT_ROOT || path.join(__dirname, "..", "client", "build");

export const FLAW_LEVELS = Object.freeze({
  ERROR: "error",
  IGNORE: "ignore",
  WARN: "warn",
});

// These names need to match what we have in the code where we have various
// blocks of code that look something like this:
//
//    if (this.options.flawChecks.profanities) {
//      ... analyze and possible add to doc.flaws.profanities ...
//
// This list needs to be synced with the code. And the CLI arguments
// used with --flaw-checks needs to match this set.
export const VALID_FLAW_CHECKS = new Set([
  "macros",
  "broken_links",
  "bad_bcd_queries",
  "bad_bcd_links",
  "images",
  "image_widths",
  "bad_pre_tags",
  "sectioning",
  "heading_links",
  "translation_differences",
  "unsafe_html",
]);

// TODO (far future): Switch to "error" when number of flaws drops.
export const DEFAULT_FLAW_LEVELS = process.env.BUILD_FLAW_LEVELS || "*:warn";

export const FILES = process.env.BUILD_FILES || "";
export const FOLDERSEARCH = process.env.BUILD_FOLDERSEARCH || "";
export const GOOGLE_ANALYTICS_ACCOUNT =
  process.env.BUILD_GOOGLE_ANALYTICS_ACCOUNT || "";
export const GOOGLE_ANALYTICS_DEBUG = JSON.parse(
  process.env.BUILD_GOOGLE_ANALYTICS_DEBUG || "false"
);
export const NO_PROGRESSBAR = Boolean(
  JSON.parse(process.env.BUILD_NO_PROGRESSBAR || process.env.CI || "false")
);
export const FIX_FLAWS = JSON.parse(process.env.BUILD_FIX_FLAWS || "false");
export const FIX_FLAWS_DRY_RUN = JSON.parse(
  process.env.BUILD_FIX_FLAWS_DRY_RUN || "false"
);
export const FIX_FLAWS_VERBOSE = JSON.parse(
  // It's on by default because it's such a sensible option to always have
  // on.
  process.env.BUILD_FIX_FLAWS_VERBOSE || "true"
);

// See explanation in docs/envvars.md
export const ALWAYS_ALLOW_ROBOTS = JSON.parse(
  process.env.BUILD_ALWAYS_ALLOW_ROBOTS || "false"
);
