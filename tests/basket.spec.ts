import { expect, test } from '../support/fixtures'

test('add to basket', async ({ productPage, page }) => {
  await productPage.goto('the-hitchhikers-guide-to-the-galaxy_4')
  await productPage.expectEmptyBasket()
  await productPage.addToBasket()
  await productPage.expectBasketCount(1)
  await productPage.expectConfirmation(
    "The Hitchhiker's Guide to the Galaxy a été ajouté à votre panier.",
  )
})
