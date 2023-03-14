import { getVeggies, setVeggie } from "./dataAccess.js";
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


document.addEventListener("change", (event) => {
    if (event.target.id === "dropdown-veggies") {
        setVeggie(parseInt(event.target.value))
    }
})