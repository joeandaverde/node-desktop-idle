if (process.platform === "win32") {
	module.exports = require('./prebuilt/win/Release/desktopIdle');
} else {
    module.exports = require('./prebuilt/osx/Release/desktopIdle'); 
}