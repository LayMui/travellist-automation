import { By, PageElement } from '@serenity-js/web'

export class Quantity {
  static dropdown = () =>
    PageElement.located(By.css('[data-testid="quantity"]'))
      .describedAs('quantity dropdown')
}
