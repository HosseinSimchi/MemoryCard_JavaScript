let FillForm;
let question;

function getQuestionAnswer(){
    question = document.getElementById("question").value;
    let answer = document.getElementById("answer").value;
    for (let i = 1; i < 13; i++){
        FillForm = document.getElementById("Pr" + i).textContent;
        if (FillForm === "Empty"){
            document.getElementById("Pr" + i).textContent = question
            break;
        }else{
            continue;
        }
    }
}

function mouseOver1() {
    document.getElementById("Pr1").style.color = "red";
}
function mouseOut1() {
    document.getElementById("Pr1").style.color = "black";
}

function mouseOver2() {
    document.getElementById("Pr2").style.color = "red";
}
function mouseOut2() {
    document.getElementById("Pr2").style.color = "black";
}

function mouseOver3() {
    document.getElementById("Pr3").style.color = "red";
}
function mouseOut3() {
    document.getElementById("Pr3").style.color = "black";
}

function mouseOver4() {
    document.getElementById("Pr4").style.color = "red";
}
function mouseOut4() {
    document.getElementById("Pr4").style.color = "black";
}

function mouseOver5() {
    document.getElementById("Pr5").style.color = "red";
}
function mouseOut5() {
    document.getElementById("Pr5").style.color = "black";
}

function mouseOver6() {
    document.getElementById("Pr6").style.color = "red";
}
function mouseOut6() {
    document.getElementById("Pr6").style.color = "black";
}

function mouseOver7() {
    document.getElementById("Pr7").style.color = "red";
}
function mouseOut7() {
    document.getElementById("Pr7").style.color = "black";
}

function mouseOver8() {
    document.getElementById("Pr8").style.color = "red";
}
function mouseOut8() {
    document.getElementById("Pr8").style.color = "black";
}

function mouseOver9() {
    document.getElementById("Pr9").style.color = "red";
}
function mouseOut9() {
    document.getElementById("Pr9").style.color = "black";
}

function mouseOver10() {
    document.getElementById("Pr10").style.color = "red";
}
function mouseOut10() {
    document.getElementById("Pr10").style.color = "black";
}

function mouseOver11() {
    document.getElementById("Pr11").style.color = "red";
}
function mouseOut11() {
    document.getElementById("Pr11").style.color = "black";
}

function mouseOver12() {
    document.getElementById("Pr12").style.color = "red";
}
function mouseOut12() {
    document.getElementById("Pr12").style.color = "black";
}

