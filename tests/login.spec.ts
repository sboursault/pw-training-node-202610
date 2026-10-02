import { test } from '../support/fixtures'

test.describe('test de connexion', () => {
  test.beforeEach(async ({ homePage }) => {
    await homePage.gotoLogin()
  })

  test('login ok', async ({ loginPage, homePage }) => {
    await loginPage.login('tom@test.test', 'tom@test.test')
    await homePage.expectLoggedIn('tom@test.test')
  })

  test('login ko', async ({ loginPage }) => {
    await loginPage.login('tom@test.test', 'zut')
    await loginPage.expectLoginFailed()
  })
})
