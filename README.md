# wdio-appium-starter

Mobile test automation starter: WebdriverIO 10 + Appium 3 + TypeScript, for Android and iOS.

## Requirements

- Node.js >= 26.12.1 (`nvm use` reads `.nvmrc`)
- Android: Android Studio with an SDK and an emulator; `ANDROID_HOME` and `JAVA_HOME` set
- iOS (macOS only): Xcode with a simulator; `xcode-select -p` points to Xcode.app

## Setup

```bash
nvm use
npm install
cp .env.example .env   # optional, all values have defaults
npm run doctor:android
npm run doctor:ios
```

## Run

Start an emulator or simulator first, then:

```bash
npm run test:android
npm run test:ios
```

The smoke test opens the built-in Settings app, so no app binary is needed.
To test your own build, set `ANDROID_APP_PATH` or `IOS_APP_PATH` in `.env`.

## Reports

```bash
npm run report:generate
npm run report:open
```

## Code quality

`npm run lint`, `npm run format`, `npm run typecheck`.
A Husky pre-commit hook runs lint-staged and the type check.

## Layout

- `wdio.shared.conf.ts`: settings common to both platforms
- `wdio.android.conf.ts`, `wdio.ios.conf.ts`: platform capabilities
- `test/specs/`: specs
