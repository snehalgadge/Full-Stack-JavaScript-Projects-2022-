// i)Remove the languages that have 2.0 in their name
let mainLanguagesA = document.querySelectorAll(".main__languages a");

let arrayLanguage  = Array.from(mainLanguagesA);

arrayLanguage.forEach((e) =>{
    if(e.textContent.includes('2.0')){
        e.style.display = "none";
    }
})

// ii)writing something in the input box and submit the form and
// This should refresh the page and the languages in the left card should come back.

let input = document.querySelector(".main__form-input");
input.disabled = false;


