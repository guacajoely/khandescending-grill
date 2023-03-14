import { database } from "./database.js";

export const getProteins = () => {
    return database.proteins.map(obj => ({...obj}))
}

export const getVeggies = () => {
    return database.veggies.map(obj => ({...obj}))
}

export const getCarbs = () => {
    return database.carbs.map(obj => ({...obj}))
}

export const getSauces = () => {
    return database.sauces.map(obj => ({...obj}))
}

export const getSeasonings = () => {
    return database.seasonings.map(obj => ({...obj}))
}

export const getSizes = () => {
    return database.sizes.map(obj => ({...obj}))
}

export const getOrders = () => {
    return database.orders.map(obj => ({...obj}))
}


//Now you need to export functions whose responsibility is to SET state.

export const setProtein = (id) => {
    database.orderBuilder.proteinID = id
    console.log(database.orderBuilder)
}

export const setVeggie = (id) => {
    database.orderBuilder.veggieID = id
    console.log(database.orderBuilder)
}

export const setCarb = (id) => {
    database.orderBuilder.carbID = id
    console.log(database.orderBuilder)
}

export const setSeasoning = (id) => {
    database.orderBuilder.seasoningID = id
    console.log(database.orderBuilder)
}

export const setSauce = (id) => {
    database.orderBuilder.sauceID = id
    console.log(database.orderBuilder)
}

export const setSize = (id) => {
    database.orderBuilder.sizeID = id
    console.log(database.orderBuilder)
}


//function that takes temporary choices being stored in the orderBuilder state object and make them permanent.
export const addCustomOrder = () => {
    // Copy the current state of user choices
    const newOrder = {...database.orderBuilder}

    // Add a new primary key to the object
    const lastIndex = database.orders.length - 1
    newOrder.id = database.orders[lastIndex].id + 1

    // Add a timestamp to the order
    newOrder.timestamp = Date.now()

    // Add the new order object to custom orders state
    database.orders.push(newOrder)

    // Reset the temporary state for user choices
    database.orderBuilder = {}

    // Broadcast a notification that permanent state has changed
    document.dispatchEvent(new CustomEvent("stateChanged"))
}