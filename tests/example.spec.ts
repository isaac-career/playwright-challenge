 // -----------------------------------------------------------------------------

import { test, expect } from '@playwright/test';


test.describe("test suit", async() => {
  test('user buying process', async ({ page }) => {

    // create strings for name
    const first_name = "Aaron";
    const last_name = "Smith";

    await test.step('user search for iphones', async() =>{
      await page.goto('https://uat-survey.taxcreditco.com/automation-challenge');
      
      // filling user personal data
      await page.getByLabel('First Name', {exact: true}).fill(first_name);
      await page.getByLabel('Last Name').fill(last_name);

      await page.getByLabel('Email Address').fill('aaron@topmail.com');
      await page.getByLabel('Street Address').fill('Manchester');
      await page.getByLabel('City').fill('Manchester');
      await page.getByLabel('Zip Code').fill('01450');
      await page.waitForTimeout(300);


      // click on Next button
      await page.click('input[id="SurveyControl_SurveySubmit"]')
      
      // select option for all survey items.

      await page.locator('#SurveyControl_Question11396').getByText('No').click();
      await page.locator('#SurveyControl_Question11396').getByText('No').click();
      await page.locator('#SurveyControl_Question11397').getByText('No').click();
      await page.locator('#SurveyControl_Question914').getByText('No').click();
      await page.locator('#SurveyControl_Question915').getByText('No').click();
      await page.locator('#SurveyControl_Question11361').getByText('No').click();
      await page.locator('#SurveyControl_Question1244').getByText('No').click();

      await page.waitForTimeout(3000);

      // click on Next button
      await page.click('input[id="SurveyControl_SurveySubmit"]')



      // assertion of user-name
      await expect(page.getByLabel('Additional Information Thank')).toHaveValue(first_name.concat(' ', last_name));
      
      //  submiting form 
      await page.getByRole('button', { name: 'Submit form' }).click();
      await page.waitForTimeout(5000);


      // url final page assertion missing.
    })


  });

});

