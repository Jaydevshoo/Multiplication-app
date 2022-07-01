const num1 = Math.floor(Math.random() * 10);
const num2 = Math.floor(Math.random() * 10);
const questionElement = document.getElementById("question");
const formElement = document.getElementById("form");
const input = document.getElementById("input");
const scoreEl = document.getElementById("score");

questionElement.innerText = `What is ${num1} multiply by ${num2} ?`;

const correctAns = num1 * num2;

//get the value from local storage
let scorevalue = JSON.parse(localStorage.getItem("scorevalue"));

//if score is not excit
if(!scorevalue ){
    scorevalue = 0;
}
 

formElement.addEventListener("submit", (e) => {
  const userAns = +input.value;
  if (userAns === correctAns) {
    scorevalue++;
    updateLocalStorage();
   scoreEl.innerText = `score: ${scorevalue}`;

  }else{
    scorevalue--;
    updateLocalStorage();
    scoreEl.innerText = `score: ${scorevalue}`;

  }
  input.value = "";
  e.preventDefault();
});

//store in local storage

function updateLocalStorage(){
    localStorage.setItem("scorevalue", JSON.stringify(scorevalue))
}