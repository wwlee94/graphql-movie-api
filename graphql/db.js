import axios from 'axios';
const BASE_URL = 'https://yts.mx/api/v2';
const LIST_MOVIES_URL = `${BASE_URL}/list_movies.json`;
const MOVIE_DETAILS_URL = `${BASE_URL}/movie_details.json`;
const MOVIE_SUGGESTIONS_URL = `${BASE_URL}/movie_suggestions.json`;

export const getMovies = async (limit, rating) => {
    const {
        data: {
            data: { movies },
        },
    } = await axios(LIST_MOVIES_URL, {
        params: {
            limit,
            minimum_rating: rating,
        },
    });
    return movies;
};

export const getMovie = async (id) => {
    const {
        data: {
            data: { movie },
        },
    } = await axios(MOVIE_DETAILS_URL, {
        params: {
            movie_id: id,
        },
    });
    return movie;
};

export const getSuggestions = async (id) => {
    const {
        data: {
            data: { movies },
        },
    } = await axios(MOVIE_SUGGESTIONS_URL, {
        params: {
            movie_id: id,
        },
    });
    return movies;
};

// Mock 데이터로 구현했던 리졸버
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
