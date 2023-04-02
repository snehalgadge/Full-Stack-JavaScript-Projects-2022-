// i) adding Pro Subscription button
let center = document.querySelector(".nav-center");
let button = document.createElement("button");
button.classList.add("btn1");
button.innerText = "Pro Subscription";
center.appendChild(button);


// ii)Adding a new card of recipe
let gallery = document.querySelector(".recipe-gallery");

// creating div
let carddiv = document.createElement("div");
carddiv.className = "card";
gallery.appendChild(carddiv);

// creating a tag
let arecipe = document.createElement("a");
arecipe.href = "#";
arecipe.className = "recipe-text";
carddiv.appendChild(arecipe);

// creating img tag
let image = document.createElement("img");
image.className = "recipe-img";
image.src ="./img/recipe-1.jpeg";
arecipe.appendChild(image);

// creating h5 tag
let h5 = document.createElement("h5");
h5.className = "recipe-name";
h5.innerText = "Dum Aloo";
arecipe.appendChild(h5);

// creating paragraph
let para = document.createElement("p");
para.className = "recipe-disp";
para.innerText = "Prep : 25min | Cook : 15min";
arecipe.appendChild(para);


// iii)Adding one more item in recipe section
let tagContainer = document.querySelector(".tags-container div");
let atag = document.createElement("a");
atag.href = "#";
atag.innerText = "Chinese(7)";

tagContainer.appendChild(atag);
