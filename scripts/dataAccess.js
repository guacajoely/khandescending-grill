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
