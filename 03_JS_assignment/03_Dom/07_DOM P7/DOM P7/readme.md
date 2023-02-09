# Project 7

## Task 1
![Removing languages which has 2.0](./ass7.1-after.png)

### Solution
```
let mainLanguagesA = document.querySelectorAll(".main__languages a");

let arrayLanguage  = Array.from(mainLanguagesA);

arrayLanguage.forEach((e) =>{
    if(e.textContent.includes('2.0')){
        e.style.display = "none";
    }
})
```

