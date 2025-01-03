import { ReporterDescription } from '@playwright/test';

const config: ReporterDescription = [
  'html',
  { outputFolder: 'reports/html', open: 'never' }
];

export default config;
