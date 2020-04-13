import { getMovies, getById, addMovie, deleteMovie, getSuggestions, getMovie } from './db';

const resolvers = {
    Query: {
        movies: (_, { limit, rating }) => getMovies(limit, rating),
        movie: (_, { id }) => getMovie(id),
        suggestions: (_, { id }) => getSuggestions(id),
        // movie: (_, args) => getById(args.id),
        // 위와 동일
        // movie: (_, {id}) => getById(id),
    },
    // Mutation: {
    //     addMovie: (_, {name, score}) => addMovie(name, score),
    //     deleteMovie: (_, {id}) => deleteMovie(id)
    // }
};
export default resolvers;
