import { test as base } from '@playwright/test';
import { AuthPage } from './Auth/Auth.page';
import { OnboardingAssertion } from './Onboarding/Onboarding.assertion';

export const test = base.extend({
  auth: async ({ page }, use) => {
    await use(new AuthPage(page));
  },
  onboarding: async ({ page }, use) => {
    await use(new OnboardingAssertion(page));
  }
});
