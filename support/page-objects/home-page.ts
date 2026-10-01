import { expect, Page } from "@playwright/test"

export class HomePage {

  constructor(readonly page: Page) {}

  async gotoLogin() {
    await this.page.goto('/fr/catalogue/');
    await this.page.getByRole('link', { name: ' Compte' }).click();
  }

  async expectLoggedIn(email: string) {
    await expect(this.page.getByRole('heading', { name: 'Tous les produits' })).toBeVisible();
    await expect(this.page.getByText('Bienvenue')).toBeVisible();
    await expect(this.page.getByRole('button', { name: email })).toBeVisible();
  }
}
