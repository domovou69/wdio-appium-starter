import { browser, expect } from '@wdio/globals';

describe('Smoke', () => {
  it('opens an Appium session and reads the screen', async () => {
    const source = await browser.getPageSource();

    expect(source.length).toBeGreaterThan(0);
  });
});
