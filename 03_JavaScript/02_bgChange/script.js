
let button = document.querySelector("button");

 button.addEventListener('click', function(e){

    let hex_num = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];
    let hexcode = '';

    for(let i=0; i<6; i++){ 

        let random_index = Math.floor(Math.random()*hex_num.length);
        hexcode += hex_num[random_index];
         
    }
    
    let body = document.querySelector("body");
    body.style.background = "#" + hexcode;

    let span = document.querySelector("span");
    span.innerText = hexcode;

});

