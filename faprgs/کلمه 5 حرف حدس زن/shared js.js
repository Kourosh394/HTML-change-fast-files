let money = Number(localStorage.getItem("money-g"));
let words = Number(localStorage.getItem("words-g"));
function MAW() {
    document.getElementById("money").innerText = `💵: ${money}`;
    document.getElementById("words").innerText = `کلمات: ${words}`;
}