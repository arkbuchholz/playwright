import { Locator, Page } from '@playwright/test';
import { BaseClass } from '../BaseClass';

export class OnboardingSelectors extends BaseClass {
  readonly resendEmailLink: Locator;

  constructor(page: Page) {
    super(page, '/onboarding');
    this.resendEmailLink = page.getByRole('link', { name: 'Resend email' });
  }
}
