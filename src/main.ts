import { SayingGenerator } from "./generator/generator.js";
import { safeGetElementById, safeQuerySelector } from "./utils/safequeries.js";

const generator = new SayingGenerator();

const sayingContainer = safeGetElementById("saying-container");
const generateButton = safeGetElementById("generate-button");

generateButton.addEventListener("click",
    () => {
        const saying = generator.generate();
        sayingContainer.textContent = saying; 
    }
);