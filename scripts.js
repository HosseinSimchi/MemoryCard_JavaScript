let FillForm;
let question;
let answer;
function getQuestionAnswer(){
    question = document.getElementById("question").value;
    answer = document.getElementById("answer").value;
    for (let i = 1; i < 13; i++){
        FillForm = document.getElementById("Pr" + i).textContent;
        if (FillForm === "Empty"){
            document.getElementById("Pr" + i).textContent = question
            document.getElementById("answ" + i).style.display = "none";
            document.getElementById("answ" + i).textContent = answer
            break;
        }else{
            continue;
        }
    }
}


function mouseOver1() {
    document.getElementById("answ1").style.display = "Block";
    document.getElementById("answ1").style.color = "red";
    document.getElementById("Pr1").style.display = "none";
}
function mouseOut1() {
    document.getElementById("Pr1").style.color = "black";
    document.getElementById("answ1").style.display = "none";
    document.getElementById("Pr1").style.display = "block";
}



function mouseOver2() {
    document.getElementById("answ2").style.display = "Block";
    document.getElementById("answ2").style.color = "red";
    document.getElementById("Pr2").style.display = "none";
}
function mouseOut2() {
    document.getElementById("Pr2").style.color = "black";
    document.getElementById("answ2").style.display = "none";
    document.getElementById("Pr2").style.display = "block";
}


function mouseOver3() {
    document.getElementById("answ3").style.display = "Block";
    document.getElementById("answ3").style.color = "red";
    document.getElementById("Pr3").style.display = "none";
}
function mouseOut3() {
    document.getElementById("Pr3").style.color = "black";
    document.getElementById("answ3").style.display = "none";
    document.getElementById("Pr3").style.display = "block";
}


function mouseOver4() {
    document.getElementById("answ4").style.display = "Block";
    document.getElementById("answ4").style.color = "red";
    document.getElementById("Pr4").style.display = "none";
}
function mouseOut4() {
    document.getElementById("Pr4").style.color = "black";
    document.getElementById("answ4").style.display = "none";
    document.getElementById("Pr4").style.display = "block";
}


function mouseOver5() {
    document.getElementById("answ5").style.display = "Block";
    document.getElementById("answ5").style.color = "red";
    document.getElementById("Pr5").style.display = "none";
}
function mouseOut5() {
    document.getElementById("Pr5").style.color = "black";
    document.getElementById("answ5").style.display = "none";
    document.getElementById("Pr5").style.display = "block";
}



function mouseOver6() {
    document.getElementById("answ6").style.display = "Block";
    document.getElementById("answ6").style.color = "red";
    document.getElementById("Pr6").style.display = "none";
}
function mouseOut6() {
    document.getElementById("Pr6").style.color = "black";
    document.getElementById("answ6").style.display = "none";
    document.getElementById("Pr6").style.display = "block";
}


function mouseOver7() {
    document.getElementById("answ7").style.display = "Block";
    document.getElementById("answ7").style.color = "red";
    document.getElementById("Pr7").style.display = "none";
}
function mouseOut7() {
    document.getElementById("Pr7").style.color = "black";
    document.getElementById("answ7").style.display = "none";
    document.getElementById("Pr7").style.display = "block";
}


function mouseOver8() {
    document.getElementById("answ8").style.display = "Block";
    document.getElementById("answ8").style.color = "red";
    document.getElementById("Pr8").style.display = "none";
}
function mouseOut8() {
    document.getElementById("Pr8").style.color = "black";
    document.getElementById("answ8").style.display = "none";
    document.getElementById("Pr8").style.display = "block";
}


function mouseOver9() {
    document.getElementById("answ9").style.display = "Block";
    document.getElementById("answ9").style.color = "red";
    document.getElementById("Pr9").style.display = "none";
}
function mouseOut9() {
    document.getElementById("Pr9").style.color = "black";
    document.getElementById("answ9").style.display = "none";
    document.getElementById("Pr9").style.display = "block";
}


function mouseOver10() {
    document.getElementById("answ10").style.display = "Block";
    document.getElementById("answ10").style.color = "red";
    document.getElementById("Pr10").style.display = "none";
}
function mouseOut10() {
    document.getElementById("Pr10").style.color = "black";
    document.getElementById("answ10").style.display = "none";
    document.getElementById("Pr10").style.display = "block";
}


function mouseOver11() {
    document.getElementById("answ11").style.display = "Block";
    document.getElementById("answ11").style.color = "red";
    document.getElementById("Pr11").style.display = "none";
}
function mouseOut11() {
    document.getElementById("Pr11").style.color = "black";
    document.getElementById("answ11").style.display = "none";
    document.getElementById("Pr11").style.display = "block";
}


function mouseOver12() {
    document.getElementById("answ12").style.display = "Block";
    document.getElementById("answ12").style.color = "red";
    document.getElementById("Pr12").style.display = "none";
}
function mouseOut12() {
    document.getElementById("Pr12").style.color = "black";
    document.getElementById("answ12").style.display = "none";
    document.getElementById("Pr12").style.display = "block";
}

