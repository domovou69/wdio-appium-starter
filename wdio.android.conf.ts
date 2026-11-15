import { config as shared } from './wdio.shared.conf';

// Defaults point to the built-in Settings app so the smoke test needs no APK.
// Set APP_PATH in .env to test your own build instead.
const appPath = process.env.ANDROID_APP_PATH;

export const config: WebdriverIO.Config = {
  ...shared,
  capabilities: [
    {
      platformName: 'Android',
      'appium:automationName': 'UiAutomator2',
      'appium:deviceName': process.env.ANDROID_DEVICE_NAME ?? 'Android Emulator',
      ...(appPath
        ? { 'appium:app': appPath }
        : {
            'appium:appPackage': 'com.android.settings',
            'appium:appActivity': '.Settings',
          }),
    },
  ],
};
