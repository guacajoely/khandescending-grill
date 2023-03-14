import { getOrders, getProteins, getVeggies, getCarbs, getSeasonings, getSauces, getSizes } from "./dataAccess.js";
const arrayOfProteins = getProteins()
const arrayOfVeggies = getVeggies()
const arrayOfCarbs = getCarbs()
const arrayOfSeasonings = getSeasonings()
const arrayOfSauces = getSauces()
const arrayOfSizes = getSizes()


const buildOrderListItem = (order) => {

    // Remember that the function you pass to find() must return true/false

    const matchedProtein = arrayOfProteins.find((obj) => {
        return obj.id === order.proteinID
    })

    const matchedVeggie = arrayOfVeggies.find((obj) => {
        return obj.id === order.veggieID
    })

    const matchedCarb = arrayOfCarbs.find((obj) => {
        return obj.id === order.carbID
    })

    const matchedSauce = arrayOfSauces.find((obj) => {
        return obj.id === order.sauceID
    })

    const MatchedSeasoning = arrayOfSeasonings.find((obj) => {
        return obj.id === order.seasoningID
    })

    const MatchedSize = arrayOfSizes.find((obj) => {
        return obj.id === order.sizeID
    })

    let totalCost = matchedProtein.price + matchedVeggie.price + matchedCarb.price + matchedSauce.price + MatchedSeasoning.price

    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 0
    })
    
    return `<li class="order">
                Order #${order.id} cost ${costString}
            </li>`

}


export const generateOrdersList = () => {

    //WE NEED TO ASSIGN ORDERS WITHIN THE FUNCTION SO IT IS "CURRENT" EACH TIME IT IS CALLED
    const arrayOfOrders = getOrders()

    let html = "<ul>"

    const listItems = arrayOfOrders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}