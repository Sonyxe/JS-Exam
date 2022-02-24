/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri sukuria objektus 3 savybėm ir 1 metodu:

Savybės:
title, director, budget
Metodas: 
wasExpensive() - jeigu filmo budget bus didesnę nei 100 000 000 mln USD, tada gražins true, kiru atveju false 
------------------------------------------------------------------------------------------------------ */
function Movie(title, director, budget) {
  this.title = title;
  this.director = director;
  this.budget = budget;
}
const movies = new Movie("Star Wars", "Rian Johanson", 1633000000);
console.log(movies);

function wasExpensive() {
  if (this.budget > 100000000) {
    return true;
  } else {
    return false;
  }
}
console.log(wasExpensive());
