import {getMovies, getById} from './db';

const resolvers = {
    Query: {
        movies: getMovies,
        movie: (_, args) => getById(args.id),
    },
    Mutation: {
        addMovie: (_, {name, score})
    }
};
export default resolvers;