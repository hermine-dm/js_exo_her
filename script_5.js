const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];


console.log("-------------------");
console.log("Est-ce que tous les livres ont été au moins empruntés une fois ?");
    
      if (books.map(function(book){return book.rented > 0}).includes(false)) {console.log("Au moins un livre n'a pas été emprunté")}
      else {console.log("Oui ils ont tous été empruntés au moins une fois")};

console.log("-------------------");
console.log("Quel est livre le plus emprunté ?");
    books.filter(function(book){return book.rented == Math.max(...(books.map(function(book){return book.rented})))}).forEach(x => console.log(`${x.title} a été emprunté le plus de fois soit ${x.rented} fois` ));

console.log("-------------------");
console.log(" Quel est le livre le moins emprunté ?");
    books.filter(function(book){return book.rented == Math.min(...(books.map(function(book){return book.rented})))}).forEach(x => console.log(`${x.title} a été emprunté le moins de fois soit ${x.rented} fois` ));
  
console.log("-------------------");
console.log("Trouve le livre avec l'ID: 873495");
    console.log(books.filter(function(book){return book.id == 873495})[0].title);

console.log("-------------------");
console.log("Supprime le livre avec l'ID: 133712");
    newBooks = books.filter(function(book){if(book.id != 133712){return book}})
    console.log(newBooks)

console.log("-------------------");
console.log("Trie les livres par ordre alphabétique (sans celui avec l'ID 133712 car il est supprimé)");
  function compare(a, b) {
    const lastA = a.title;
    const lastB = b.title;

    let comparison = 0;
    if (lastA > lastB) {
      comparison = 1;
    } else if (lastA < lastB) {
      comparison = -1;
    } // ou lastA.localeCompare(lastB)
  return comparison;
  }

console.log(newBooks.sort(compare));