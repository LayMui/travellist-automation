import { Given, Then, When } from '@cucumber/cucumber';
import { Actor, Log, actorInTheSpotlight } from '@serenity-js/core';
import { Navigate } from '@serenity-js/web';
import { AddTravelItems } from '../tasks/AddTravelItems'


/**
 * Below step definitions use Cucumber Expressions
 * see: https://cucumber.io/docs/cucumber/cucumber-expressions/
 *
 * {actor} and {pronoun} are custom expressions defined under support/parameters.ts
 */
Given('{actor} is in the faraway land', async (actor: Actor) =>
    actor.attemptsTo(
        Navigate.to('/'),
    )
);

When('{pronoun} add the quantity {string} of elemente {string} for her daily facial care', async (actor: Actor, quantity: string, elemente: string) =>
    actor.attemptsTo(
        AddTravelItems.with(quantity, elemente),
    )
);

/**
 * If you need to use a RegExp instead of Cucumber Expressions like {actor} and {pronoun}
 * you can use actorCalled(name) and actorInTheSpotlight() instead
 *
 *  see: https://serenity-js.org/modules/core/function/index.html#static-function-actorCalled
 *  see: https://serenity-js.org/modules/core/function/index.html#static-function-actorInTheSpotlight
 */
Then(/.* should see the items added/, async () =>
    // actorInTheSpotlight().attemptsTo(
    //     // VerifyAuthentication[expectedOutcome](),
    // )
    Log.the("do nothing for now")
);

