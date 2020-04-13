import {people, getById} from './db';

const resolvers = {
    Query: {
        people: () => people,
        person: (_, args) => getById(args.id)
    }
};
export default resolvers;