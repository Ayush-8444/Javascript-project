let questionNo = 1;
let Score = 0;
const question = ["What is the capital of India", "What is the Nation bird of India",
    "What is the National sport of India", "When did India got Independence"];

const option = [["Delhi", "Mumbai", "Kanpur", "Indore"], ["Pigeon", "Peacock", "Kingfisher", "Parrot"],
["Cricket", "Football", "Hockey", "BasketBall"], ["29 July", "14 April", "27 August", "15 August"]
];

const Answer = ["Delhi", "Peacock", "Hockey", "15 August"];


const questionElem = document.getElementById("question");
const nextElem = document.getElementById("next");
const playAgainElem = document.getElementById("playAgain");
const container = document.getElementById("optionContainer");
const options = container.children;
const scoreElem = document.getElementById("displayScore"); 
const box = document.getElementById("box");

for (let i = 0; i < 4; i++) {
    options[i].addEventListener("click", (e) => {
        if (e.target.innerHTML == Answer[questionNo-1]) {
            e.target.style.backgroundColor = "Green";
            Score++;
            for (let i = 0; i < 4; i++){
                options[i].classList.add("disabled");
            }
        } else {
            e.target.style.backgroundColor = "Red";
            for (let i = 0; i < 4; i++) {
              options[i].classList.add("disabled");
            }
        }
        
  })
}


nextElem.addEventListener("click", () => {
    for (let i = 0; i < 4; i++) {
      options[i].classList.remove("disabled");
    }
    questionNo++;
    if (questionNo < 5)
    {
        
        questionElem.innerHTML = `${questionNo}.${question[questionNo - 1]}?`
        for (let i = 0; i < 4; i++){
            options[i].innerHTML = `${option[questionNo -1][i]}`
            options[i].style.backgroundColor = "White";
        }
    }
    else
    {   
        scoreElem.innerHTML = `Your Score is - ${Score}`;
        scoreElem.classList.remove("hidden");
        box.classList.add("hidden");
        nextElem.classList.add("hidden");
        playAgainElem.classList.remove("hidden");
    }
})

playAgainElem.addEventListener("click", () => {
    for (let i = 0; i < 4; i++) {
      options[i].classList.add("disabled");
    }
    questionNo = 1;
    questionElem.innerHTML = `${questionNo}.${question[questionNo - 1]}?`;
    for (let i = 0; i < 4; i++) {
      options[i].innerHTML = `${option[questionNo - 1][i]}`;
      options[i].style.backgroundColor = "White";
    }
    nextElem.classList.remove("hidden");
    playAgainElem.classList.add("hidden");
    box.classList.remove("hidden");
    scoreElem.classList.add("hidden");
    
})