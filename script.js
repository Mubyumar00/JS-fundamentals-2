'use strict';

// const RETIREMENT_AGE = 65;

// function logger() {
//     console.log('my first Logger');
// }

// running, invoking or calling the logger function
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//     // console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
    
// }
// calling the function with arguments
// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// Function Declaration vs Function Expression

// Function Declaration // function calcAge1(birthYear) {
//     return 2025 - birthYear;
// }
// const age1 = calcAge1(1991);
// console.log(age1);

// Function Expression
// const calcAge2 = function (birthYear) {
//     return 2025 - birthYear;
// }
// console.log(age2(1991));

// const age2 = calcAge2(1991);
// console.log(age1, age2);


// ARROW FUNCTION 
// const calculateAge = birthYear => 2025 - birthYear;
// const age3 = calculateAge(1991);
// console.log(age3);

// const getYearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2025 - birthYear;
//     const retirement = RETIREMENT_AGE - age;
//     return `${firstName} retires in ${retirement} years.`;
// };

// console.log(getYearsUntilRetirement(1991, 'John'));
// console.log(getYearsUntilRetirement(1980, 'Jane'));


// Function calling another function
// function cutFruitPieces(fruit) {
//     return fruit * 4;   
    
// }

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);

//     const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
//     return juice;
// }
// console.log(fruitProcessor(2, 3));


// Another example of function calling another function. Making sandwich by slicing bread and cheese.

// function sliceIngredient(ingredient) {
//     return ingredient * 2; // Assuming each ingredient is sliced into 2 pieces
// }

// function makeSandwich(breadSlices, cheeseSlices) {
//     const slicedBread = sliceIngredient(breadSlices);
//     const slicedCheese = sliceIngredient(cheeseSlices);

//     const sandwich = `Sandwich with ${slicedBread} slices of bread and ${slicedCheese} slices of cheese.`;
//     return sandwich;
// }
// console.log(makeSandwich(2, 3)); // Example usage


// Another example of function calling another function.  building a salad by chopping vegetables into smaller pieces.
// function chopVegetable(vegetable) {
//     return vegetable * 3; // Assuming each vegetable is chopped into 3 pieces
// }

// function makeSalad(tomatoes, cucumbers) {
//     const choppedTomatoes = chopVegetable(tomatoes);
//     const choppedCucumbers = chopVegetable(cucumbers);

//     const salad = `Salad with ${choppedTomatoes} pieces of tomatoes and ${choppedCucumbers} pieces of cucumbers.`;
//     return salad;
// }
// console.log(makeSalad(2, 4)); // Example usage


// Example calculating retirement age, calling a function inside another function.
// const calcAge = function (birthYear) {
//     return 2025 - birthYear;
// }

// const yearsUntilRetirement = function (_birthYear, _firstname) {
//     const age = calcAge(_birthYear)
//     const retirement = 65 - age;
//     if (retirement > 0) {
//         console.log(`${_firstname} retires in ${retirement} years.`);
//         return retirement;
//     } else {
//         console.log(`${_firstname} has already retired 🎉.`);
//         return -1; // Indicating retirement has already occurred
//     }
// }
// console.log(yearsUntilRetirement(1991, 'John')); // John retires in 40 years.
// console.log(yearsUntilRetirement(1950, 'Jane')); // Jane has already retired 🎉.


// Calculating Years Until Graduation
// const getCurrentGrades = function (enrollmentYear) {
//     return 2025 - enrollmentYear + 1; // Assuming the current year is 2025 and the student is in their final year
// }

// const yearsUntilGraduation = function (enrollmentYear, studentName) {
//     const currentGrade = getCurrentGrades(enrollmentYear);
//     const totalGrades = 12;
//     const yearsLeft = totalGrades - currentGrade;

//     if (yearsLeft > 0) {
//         console.log(`${studentName} has ${yearsLeft} years left until graduation.`);
//         return yearsLeft;
//     } else {
//         console.log(`${studentName} has already graduated 🎓.`);
//         return 0; // Indicating graduation has already occurred
//     }
// }
// console.log(yearsUntilGraduation(2015, 'Alice')); // Alice has 8 years left until graduation.
// console.log(yearsUntilGraduation(2010, 'Bob')); // Bob has already graduated 🎓.


// Exercise
// Function to calculate average score
// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// Calculate average for Team A and Team B
// const avgDolphins = calcAverage(44, 23, 71);
// const avgKoalas = calcAverage(65, 54, 49);

// console.log(`Average score of Dolphins: ${avgDolphins}`);
// console.log(`Average score of Koalas: ${avgKoalas}`);

// Function to check the winner
// const checkWinner = (avgDolphins, avgKoalas) => {
//     if (avgDolphins > avgKoalas) {
//         console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
//     } else if (avgKoalas > avgDolphins) {
//         console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
//     } else {
//         console.log(`It's a draw (${avgDolphins} vs ${avgKoalas})`);
//     }
// };

// checkWinner(avgDolphins, avgKoalas);


// Comparing Homework Focus between Two Students// Function to calculate average homework focus time
// const calcAverageTime = (time1, time2, time3) => (time1 + time2 + time3) / 3;

// // Calculate average time for Student A and Student B
// const avgStudentA = calcAverageTime(2, 3, 4);
// const avgStudentB = calcAverageTime(3, 2, 5);

// console.log(`Average homework focus time of Student A: ${avgStudentA} hours`);
// console.log(`Average homework focus time of Student B: ${avgStudentB} hours`);

// Function to check who focused more on homework
// const checkFocusWinner = (avgStudentA, avgStudentB) => {
//     if (avgStudentA > avgStudentB) {
//         console.log(`Student A focused more on homework (${avgStudentA} hours vs ${avgStudentB} hours)`);
//     } else if (avgStudentB > avgStudentA) {
//         console.log(`Student B focused more on homework (${avgStudentB} hours vs ${avgStudentA} hours)`);
//     } else {
//         console.log(`Both students focused equally on homework (${avgStudentA} hours)`);
//     }
// }
// checkFocusWinner(avgStudentA, avgStudentB);


// Comparing Average Salary of Two Employees 
// const calcAverageSalary = (salary1, salary2, salary3) => (salary1 + salary2 + salary3) / 3;

// Calculate average salaries for two employees
// const avgSalaryA = calcAverageSalary(500, 550, 600);
// const avgSalaryB = calcAverageSalary(700, 680, 710);

// console.log(`average salary of Employee A: $${avgSalaryA}`);
// console.log(`average salary of Employee B: $${avgSalaryB}`);

// // Function to check who has a higher average salary
// const checkSalaryWinner = (avgSalaryA, avgSalaryB) => {
//     if (avgSalaryA > avgSalaryB) {
//         console.log(`Employee A has a higher average salary ($${avgSalaryA} vs $${avgSalaryB})`);
//     } else {
//         console.log(`Employee B has a higher average salary ($${avgSalaryB} vs $${avgSalaryA})`);
//     }
// }
// checkSalaryWinner(avgSalaryA, avgSalaryB);


// Comparing Average Speed of Two Cars
// const calcAverageSpeed = (speed1, speed2, speed3) => (speed1 + speed2 + speed3) / 3;

// // Calculate average speeds for two cars
// const avgSpeedCarA = calcAverageSpeed(60, 70, 80);
// const avgSpeedCarB = calcAverageSpeed(75, 85, 90);

// console.log(`Average speed of Car A: ${avgSpeedCarA} km/h`);
// console.log(`Average speed of Car B: ${avgSpeedCarB} km/h`);

// // Function to check which car is faster
// const checkSpeedWinner = (avgSpeedCarA, avgSpeedCarB) => {
//     if (avgSpeedCarA > avgSpeedCarB) {
//         console.log(`Car A is faster (${avgSpeedCarA} km/h vs ${avgSpeedCarB} km/h)`);
//     } else {
//         console.log(`Car B is faster (${avgSpeedCarB} km/h vs ${avgSpeedCarA} km/h)`);
//     }
// }
// checkSpeedWinner(avgSpeedCarA, avgSpeedCarB);


// INTRODUCTION TO ARRAYS
const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';
console.log(friend1, friend2, friend3);

 const friends = ['Michael', 'Steven', 'Peter'];
 console.log(friends);
 console.log(friends.length); // Length of the array
 console.log(friends[2]); // Accessing the third element
 console.log(friends[0]); // Accessing the first element
