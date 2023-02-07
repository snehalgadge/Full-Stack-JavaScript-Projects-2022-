# Project 4

## Task 1
![](./04_DOM%20Project/Output/DOM%20P1%20SS.png)

<!-- i)Changing the background color -->

## Soltuion
``` 
let clearfix = document.querySelectorAll(".clearfix")
let arr = ["#EC9B3B", "#EE5487", "#F6901A", "#82BB30", "#4FACFF"]

for(let i=0; i<5; i++){
    clearfix[i].style.background = arr[i];
}
```

<!-- ii)Chaingin text color -->
```
let onethird = document.querySelectorAll(".one-third div")
onethird.forEach((element)=>{
    element.style.color = "#fff";
})
```


