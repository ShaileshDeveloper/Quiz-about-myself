var readline = require("readline-sync");

var userName = readline.question("Whats your name ? ");

var score = 0;

var chalk = require('chalk');

console.log(chalk.magentaBright("WELCOME " + userName.toUpperCase() + " TO DO YOU KNOW SHAILESH ?"));

console.log(chalk.greenBright("RULES OF THE QUIZ ARE : "))
console.log(chalk.greenBright("There is no  negative marking for wrong answer"))
console.log(chalk.greenBright("You have to give atleast three correct answers in level 1 to enter level 2 or else you have to play level1 again and again "))


function play(question , answer){
   var userAnswer = readline.question(chalk.grey(question));
   console.log("Your answer is: ", userAnswer)
   if (userAnswer.toUpperCase() == answer.toUpperCase()){
     console.log(chalk.green("Correct answer"))
     score++;
   } else {
     console.log(chalk.red("Oops,thats the wrong answer"))
   }
}


 const questionsLevel1 = [ 
   {
		question: `
	Que-1 Where I am from?
	a: Bangalore
	b: Delhi
	c: Mumbai\n`,
		answer: "a"
	},
	{
		question: `
  Que-2  Where i have done my college from?
	a: RV college of engineering
	b: Dayananda sagar college of engineering\n`,
		answer: "b"
	},
	{
		question: `
	Que-3 What is my favourite movie?
	a: Rockstar
	b: Hindi medium\n`,
		answer: "b"
	},
	{
		question: `
  Que-4	What is my favourite TV series?
	a: Game of thrones
	b: Silicon valley\n`,
		answer: "b"
	}
];

 function level1(){
  for (var i = 0; i < questionsLevel1.length;i++ ){
  play(questionsLevel1[i].question, questionsLevel1[i].answer)
  }
}

const questionsLevel2 = [ 
   {
		question: `
	Que-1 My favourite food is?
	a: Aloo paratha
	b: Butter chicken
	c: Pizza\n`,
		answer: "a"
	},
	{
		question: `
  Que-2  My favourite travel place is?
	a: Venice
	b: Tiblisi\n`,
		answer: "b"
	},
	{
		question: `
	Que-3 Whats my favourite sport?
	a: Cricket
	b: Football\n`,
		answer: "a"
	},
	{
		question: `
  Que-4	Who is my favourite artist?
	a: Coldplay
	b: The Weeknd\n`,
		answer: "b"
	}
];

function levelUp(){
	level1();
    if (score >= 3){
      console.log("CONGRATS YOU HAVE ENTERED LEVEL2")
    } else {
	  console.log("Sorry,you have to try again")
	  score = 0;
     level1();
    }
}
  
 function level2(){
    for (var i=0 ; i<questionsLevel2.length; i++){
    play(questionsLevel2[i].question, questionsLevel2[i].answer)
  }
}
 function level1(){
    for (var i=0 ; i<questionsLevel1.length; i++){
    play(questionsLevel1[i].question, questionsLevel1[i].answer)
  }
}

for (var i =0;i<1000;i++){
	levelUp();
	if(score>=3){
		break;
	}
}

level2();

var highScore = 
{
    name: "shailesh",
    scor: "8"
}

var userScore =
  {
    name: userName,
    scor: score
  } ;

if (userScore.scor == highScore.scor){
  console.log("YOU HAVE BEATEN THE HIGH SCORE")
} 

console.log(chalk.magentaBright("THANKS " + userName.toUpperCase() +" FOR PLAYING THE QUIZ "))
console.log("YOUR FINAL SCORE IS:",score)
 