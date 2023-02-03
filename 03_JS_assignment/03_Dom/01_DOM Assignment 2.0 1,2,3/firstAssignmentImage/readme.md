# First Assignment

## Task 1
![](./task1Output.png)

### Solution
<!-- i)Changing the 3rd list item from contact to Projects -->
const nav = document.getElementsByTagName('nav');
const list = document.getElementsByTagName('ul')[0];
let a = list.lastElementChild;
a.innerText = 'Projects';

<!-- ii)adding new list item -->
const li = document.createElement('li');
li.innerText = "Hire Me";
list.appendChild(li);
nav.appendChild(list);


## Task 2
![](./task2Output.png)

### Solution
<!-- i)Changing the Search button placeholder -->
let search_field = document.querySelector(".search-field");
let input_box = search_field.querySelector("input");
input_box.placeholder = "Search My Project";


## Task 3
![](./task3Output.png)

### Solution
<!-- i)Changing the paragraph text oh hero-left-section -->
let heroleft = document.querySelector(".hero-left-section");
let heroDescription = heroleft.querySelector("p");
heroDescription.children[2].innerText = "an Employee";
heroDescription.children[4].innerText = "iNeuron Intelligence Pvt. Ltd.";


## Task 4
![](./task4Output.png)

### Soltuion
<!-- i) Adding Image -->
let heroRight = document.querySelector(".hero-right-section");
let image = heroRight.querySelector("img");
image.src = "./snehalimg.jpg";


## TASK 5
![](./task5Output.png)

### Solution
<!-- i) Adding a Support Me button -->
let herobtn = document.querySelector(".hero-right-section-btns");
let supportMebtn = document.createElement('button');
supportMebtn.innerText = "Support Me";
herobtn.appendChild(supportMebtn);