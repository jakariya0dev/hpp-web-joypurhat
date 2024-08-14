
function sayHello(country, username){

    document.write(`Hello, ${country} <br>`);
    document.write(`I am ${username}<br>`);
    document.write('Software Developer<br>');
    document.write('<hr>');

}


sayHello("Bangladesh", 'Jack');
sayHello("India", 'Rose');

let name1 = "Jack";
let roll1 = 12;
let age1 = 20;

let name2 = "Jack";
let roll2 = 12;
let age2 = 20;


const student = {
    firstName: 'Mr. ',
    lastName: 'Jack',
    age: 25,
    roll: 12,
    fullName: function(){
        return this.firstName+this.lastName;
    }
}

document.write(student.fullName());

function btnClicked(){
    // alert('Button Clicked!');

    document.getElementById('btn').innerHTML = new Date();
}
