// Task1: Changing the color of the title and adding "add to cart" icon

let title = document.querySelector(".caption h1");
let addToCartImg = document.querySelector(".add-to-cart img");

title.style.color = "#DC143C";

addToCartImg.src = "./images/icon-cart.svg";


// Task2: Changing the color of the button on hover

let addTocartBtn = document.querySelector(".add-to-cart");

addTocartBtn.addEventListener("mouseover", ()=>{
    addTocartBtn.style.background = "#DC143C";
});

addTocartBtn.addEventListener("mouseout", ()=>{
    addTocartBtn.style.background = "hsl(158, 36%, 37%)";
});
