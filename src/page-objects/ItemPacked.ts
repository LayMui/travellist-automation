import { By, PageElements } from "@serenity-js/web";

export const ItemPacked = () =>
    PageElements.located(By.css('span[data-testid="item.packed"]'))
      .describedAs('items packed')
