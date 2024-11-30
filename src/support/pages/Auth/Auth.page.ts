import { Page } from '@playwright/test';
import { AuthSelectors } from './Auth.selectors';

export class AuthPage extends AuthSelectors {
  constructor(page: Page) {
    super(page);
  }

  async signIn(email: string, password: string) {
    await this.page.goto(this.slug);
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.signInBtn.click();
  }
}
