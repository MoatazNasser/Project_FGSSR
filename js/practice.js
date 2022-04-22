let one = document.getElementById("one")
let two = document.getElementById("two")
let text_1 = document.getElementById("text_1")
let text_2 = document.getElementById("text_2")

one.onchange = function () {
    console.log("one");
    text_2.style.display = "none";
    text_1.style.display = "block";

}
two.onchange = function () {
    console.log("two");
    text_1.style.display = "none";
    text_2.style.display = "block";
}
