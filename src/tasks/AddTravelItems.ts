import { Task } from '@serenity-js/core';
import { Click, Enter, Select } from '@serenity-js/web';
import { Item } from '../page-objects/Item'
import { Quantity } from '../page-objects/Quantity'
/**
 * This is called a "Task".
 * Use tasks to compose a sequence of one or more activities and give them domain meaning.
 */
export const AddTravelItems = {
    with: (numberOfItems: string, elemente: string ) =>
        Task.where(`#actor add travel items called ${ numberOfItems} and ${elemente }`,
           Select.option(numberOfItems).from(Quantity.dropdown()),
           Enter.theValue(elemente).into(Item.enter()),
           Click.on(Item.add())
        ),
}
