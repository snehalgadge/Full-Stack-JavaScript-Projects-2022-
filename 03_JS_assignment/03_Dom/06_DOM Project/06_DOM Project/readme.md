### i)Changing logo
```
let headerImg = document.querySelector("header img");
headerImg.src = "./assets/ineuron-logo.png";
```

### ii)Changing the price. and adding linkedin icon
```
let price = document.querySelector(".app span");
price.innerText = "$10";
```

### iii) Changing the color of text in footer
```
let footerText = document.querySelector(".footer_text");
let strong = document.querySelector(".footer_problems strong");
 
footerText.style.color = "#5A5A5A";
strong.style.color = "#000";
```

### iv) Adding linkedin logo in footer
````
let footerSocial = document.querySelector(".footer_social"); 
let div = document.createElement("div");
div.className = "footer_social_ico";

let i = document.createElement("i");
i.classList = "fa-brands fa-linkedin";

div.append(i);
footerSocial.append(div);
```