import { By, PageElement } from '@serenity-js/web'

export class quantity {
  static dropdown = () =>
    PageElement.located(By.css('[data-testid="quantity"]'))
      .describedAs('quantity dropdown')
}
