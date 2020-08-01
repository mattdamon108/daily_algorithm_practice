function IDsOfmovies(flightDuration, numMovies, movieDuration) {
  let result = [-1, -1];
  for (let i = 0; i < numMovies; i++) {
    if (movieDuration[i] > flightDuration - 30) {
      continue;
    }
    for (let j = numMovies - 1; j > i; j--) {
      if (movieDuration[i] + movieDuration[j] === flightDuration - 30) {
        if (
          Math.max(result[0], result[1]) <
          Math.max(movieDuration[i], movieDuration[j])
        ) {
          result = [i, j];
        }
      }
    }
  }
  return result;
}

module.exports = IDsOfmovies;
