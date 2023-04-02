// 25. Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.
// - The same groups apply to both men and women.
// - Underweight: BMI is less than 18.5
// - Normal weight: BMI is 18.5 to 24.9
// - Overweight: BMI is 25 to 29.9
// - Obese: BMI is 30 or more


let weight = 80;
let height = 149;

let bmiHeight = height*height;
function calculateBmi(w,h){
    let bmi = w/h;

    if(bmi<18.5){
        console.log("You are underweight");
    }
    else if(bmi>=18.5 && bmi<=24.9){
        console.log("Your weight is normal");
    }

    else if(bmi>=25 && bmi<=29.9){
        console.log("You are overweight");
    }
    else if(bmi>=30){
        console.log("Yor are dealing with obesity");
    }
} 

calculateBmi(weight,bmiHeight);