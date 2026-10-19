'use strict';

console.log('STUDENT SCORE ARRAY ANALYZER');

// Store the original names and final scores.
const studentNames = ['Ana', 'Ben', 'Carla', 'Daniel', 'Ella'];
const studentScores = [85, 72, 91, 64, 78];

// Store three activity scores for each original student.
const activityScores = [
  [80, 85, 90],
  [70, 72, 74],
  [88, 92, 95],
  [60, 65, 67],
  [75, 78, 81]
];

// Preserve the original names for the activity matrix.
const originalNames = Array.from(studentNames);

console.log('\nPART A: ORIGINAL RECORDS');                           //A

// TODO: Use a for loop to display every name and score.
for (let i = 0; i < studentNames.length; i++) 
    {
        let arval = i;
        let sname = studentNames[i];
        let sscores = studentScores[i];
        console.log(arval+" "+sname+" "+sscores)
    }

console.log('\nPART B: ADD NEW STUDENTS');                           //B

// TODO: Add Faith and 88 at the end.                 pussh sa last push
studentNames.push("Faith");
studentScores.push(88);

// TODO: Add Aaron and 76 at the beginning.           unshift sa first
studentNames.unshift("Aaron");
studentScores.unshift(76);

// TODO: Display both arrays and their length.
for (let i = 0; i < studentNames.length; i++) 
    {
        let sname = studentNames[i];
        let sscores = studentScores[i];
        console.log(" "+sname+" "+sscores)
    }


console.log('\nPART C: REMOVE AND REPLACE RECORDS');                  //C

// TODO: Remove the first name and score.
studentNames.shift();

// TODO: Remove the last name and score.
studentNames.pop();

// TODO: Find Daniel's index.                               gonna ned this later use this 
let indexdainel = studentNames.indexOf("Daniel");

// TODO: Remove Daniel and Daniel's score.               studentNames.splice(indexdainel, 1, "can add here to replace");
studentNames.splice(indexdainel, 1);
studentScores.splice(indexdainel, 1);

// TODO: Insert Grace and 82 at index 2.                  splice sa nindex 2 yung 0 di siya mag remove ng element/laman sa arry so shift niya lang / add
studentNames.splice(2, 0, "Grace");
studentScores.splice(2, 0, 82);

// TODO: Display the updated arrays.
for (let i = 0; i < studentNames.length; i++) 
    {
        let sname = studentNames[i];
        let sscores = studentScores[i];
        console.log(" "+sname+" "+sscores)
    }


console.log('\nPART D: CLASS STATISTICS');                  //D
let totalScore = 0;
let highestscore=0;
let lowestscore=0;

// TODO: Calculate the total score.
// TODO: Find the highest score.    
// TODO: Find the lowest score.

for (let i = 0; i < studentScores.length; i++)
    {
        totalScore += studentScores[i];
        if (studentScores[i] > highestscore) {                                 //highest here
            highestscore = studentScores[i];
        }
        if (studentScores[i] < lowestscore || lowestscore === 0) {             //lowest here
            lowestscore = studentScores[i];
        }
    }
// TODO: Calculate the average score.
let averageScore = totalScore / studentScores.length;

// TODO: Display all statistics.
console.log("Total Score:" + totalScore);
console.log("Highest Score:" + highestscore);
console.log("Lowest Score:" + lowestscore);
console.log("Average Score:" + averageScore);


console.log('\nPART E: PASSING-SCORE ANALYSIS');                  //E

// TODO: Use filter to obtain passing scores.                                    //=> this is a fat arrow like look at the val right next to me 
let passingscores = studentScores.filter(score => score >= 75);                  //just in case you need filter use ai to explain this to you why you cannt just use (score >= 75)
// TODO: Use map to produce Passed or Failed statuses.
let passfail = studentScores.map(score => score >= 75 ? "Passed" : "Failed");     //make a new array anyting behind the ? is condition if true "value" use : as a esle
// TODO: Use some to check whether at least one student failed.
let atleastonefailed = passfail.some(status => status == "Failed");   
// TODO: Use every to check whether all students passed.
let allpassed = passfail.every(status => status == "Passed");
// TODO: Display all results.
console.log("Passing Scores: " + passingscores);
console.log("Pass/Fail Statuses: " + passfail);
console.log("At least one student failed: " + atleastonefailed);
console.log("All students passed: " + allpassed);


console.log('\nPART F: SORT AND SEARCH');                         //F

// TODO: Copy the scores using Array.from.
let studentscoresc1 = Array.from(studentScores);    
// TODO: Sort the copy from highest to lowest.                          // sort low to high .sort((a, b) => b - a)
studentscoresc1.sort((a, b) => b - a);                     
// TODO: Search for 91 using includes and indexOf.
let includes91 = studentscoresc1.includes(91);
let index91 = studentscoresc1.indexOf(91);
// TODO: Display the results.
console.log("student scores from highest to lowest : " + studentscoresc1);
console.log("does it include 91? " + includes91);
console.log("index of 91: " + index91);


console.log('\nPART G: TWO-DIMENSIONAL ARRAY');                   //G

const activityAverages = [];    //?

// TODO: Use nested loops to process every row and column.
// TODO: Calculate and store each student's activity average.
// TODO: Display activityAverages.
for (let i = 0; i < activityScores.length; i++) 
    {
        activityAverages[i] = 0;  // Initialize the average for each student
        for (let j = 0; j < activityScores[i].length; j++)
        {
            activityAverages[i] += activityScores[i][j];
        }
        activityAverages[i] =activityAverages[i] /activityScores[i].length;
        console.log( studentNames[i] + "'s activity average is : " + activityAverages[i]);

    }

console.log('\nPART H: TEXT SUMMARY');
// TODO: Use join to display names separated by " | ".
console.log("Student Names: " + studentNames.join(" | "));


// thanks to: sir jack,w3schools.com,gemini ai