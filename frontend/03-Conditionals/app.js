//Write a JavaScript program to check whether a given alphabet is a vowel or a consonant using if-else statements.
let char = 'A';

if(char == 'a'){
    console.log("vowel")
}
else if(char == 'e'){
    console.log("vowel")
}
else if(char == 'i'){
    console.log("vowel")
}
else if(char == 'o'){
    console.log("vowel")
}
else if(char =='u'){
    console.log("vowel")
}
else{
    console.log("consonant")
}
//next level checkiing whether
let chars = '5'
chars =chars.toLowerCase()
if(char >= 'a' &&chars <= 'z'){
    if(
       chars == 'a' ||
       chars == 'e' ||
       chars == 'i' ||
       chars == 'o' ||
       chars == 'u' 

    )
    {
        console.log("Vowel")
    }
    else{
        console.log("Consonant")
    }
}
    else{
        console.log("Invalid number")
    }


// just try to make calculator using uperator
let num1 = Number(prompt("Enter first number"));
let oprtr = prompt("enter operator)(+,-,*,/):");
let num2 = Number(prompt("Enter second number"));
let result;
if( oprtr ==="+") result = num1 + num2;
else if(oprtr ==="-") result = num1 - num2;
else if(oprtr ==="*") result = num1 * num2;
else if(oprtr ==="/") result =num2 !== 0 ? num1 / num2: "Can't devide by zero" ;
else result = "Invalid operator"
console.log("result:" , result)


let day = "tuesday";

switch (day) {
    case "Monday":
        console.log("Start of the week");
        break;
    case "Friday":
        console.log("Weekend coming!");
        break;
    case "Saturday":
    case "Sunday":
        console.log("It's the weekend!");
        break;
    default:
        console.log("Midweek day");
}


// Create a mini biodata program using variables and template literals.
let name = 'Suhail Khan'
console.log(`Name: ${name}`)
let age = 22;
console.log(`Age:${age}`)
let city = 'Mahrajganj'
console.log(`City:${city}`)