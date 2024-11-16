export default function function2(str) {
    const string = document.querySelector(".strings:first-child")
    string.innerText=str.split("").reverse().join("")
    string.style.color = "black";
} 