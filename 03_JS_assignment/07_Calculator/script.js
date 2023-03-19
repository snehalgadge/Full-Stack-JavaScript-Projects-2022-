let screen = document.querySelector(".screen");
let buttons = document.querySelectorAll(".btn");
let equal = document.querySelector(".btn-equal");
let clear = document.querySelector(".btn-clear");

buttons.forEach(function(a){
    a.addEventListener('click', function(e){
        let value = e.target.dataset.num;
        screen.value += value;                     //printing value on screen
    })
});


equal.addEventListener('click', function(e){
    if(screen.value == ''){
        screen.value = "";
    }else{
        let answer = eval(screen.value);        //evaluating the value                 
        screen.value = answer;                  //storing on screen
    }
   
})

// clearing screen
clear.addEventListener('click',function(e){
    screen.value = "";
})
