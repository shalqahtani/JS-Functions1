function printName(){
    console.log("Shahad")
}

printName();

function printAge(birthYear){
    console.log(2024-birthYear);
}
printAge(1993);

function printAgeAndName(birthYear,name){
    console.log(`Hello ${name}you are ${2024-birthYear} years old`);
}
printAgeAndName(2010,"lulu");

function printHello(name,language){
    if(language=="en"){
        console.log(`Hello ${name}`);
    } else if (language=="es"){
        console.log(`Hola ${name}`);
    } else if(language=="tr"){
        console.log(`Merhaba ${name}`);
    } else if(language=="fr"){
        console.log(`Bonjoor ${name}`);
    }
} 

printHello('Anwar', 'es');
function printMax(firistNumber,secondNumber){
    if (firistNumber>secondNumber){
        console.log(firistNumber);
    }else{
        console.log(secondNumber);
    }
} 

printMax(13,5);