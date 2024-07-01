import { Task } from '@serenity-js/core';
import { Click, Select } from '@serenity-js/web';
import { Quantity } from '../page-objects/Quantity'

/**
 * This is called a "Task".
 * Use tasks to compose a sequence of one or more activities and give them domain meaning.
 */
export const AddTravelItems = {
    with: (numberOfItems: string, elemente: string ) =>
        Task.where(`#actor add travel items called ${ numberOfItems} and ${elemente }`,
            Select.option(numberOfItems).from(Quantity.dropdown()),
        ),
}
