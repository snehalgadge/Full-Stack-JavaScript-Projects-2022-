// 28. Write a program to print the given patterns using the loops-
	

// a. Print a triangle pattern, if the given input is 3 then the pattern should be similar to the given output
    // *
    // **
    // ***
 
    let str1='';
    for(let i=0; i<3; i++){
        for(let j=0; j<=i; j++){
            str1+="*";
        }
        str1+="\n";
    }

    console.log(str1);

//  b. Print a square pattern, if the input is 3 then the output should be similar to the given output
//     ***
//     ***
//     ***

console.log("2nd Pattern");
let str2="";
for(let i=0; i<3; i++){
    for(let j=0; j<3; j++){
        str2+="*";
    }
    str2+="\n";
}

console.log(str2);

//  c. Print a pyramid pattern, if the input is 3 then the output should be similar to the given output
//       *
//      ***
//      *****


console.log("3nd Pattern");

let str3="";
for(let i=1; i<=3; i++){
    for(let j=1; j<=3-i; j++){
        str3+=" ";
    }
    for(let k=0; k<2*i-1; k++){
        str3+='*';
    }
    str3+="\n"; ;
}

console.log(str3);