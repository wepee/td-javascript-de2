/*Réaliser un module permettant de lancer x dé(s) à n faces et d’y mettre un bonus/malus.*/

class dice {
    constructor(n) {
        this.faces = []
        for (let i = 1; i < n + 1; i++) {
            if (i === 1) //condition malus
                this.faces.push({number: i, value: -1})
            else
                this.faces.push({number: i, value: i})
        }
    }

    throw() {
        let i = Math.floor(Math.random() * this.faces.length)
        console.log('*******************************')
        console.log('case : ' + this.faces[i].number)
        console.log('score : ' + this.faces[i].value)
        console.log('*******************************')
    }


}

dices = []

dices.push(new dice(10))
dices.push(new dice(3))
dices.push(new dice(6))
dices.push(new dice(2))

for (let i = 0; i < dices.length; i++){
    console.log('Lancement du dé numero ' + (1 + i))
    dices[i].throw()
}
