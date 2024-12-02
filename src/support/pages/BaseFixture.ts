import { test as base } from '@playwright/test';
import { LoginPage } from './Login/Login.page';
import { OnboardingAssertion } from './Onboarding/Onboarding.assertion';
import { CalendarAssertion } from './Calendar/Calendar.assertion';

type BaseFixtue = {
  Login: LoginPage;
  Onboarding: OnboardingAssertion;
  Calendar: CalendarAssertion;
};

export const test = base.extend<BaseFixtue>({
  Login: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  Onboarding: async ({ page }, use) => {
    await use(new OnboardingAssertion(page));
  },
  Calendar: async ({ page }, use) => {
    await use(new CalendarAssertion(page));
  }
});
