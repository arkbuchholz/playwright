import { OrtoniReportConfig } from 'ortoni-report';
import { ReporterDescription } from '@playwright/test';

const reportConfig: OrtoniReportConfig = {
  open: 'never',
  folderPath: 'reports/ortoni',
  filename: 'index.html',
  title: 'Ortoni Test Report',
  showProject: !true,
  projectName: 'Ortoni-Report',
  testType: 'Release',
  authorName: 'Arkadiusz Buchholz',
  base64Image: false,
  stdIO: false,
  preferredTheme: 'dark'
};

const config: ReporterDescription = ['ortoni-report', reportConfig];

export default config;
