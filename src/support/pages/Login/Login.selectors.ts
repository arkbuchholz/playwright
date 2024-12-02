import { Locator, Page } from '@playwright/test';
import { BaseClass } from '../BaseClass';

export class LoginSelectors extends BaseClass {
  readonly email: Locator;
  readonly password: Locator;
  readonly signInBtn: Locator;
  readonly signUpBtn: Locator;
  readonly resetPassword: Locator;

  constructor(page: Page) {
    super(page, '/login');
    this.email = page.getByRole('textbox', { name: 'email' });
    this.password = page.getByRole('textbox', { name: 'password' });
    this.signInBtn = page.getByRole('button', { name: 'Sign in' });
    this.signUpBtn = page.getByRole('link', { name: 'Sign up' });
    this.resetPassword = page.getByRole('link', {
      name: 'I forgot my password'
    });
  }
}
