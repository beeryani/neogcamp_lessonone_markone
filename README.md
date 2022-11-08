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
var userAge = readlineSync.question('May I have your Age? ');
if (userAge >= 21){
console.log('Right!');
}
else{
console.log('Wrong :/');
}
```