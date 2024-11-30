import { Page } from '@playwright/test';
import { OnboardingSelectors } from './Onboarding.selectors';

export class OnboardingPage extends OnboardingSelectors {
  constructor(page: Page) {
    super(page);
  }
}
