import fetch from "node-fetch";
const API_URL = "https://yts.mx/api/v2/list_movies.json?limit=50&minimum_rating=9";

export const getMovies = (limit, rating) => {
    fetch(`${API_URL}`)
    .then(res = res.json())
    .then(json => json.data.movies);
}

// export const getById = id => {
//     const filteredMovie = movies.filter(movie => id === movie.id);
//     return filteredMovie[0];
// }

// export const deleteMovie = id => {
//     const cleanMovies = movies.filter(movie => movie.id !== id);
//     if(movies.length > cleanMovies.length ){
//         movies = cleanMovies;
//         return true;
//     } else{
//         return false;
//     }
// }

// export const addMovie = (name, score) => {
//     const newMovie ={
//         id: `${movies.length + 1}`,
//         name,
//         score
//     };
//     movies.push(newMovie);
//     return newMovie;
// }