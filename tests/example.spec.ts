 // -----------------------------------------------------------------------------

import { test, expect } from '@playwright/test';


test.describe("test suit", async() => {
  test('user buying process', async ({ page }) => {

    await test.step('user search for iphones', async() =>{
      await page.goto('https://uat-survey.taxcreditco.com/automation-challenge');
      //await page.goto('https://uat-surveyengine.taxcreditco.com/survey.aspx?enc=5a209mATlQcKyXM3xRqb6z9qoFI14Q1%2beuSy4Mvyz4F8b8A4fB6L2uEXfKik6kiCktvzGeqTOq0UG67Ti7QMMKDdhjh3KJTZme0Ugry8N7PenULbtCq%2bCn54k%2fpHP2%2boOewCjvCII3inlEc52rpRukQk9JgtCXf7rJqVD892AUOmoicmJjiqWUBkpB0ZBTMkn2tmy3ROsIcF1fX3RqeLNyOcPOXso2j7652sIVO9V0bghBGXKIj7tSpRM5RKJj6uNsUXqGhLAUBvEgr%2b6AC04w%3d%3d');
      
      await page.pause();
      //await page.locator('input[name="SurveyControl$Question943$_as17719$_ai1647_as17719$ctl01"]').click();
      await page.getByLabel('First Name', {exact: true}).fill('Aaron');
      await page.waitForTimeout(300);

      await page.getByLabel('Last Name').fill('Smith');
      await page.waitForTimeout(300);

      await page.getByLabel('Email Address').fill('aaron@topmail.com');
      await page.waitForTimeout(300);

      await page.getByLabel('Street Address').fill('Manchester');
      await page.waitForTimeout(300);

      await page.getByLabel('City').fill('Manchester');
      await page.waitForTimeout(300);

      await page.getByLabel('Zip Code').fill('01450');
      await page.waitForTimeout(300);

      await page.pause();


      await page.click('input[id="SurveyControl_SurveySubmit"]')
      await page.pause();

      await page.locator('#SurveyControl_Question11396').getByText('No').click();
      await page.locator('#SurveyControl_Question11396').getByText('No').click();
      await page.locator('#SurveyControl_Question11397').getByText('No').click();
      await page.locator('#SurveyControl_Question914').getByText('No').click();
      await page.locator('#SurveyControl_Question915').getByText('No').click();
      await page.locator('#SurveyControl_Question11361').getByText('No').click();
      await page.locator('#SurveyControl_Question1244').getByText('No').click();

      await page.pause();
      await page.click('input[id="SurveyControl_SurveySubmit"]')
      await page.pause();

      // getByRole('button', { name: 'Submit form' })
      await page.getByRole('button', { name: 'Submit form' }).click();
      await page.pause();
    })
    
    // await test.step("user click on Macbook button", async ()=> {
    //   await page.getByPlaceholder("Search").fill("iphone");
    //   await page.pause();
    // })

    // Expect a title "to contain" a substring.
    


  });

});


// // -----------------------------------------------------------------------------


// test('has title 2', async ({ page }) => {
//   await page.goto('https://opencart.abstracta.us/');

//   // Expect a title "to contain" a substring.
//   await page.getByText("MacBook").click();
//   await page.pause();
// });



// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });


// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
//   await page.pause();
// });



// 