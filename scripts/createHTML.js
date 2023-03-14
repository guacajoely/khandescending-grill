import { generateCarbList } from "./carbs.js"
import { generateProteinList } from "./proteins.js"
import { generateSauceList } from "./sauces.js"
import { generateSeasoningsList } from "./seasonings.js"
import { generateSizeList } from "./sizes.js"
import { generateVeggieList } from "./veggies.js"

export const createHTML = () => {
    return `
        <h1>Khan Descending Grill</h1>
        <article class="choices">
            <section class="choice_protein options">
                <h2>Proteins</h2>
                ${generateProteinList()}
            </section>
            <section class="choice_veggie options">
                <h2>Veggies</h2>
                ${generateVeggieList()}
            </section>
            <section class="choice_carb options">
                <h2>Carbs</h2>
                ${generateCarbList()}
            </section>
            <section class="choice_sauce options">
            <h2>Sauces</h2>
                ${generateSauceList()}
            </section>
            <section class="choice_seasoning options">
            <h2>Seasonings</h2>
                ${generateSeasoningsList()}
            </section>
            <section class="choice_size options">
            <h2>Sizes</h2>
                ${generateSizeList()}
            </section>
            
        </article>

        <article>
            <button>Place Order</button>
        </article>

        <article class="orders">
            <h2>Orders</h2>
        </article>
    `
}