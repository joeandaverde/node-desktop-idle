const Fs = require("fs");

if (Fs.existsSync("./build/Release/desktopIdle.node")) {
  module.exports = require("./build/Release/desktopIdle");
} else if (process.platform === "win32") {
  module.exports = require("./prebuilt/win/Release/desktopIdle");
} else if (process.platform === "darwin") {
  module.exports = require("./prebuilt/osx/Release/desktopIdle");
} else {
  throw "desktopIdle node binding not found";
}
