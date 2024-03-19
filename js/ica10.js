const arr = ["Heyy!", "I am text", "arr[2]", "js", "only runs on", "1 thread :("];
const colorArr = ["lightcoral", "lightsalmon", "lightgoldenrodyellow", "lightgreen", "lightskyblue", "plum"];
let cnt = 0, cnt2 = 0;
const h1 = document.querySelector("h1");
const buttonTexter = document.querySelector("#texter");
const buttonStyler = document.querySelector("#styler");
const html = document.querySelector("html");
const h3 = document.querySelector("h3");
const title = document.querySelector("title");
buttonTexter.addEventListener("click", modify1);
buttonStyler.addEventListener("click", modify2);
function modify1() {
    h1.textContent = `Thank you for clicking! Here is a random number ${(Math.random()*10).toFixed(0)}`;
    buttonTexter.textContent = arr[cnt%6];
    title.textContent = `The button says ${arr[cnt%6]}`;
    cnt++;
    h3.textContent = `You've clicked text button ${cnt} times`;
}
function modify2() {
    html.style.backgroundColor = colorArr[cnt2%6];
    cnt2++;
}
