import htmlConfig from './html/config.ts';
import ortoniConfig from './ortoni/config.ts';
import odhinConfig from './odhin/config.ts';
import githubActionsConfig from './github-actions/config.ts';

import type { PlaywrightTestConfig } from '@playwright/test';

const reporterConfig: PlaywrightTestConfig['reporter'] = [
  htmlConfig,
  ortoniConfig,
  odhinConfig,
  process.env.CI ? githubActionsConfig : ['list'],
  ['allure-playwright']
];

export default reporterConfig;
