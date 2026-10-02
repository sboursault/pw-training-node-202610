import { APIRequestContext } from '@playwright/test'

export class BasketApi {

  constructor(readonly request: APIRequestContext) {}

  async clearBasket(email: string, password: string) {
    const basicAuth = Buffer.from(`${email}:${password}`).toString('base64')
    const response = await this.request.delete('/api/basket/', {
      headers: {
        'Authorization': `Basic ${basicAuth}`,
      },
    })
    if (!response.ok()) {
      throw new Error(`clearBasket failed: ${response.status()} ${response.statusText()}`)
    }
    return response
  }
}
