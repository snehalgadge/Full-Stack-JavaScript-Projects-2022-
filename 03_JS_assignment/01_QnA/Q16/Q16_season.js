// 16. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
// - September, October or November, the season is Autumn.
// - December, January or February, the season is Winter.
// - March, April or May, the season is Spring
// - June, July or August, the season is Summer

let month = 'september';

if(month == 'september' || month == 'October' || month == 'November'){
    console.log(`In the month of ${month} the season is Autumn`);
}

if(month == 'December' || month == 'January' || month == 'February'){
    console.log(`In the month of ${month} the season is Winter`);
}

if(month == 'March' || month == 'April' || month == 'May'){
    console.log(`In the month of ${month} the season is Spring`);
}

if(month == 'June' || month == 'July' || month == 'August'){
    console.log(`In the month of ${month} the season is Summer`);
}

