const woowon = {
    name: "WOOWON",
    age: 19,
    gender: "Male"
}
const resolvers = {
    Query: {
        person: () => woowon
    }
};
export default resolvers;