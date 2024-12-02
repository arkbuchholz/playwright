import { CalendarPage } from './Calendar.page';

export class CalendarAssertion extends CalendarPage {
  async assert() {
    await this.assertURL();
  }
}
