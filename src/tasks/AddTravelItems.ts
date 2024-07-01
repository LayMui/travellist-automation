import { Task } from '@serenity-js/core';
import { Click, Select } from '@serenity-js/web';
import { quantity } from '../page-objects/quantity'

/**
 * This is called a "Task".
 * Use tasks to compose a sequence of one or more activities and give them domain meaning.
 */
export const AddTravelItems = {
    with: (quantity: string, elemente: string ) =>
        Task.where(`#actor add travel items called ${ quantity} and ${elemente }`,
            Select.option(quantity).from(quantity.dropdown),
        ),
}
