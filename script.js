const reward = 1; 
const penalty = 0.25; 
const totalNoOfQuestions = 200; 
const totalQuestionsInSection = 50; 
let secArr = document.querySelectorAll('.section-cntnr'); 
let totalCorrect = 0, totalWrong = 0, totalNotAttempt = 0, grandTotal = 0; 
secArr.forEach((section) => {
  let sectionName = section.querySelector('.section-lbl').lastElementChild.innerHTML; 
  console.log(sectionName); 
  let secCorrect = 0, secWrong = 0, secNotAttemp = 0; 
  var questionArr = section.querySelectorAll('.question-pnl'); 
  questionArr.forEach((question) =>{ 
    let correctOption = question.querySelector('.rightAns').innerText.charAt(0); 
    let menuTblArr = question.querySelector('.menu-tbl').querySelectorAll('.bold'); 
    if(menuTblArr[2].innerText != "--"){ 
      if(menuTblArr[2].innerText == correctOption){ 
        secCorrect++; 
      }else{ 
        secWrong++; 
      } 
    }else{ 
      secNotAttemp++; 
    } 
  }); 
  let correct = secCorrect * reward; 
  let wrong = secWrong * penalty; 
  let total = correct - wrong; 
  totalCorrect += secCorrect; 
  totalWrong += secWrong; 
  totalNotAttempt += secNotAttemp; 
  grandTotal += total; 
  console.log("Section correct : " + secCorrect + ", Marks obtained : " + correct); 
  console.log("Section incorrect : " + secWrong + ", Marks deducted : " + wrong); 
  console.log("Section attempt : " + (parseInt(totalQuestionsInSection) - parseInt(secNotAttemp))); 
  console.log("Section not attempt : " + secNotAttemp); 
  console.log("Section total question : " + totalQuestionsInSection); 
  console.log("Total marks obtained in this section : " + total + "\n"); 
  console.log(" "); 
}); 
console.log("Total correct : " + totalCorrect + ", Marks obtained : " + totalCorrect * reward); 
console.log("Total incorrect : " + totalWrong + ", Marks deducted : " + totalWrong * penalty); 
let totalAttempt = parseInt(totalCorrect) + parseInt(totalWrong); 
console.log("Total attempt : " + totalAttempt); 
console.log("Total not attempt : " + totalNotAttempt); 
console.log("Total question : " + totalNoOfQuestions); 
console.log("Total marks obtained : " + grandTotal + "\n"); 
console.log(" "); 
console.log(" "); 
console.log("Script by Shreyansh");
