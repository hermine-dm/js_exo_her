answer = prompt("Je t'ecoute");

function botAcne(string){
	speak = ""
	if (string[string.length - 1] == "?"  ){
		speak = "Ouais Ouais..."
	} else if (string != "" && string === string.toUpperCase()){
		speak =   "Pwa, calme-toi..." 
	} else if (string.split(" ").includes("Fortnite")){
		speak =   "on s' fait une partie soum-soum ?"
	}else if (string == ""){
		speak = "t'es en PLS ?"
	} else {
		speak = "balek."
	}
	return speak
}


console.log(botAcne(answer))

//Si on lui pose une question (= la phrase finie par "?"), le bot répond  ;
//Si on lui hurle trop dessus (= la phrase est 100% en majuscules), le bot répond ;
//Si la phrase que tu prononces contient le mot "Fortnite", le bot répond  ;
//Si on lui envoie un message vide, le bot répond  ;
//Pour tout autre phrase que tu lui envoies, le bot répond  