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
    if (movieA.year === movieB.year) {
      return movieA.title === movieB.title ? 0 : movieA.title > movieB.title ? 1 : -1;
    } else {
      return movieA.year === movieB.year ? 0 : movieA.year > movieB.year ? 1 : -1;
    }
  })
  return [...orderedArr];
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, genre) {
  let moviesByGenre = array.filter(movie => movie.genre.includes(genre) && movie.score != '');
  let scoreAverage = moviesByGenre
    .reduce((totalScore, movie) => totalScore + movie.score / moviesByGenre.length, 0);
  return scoreAverage;
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {
  return array.map(movie => {
    let regex = /(\d+)/g;
    let result = movie.duration.match(regex);
    let min = result.length == 2 ? (parseInt(result[0]) * 60) + parseInt(result[1]) : (parseInt(result[0]) * 60);
    // return {
    //   title: movie.title,
    //   year: movie.year,
    //   director: movie.director,
    //   duration: min,
    //   genre: movie.genre,
    //   score: movie.score
    // }
    return {...movie, duration: min};
  });
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(array, year) {
  let bestMovieOfYear = array
    .filter(movie => movie.year === year)
    .sort((movieA, movieB) => {
      return movieA.score === movieB.score ? 0 : movieA.score < movieB.score ? 1 : -1;
    });
  return [bestMovieOfYear[0]];
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
