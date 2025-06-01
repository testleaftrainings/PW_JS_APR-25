import { defineConfig, devices } from '@playwright/test';
/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

export default defineConfig({
  timeout:60*1000,
   testDir: './tests/day10',
   expect:{
    timeout:10*1000
   },
 // fullyParallel:true,
  workers: 2,  
  reporter: 'html',
  //grepInvert:[/smoke/,/regression/],  //other than the given test tile info all the test will be executed
 // grep:[/smoke/], //to execute particular category
 testMatch:['day10/*.spec.ts'],  //matching file
  use: {
     trace: 'on',
     video:'on',
     screenshot:'on',
     headless:false,
     actionTimeout:5*1000,
  //  launchOptions:{
  //    slowMo:30
  //  }

  },
 projects: [
    {
      name: 'chromium',
      use: { ...devices['Chrome'],
  //       launchOptions:{
  //    slowMo:120
  //  }
     },   
        },

  
  ],

});
