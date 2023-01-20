// 21. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.

let countries = ['India','USA','UK','Africa','Australia'];

if(!countries.includes('ETHIOPIA')){
    countries.push('ETHIOPIA');
}

console.log(countries);

