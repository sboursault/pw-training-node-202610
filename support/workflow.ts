import { Page } from '@playwright/test'
import { LoginPage } from './page-objects/login-page'
import { HomePage } from './page-objects/home-page'

export class Workflow {
  constructor(
    readonly page: Page,
    readonly homePage: HomePage,
    readonly loginPage: LoginPage,
  ) {}

  async login(email: string, password: string) {
    await this.loginPage.goto()
    await this.loginPage.login(email, password)
    await this.homePage.expectLoggedIn(email)
  }
}
