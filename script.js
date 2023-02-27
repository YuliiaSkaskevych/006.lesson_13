//task 1
let numbers = [];
for (let i = 10; i<=20; i++){
    numbers.push(i);
}
alert(`Numbers from 10 to 20: ${numbers}`);

//task 2
let squareNumbers = [];
for (let i = 10; i<=20; i++){
    squareNumbers.push(i**2);
}
alert(`Square numbers from 10 to 20: ${squareNumbers}`);

//task 3
console.log('Multiplication table to 7:');
for (let i=1; i<=10; i++){
    console.log(`${i}*7=${i*7}`);
}

//task 4
let task4Numbers = [];
for (let i=1; i<=15; i++){
    task4Numbers.push(i);
}
const sumPositiveNumbers  = task4Numbers.reduce((accumulator, currentValue)=>accumulator+currentValue,0);
alert(`Sum of numbers [1,15]=${sumPositiveNumbers}`);

//task 5
let task5Numbers = [];
for (let i=15; i<=35; i++){
    task5Numbers.push(i);
}
const multPositiveNumbers  = task4Numbers.reduce((accumulator, currentValue)=>accumulator*currentValue,1);
alert(`Multiplication of numbers [15,35]=${multPositiveNumbers}`);

//task 6
let task6Numbers = [];
for (let i=1; i<=500;i++){
    task6Numbers.push(i);
}
const avg6Numbers=task6Numbers.reduce((accumulator, currentValue)=>accumulator+currentValue,0)/task6Numbers.length;
alert(`Average of numbers [1;500]=${avg6Numbers}`);

//task 7
let task7Numbers = [];
for (let i=30; i<=50;i+=2){
    task7Numbers.push(i);
}
const sumEvenPositiveNumbers = task7Numbers.reduce((accumulator, currentValue)=>accumulator+currentValue,0);
alert(`Sum of even positive numbers [30;50]=${sumEvenPositiveNumbers}`);

//task 8
let task8Numbers = [];
for (let i=100; i<=200; i++){
    task8Numbers.push(i);
}
let task8NumbersChanged = task8Numbers.filter(number=>number%3===0);
alert(`Numbers [100;200] multiplies 3: ${task8NumbersChanged}`);

//task 9
let task9Number = parseInt(prompt('Please enter natural number:', '5'));
while (task9Number<=0){
    alert('You entered wrong number!');
    task9Number = parseInt(prompt('Please enter natural number:', '5'));
}
let task9Numbers = [];
for (let i=1; i<=task9Number;i++){
    task9Numbers.push(i);
}
let task9NumbersDividers = task9Numbers.filter(number=>task9Number%number===0);
alert(`Dividers of number ${task9Number}: ${task9NumbersDividers}`);

//task 10
let task10NumbersEvenDividers = task9NumbersDividers.filter(number=>number%2===0);
let task10CountNumbers = task10NumbersEvenDividers.length;
alert(`Count even dividers of number ${task9Number}: ${task10CountNumbers}`);

//task 11
let task11SumNumbers = task10NumbersEvenDividers.reduce((accumulator, currentValue)=>accumulator+currentValue,0);
alert(`Sum even dividers of number ${task9Number}: ${task11SumNumbers}`);

//task 12
console.log('Multiplication table from 1 to 10:');
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <=10; j++){
        console.log(`${i} * ${j} = ${i*j}`);
    }
        }
