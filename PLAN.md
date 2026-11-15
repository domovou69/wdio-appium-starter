# Plan

## Done

- WDIO 10 + Appium 3, drivers `uiautomator2` and `xcuitest` as project dependencies
- TypeScript 6 (typescript-eslint does not support TypeScript 7 yet), ESLint 10, Prettier
- Husky pre-commit (lint-staged + type check), Allure reporter
- Shared + per-platform WDIO configs, `.env` loaded with Node's built-in `process.loadEnvFile`

## Later

- iOS: run tests in an already open (booted) simulator instead of letting Appium boot one.
  Set `IOS_UDID` from `xcrun simctl list devices booted` and decide on `appium:noReset`.
  The claude-kit plugin `mobile-test-runs` has an `ios-simulator` skill for this.
- Android: same for an already running emulator (`appium:udid` from `adb devices`).
- Page objects and real app specs once an app build is chosen.
- CI workflow (lint, typecheck; device runs stay local).
