let circularProgress = document.querySelector(".circular-progress"),
    progressValue = document.querySelector(".progress-value");

let progressStartValue = 0,    
    progressEndValue = 75,    
    speed = 10;
    
let progress = setInterval(() => {
    progressStartValue++;

    progressValue.textContent = `${progressStartValue}%`
    circularProgress.style.background = `conic-gradient(#7d2ae8 ${progressStartValue * 3.6}deg, #ededed 0deg)`

    if(progressStartValue == progressEndValue){
        clearInterval(progress);
    }    
}, speed);



let circularProgress2 = document.querySelector(".circular-progress2"),
progressValue2 = document.querySelector(".progress-value2");

let progressStartValue2 = 0,    
progressEndValue2 = 65;    
speed2 = 10;

let progress2 = setInterval(() => {
progressStartValue2++;

progressValue2.textContent = `${progressStartValue}%`
circularProgress2.style.background = `conic-gradient(#7d2ae8 ${progressStartValue * 3.6}deg, #ededed 0deg)`

if(progressStartValue2 == progressEndValue2){
    clearInterval(progress2);
}    
}, speed2);


let circularProgress3 = document.querySelector(".circular-progress3"),
progressValue3 = document.querySelector(".progress-value3");

let progressStartValue3 = 0,    
progressEndValue3 = 60;    
speed3 = 10;

let progress3 = setInterval(() => {
progressStartValue3++;

progressValue3.textContent = `${progressStartValue}%`
circularProgress3.style.background = `conic-gradient(#7d2ae8 ${progressStartValue * 3.6}deg, #ededed 0deg)`

if(progressStartValue3 == progressEndValue3){
    clearInterval(progress3);
}    
}, speed3);



let circularProgress4 = document.querySelector(".circular-progress4"),
progressValue4 = document.querySelector(".progress-value4");

let progressStartValue4 = 0,    
progressEndValue4 = 50;    
speed4 = 10;

let progress4 = setInterval(() => {
progressStartValue4++;

progressValue4.textContent = `${progressStartValue}%`
circularProgress4.style.background = `conic-gradient(#7d2ae8 ${progressStartValue * 3.6}deg, #ededed 0deg)`

if(progressStartValue4 == progressEndValue4){
    clearInterval(progress4);
}    
}, speed4);



let circularProgress5 = document.querySelector(".circular-progress5"),
progressValue5 = document.querySelector(".progress-value5");

let progressStartValue5 = 0,    
progressEndValue5 = 55,    
speed5 = 10;

let progress5 = setInterval(() => {
progressStartValue5++;

progressValue5.textContent = `${progressStartValue}%`
circularProgress5.style.background = `conic-gradient(#7d2ae8 ${progressStartValue * 3.6}deg, #ededed 0deg)`

if(progressStartValue5 == progressEndValue5){
    clearInterval(progress5);
}    
}, speed5);



let circularProgress6 = document.querySelector(".circular-progress6"),
progressValue6 = document.querySelector(".progress-value6");

let progressStartValue6 = 0,   
progressEndValue6 = 60;    
speed6 = 10;

let progress6 = setInterval(() => {
progressStartValue6++;

progressValue6.textContent = `${progressStartValue}%`
circularProgress6.style.background = `conic-gradient(#7d2ae8 ${progressStartValue * 3.6}deg, #ededed 0deg)`

if(progressStartValue6 == progressEndValue6){
    clearInterval(progress6);
}    
}, speed6);