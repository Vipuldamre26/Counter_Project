let minus = document.querySelector(".minus");
let plus = document.querySelector(".plus");
let count = document.querySelector("#count")
let reset = document.querySelector(".reset");
let section = document.querySelector("section");

let colors = ["red", "green", "blue", "cyan", "orange", "white", "yellow"];

document.addEventListener("click", (e) => {

    if(e.target == minus){
        let ranIndex = Math.floor(Math.random() * colors.length);
        section.style.backgroundColor = colors[ranIndex];
        const countt = document.getElementById('count');
        let cnt = Number(countt.innerText);
        cnt = cnt - 1;
        count.innerHTML = cnt;

    }
    else if(e.target == plus){
        let ranIndex = Math.floor(Math.random() * colors.length);
        section.style.backgroundColor = colors[ranIndex];
        const countt = document.getElementById('count');
        count.innerHTML = Number(countt.innerHTML) + 1;
    }
});

reset.addEventListener("click", () => {
    section.style.backgroundColor = "rgb(108, 255, 255)";
    count.innerHTML = "0";
})