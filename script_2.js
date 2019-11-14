// Un prompt s'affiche avec la question suivante

answer = prompt("De quel nombre veux-tu calculer la factorielle ?");
//console.log(typeof answer);
//console.log(Number(answer));
/*while (Number(answer) = NaN){
	answer = prompt("De quel nombre veux-tu calculer la factorielle ?");
}*/
// Utilisateur rentre un nombre (par ex 4)
if (answer == 0) {
        calcul = 1; 
    } else { 
    	calcul = 1;
    	while (answer >= 1){
    		calcul = calcul * answer
    		answer--;
    	}
    }
// Dans la console le résultat suivant est affiché
console.log(`Le résultat est : ${calcul}`);