let body = document.querySelector("body");
let button = document.querySelector("button");

let index = 0;

 button.addEventListener('click', function(e){
    let colors = ["red","green", "blue","yellow","orange","purple"];
    body.style.background = colors[index];
    index++;

    if(index > colors.length-1){
        index = 0;
    }
});

