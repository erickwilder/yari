const path = require("path");
require("dotenv");

export const STATIC_ROOT =
  process.env.SERVER_STATIC_ROOT || path.join(__dirname, "../client/build");
export const PROXY_HOSTNAME =
  process.env.REACT_APP_KUMA_HOST || "developer.mozilla.org";
export const CONTENT_HOSTNAME = process.env.SERVER_CONTENT_HOST;
export const OFFLINE_CONTENT = process.env.SERVER_OFFLINE_CONTENT === "true";

export const FAKE_V1_API = JSON.parse(
  process.env.SERVER_FAKE_V1_API || "false"
);
