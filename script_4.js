const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];
console.log("-------------------")
console.log("Filtre dans cette liste les entrepreneurs qui sont nés dans les années 70 (70-79) ");
  for(let index in entrepreneurs){
      if ((entrepreneurs[index].year)>1969 && (entrepreneurs[index].year)<1980){
        console.log(entrepreneurs[index]);
      }
   }

console.log("-------------------")
console.log("Sors une array qui contient le prénom et le nom des entrepreneurs ");
   entrepreneursarray = []
   for(let index in entrepreneurs){
        entrepreneursarray.push(entrepreneurs[index].first + " " + entrepreneurs[index].last)
   }
    console.log(entrepreneursarray);

console.log("-------------------")
console.log("Quel âge aurait chaque inventeur aujourd'hui ?");
   currentyear = new Date().getFullYear();
   
   for(let index in entrepreneurs){
        age = currentyear - entrepreneurs[index].year 
        console.log(entrepreneurs[index].first + " " + entrepreneurs[index].last + " aurait " + age + " ans");
   }

console.log("-------------------")
console.log("Trie les entrepreneurs par ordre alphabétique du nom de famille.");
  /* entrepreneursarray = []
   for(let index in entrepreneurs){
        entrepreneursarray.push(entrepreneurs[index].first + " " + entrepreneurs[index].last)
   }*/
  //console.log(entrepreneurs.sort(function(entrepreneur){ return entrepreneur.last}));
  function compare(a, b) {
    const lastA = a.last;
    const lastB = b.last;

    let comparison = 0;
    if (lastA > lastB) {
      comparison = 1;
    } else if (lastA < lastB) {
      comparison = -1;
    } // ou lastA.localeCompare(lastB)
  return comparison;
  }

console.log(entrepreneurs.sort(compare);



    
    

