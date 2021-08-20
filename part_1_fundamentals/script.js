// let js = 'amazing';
// console.log(40+28);

// country = 'Canada';
// continent = 'North America';
// population = 32000000;

// console.log(country,continent,population);

const markMass = 70;
const johnMass = 80;
const markHeight = 1.8;
const johnHeight = 2.0;

const bmi_mark = markMass / (markHeight ** 2);
const bmi_john = johnMass / (johnHeight ** 2);

if(bmi_mark > bmi_john){
    console.log(`Mark's BMI is higher than John's`);
    console.log(`Mark's BMI ${ bmi_mark } is higher than John's ${ bmi_john }`);
} else {
    console.log(`John's BMI is higher than Mark's`);
    console.log(`John's ${ bmi_john } BMI is higher than Mark's ${ bmi_mark }`);
}