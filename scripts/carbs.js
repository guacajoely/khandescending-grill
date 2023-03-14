import { getCarbs, setCarb } from "./dataAccess.js";
const arrayOfCarbs = getCarbs()

export const generateCarbList = () => {
    return `<select id="dropdown-carbs">
        <option value="0">Select a carb</option>

        ${arrayOfCarbs.map(obj => {
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
    if (event.target.id === "dropdown-carbs") {
        setCarb(parseInt(event.target.value))
    }
})