// Task 1
let new1 = document.querySelector(".new");

new1.style.border = "3px solid red";
new1.style.padding ="30px";
new1.style.overflow = "auto";
console.log(new1);


// Task2: Navbar toggler-----*/

let navBarToggler = document.querySelector(".navbar-toggler");

let navBarCollapse = document.querySelector(".navbar-collapse");

navBarToggler.addEventListener("click", ()=>{
    navBarCollapse.classList.toggle("show");
})