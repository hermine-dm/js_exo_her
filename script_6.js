exemple1 = "CCGUCGUUGCGCUACAGC"
exemple2 = "CCUCGCCGGUACUUCUCG"


function tranf(x){
	acide =""
	if (x == "UCU" ||x == "UCC" ||x == "UCA" ||x == "UCG" ||x == "AGU" ||x == "AGC"){
		acide = "Sérine" 
	} else if (x =="CCU" ||x == "CCC" ||x == "CCA" ||x == "CCG"){
		acide =  "Proline"
	} else if (x == "UUG" ||x == "UUA"){
		acide =   "Leucine"
	} else if (x == "UUU" ||x == "UUC"){
		acide =   "Phénylalanine"
	} else if (x == "CGU" ||x == "CGC" ||x == "AGG" ||x == "CGA" ||x == "AGA"||x == "CGG"){
		acide =   "Arginine"
	}else if (x =="UAU" ||x == "UAC"){
		acide =   "Tyrosine"
	} else {
		acide =   "WTF"
	}
	return acide
}

function list(array){
	return array.match(/.{1,3}/g).map(function(x){return tranf(x)}).join("-")
}

console.log("exemple 1 du cours = " + list(exemple1))
console.log("exemple 2 du cours = " + list(exemple2))

answer = prompt("Tu veux tester (utilise que les lettres U-C-G-A?");
console.log("ton ARN donnerait " + list(answer))