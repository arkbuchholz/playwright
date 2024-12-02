import { test } from '../support/pages/BaseFixture';

const email = process.env.EMAIL ?? '';
const password = process.env.PASSWORD ?? '';

test('Should sign in', async ({ Login, Calendar }) => {
  await Login.signIn(email, password);
  await Calendar.assert();
});
