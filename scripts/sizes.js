import { getSizes } from "./dataAccess.js";
const arrayOfSizes = getSizes()

export const generateSizeList = () => {
    return `<select id="dropdown-sizes">
                <option value="0">Select a size</option>

                ${arrayOfSizes.map(obj => {
                    return `<option value="${obj.id}">${obj.size}</option>`}).join("")
                }
                
            </select>`
}