
const number = 13;
let i;

for(i=2; i<number; i++){

    if(number%i==0){
        console.log(`${number} is not a prime number`);
        break;
    }
}

if(i==number)
console.log(`${number} is a prime number`);