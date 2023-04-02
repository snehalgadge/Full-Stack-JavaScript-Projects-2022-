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

<!-- Task 2 -->
![](./ass7.2-after.png)

### ii)writing something in the input box and submit the form and this should refresh the page and the languages in the left card should come back.
```
let input = document.querySelector(".main__form-input");
input.disabled = false;

let button = document.querySelector(".main__form-btn");
button.removeAttribute("disabled");

button.addEventListener("click", (e) => {
    e.preventDefault();
    localStorage.setItem("inputValue", input.value);
    location.reload();
});


window.addEventListener("load", () => {

    const storedValue = localStorage.getItem("inputValue");
    input.value = storedValue;
    const mainLanguagesA = document.querySelector('.main__languages');
    const a = document.createElement("a");
    a.target = 'blank';
    a.href = 'https://www.ineuron.ai';
    a.innerText = storedValue;
    mainLanguagesA.append(a);
});

```
