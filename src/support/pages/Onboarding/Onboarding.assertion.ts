import { expect, Page } from '@playwright/test';
import { OnboardingPage } from './Onboarding.page';

export class OnboardingAssertion extends OnboardingPage {
  constructor(page: Page) {
    super(page);
  }

  async assertPage() {
    await this.assertURL();
    await expect(this.resendEmailLink).toBeVisible();
  }
}
