import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';
import path from 'path';
import { OrtoniReportConfig } from 'ortoni-report';

const reportConfig: OrtoniReportConfig = {
  open: process.env.CI ? 'never' : 'always',
  folderPath: 'report',
  filename: 'index.html',
  title: 'Ortoni Test Report',
  showProject: !true,
  projectName: 'Ortoni-Report',
  testType: 'Release - Nov 09, 2024',
  authorName: 'Arkadiusz Buchholz',
  base64Image: false,
  stdIO: false,
  preferredTheme: 'dark'
};

dotenv.config({ path: path.resolve(__dirname, '.env') });

const httpCredentials = {
  username: process.env.BASIC_AUTH_USER ?? '',
  password: process.env.BASIC_AUTH_PASSWORD ?? ''
};

export default defineConfig({
  testDir: './src/tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [['ortoni-report', reportConfig]],
  use: {
    baseURL: process.env.BASE_URL_STAGE ?? '',
    trace: 'on-first-retry'
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'], httpCredentials }
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'], httpCredentials }
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'], httpCredentials }
    }

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ]

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
