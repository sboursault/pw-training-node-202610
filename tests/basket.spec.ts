import { test } from '../support/fixtures'

test('add to basket', async ({ productPage }) => {
  await productPage.goto()
  await productPage.expectEmptyBasket()
  await productPage.addToBasket()
  await productPage.expectBasketCount(1)
  await productPage.expectConfirmation(
    "The Hitchhiker's Guide to the Galaxy a été ajouté à votre panier.",
  )
})
