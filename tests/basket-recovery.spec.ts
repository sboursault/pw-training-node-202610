import { test } from '../support/fixtures'

test('recover basket on login', async ({
  homePage,
  loginPage,
  productPage,
  page,
}) => {
  // - je me connecte
  await loginPage.goto()
  await loginPage.login('tom@test.test', 'tom@test.test')
  await homePage.expectLoggedIn('tom@test.test')

  // - je vais sur une page produit
  await productPage.goto('the-hitchhikers-guide-to-the-galaxy_4')
  await productPage.expectEmptyBasket()
  await productPage.expectStock()
  // -> le produit doit être dispo

  // - je clique "ajouter au panier"
  await productPage.addToBasket()
  await productPage.expectBasketCount(1)

  // - je me déconnecte
  await page.goto('/fr/accounts/logout/')
  await productPage.expectEmptyBasket()

  // - je me reconnecte
  await loginPage.goto()
  await loginPage.login('tom@test.test', 'tom@test.test')
  await homePage.expectLoggedIn('tom@test.test')

  // - je vais sur une page produit
  await productPage.goto('the-hitchhikers-guide-to-the-galaxy_4')
  await productPage.expectBasketCount(1)
})
