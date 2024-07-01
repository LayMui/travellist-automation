import {  By, PageElement } from '@serenity-js/web';

export const Item = {
    enter: () =>
        PageElement.located(By.css('input[data-testid="item"]')).describedAs('enter item'),


        
    add: () =>
        PageElement.located(By.css('button[data-testid="add"]')).describedAs('add item'),
}
