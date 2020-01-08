/*

// Variables and data types

var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job);

// Variables can not start with a number or a symbol, except for the dollar sign or underscore. You can also not use reserved JS words as variable names e.g. :

// var _3years = 3; will work
// var johnMark = 'John and Mark'; will work
// var if = 23; won't work


// Variable mutation and type coercion
 
 var firstName = 'John';
 var age = 28;

 console.log(firstName + ' ' + age); // JS converts age to a string automatically so it can join it together with the string that is contained within firstName thanks to type coercion

 // Type coercion
 var job, isMarried;
 job = 'teacher';
 isMarried = false;

 console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

// Variable mutation

age = 'twenty eight';
job = 'driver';

alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

var lastName = prompt('What is his last name?');
console.log(firstName + ' ' + lastName);


// Basic operators


var now, ageJohn, ageMark, yearJohn, yearMark;
now = 2019
ageJohn = 28;
ageMark = 33;

// Math operators

yearJohn = now - ageJohn;
yearMark = now - ageMark

console.log(yearJohn);

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);

// Logical Operators

var johnOlder = ageJohn < ageMark;
console.log(johnOlder);

// typeof Operator

console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is older than John');
var x;
console.log(typeof x);



// Operator precedence
 

var now = 2019;
var yearJohn = 1989
var fullAge = 18;

// Multiple operators

var isFullAge = now - yearJohn >= fullAge; // true
console.log(isFullAge);

// Grouping

var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2
console.log(average);

// Multiple assignments

var x, y;

x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26

console.log(x, y);

// More operators

x *= 2;
console.log(x);
x += 10;
console.log(x);

x++;
console.log(x);
x--;
console.log(X);

// CODING CHALLENGE 1

Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true").


var massMark, massJohn, heightMark, heightJohn, bodyMassIndexMark, bodyMassIndexJohn, isBodyMassIndexMarkHigher;

massMark = 75; // kg
massJohn = 89;
heightMark = 1.7; // meters
heightJohn = 1.9;
bodyMassIndexMark = massMark / (heightMark * heightMark); // BMI calculator
bodyMassIndexJohn = massJohn / (heightJohn * heightJohn);
isBodyMassIndexMarkHigher = bodyMassIndexMark > bodyMassIndexJohn; // boolean variable for comparison of BMIs
console.log('Is Mark\'s BMI higher than John\'s? ' + isBodyMassIndexMarkHigher);



// If / else statements

var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married') {
    console.log(firstName + ' is married.');
} else {
    console.log(firstName + ' is not married.');
}

var isMarried = 'true'
if (isMarried) {
    console.log(firstName + ' is married.');
} else {
    console.log(firstName + ' is not married.');
}

var massMark, massJohn, heightMark, heightJohn, bodyMassIndexMark, bodyMassIndexJohn;

massMark = 75; // kg
massJohn = 89;

heightMark = 1.7; // meters
heightJohn = 1.9;

bodyMassIndexMark = massMark / (heightMark * heightMark); // BMI calculator
bodyMassIndexJohn = massJohn / (heightJohn * heightJohn);

// The following block of code doesn't account for when the BMIs of Mark and John are the same. This is a simple if else statement.
if (bodyMassIndexMark > bodyMassIndexJohn) {
    console.log('Mark\'s BMI is higher than John\'s.');
} else {
    console.log('Mark\'s BMI is lower than John\'s');
}

// The following block of code accounts for when the BMIs of Mark and John are the same same thing, we are incorporating else if here, rather than just an if else statement.
if (bodyMassIndexMark > bodyMassIndexJohn) {
    console.log('Mark\'s BMI is higher than John\'s.')
} else if (bodyMassIndexMark < bodyMassIndexJohn) {
    console.log('Mark\'s BMI is lower than John\'s');
} else {
    console.log('Mark\'s BMI is the same as John\'s');
}



// Boolean logic

var firstName = 'John';
var age = 30;

if (age < 13) {
    console.log(firstName + ' is a boy.');
} else if (age >= 13 && age < 20) {
    console.log(firstName + ' is a teenager.');
} else if (age >= 20 && age <30) {
        console.log(firstName + ' is a young man.');
} else {
    console.log(firstName + ' is a man.');
}



// The Ternary Operator and Switch Statements

var firstName = 'John';
var age = 18;

age >= 18 ? console.log(firstName + ' can drink alcohol.') : console.log(firstName + ' can\'t drink alcohol.')

var drink = age >= 18 ? 'beer' : 'juice'
console.log(drink);

// If we used an if else statement for the above example:
// if (age >= 18) {
//     var drink = 'beer';
// } else {
//     var drink = 'juice';
// }

// Switch statement
var job = 'driver';
switch (job) {
    case 'teacher':
    case 'instructor':
        console.log(firstName + ' teaches kids how to code.');
        break;
    case 'driver':
        console.log(firstName + ' drives an Uber in Lisbon');
        break;
    case 'designer':
        console.log(firstName + ' designs beautiful websites');
        break;
    default:
        console.log(firstName + ' does something else.');
}

switch (true) {
    case age < 13:
        console.log(firstName + ' is a boy.');
        break;
    case age >= 13 && age < 20:
        console.log(firstName + ' is a teenager.');
        break;
    case age >= 20 && age <30:
        console.log(firstName + ' is a young man.');
        break;
    default:
        console.log(firstName + ' is a man.');
}


// Truthy and Falsy values and equality operators

// Falsy values: undefined, null, 0, '', NaN
// Truthy values: Anything that is not a falsy value

var height;

height = 23;

if (height || height === 0) {
    console.log('Varible is defined');
} else {
    console.log('Varible has NOT been defined');
}

// Equality operators

if (height == '23') {
    console.log('The == operator does type coercion!.')
}

// CODING CHALLENGE 2

John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)

4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.



var teamJohnAverageScore, teamMikeAverageScore, teamMaryAverageScore, highestAverageScore;

teamJohnAverageScore = ((89 + 120 + 103) / 3);
teamMikeAverageScore = ((116 + 94 + 123) / 3);
teamMaryAverageScore = ((97 + 134 + 105) / 3);
highestAverageScore = Math.max(teamJohnAverageScore, teamMikeAverageScore, teamMaryAverageScore);

if (highestAverageScore === teamJohnAverageScore) {
    console.log('John\'s team won! Their average score was ' + teamJohnAverageScore + '.');
} else if (highestAverageScore === teamMikeAverageScore) {
    console.log('Mike\'s team won! Their average score was ' + teamMikeAverageScore + '.');
} else if (highestAverageScore === teamMaryAverageScore) {
    console.log('Mary\'s team won! Their average score was ' + teamMaryAverageScore + '.');
} else if (highestAverageScore === teamJohnAverageScore && highestAverageScore === teamMikeAverageScore) {
    console.log('It was a draw! John\'s and Mike\'s team won with a highest average score of ' + teamJohnAverageScore + '.');
} else if (highestAverageScore === teamJohnAverageScore && highestAverageScore === teamMaryAverageScore) {
    console.log('It was a draw! John\'s and Mary\'s team won with a highest average score of ' + teamJohnAverageScore + '.');
} else if (highestAverageScore === teamMikeAverageScore && highestAverageScore === teamMaryAverageScore) {
    console.log('It was a draw! Mike\'s and Mary\'s team won with a highest average score of ' + teamMikeAverageScore + '.');
} else if (highestAverageScore === teamJohnAverageScore && highestAverageScore === teamMaryAverageScore) {
    console.log('It was a draw! John\'s and Mary\'s team won with a highest average score of ' + teamJohnAverageScore + '.');
} else {
    console.log('It was a draw! All teams won with a highest average score of ' + teamJohnAverageScore);
};

// Functions

function calculateAge(birthYear) {
    return 2020 - birthYear;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);
console.log(ageJohn, ageMike, ageJane);

function yearsUntilRetirement(year, firstName) {
    var age = calculateAge(year);
    var retirement = 65 - age;
    if (retirement > 0) {
        console.log(firstName + ' retires in ' + retirement + ' years.');
    } else {
        console.log(firstName + ' has been retired for ' + retirement + ' years.');
    }
}

yearsUntilRetirement(2000, 'Toby');
yearsUntilRetirement(1921, 'Jack');
yearsUntilRetirement(1949, 'Mike');



// Function declaration
// function whatDoYouDo(job, firstName) {

// }

// Function expression

var whatDoYouDo = function(job, firstName) {
    switch(job) {
        case 'teacher':
            return firstName + ' teaches kids how to code.';
        case 'driver':
            return firstName + ' drives an Uber.';
        case 'designer':
            return firstName + ' designs websites.';
        default:
            return firstName + ' does something else.';
    }

}

console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('retired', 'Mark'));
console.log(whatDoYouDo('driver', 'Tyson'));



// Arrays

// Initialise a new Array
var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);

console.log(names[0]);
console.log(names)
console.log(names.length);

// Mutate array data
names[1] = 'Ben';
names[names.length] = 'Mary';
console.log(names);

// Different data types
var john = ['John', 'Smith', 1990, 'teacher', false];

john.push('blue');
john.unshift('Mr.');
john.pop();
john.pop();
john.shift();
console.log(john);

console.log(john.indexOf(23));

var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John IS a designer';
console.log(isDesigner);

// CODING CHALLENGE 3

John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.

To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).

var billAmounts, tipAmounts, finalAmounts;

billAmounts = [124, 48, 268]
tipAmounts = []
finalAmounts = []

function tipCalculator(billAmount) {
    if (billAmount >= 0 && billAmount < 50) {
        tipAmounts.push(billAmount * 0.2);
        finalAmounts.push(billAmount + tipAmounts[(tipAmounts.length - 1)]);
    } else if (billAmount >= 50 && billAmount < 200) {
        tipAmounts.push(billAmount * 0.15);
        finalAmounts.push(billAmount + tipAmounts[(tipAmounts.length - 1)]);
    } else {
        tipAmounts.push(billAmount * 0.10);
        finalAmounts.push(billAmount + tipAmounts[(tipAmounts.length - 1)]);
}
}

tipCalculator(billAmounts[0]);
tipCalculator(billAmounts[1]);
tipCalculator(billAmounts[2]);

console.log(tipAmounts)
console.log(finalAmounts);



// Objects and properties

// Object literal
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false
};

console.log(john.firstName);
console.log(john['lastName']);
var x = 'birthYear';
console.log(john[x]);

john.job = 'designer';
john['isMarried'] = true;
console.log(john);

// new Object syntax
var jane = new Object();
jane.name = 'Jane';
jane.birthYear = 1969;
jane['lastName'] = 'Smith';
console.log(jane);

// Objects and methods

var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1992,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    calcAge: function() {
        this.age = 2020 - this.birthYear;
    }
};

john.calcAge();
console.log(john);

// CODING CHALLENGE 4

Let's remember the first coding challenge where Mark and John compared their BMIs. Let's now implement the same functionality with objects and methods.
1. For each of them, create an object with properties for their full name, mass, and height
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they might have the same BMI.

Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).


var mark = {
    fullName: 'Mark Myers',
    mass: 99,
    height: 1.76,
    BMICalculator: function() {
        return this.BMI = (this.mass / (this.height * this.height));
    }
};

var john = {
    fullName: 'John Jonathan',
    mass: 57,
    height: 1.76,
    BMICalculator: function() {
        return this.BMI = (this.mass / (this.height * this.height));
    }
};

if (mark.BMICalculator() > john.BMICalculator()) {
    console.log(mark.fullName + ' has a higher BMI of ' + mark.BMI + '.');
} else if (john.BMI > mark.BMI) {
    console.log(john.fullName + ' has a higher BMI of ' + john.BMI + '.');
} else {
    console.log(john.fullName + ' and ' + mark.fullName + ' have the same BMI of ' + mark.BMI + '.');
} 



// Loops and iteration

for (var i = 0; i <= 20; i += 2) {
    console.log(i);
};

// i = 0, i < 10 true, log i to the console, i++
// i = 1, 1 < 10 true, log i to the console, i++
// i = 2, 2 < 10 true, log i to the console, i++
// i = 3, 3 < 10 true, log i to the console, i++
// ...
// i = 9, 9 < 10 true, log i to the console, i++
// i = 10, 10 < 10 FALSE, exit the loop!

var john = ['John', 'Smith', 1990, 'teacher', false];

// For loop
for (var i = 0; i <= john.length - 1; i++) {
    console.log(john[i]);
}

// While loop
var i = 0;
while (i <= john.length - 1) {
    console.log(john[i]);
    i++;
}

// continue and break statements

var john = ['John', 'Smith', 1990, 'teacher', false];

for (var i = 0; i <= john.length - 1; i++) {
    if (typeof john[i] !== 'string') continue;
    console.log(john[i]);
}

for (var i = 0; i <= john.length - 1; i++) {
    if (typeof john[i] !== 'string') break;
    console.log(john[i]);
}

// Looping backwards
for (var i = john.length - 1; i >= 0; i--) {
    console.log(john[i]);
}

*/
