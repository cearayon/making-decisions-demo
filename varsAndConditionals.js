/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between Jon Snow and
    Jamie Lannister.
*/ 

let kenobiAttack = 20
let skywalkerAttack = 30

if (skywalkerAttack > kenobiAttack){
    
    
    console.log("Anakin has a better attack than Kenobi");

} else if (kenobiAttack > anakinAttack){
    
    console.log("Kenobi has a better attack than Anakin");
} else {
    console.log("Anakin and Kenobi have the same attack")
}

let kenobiHealth = 100

let kenobiDefense = 0

if(kenobiHealth > skywalkerAttack){
    kenobiHealth -= skywalkerAttack
    console.log(`Kenobi's health is now ${kenobiHealth}`)
} else {
    console.log("Kenobi was slain")
}

kenobiDefense += 25
let damage = skywalkerAttack - kenobiDefense

for (let i = 0; i < 5; i++){
    kenobiHealth -= damage
    console.log(`Kenobi's health is now ${kenobiHealth}`)
}

while( kenobiHealth > 0){
    kenobiHealth -= damage
    if (kenobiHealth > 0){
        console.log(`Kenobi's health is now ${kenobiHealth}`)
    } else {
        console.log(`Kenobi has been slain`);
    }
}