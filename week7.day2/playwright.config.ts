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
   testDir: './tests',
   expect:{
    timeout:10*1000
   },
 fullyParallel:true,
  workers: 1,  
  reporter: 'html',
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
      use: { ...devices['Desktop Chrome'],
  //       launchOptions:{
  //    slowMo:120
  //  }
     },   
        },
//     {
//       name: 'Galaxy',
//       use: { ...devices['Nokia Lumia 520'],
//   //       launchOptions:{
//   //    slowMo:120
//   //  }
//      },   
//         },
  
  ],

});
