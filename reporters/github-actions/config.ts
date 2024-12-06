import type { GitHubActionOptions } from '@estruyf/github-actions-reporter';
import { ReporterDescription } from '@playwright/test';

const config: ReporterDescription = [
  '@estruyf/github-actions-reporter',
  <GitHubActionOptions>{
    useDetails: true,
    showError: true
  }
];

export default config;
