// Student name: Johnny Zhiyang Song
// Student ID: 301167073
// Date: Feb. 5, 2022

const fn = document.querySelector("form input[name='fullName']");
const email = document.querySelector("form input[name='emailAddr']");
const btn = document.querySelector("form button");

btn.addEventListener("click", () => {
    setTimeout(function() {
        backToHome("index.htm", "_self")
    }, 10000);
    console.log(fn.value);
    console.log(email.value);
});
const backToHome = (url, target) => {
    window.open(url, target);
}