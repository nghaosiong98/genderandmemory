(function() {
  'use strict';
  const myQuestions = [
    {
      question: "Please select the position of the words.",
      answers: {
        a: "Green"
      }
    },{
      question: "Please select the position of the words.",
      answers: {
        a: "Book"
      }
    },{
      question: "Please select the position of the words.",
      answers: {
        a: "Teal"
      }
    },{
      question: "Please select the position of the words.",
      answers: {
        a: "Bird"
      }
    },{
      question: "Please select the position of the words.",
      answers: {
        a: "Durian"
      }
    },{
      question: "Please select the position of the words.",
      answers: {
        a: "Maroon"
      }
    },{
      question: "Please select the position of the words.",
      answers: {
        a: "Chair"
      }
    },{
      question: "Please select the position of the words.",
      answers: {
        a: "Mango"
      }
    },{
      question: "Please select the position of the words.",
      answers: {
        a: "Fish"
      }
    },{
      question: "Please select the position of the words.",
      answers: {
        a: "Dog"
      }
    },{
      question: "Please select the position of the words.",
      answers: {
        a: "Teacher"
      }
    },{
      question: "Please select the position of the words.",
      answers: {
        a: "Pineapple"
      }
    }
  ];

  // const finalCollection = ["seven", "library", "bottle", "fish", "lawyer", "android", "egg", "white", "chicken", "mouse","lamborghini", "competition", "kid", "ability", "simple", "pineapple", "cat", "newspaper", "education", "dog", "banana", "computer", "doctor", "night", "pizza", "ipad", "apple","woman", "smart", "spring", "trumpet", "officer", "green","iphone", "trombone", "billion", "country", "burger", "laptop", "government", "party","material", "yellow", "dolphin", "hand", "red", "ferrari", "coffee", "rubber", "blue", "muffin", "capital", "ringgit", "basketball", "dream", "perodua","zoo", "hockey", "daughter", "summer"];

  const correctAnswer = ["top", "right", "right","left", "bottom", "left", "left", "top", "bottom", "top", "bottom", "right"];

  var user_answer = []
  var gender = ""
  var currentSlide = 0;

  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];
    var counter = 1;
    // for each question...
    myQuestions.forEach((currentQuestion) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (var letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<p>${currentQuestion.answers[letter]}</p>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="slide">
          <p>Question ${counter}</p><br>
           <div class="question"> ${currentQuestion.question} </div>
           <div class="answers"> ${answers.join("")} </div>
         </div>`
      );

      counter++;
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showSlide(n) {
    console.log("currentslide= " + currentSlide)
    console.log("n= " + n)
    
    // move()

    submitButton.style.display = "none"
    if (currentSlide === slides.length-1){
      // submitButton.style.display = "inline-block"
      // topButton.style.display = "none"
      // bottomButton.style.display = "none"
      // leftButton.style.display = "none"
      // rightButton.style.display = "none"
      $("#question").hide();
      console.log(user_answer)
      showResult(user_answer);
      $("#resultPage").show(500);
    }else{
      slides[currentSlide].classList.remove("active-slide");
      slides[n].classList.add("active-slide");
      currentSlide = n;
    }

    
  }

  function showNextSlide() {
    showSlide(currentSlide + 1);
  }

  function showPreviousSlide() {
    showSlide(currentSlide - 1);
  }

  const quizContainer = document.getElementById("quiz");
  

  // // display quiz right away
  buildQuiz();

  const maleButton = document.getElementById("male")
  const femaleButton = document.getElementById("female")
  const topButton = document.getElementById("top");
  const bottomButton = document.getElementById("bottom");
  const leftButton = document.getElementById("left")
  const rightButton = document.getElementById("right")
  const submitButton = document.getElementById("submit");
  const slides = document.querySelectorAll(".slide");
 


  // sleep time expects milliseconds
  function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }
  
  var myTimer;
  // Usage!

  // function buildFinal() {
  //   // we'll need a place to store the HTML output
  //   const output = [];

  //   const words = [];

  //   for(var word in finalCollection){
  //     words.push(
  //       `<label><input class="optionCheckbox" type="checkbox" name="word" value="${finalCollection[word]}">&nbsp;&nbsp;${finalCollection[word]}</label>`
  //     );
  //   }

  //   // add this question and its answers to the output
  //   output.push(
  //     `<fieldset class="checkboxgroup"> 
  //       <legend>Pick the original words.</legend>
  //       ${words.join("")}
  //     </fieldset>`
  //   );

  //   finalContainer.innerHTML = output.join("");
  // }

  // const finalContainer = document.getElementById("final");

  
  var pickCorrectAnswer = []
  var pickWrongAnswer = []
  var correct01 = 0
  var numCorrect = 0;
  var numWrong = 0;

  // buildFinal();

  function showResult(user_answer){
      for (var answer in user_answer){
        if (correctAnswer[answer] === user_answer[answer]){
          console.log(correctAnswer[answer])
          console.log(user_answer[answer])
          console.log(numCorrect)
          numCorrect++;
          pickCorrectAnswer.push(user_answer[answer])
        }else{
          numWrong++;
        pickWrongAnswer.push(user_answer[answer])
        }
      }

    var output = [];
    var list01 = [];
    var list02 = [];

    for (var index in pickCorrectAnswer){
      list01.push(
        `<li>${pickCorrectAnswer[index]}</li>`
      )
    }

    for (var index in pickWrongAnswer){
      list02.push(
        `<li>${pickWrongAnswer[index]}</li>`
      )
    }

    output.push(
      `<p>Correct words: ${numCorrect}/12</p>`
    )

    resultContainer.innerHTML = output.join("");
    upload()
  }

  function move() {
    var elem = document.getElementById("myBar"); 
    var width = 1;
    var id = setInterval(frame, 35);
    function frame() {
      if (currentSlide === slides.length - 1){
        elem.style.width = '100%'
      }else if (width >= 100) {
        clearInterval(id);
      } else {
        width++; 
        elem.style.width = width + '%'; 
      }
    }
  }

  const resultContainer = document.getElementById("result");

  $('#done').click(()=>{
    // $.each($("input[name='word']:checked"),function(){
    //   if (checkedValue.includes($(this).val())){
    //     // console.log("existed")
    //   }else
    //     checkedValue.push($(this).val());
    // })

    $("#finalQuestion").hide();
    $("#resultPage").show(500);
    showResult(user_answer);
  })



  // $('#start-button').click(() => {
  //   $("main").hide();
  //   $("#question").show(500);
  //   // sleep(1000).then(() => {
  //   //   showSlide(0);
  //   // });
  //   showSlide(0);
  //   myTimer = setInterval(showNextSlide, 3500);
  // });

$('#male-button').click(()=>{
    $("main").hide();
    gender = 'male';
    $("#firstquestion").show(500);
})

$('#female-button').click(()=>{
  $("main").hide();
  gender = 'female';
  $("#firstquestion").show(500);
})

$('#firstbutton').click(()=>{
  $('#firstquestion').hide();
  $('#question').show(500)
  // sleep(1000).then(() => {
    //   showSlide(0);
    // });
    showSlide(0);
    // myTimer = setInterval(showNextSlide, 3500);
})

$('#top').click(()=>{
  user_answer.push('top')
  showNextSlide();
  console.log('top')
})

$('#bottom').click(()=>{
  user_answer.push('bottom')
  showNextSlide();
  console.log('bottom')
})

$('#left').click(()=>{
  user_answer.push('left')
  showNextSlide();
  console.log('left')
})

$('#right').click(()=>{
  user_answer.push('right')
  showNextSlide();
  console.log('right')
})

$('#submit').click(()=>{
  $("#question").hide();
  console.log(user_answer)
  showResult(user_answer);
  $("#resultPage").show(500);
})

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register('./service-worker.js')
             .then(function() { console.log('Service Worker Registered'); });
  }
  
  var db = firebase.database();


  function upload() {
    var docID = new Date().getTime()+"";

    db.ref('users').child(docID).push({
      gender: gender,
      numCorrect: numCorrect,
      user_answer : user_answer
    }).then(function(docRef) {
      console.log("Document written with ID: ", docID);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
  }

})();
