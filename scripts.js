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