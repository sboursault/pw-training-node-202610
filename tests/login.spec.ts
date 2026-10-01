import { test, expect } from '@playwright/test';



test.describe('test de connexion', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/fr/catalogue/');
    await page.getByRole('link', { name: ' Compte' }).click();
  })

  test('login ok', async ({ page }) => {
    await page.getByRole('textbox', { name: 'Adresse électronique *' }).fill('tom@test.test');
    await page.getByRole('textbox', { name: 'Mot de passe *' }).fill('tom@test.test');
    await page.getByRole('button', { name: 'Connexion' }).click();
    await expect(page.getByRole('heading', { name: 'Tous les produits' })).toBeVisible();
    await expect(page.getByText('Bienvenue')).toBeVisible();
    await expect(page.getByRole('button', { name: ' tom@test.test' })).toBeVisible();
  });


  test('login ko', async ({ page }) => {
    await page.getByRole('textbox', { name: 'Adresse électronique *' }).fill('tom@test.test');
    await page.getByRole('textbox', { name: 'Mot de passe *' }).fill('zut');
    await page.getByRole('button', { name: 'Connexion' }).click();
    await expect(page.getByRole('heading', { name: 'Connexion' })).toBeVisible();
    await expect(page.getByText('Oups ! Nous avons trouvé des')).toBeVisible();
  });
})
