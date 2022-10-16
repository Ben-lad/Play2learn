"use strict";

const QuizData = [
  {
    question:"What is the Full meaning of BTC?",
    a:"Bitcoins terminate central",
    b:"Blockchain",
    c:"Bitcoins transaction connection",
    d:"Bitcoin",
    correct:"d"
  },
  {
    question:"What is the most used programming language in 2019?",
    a:"Blockchain",
    b:"C+",
    c:"java",
    d:"python",
    correct:"c"
  },
  {
    question:"Who is the founder of BTC?",
    a:"Elon musk",
    b:"Satoshi Nakamoto",
    c:"Changpeng Zhao",
    d:"Brian Armstrong",
    correct:"b"
  },
  {
    question:"who is the founder of web3?",
    a:"Gavin Wood",
    b:"Satoshi Nakamoto",
    c:"facebook",
    d:"Brian Armstrong",
    correct:"b"
  },
  {
    question:"when was web3.0 and blockchain made?",
    a:"2006 and 2000",
    b:"2019 and 2015",
    c:"1999 and 2005",
    d:"2006 and 2008",
    correct:"d"
  },
  {
    question:"What is the Full meaning of ZEC?",
    a:"Zcash ether contractl",
    b:"Zcashs",
    c:"stellar",
    d:"Zcash",
    correct:"d"
  },
  {
    question:"What is the Full meaning of XPM?",
    a:"PrimeCoin",
    b:"XVG",
    c:"stellar",
    d:"Zcash",
    correct:"a"
  },
  {
    question:"What is the Full meaning of XVG?",
    a:"Zcash",
    b:"Ripple",
    c:"verge",
    d:"monero",
    correct:"c"
  },
  {
    question:"What is the Full meaning of XLM?",
    a:"Stellar",
    b:"Tether",
    c:"vertcoinr",
    d:"monero",
    correct:"a"
  },
  {
    question:"What is the Full meaning of USDT?",
    a:"Zcash ether contractl",
    b:"USD coin",
    c:"Tether",
    d:"NEM",
    correct:"c"
  },
  {
    question:"What is the Full meaning of ETC?",
    a:"Ether",
    b:"Ethereum",
    c:"stellar",
    d:"Ethereum classic",
    correct:"d"
  },

];
const answerE1s = document.querySelectorAll(".answer")
const questionE1 = document.getElementById("question")
const a_text = document.getElementById("a_text")
const b_text = document.getElementById("b_text")
const c_text = document.getElementById("c_text")
const d_text = document.getElementById("d_text")
const submit = document.getElementById("btn")
const ct = document.getElementById("time")
const prev = document.getElementById("back")

let currentTime =0;
let currentQuiz = 0;
let score = 0;
loadQuiz()  
function loadQuiz(){
  deselectAnswer()
  const currentQuizData= QuizData[currentQuiz];
questionE1.innerText = currentQuizData.question;
a_text.innerText=currentQuizData.a,
b_text.innerText=currentQuizData.b;
c_text.innerText=currentQuizData.c;
d_text.innerText=currentQuizData.d;  
ct.innerHTML = currentTime;
}

function getselected() {
    let answer = undefined;
  answerE1s.forEach((answerE1) => {
    if (answerE1.checked) {
      answer = answerE1.id
    }
  });
  return answer;
}

function deselectAnswer(){
  answerE1s.forEach((answerE1) => {
  if (answerE1s.checked == false) {
    alert('Please You need to select an answer')
  }
  // else{
  //   return true;
  // }
  // currentQuiz++;
  });
}


submit.addEventListener("click", function (e) {
  deselectAnswer()
  prev.style.display ="block"
 const answers = getselected();
//  if (answerE1.checked ==false) {
//   alert("hello")
//  }
    if ( answers === QuizData [currentQuiz] .correct) {
     score++;
   }
 if (answers) {
   currentTime++;
   currentQuiz++;
   // if ( answers === QuizData [currentQuiz] .correct) {
   //   score++;
   // }

   if (currentQuiz < QuizData.length ) {
     loadQuiz()
     // score++;
   } else {     
     // console.log(`${score}/ ${QuizData.length}`);   
   Quiz.innerHTML = `<h2> You answered   ${ score} correctly out of ${QuizData.length } questions </h2><button onclick ="location.reload()" id="ben">play again</button>`;
   }
 }
});
  

back.addEventListener("click", function(e) {
  currentQuiz--;
  currentTime--;
  loadQuiz();
})
