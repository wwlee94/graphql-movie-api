import {getMovies, getById, addMovie, deleteMovie} from './db';

const resolvers = {
    Query: {
        movies: getMovies,
        movie: (_, args) => getById(args.id),
        // 위와 동일
        // movie: (_, {id}) => getById(id),
    },
    Mutation: {
        addMovie: (_, {name, score}) => addMovie(name, score),
        deleteMovie: (_, {id}) => deleteMovie(id)
    }
};
export default resolvers;