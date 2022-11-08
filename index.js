var readlineSync = require('readline-sync');

// //Ex01
// // console.log('PratyushGupta');

// //Ex02
// var userName = readlineSync.question('May I have your name? ');
// // console.log(userName);
// //Ex03 & Ex04
// console.log('Swagatam ' + userName + '!');

// //Ex05
// var userAge = readlineSync.question('May I have your Age? ');
// if (userAge >= 21){
//   console.log('Right!');
// }
// else{
//   console.log('Wrong :/');
// }

//Ex06
// var favCity = readlineSync.question('May I know your favourite city? ');
// var counter = 0
// if(favCity == 'Lucknow'){
//   counter++
//   console.log('Hurray, your current score: ' + favCity + ' ' + counter);
// }
// else{
//   console.log('Sorry, current score: ' + favCity + ' ' +counter);
// }

// //Ex07
// var numberOne = readlineSync.question('enter first number: ');
// var numberTwo = readlineSync.question('enter second number: ');

// function add(numberOne, numberTwo){
//   return parseInt(numberOne) + parseInt(numberTwo)
// }

// var outputNumber = add(numberOne, numberTwo)
// console.log('Hey! Your answer is: ' + outputNumber)

// //Ex08
// var questionStatement01 = 'What\'s the capital of India? '
// var correctAnswer01 = 'New Delhi'

// var questionStatement02 = 'What\'s the national anthem of India? '
// var correctAnswer02 = 'Jan Gan Mana'

// let userScore = 0

// checkAnswerRewardUser(questionStatement01, correctAnswer01);
// checkAnswerRewardUser(questionStatement02, correctAnswer02);


// function checkAnswerRewardUser(questionStatement, correctAnswer){
//   var userAnswer = readlineSync.question(questionStatement)
                                           
//   if (correctAnswer == userAnswer){
//     userScore++;
//     console.log('Hurray! You earned a point, your current score: ' + userScore);
//   }
//   else{
//     userScore--;
//     console.log('Sorry! Wrong Answer, your current score: ' + userScore)
//   }
// }

// //Ex09
// name = 'PratyushGupta'
// for (let count = 0; count < 5; count++){
//   console.log(name)
// }

//homework
// function printStars(){
//   var numberInput = readlineSync.question('Please input your number: ')
//   numberInputInt = parseInt(numberInput)
  
//   for (let i = numberInputInt; i < numberInputInt + 1; i++){
//     var s = "";
//     for (let j = 0; j < i; j++){
//       s += "*" + " ";
//       console.log(s)
//     }
//   }
// }

// printStars()

// //Ex10
// var shoppingCartArray = ['Milk', 'Eggs', 'Bread', 'Biscuits', 'Butter']
// console.log(shoppingCartArray[0])
// console.log(shoppingCartArray[2])
// console.log(shoppingCartArray[shoppingCartArray.length - 1])

// //Ex11
// for (let i = 0; i < shoppingCartArray.length; i++){
//   console.log(shoppingCartArray[i])
// }

//Ex12
// const superheroDict = {
//   superman: 'batman'
// }
// console.log(superheroDict.superman)

//Ex13 & Ex14
const fs = require('fs');

var highScore = fs.readFileSync('./highScore.json');
var highScoreJson = JSON.parse(highScore)



const questionOne = {
  question: 'Who is my favorite superhero? ',
  answer: 'Iron Man'
}

const questionTwo = {
  question: 'What is my favorite dish? ',
  answer: 'Beeryani'
}

const highScores = {}
let userScore = 0

checkAnswerRewardUser(questionOne.question, questionOne.answer);
checkAnswerRewardUser(questionTwo.question, questionTwo.answer);

function checkAnswerRewardUser(questionStatement, correctAnswer){
  var userAnswer = readlineSync.question(questionStatement)
                                           
  if (correctAnswer == userAnswer){
    userScore++;
    console.log('Hurray! You earned a point, your current score: ' + userScore);
  }
  else{
    userScore--;
    console.log('Sorry! Wrong Answer, your current score: ' + userScore)
  }
}

highScoreJson['highScore'].push(userScore)
var maxScore = Math.max.apply(null, highScoreJson['highScore']);

if (maxScore == userScore){
  console.log('Hey King, you dropped this! Send us a screenshot <3')
}

var highScore = JSON.stringify(highScoreJson, null, 2);
fs.writeFile('./highScore.json', highScore, err => {
    // error checking
    if(err) throw err;
    console.log("New data added");
});


//Assignment Modules (To be used in downstream code)
// function askName(){
//   var userName = readlineSync.question('Please enter your name: ')
//   return userName
// }