import { existsSync } from 'node:fs';

// Load .env without the dotenv package (built into Node 20.6+).
// The file is optional: CI can provide variables directly.
if (existsSync('.env')) {
  process.loadEnvFile('.env');
}

export const config: Omit<WebdriverIO.Config, 'capabilities'> = {
  runner: 'local',
  specs: ['./test/specs/**/*.ts'],
  maxInstances: 1,
  logLevel: 'info',
  waitforTimeout: 10_000,
  connectionRetryTimeout: 120_000,
  connectionRetryCount: 3,

  // The service starts and stops the Appium server (port 4723) for you.
  services: [['appium', { command: 'appium' }]],

  framework: 'mocha',
  mochaOpts: {
    timeout: 120_000,
  },

  reporters: [
    'spec',
    ['allure', { outputDir: 'allure-results', disableWebdriverStepsReporting: true }],
  ],
};
