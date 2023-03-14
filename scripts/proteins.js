import { getProteins, setProtein } from "./dataAccess.js";
const arrayOfProteins = getProteins()

export const generateProteinList = () => {
    return `<select id="dropdown-proteins">
        <option value="0">Select a protein</option>

        ${arrayOfProteins.map(obj => {
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
    if (event.target.id === "dropdown-proteins") {
        setProtein(parseInt(event.target.value))
    }
})