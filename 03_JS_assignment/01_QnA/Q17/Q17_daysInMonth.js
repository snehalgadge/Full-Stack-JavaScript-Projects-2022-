// 17. Write a program which tells the number of days in a month.


// Using if/else
let month = 'January';

if(month=='January' || month=='March' ||  month=='May' || month=='July' || month=='August'){
    console.log(`Number of days in ${month} is 31`);
}else if(month=='February'){
    console.log(`Number of days in ${month} is 28`);
}else{
    console.log(`Number of days in ${month} is 30`);
}



// Using Function

function daysInMonth(month){
    const days = new Date(0,month,0).getDate();

    return days;
}

console.log(`The number of days is ${daysInMonth(4)}`);