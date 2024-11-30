import { Locator, Page } from '@playwright/test';
import { BaseClass } from '../BaseClass';

export class AuthSelectors extends BaseClass {
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly signInBtn: Locator;

  constructor(page: Page) {
    super(page, '/login');
    this.emailInput = page.getByRole('textbox', { name: 'email' });
    this.passwordInput = page.getByRole('textbox', { name: 'password' });
    this.signInBtn = page.getByRole('button', { name: 'sign in' });
  }
}
