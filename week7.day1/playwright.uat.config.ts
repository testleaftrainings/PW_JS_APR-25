import { defineConfig, devices } from '@playwright/test';
/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
import dotenv from 'dotenv';
dotenv.config({ path: 'data/uat.env' });

export default defineConfig({
  testDir: './tests',
  workers: process.env.CI ? 1 : undefined,  
  reporter: 'html',
  use: {
     trace: 'on',
     video:'on',
     screenshot:'on',
     headless:false,
   
  },
 projects: [
    {
      name: 'chromium',
      use: { ...devices['Chrome'] },
    },
  ],

});
