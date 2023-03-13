export const createHTML = () => {
    return `
        <h1>Khan Descending Grill</h1>
        <article class="choices">
            <section class="choice_protein options">
                <h2>Proteins</h2>
         
            </section>
            <section class="choice_veggie options">
                <h2>Veggies</h2>
        
            </section>
            <section class="choice_carb options">
                <h2>Carbs</h2>
          
            </section>
            <section class="choice_sauce options">
            <h2>Sauces</h2>
      
            </section>
            <section class="choice_seasoning options">
            <h2>Seasonings</h2>
    
            </section>
            <section class="choice_size options">
            <h2>Sizes</h2>

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