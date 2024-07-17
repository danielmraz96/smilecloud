import { test, expect } from '@playwright/test';

test('Plasarea unei comenzi catre MetaLab', async ({ page }) => {
  let number = Math.floor(Math.random() * 10000) + 1;
  await page.goto('https://app.dev.eu.smilecloud.com/');
  await expect(page).toHaveTitle(/Smilecloud/);
  await page.locator('#email').fill('testing+qa-1720589289232@smilecloud.com');
  await page.locator('#password').fill('1720589289232aA@');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.getByRole('button', { name: 'Allow all' }).click();
  await page.locator('[data-test-id="add-new-case"]').click();
  await page.locator('[data-test-id="new-case-first-name"]').fill('Test'.concat(number.toString()));
  await page.locator('[data-test-id="new-case-last-name"]').fill('Auto'.concat(number.toString()));
  await page.locator('[data-test-id="create-case"]').click();
  await page.locator('input[type="file"]').setInputFiles('smile1.jpeg');
  await expect(page.getByText('File uploaded successfully')).toBeVisible();
  await page.locator('[data-test-id="header-projects-button"]').click();
  await page.locator('[data-test-id="create-new-project-design"]').click();
  await page.getByText('All Documentation').click()
  await page.locator('[data-test-id="media-drawer-item"]').click();
  await page.locator('[data-test-id="draw-lip-tab"]').click();
  await page.locator('[data-test-id="restorative-space-tab"]').click();
  await expect(page.locator('.CurvesProportionsEditor_curve__wdnyo')).toBeVisible();
  await page.locator('[data-test-id="teeth-lib-tab"]').click();
  await page.locator('[data-test-id="download-library-tab"]').click();
  await page.locator('[id="\\30 63acceb-4f44-4222-908c-26c55bce21aa"] > .OrderServiceHeader_header_container__h2nC1 > .OrderServiceHeader_header_content__zCJ2c > .OrderServiceHeader_content__gL962 > .OrderServiceHeader_checkbox_container__TxMMW > .theme_field__2KWG- > .theme_check__qd0Vd').check();
  await page.getByRole('button', { name: 'To Checkout' }).click();
  await page.getByRole('button', { name: 'Pay €' }).click();
  await page.frameLocator('iframe[title="Secure payment input frame"]').getByPlaceholder('1234 1234 1234').fill('4242 4242 4242 42422');
  await page.frameLocator('iframe[title="Secure payment input frame"]').getByPlaceholder('MM / YY').click();
  await page.frameLocator('iframe[title="Secure payment input frame"]').getByPlaceholder('MM / YY').fill('12 / 26');
  await page.frameLocator('iframe[title="Secure payment input frame"]').getByPlaceholder('CVC').click();
  await page.frameLocator('iframe[title="Secure payment input frame"]').getByPlaceholder('CVC').fill('123');
  await page.locator('[data-test-id="braintree-purchase-button"]').click();
  await page.getByRole('button', { name: 'Continue' }).click();
  await expect(page.getByText('attach_money')).toBeVisible();
  await page.close();
});