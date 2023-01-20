// 27. Write a program to print all the prime number between 0 to 100 (0 and 100 included).


let primeArray=[];
function primecheck(number){
    let i;
    for(i=2;i<number;i++){
        if(x%i==0){
            return false;
        }
    }
    if(i==number){
        return true;
    }
}
for(let i=0;i<=100;i++){
    if(primecheck(i)==true){
        primeArray.push(i);
    }else{
        continue;
    }
}
console.log(primeArray);