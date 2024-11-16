import function1 from "./function1.js"
import function2 from "./function2.js"
function1()
const str = document.querySelector(".block-text").innerText;
document.querySelector(".buttons:first-child").addEventListener("click", function2(str))