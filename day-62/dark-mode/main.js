let firstElem = document.getElementById('first');
let secondElem = document.getElementsByTagName('h2');
let thirdElem = document.getElementsByClassName('third');

// console.log(thirdElem)

// secondElem[0].innerHTML =`<u> 2nd Heading </u>`;
// secondElem[0].innerText =`<u> 2nd Heading </u>`;

thirdElem[0].align = "right";

firstElem.style.backgroundColor = "red"

// console.log(secondElem);

let isDarkModeOn = false;

function changeMode(){

    isDarkModeOn = !isDarkModeOn;

    // document.body.style.backgroundColor = "black";
    // document.body.style.color = "white";
    // document.getElementById('modeBtn').style.color = 'white';

    if(isDarkModeOn){
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        document.getElementById('modeBtn').style.color = 'black';
    }
    else{
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        document.getElementById('modeBtn').style.color = 'white';
    }
    
    
}


let clicked = 0;
function ChangeBgColor(){

    clicked++;

    if(clicked === 1){
        document.body.style.backgroundColor = "magenta";
    }

    else if(clicked === 2){
        document.body.style.backgroundColor = "green";
    }

    else if(clicked === 3){
        document.body.style.backgroundColor = "yellow";
    }
    else{
        clicked = 0;
    }
}