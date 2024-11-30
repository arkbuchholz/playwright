import { test } from '../support/pages/BaseFixture';

const email = process.env.EMAIL ?? '';
const password = process.env.PASSWORD ?? '';

test('Should sign in', async ({ auth, onboarding }) => {
  await auth.signIn(email, password);
  await onboarding.assertPage();
});
