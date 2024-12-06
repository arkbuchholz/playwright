import htmlConfig from './html/config.ts';
import ortoniConfig from './ortoni/config.ts';
import odhinConfig from './odhin/config.ts';

import type { PlaywrightTestConfig } from '@playwright/test';

const reporterConfig: PlaywrightTestConfig['reporter'] = [
  htmlConfig,
  ortoniConfig,
  odhinConfig,
  ['@estruyf/github-actions-reporter']
];

export default reporterConfig;
