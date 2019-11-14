answer = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");

b = 1
a = "#"
c = " "
while (b <= answer){
	console.log(c.repeat(answer - b) + a.repeat(b))
	b++;
}