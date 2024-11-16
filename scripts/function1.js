export default function function1(str) {
    let string = prompt("Введите строку:")
    const el = document.querySelector(".block-text");
    el.innerText = string;
    el.style.color = "black";
} 