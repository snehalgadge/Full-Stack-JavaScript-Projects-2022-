# Second Assignment
## About

### Task 1
![](./task1Output.png)

### i)Chaing background color of all h3
### Solution
```
Array.from(accordian).forEach((element) => {
    element.style.background = "#DADAF8";
});
```

### Task 2
![](./task2Output.png)

### i)Adding new element -> Skills
### Solution
```
let wrp = document.querySelector(".accordian-wrapper");
let acc = document.createElement("div");
acc.classList.add("accordian");
wrp.appendChild(acc);
```