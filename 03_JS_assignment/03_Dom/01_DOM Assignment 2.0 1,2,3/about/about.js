
let accordian = document.querySelectorAll(".accordian h3");
accordian.forEach((element) => {
  element.addEventListener("click", () => {
    let para = element.nextElementSibling;
    if (para.style.display === "block") {
      para.style.display = "none";
    } else {
      para.style.display = "block";
    }
  });
});

// <-------------- Task 1 --------------->

// i)changing background color
Array.from(accordian).forEach((element) => {
    element.style.background = "#DADAF8";
});


// <--------------- Task 2 ---------------->
// i)Adding new element -> Skills
let wrp = document.querySelector(".accordian-wrapper");
let acc = document.createElement("div");
acc.classList.add("accordian");
wrp.appendChild(acc);

let h3 = document.createElement("h3");
h3.innerText = "Skills";
acc.appendChild(h3);

let p = document.createElement("p");
p.innerText = "I posses a very good command over the Full Stack Development technologies like MERN which can be seen in my work over the Github"
acc.appendChild(p);

const accHeading = document.querySelectorAll(".accordian h3");
accHeading.forEach((val) => (val.style.backgroundColor = "#DADAF8"));

accHeading.forEach((element) => {
  element.addEventListener("click", () => {
    let para = element.nextElementSibling;
    if (para.style.display === "block") {
      para.style.display = "none";
    } else {
      para.style.display = "block";
    }
  });
});



