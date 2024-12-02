import { Page } from '@playwright/test';
import { LoginSelectors } from './Login.selectors';

export class LoginPage extends LoginSelectors {
  constructor(page: Page) {
    super(page);
  }

  async navigate() {
    await this.page.goto(this.slug);
  }

  async signIn(email: string, password: string) {
    await this.navigate();
    await this.email.fill(email);
    await this.password.fill(password);
    await this.signInBtn.click();
  }
}
