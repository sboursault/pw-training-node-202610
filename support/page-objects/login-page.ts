import { expect, Page } from "@playwright/test"

export class LoginPage {

  constructor(readonly page: Page) {}

  async goto() {
    await this.page.goto('/fr/accounts/login/');
  }

  async login(email: string, password: string) {
    await this.page.getByRole('textbox', { name: 'Adresse électronique *' }).fill(email);
    await this.page.getByRole('textbox', { name: 'Mot de passe *' }).fill(password);
    await this.page.getByRole('button', { name: 'Connexion' }).click();
  }

  async expectLoginFailed() {
    await expect(this.page.getByRole('heading', { name: 'Connexion' })).toBeVisible();
    await expect(this.page.getByText('Oups ! Nous avons trouvé des')).toBeVisible();
  }
}
