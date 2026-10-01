import { expect, Page } from "@playwright/test"

export class ProductPage {
  
  constructor(readonly page: Page) {}

  async goto() {
    await this.page.goto('/catalogue/the-hitchhikers-guide-to-the-galaxy_4/');
  }

  async addToBasket() {
    await this.page.getByRole('button', { name: 'Ajouter au panier' }).click();
  }

  async expectEmptyBasket() {
    await this.page.getByRole('button', { name: ' Panier' }).click();
    await expect(this.page.getByText('Votre panier est vide')).toBeVisible();  
  }

  async expectBasketCount(count: number) {
    await expect(this.page.locator('#top_page')).toContainText(`Panier (${count})`);
  }

  async expectConfirmation(message: string) {
    await expect(this.page.getByText(message)).toBeVisible();
  }
}