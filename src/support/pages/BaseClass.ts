import { expect, Page } from '@playwright/test';
import playwrightConfig from '../../../playwright.config';

export class BaseClass {
  readonly page: Page;
  readonly slug: string;
  readonly url: string;

  constructor(page: Page, slug: string) {
    this.page = page;
    this.slug = slug;
    this.url = `${playwrightConfig.use?.baseURL}${this.slug}`;
  }

  async assertURL() {
    await this.page.waitForURL(this.slug);
    expect(this.page.url()).toBe(this.url);
  }
}
