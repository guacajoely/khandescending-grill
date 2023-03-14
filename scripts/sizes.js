import { getSizes, setSize } from "./dataAccess.js";
const arrayOfSizes = getSizes()

export const generateSizeList = () => {
    return `<select id="dropdown-sizes">
                <option value="0">Select a size</option>

                ${arrayOfSizes.map(obj => {
                    return `<option value="${obj.id}">${obj.size}</option>`}).join("")
                }
                
            </select>`
}


document.addEventListener("change", (event) => {
    if (event.target.id === "dropdown-sizes") {
        setSize(parseInt(event.target.value))
    }
})