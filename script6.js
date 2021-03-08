/*  Réaliser un module permettant de jouer au jeu du « Plus cher, moins cher », demandant à l’utilisateur de
    deviner un nombre. Dans un second temps, remplacer l’utilisateur par une simple IA.*/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

let x = getRandomInt(100)

console.log(x)

let reponse = -1

while (x !== reponse) {
    rl.question('plus ou moins ? ', (answer) => {
        if (answer > x) {
            console.log("c'est moins")
        } else if (answer < x) {
            console.log("c'est plus")
        } else
            console.log("c'est ça")

        reponse = answer

        rl.close();
    });
}

