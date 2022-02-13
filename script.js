let generateInput = document.getElementById("pinInput");
let typedPin = document.getElementById("typed-pin");
let cleared = document.getElementById("clear");

function generatePin(){
    let random = 1000 + (Math.random() * 9000);
    let round = Math.round(random);
    generateInput.value = round;
}

function tab(e){
    let num = e.innerText;
    let type = typedPin.value;
    type = type + num;
    typedPin.value = type;
}

function matchedInput(){
    
    let incorrect = document.getElementById("incorrect");
    let correct = document.getElementById("correct");
    
    let generatePin = generateInput.value;
    let typedNum = typedPin.value;

    let left = document.getElementById("try");
    let leftValue = left.innerHTML;
    let leftNumb = parseInt(leftValue);

    let finishTry = document.getElementById("fullTry");
    
    if(generatePin == typedNum && generatePin !== ""){
        left.innerHTML = 3;
        setTimeout(() => {
            typedPin.value = "";
            generateInput.value = "";
        }, 3000);

        correct.classList.add("show");
        incorrect.classList.remove("show");
        setTimeout(() => {
            correct.classList.remove("show");
        }, 3000);
    } else{
        let result = leftNumb - 1;
        if(result <= 0){
            finishTry.innerHTML = "You Can't Try More";
            let submitBtn = document.querySelector(".submit-btn");
            submitBtn.disabled=true;
            submitBtn.style.opacity = .5;
        }else{
            left.innerHTML = result;
        }
        incorrect.classList.add("show");
        correct.classList.remove("show");
        setTimeout(() => {
            incorrect.classList.remove("show");
        }, 3000);
    }
}

cleared.addEventListener("click", function(){
    typedPin.value = ""
})

function clean(){
    let num = typedPin.value;
    let replace = num.slice(0, -1);
    typedPin.value = replace;
}