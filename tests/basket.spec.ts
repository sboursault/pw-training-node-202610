import { test, expect } from '@playwright/test';

test('add to basket', async ({ page }) => {
  await page.goto('/catalogue/the-hitchhikers-guide-to-the-galaxy_4/');
  await page.getByRole('button', { name: ' Panier' }).click();
  await expect(page.getByText('Votre panier est vide')).toBeVisible();  
  await page.getByRole('button', { name: 'Ajouter au panier' }).click();
  await expect(page.locator('#top_page')).toContainText('Panier (1)');
  await expect(page.getByText('The Hitchhiker\'s Guide to the Galaxy a été ajouté à votre panier.')).toBeVisible();
});
