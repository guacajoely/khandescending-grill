import { getSauces } from "./dataAccess.js";
const arrayOfSauces = getSauces()

export const generateSauceList = () => {
    return `<select id="dropdown-sauces">
        <option value="0">Select a sauce</option>

        ${arrayOfSauces.map(obj => {
            const price = obj.price.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
                maximumFractionDigits: 0
            })
            return `<option value="${obj.id}">${obj.name} (${price})</option>`
            }).join("")
        }
        
            </select>`
}