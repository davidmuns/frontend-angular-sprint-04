// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result = array.map(movie => movie.director);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  let result = array.filter(movie => movie.director === director);
  return result;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  let movies = getMoviesFromDirector(array, director);
  let averageScore = movies.reduce(
    (acc, movie) => acc + movie.score, 0) / movies.length;
  return parseFloat(averageScore.toFixed(3));
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  const titles = array.map(movie => movie.title);
  const orderedTitles = titles.sort((a, b) => {
      return a === b ? 0 : a > b ? 1 : -1;
  })
  return [...orderedTitles].slice(0, 20);
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  const orderedArr = array.sort((movieA, movieB) => {
      if(movieA.year === movieB.year){
          return movieA.title === movieB.title ? 0 : movieA.title > movieB.title ? 1 : -1;
      }else{
          return movieA.year === movieB.year ? 0 : movieA.year > movieB.year ? 1 : -1;
      }
  })
  return [...orderedArr];
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, genre) {
  let average;
  let acc = 0;
  let items = 0;
  array.map(movie => {
    if(movie.genre.includes(genre) && movie.score != ''){
        items++;
        acc += movie.score;
    }
  })
  average = acc / items;

  return average;
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {

}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
