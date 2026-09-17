let money = Number(localStorage.getItem("money-g"));
let words = Number(localStorage.getItem("words-g"));
function MAW() {
    document.getElementById("money").innerText = `💵: ${money}`;
    document.getElementById("words").innerText = `کلمات: ${words}`;
}
function shake(id) {
    setTimeout(function () {
        document.getElementById(id).classList.add("shake");
    }, 500)
    document.getElementById(id).classList.remove("shake");
}
function SFTTXS(id) {
    setTimeout(function () {
        document.getElementById(id).classList.add("SFTTXS");
    }, 500)
    document.getElementById(id).classList.remove("SFTTXS");
}
function SH1(id) {
    setTimeout(function () {
        document.getElementById(id).classList.add("SH1");
    }, 500)
    document.getElementById(id).classList.remove("SH1");
}