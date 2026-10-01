import { test as base } from "@playwright/test";
import { ProductPage } from "./page-objects/product-page";
import { LoginPage } from "./page-objects/login-page";
import { HomePage } from "./page-objects/home-page";

interface CustomFixtures {

  productPage: ProductPage;

  loginPage: LoginPage;

  homePage: HomePage;

  // list other custom fixtures here
}

const test = base.extend<CustomFixtures>({
  
  productPage: async ({ page }, use) => {
    const productPage = new ProductPage(page);
    await use(productPage);
  },

  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },

  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page);
    await use(homePage);
  },

  // define other custom fixtures here
});

export { test };
export { expect } from "@playwright/test";
