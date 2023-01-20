// 10. Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()

// - 4 > 3
console.log("4>3 =>",4>3);   //true  

// - 4 >= 3
console.log("4>=3 =>", 4 >= 3);  //true

// - 4 < 3
console.log("4<3 =>", 4 < 3);   //false

// - 4 <= 3
console.log("4<=3 =>", 4 <= 3);   //false

// - 4 == 4
console.log("4==4 =>", 4 == 4);   //true

// - 4 === 4
console.log("4===4 =>", 4 === 4);  //true

// - 4 != 4
console.log("4 != 4 =>", 4!=4);    //false

// - 4 !== 4
console.log("4 !== 4 =>", 4!==4);   //false

// - 4 != '4'
console.log("4 != '4' =>", 4!='4');   //false

// - 4 == '4'
console.log("4 == '4' =>", 4=='4');    //true

// - 4 === '4'
console.log("4 === '4' =>", 4==='4');    //false

// - Find the length of python and jargon and make a falsy comparison statement.
console.log("length of Python is =>",'python'.length);
console.log("length of jagron is =>", 'jagron'.length);

if('python' == 'jagron'){
    console.log("truthy comparison");
}else{
    console.log("falsy comparison");
}