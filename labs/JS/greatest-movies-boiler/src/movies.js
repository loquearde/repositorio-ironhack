// import { movies } from "./data.js";
// console.log(movies);

// COMANDO DE NODE PARA VER RESULTADOS:
// node movies.js

//Iteracion 1
// funcion tipo flecha que aceptara un parametro
// porque el param va a ser el array de datos que queremos apuntar.
const getAllDirectors = (moviesArray) => {
  // Usamos el paramatero para iterar y crear un nuevo copia del array en base al metodo map y segmentamos por algo especifico dentro del map mediante una expresion que se encarga de llamar al director.
  const rawList = moviesArray.map((movie) => movie.director);
  // usamos la variable de arriba en conjunto con el metodo filter que le pasamos 2 parametros, uno para apuntar al nombre del director y el segundo es el numero de# del director en el array y comparamos en base a la primera instancia que aparece el nombre del director con las otras veces que aparece para poder filtrar
  const cleanList = rawList.filter(
    (director, numeroDePocisionDirectorEnElArray) =>
      rawList.indexOf(director) === numeroDePocisionDirectorEnElArray
  );
  // returnamos la variable que queremos usar :)
  return cleanList;
};
console.log("1. Clean list:");
console.table(getAllDirectors(movies));

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
// function getAllDirectors(moviesArray) {}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const allSpielbergMovies = moviesArray.filter(
    (movieItem) => movieItem.director === "Steven Spielberg"
  );
  const drama = allSpielbergMovies.filter((dramaItem) =>
    dramaItem.genre.includes("Drama")
  );
  return drama.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  let totalScore = 0;
  moviesArray.forEach((element) => {
    if (element.score) totalScore += element.score;
  });
  const average = parseFloat((totalScore / moviesArray.length).toFixed(2));
  if (moviesArray.length === 0) return 0;
  return average;
}
console.log(scoresAverage(movies));

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramaMovies = moviesArray.filter((dramaItem) =>
    dramaItem.genre.includes("Drama")
  );
  return scoresAverage(dramaMovies);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const copyOfMovies = moviesArray.map((movie) => movie);

  copyOfMovies.sort((a, b) => {
    if (a.year > b.year) return a.year - b.year;
    if (a.year < b.year) return a.year - b.year;
    else return a.title.localeCompare(b.title);
  });
  return copyOfMovies;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  let movieTitlesAscending = moviesArray
    .sort((a, b) => (a.title > b.title ? 1 : -1))
    .map((movie) => movie.title)
    .slice(0, 21);

  return movieTitlesAscending;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
