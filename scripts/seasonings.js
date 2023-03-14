import { getSeasonings, setSeasoning } from "./dataAccess.js";
const arrayOfSeasonings = getSeasonings()

export const generateSeasoningsList = () => {
    return `<select id="dropdown-seasonings">
        <option value="0">Select a seasoning</option>

        ${arrayOfSeasonings.map(obj => {
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
    if (event.target.id === "dropdown-seasonings") {
        setSeasoning(parseInt(event.target.value))
    }
})