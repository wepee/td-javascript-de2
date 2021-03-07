/*
* Écrire un module qui calcule les intérêts accumulés chaque année pendant 20 ans, par capitalisation d’une
* somme de 100 euros placée en banque au taux fixe de 4,3 %.
*/

let capital = 100

for(let i = 0; i < 20; i++){
    capital = capital * 1.043
}

console.log(capital)
