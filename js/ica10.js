const text = "hello!";
const arr = ["Heyy!", "I am text", "arr[2]", "js", "only runs on", "1 thread :("];
const colorArr = ["lightcoral", "lightsalmon", "lightgoldenrodyellow", "lightgreen", "lightskyblue", "plum"];
let cnt = 0;
const h1 = document.querySelector("h1");
const button = document.querySelector("button");
const html = document.querySelector("html");
const h3 = document.querySelector("h3");
const title = document.querySelector("title");
button.addEventListener("click", modify);
function modify() {
    h1.textContent = `Thank you for clicking! Here is a random number ${(Math.random()*10).toFixed(0)}`;
    button.textContent = arr[cnt%6];
    title.textContent = `The button says ${arr[cnt%6]}`;
    html.style.backgroundColor = colorArr[cnt%6];
    cnt++;
    button.style.width += 10;
    h3.textContent = `You've clicked ${cnt} times`;
    console.log("I got here");
}
