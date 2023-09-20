console.log("Hey");

function greet() {
    let username = prompt("What is your name?");
    document.write("Hi o/, " + username,);
}
greet()


let answer1 = confirm('Are you raedy for some reading')
// = (assignment operator)
// == (only check value - equality checking)
// === (check value and data type - equality checking)

if (answer1 === true) {
    console.log('You are ready to read!! ^-^')
}  else (answer2 === false) 
{
    console.log('No? Too bad MUAHAHAHAHA!!! >:D')
} 

let first = true;
let second = false;
let third = false

if (first && third)  {
    console.log('first and second were both true')
} else if (first || second)  {
    console.log('first or second were true')
} else if (third)  {
    console.log ('second and third are false, but the first is true')
}  else {
    console.log('Yeah I dunno whats going on now >->????????')
}

let color = prompt('Hey, what color do you like?')

console.log(color);
console.log(color.toLowerCase())

switch (color.toLowerCase()) {
    case 'x':
    case 'blue':
        console.log('Your favorite color was blue')
        break;
    case 'yellow':
        console.log('Your favorite color was yellow')
        break;
    default:
        console.log('And that color iiiissss >->??????????')
}

// switch case is like another way of writing if else statements
// if (color === 'blue') {
//     console.log('fav was blue')
// } else if (color === 'yellow') {
//      console.log('Your fav is yellow')
// }

function askAge() {
    let age = prompt("And you are how old?")
    
    console.log(age);
    
    if (age <=10) {
    } console.log('Damn, you young O-O;;;;;')
    if (age <=15) {
    } console.log('Ohh okay, you at a decent young age ^-^')
    if (age <=21) {
    } console.log('Ohh nice, you are a healthy young and/or not so young adult ^-^')
    
    }

    function askTime() {
        let time = prompt("What time is it?  (0-23)");
        let message;
    
        if (time <= 11) {
        message = ", Good Morning, welcome to the";
        } else if  (time <= 17) {
        message = ", Good Afternoon, welcome to the ";
        } else if  (time = 23) {
        message = ", Good Evening, welcome to the ";
        }
    
        document.write(message);
    }
      askTime()