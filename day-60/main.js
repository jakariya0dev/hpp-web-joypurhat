function checkCharecter(){

    let char = document.getElementById('textField').value;


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

    if(char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u' || char == 'A' || char == 'E' || char == 'I' || char == 'O' || char == 'u'){
        alert('Vowel')
    }
    else{
        alert('Consonant')
    }
}