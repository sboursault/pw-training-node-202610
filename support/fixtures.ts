import { test as base } from "@playwright/test";
import { ProductPage } from "./page-objects/product-page";

interface CustomFixtures {

  productPage: ProductPage;

  // list other custom fixtures here
}

const test = base.extend<CustomFixtures>({
  
  productPage: async ({ page }, use) => {
    const productPage = new ProductPage(page);
    await use(productPage);
  },

  // define other custom fixtures here
});

export { test };
export { expect } from "@playwright/test";