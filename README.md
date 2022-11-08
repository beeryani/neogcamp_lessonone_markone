# neoGcamp: LessonOne
> Repository for LessonOne of levelZero of neoGcamp

[Link to REPL](https:replit.com/@PratyushGupta2/LessonOne#index.js)

### ex01: output your name

Done!

```node
console.log('PratyushGupta');
```

### ex02: read the name of your user

Done!

```node
var readlineSync = require('readline-sync');

var userName = readlineSync.question('May I have your name? ');
console.log(userName);
```

### ex03: welcome your user && ex04: do it all together

Done!

```node
var readlineSync = require('readline-sync');

var userName = readlineSync.question('May I have your name? ');
console.log(userName);
console.log('Swagatam ' + userName + '!');
```

### ex05: print right/wrong if greater than 25

Done!

```node
var readlineSync = require('readline-sync');

var userAge = readlineSync.question('May I have your Age? ');
if (userAge >= 21){
console.log('Right!');
}
else{
console.log('Wrong :/');
}
```

### ex06: increment score if the right answer

Done!

```node
var readlineSync = require('readline-sync');

var favCity = readlineSync.question('May I know your favourite city? ');
var counter = 0
if(favCity == 'Lucknow'){
counter++
console.log('Hurray, your current score: ' + favCity + ' ' + counter);
}
else{
console.log('Sorry, current score: ' + favCity + ' ' +counter);
}
```

### ex07: function to add two numbers

Done!

```node
var readlineSync = require('readline-sync');

var numberOne = readlineSync.question('enter first number: ');
var numberTwo = readlineSync.question('enter second number: ');

function add(numberOne, numberTwo){
  return parseInt(numberOne) + parseInt(numberTwo)
}

var outputNumber = add(numberOne, numberTwo)
console.log('Hey! Your answer is: ' + outputNumber)
```

### ex08: function to check the answer

Done!

```node
var readlineSync = require('readline-sync');

var questionStatement01 = 'What\'s the capital of India? '
var correctAnswer01 = 'New Delhi'

var questionStatement02 = 'What\'s the national anthem of India? '
var correctAnswer02 = 'Jan Gan Mana'

let userScore = 0

checkAnswerRewardUser(questionStatement01, correctAnswer01);
checkAnswerRewardUser(questionStatement02, correctAnswer02);


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
```

### ex09: function to check the answer

Done!

```node
var readlineSync = require('readline-sync');

name = 'PratyushGupta'
for (let count = 0; count < 5; count++){
  console.log(name)
}

homework
function printStars(){
  var numberInput = readlineSync.question('Please input your number: ')
  numberInputInt = parseInt(numberInput)
  
  for (let i = numberInputInt; i < numberInputInt + 1; i++){
    var s = "";
    for (let j = 0; j < i; j++){
      s += "*" + " ";
      console.log(s)
    }
  }
}

printStars()
```