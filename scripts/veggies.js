import { getVeggies } from "./dataAccess.js";
const arrayOfVeggies = getVeggies()

export const generateVeggieList = () => {
    return `<select id="dropdown-veggies">
        <option value="0">Select a veggie</option>

        ${arrayOfVeggies.map(obj => {
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