// --- Let's build a fun quiz game in the console! ---

// 1. Build a function constructor called Question to describe a question. A question should include:
// a) question itself
// b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
// c) correct answer (I would use a number for this)


// 2. Create a couple of questions using the constructor
// 3. Store them all inside an array
// 4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).

// 5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.
// 6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).

// 7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).

// // (7) Immediatly invoked function expression, allows the code to be used as a plugin and no variables inside the block can be used outside of this block.
// // (function(){

// // })()

(function (){
  //(1) build a function constuctor for Questions 
  const Question = function (questions, answers, correct){
    this.questions = questions 
    this.answers = answers
    this.correct = correct
  }
  
  // (4) using prototype to add a function to my Question constuctor, this logs the questions and loops through the answers
  Question.prototype.displayQuestionAndAnswers = function (){
    console.log(this.questions)
    for(let i = 0; i < this.answers.length; i++){
      console.log(`${i}: ${this.answers[i]}`)
    }
  }
  
  // (6) a function that takes in the answer I submitted in my prompt and compares it to the correct answer 
  Question.prototype.checkAnswer = function (answer){
    if(answer === this.correct ){
      console.log('Correct!')
    } else {
      console.log('Wrong!')
    }
  }
  
  // (2) created three instances of the Question constructor
  const questionOne = new Question ('what is your favorite language?', ['Javascript','Python','Java'], 0)
  const questionTwo = new Question('everything in javascript is a(n)?',['function', 'object', 'array'], [1])
  const questionThree = new Question('Which company created React?', ['google', 'apple', 'facebook'], 2)
  
  // (3) stored all my questions into an array and am able to generate a random question
  const allQuestions = [questionOne,questionTwo,questionThree]
  const randomNumber = Math.floor(Math.random() * 3)
  
  // (4) add this logQuestion function to my random question
  allQuestions[randomNumber].displayQuestionAndAnswers()
  
  // (5) parse my prompt from a string to a number
  const answer = parseInt(prompt('What is the correct answer? Type in the correct number'))
  
  // (6) add check answer function to the random question and pass my prompt response as a parameter
  allQuestions[randomNumber].checkAnswer(answer)
}) ()
