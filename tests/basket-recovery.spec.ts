import { test } from '../support/fixtures'

test('recover basket on login', async ({
  workflow,
  productPage,
  page,
  basketApi,
}) => {
  await basketApi.clearBasket('tom@test.test', 'tom@test.test')

  // - je me connecte
  await workflow.login('tom@test.test', 'tom@test.test')

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
  await workflow.login('tom@test.test', 'tom@test.test')

  // - je vais sur une page produit
  await productPage.goto('the-hitchhikers-guide-to-the-galaxy_4')
  await productPage.expectBasketCount(1)
})
