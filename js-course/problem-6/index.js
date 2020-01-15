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


// (1) this is my function constructor 
(function() {
  function Question (questions, answers, correct){
    this.questions = questions 
    this. answers = answers
    this.correct = correct
  }
  
  // (4) using prototype to add a function to my Question constuctor, this logs the questions and loops through the answers
  Question.prototype.logQuestion = function (){
    console.log(this.questions)
    for(let i = 0; i < this.answers.length; i++){
      console.log(`${i}:${this.answers[i]}`)
    }
  }
  
  // (6) create a new function to check the answer and what I pass through it as a parameter is the answer from my prompt to check with the correct answer
  Question.prototype.checkAnswer = function (answer){
    if(answer === this.correct){
      console.log('Correct answer, good job!')
    } else {
      console.log('Wrong answer, try again.')
    }
  }
  
  // (2) questions that are instances of the function constructor Question
  const questionOne = new Question ('is Javascript a fun lanaguage to learn?', ['Yes', 'No'], 0)
  
  const questionTwo = new Question ('is this game fun?', ['Yes', 'No', 'Maybe'], 0)
  
  const questionThree = new Question('what is my name?', ['Eddar','Eder', 'Ether'], 1 )
  
  // (3) Store them all inside an array
  const allQuestions = [questionOne,questionTwo,questionThree]
  const random = Math.floor(Math.random() * 3)
  
  // (4) add this logQuestion function to my random question 
  allQuestions[random].logQuestion()
  
  // (5) parseInt converts my answer from string to number
  const answer = parseInt(prompt('What is the correct answer?'))
  
  // (6) add the checkAnswer function to the random question
  allQuestions[random].checkAnswer(answer)
})()


// (7) Immediatly invoked function expression, allows the code to be used as a plugin and no variables inside the block can be used outside of this block.
// (function(){

// })()