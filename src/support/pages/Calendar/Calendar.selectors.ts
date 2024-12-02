import { Page } from '@playwright/test';
import { BaseClass } from '../BaseClass';

export class CalendarSelectors extends BaseClass {
  constructor(page: Page) {
    super(page, '/organizations/152254/calendar');
  }
}
