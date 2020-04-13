export let movies = [
    {
        id: 1,
        name: "WOOWON",
        score: 10
    },
    {
        id: 2,
        name: "니콜라스",
        score: 2
    },
    {
        id: 3,
        name: "노마드",
        score: 8
    },
    {
        id: 4,
        name: "이량화",
        score: 9
    }
];

export const getMovies = () => movies;

export const getById = id => {
    const filteredMovie = movies.filter(movie => id === movie.id);
    return filteredMovie[0];
}

export const deleteMovie = id => {
    const cleanMovies = movies.filter(movie => movie.id !== id);
    if(movies.length > cleanMovies.length ){
        movie = cleanMovies;
        return true;
    } else{
        return false;
    }
}