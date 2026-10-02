import { test as base } from "@playwright/test";
import { ProductPage } from "./page-objects/product-page";
import { LoginPage } from "./page-objects/login-page";
import { HomePage } from "./page-objects/home-page";
import { BasketApi } from "./api/basket-api";
import { Workflow } from "./workflow"

interface CustomFixtures {

  workflow: Workflow;

  productPage: ProductPage;

  loginPage: LoginPage;

  homePage: HomePage;

  basketApi: BasketApi;

  // list other custom fixtures here
}

const test = base.extend<CustomFixtures>({

  workflow: async ({ page, loginPage, homePage }, use) => {
    const workflow = new Workflow(page, homePage, loginPage);
    await use(workflow);
  },
  
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

  basketApi: async ({ request }, use) => {
    const basketApi = new BasketApi(request);
    await use(basketApi);
  },

  // define other custom fixtures here
});

export { test };
export { expect } from "@playwright/test";
