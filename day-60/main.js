function checkCharecter(){

    let char = document.getElementById('textField').value;

    // switch(char){
    //     case "a" : alert('vowel');
    //     break;
    //     case "e" : alert('vowel');
    //     break;
    //     case "i" : alert("Vowel");
    //     break;
    //     case "o" : alert('vowel');
    //     break;
    //     case "u" : alert('vowel');
    //     break;
    //     default : alert("Consonat");
    // }

    switch(char){
        case "a" || "i" || "o" : alert('vowle');
        break;
        default : alert("Consonant");
    }

    // if(char == 'a') alert("Entered Charecter is Vowel");
    // else if(char == 'e') alert('Entered Charecter is Vowel');
    // else if(char == 'i') alert('Entered Charecter is Vowel');
    // else if(char == 'o') alert('Entered Charecter is Vowel');
    // else if(char == 'u') alert('Entered Charecter is Vowel');
    // else alert('Entered Charecter is Consonant');


    // if(char == 'a') alert("Entered Charecter is Vowel");
    // else if(char == 'e') alert('Entered Charecter is Vowel');
    // else if(char == 'i') alert('Entered Charecter is Vowel');
    // else if(char == 'o') alert('Entered Charecter is Vowel');
    // else if(char == 'u') alert('Entered Charecter is Vowel');
    // else if(char == 'A') alert('Entered Charecter is Vowel');
    // else if(char == 'E') alert('Entered Charecter is Vowel');
    // else if(char == 'I') alert('Entered Charecter is Vowel');
    // else if(char == 'O') alert('Entered Charecter is Vowel');
    // else if(char == 'U') alert('Entered Charecter is Vowel');
    // else alert('Entered Charecter is Consonant');

    // if(char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u' || char == 'A' || char == 'E' || char == 'I' || char == 'O' || char == 'u'){
    //     alert('Vowel')
    // }
    // else{
    //     alert('Consonant')
    // }
}

function checkLeapYear(){

    let year = document.getElementById('year').value;

    if(year % 4 == 0){
        alert("Leap Year");
    }
    else if (year % 400 == 0 && year % 100 != 0){
        alert("Leap Year");
    }

    else{
        alert("Not Leap Year");
    }
}


// Foor Loop

// for(let i = 2; i <= 1000; i=i+2){
//     document.write(`<button>${i}</button>`);
// }

// while loop

// let i = 2;
// while(i <= 1000){
//     document.write(`<button>${i}</button>`);
//     i=i+2;
// }


// do while

let i = 2;
do{
    document.write(`<button>${i}</button>`);
    i=i+2;
}while(i <= 1000);