
document.querySelector(".links").onclick = function () {
    document.querySelector("ul").classList.toggle("show")
    document.querySelector(".icon span:first-child").classList.toggle("showed")
    document.querySelector(".icon span:nth-child(2)").classList.toggle("showed")
}