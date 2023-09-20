console.log("Hey");

function greet() {
    let username = prompt("What is your name?");
    document.write("Hi o/, " + username,);
}
greet()

let favFoods = ["chicken niggets", "donner meat", "stand and stuff tacos?"];

let foodAns = prompt("what is one of Dom's favourite foods?").toLowerCase();

if (foodAns === "chicken nuggets") {
    alert("Awesome he does!!!")
}

console.log(color);
console.log(color.toLowerCase())


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