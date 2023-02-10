# First Assignment
## Home

## Task 1
![](./task1Output.png)

### i)Changing the 3rd list item from contact to Projects
### Solution
```
const nav = document.getElementsByTagName('nav');
const list = document.getElementsByTagName('ul')[0];
let a = list.lastElementChild;
a.innerText = 'Projects';
```
### ii)adding new list item
```
const li = document.createElement('li');
li.innerText = "Hire Me";
list.appendChild(li);
nav.appendChild(list);
```


## Task 2
![](./task2Output.png)

### i)Changing the Search button placeholder
### Solution
```
let search_field = document.querySelector(".search-field");
let input_box = search_field.querySelector("input");
input_box.placeholder = "Search My Project";
```

## Task 3
![](./task3Output.png)

### i)Changing the paragraph text oh hero-left-section
### Solution
```
let heroleft = document.querySelector(".hero-left-section");
let heroDescription = heroleft.querySelector("p");
heroDescription.children[2].innerText = "an Employee";
heroDescription.children[4].innerText = "iNeuron Intelligence Pvt. Ltd.";
```

## Task 4
![](./task4Output.png)

### i) Adding Image
### Soltuion
```
let heroRight = document.querySelector(".hero-right-section");
let image = heroRight.querySelector("img");
image.src = "./snehalimg.jpg";
```

## TASK 5
![](./task5Output.png)

### i) Adding a Support Me button
### Solution
```
let herobtn = document.querySelector(".hero-right-section-btns");
let supportMebtn = document.createElement('button');
supportMebtn.innerText = "Support Me";
herobtn.appendChild(supportMebtn);
```