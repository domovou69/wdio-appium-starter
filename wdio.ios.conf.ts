import { config as shared } from './wdio.shared.conf';

// Defaults point to the built-in Settings app so the smoke test needs no .app.
// Set IOS_APP_PATH in .env to test your own build instead.
// Set IOS_UDID to the id of an already booted simulator (see `xcrun simctl list devices booted`).
const appPath = process.env.IOS_APP_PATH;
const udid = process.env.IOS_UDID;

export const config: WebdriverIO.Config = {
  ...shared,
  capabilities: [
    {
      platformName: 'iOS',
      'appium:automationName': 'XCUITest',
      'appium:deviceName': process.env.IOS_DEVICE_NAME ?? 'iPhone 17',
      ...(process.env.IOS_PLATFORM_VERSION && {
        'appium:platformVersion': process.env.IOS_PLATFORM_VERSION,
      }),
      ...(udid && { 'appium:udid': udid }),
      ...(appPath ? { 'appium:app': appPath } : { 'appium:bundleId': 'com.apple.Preferences' }),
    },
  ],
};
