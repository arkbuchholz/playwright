import { ReporterDescription } from '@playwright/test';

const reportConfig = {
  testFolder: 'src/tests',
  title: 'Odhin Reports',
  project: 'QA Tests',
  release: '9.87.6',
  testEnvironment: 'DEV',
  embedAssets: true,
  embedAttachments: true,
  outputFolder: 'reports/odhin',
  startServer: false,
  consoleLog: false,
  simpleConsoleLog: false,
  consoleError: true,
  testOutput: 'only-on-failure',
  consoleTestOutput: false,
  initialTheme: 'theme/custom-theme.css',
  indexFilename: 'index'
};

const config: ReporterDescription = ['odhin-reports-playwright', reportConfig];

export default config;
