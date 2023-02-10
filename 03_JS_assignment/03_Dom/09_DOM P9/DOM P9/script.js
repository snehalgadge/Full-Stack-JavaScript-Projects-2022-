// Task1: Changing the color of the title and adding "add to cart" icon

let title = document.querySelector(".caption h1");
let addToCartImg = document.querySelector(".add-to-cart img");

title.style.color = "#DC143C";

addToCartImg.src = "./images/icon-cart.svg";


// Task2: Changing the color of the button on hover

let addTocartButton = document.querySelector(".add-to-cart");

addTocartButton.addEventListener("mouseover", ()=>{
    addTocartButton.style.background = "#DC143C";
});

addTocartButton.addEventListener("mouseout", ()=>{
    addTocartButton.style.background = "hsl(158, 36%, 37%)";
});
