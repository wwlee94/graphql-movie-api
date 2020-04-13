export const people = [
    {
        id: 1,
        name: "WOOWON",
        age: 19,
        gender: "Male"
    },
    {
        id: 2,
        name: "니콜라스",
        age: 19,
        gender: "Female"
    },
    {
        id: 3,
        name: "노마드",
        age: 31,
        gender: "Male"
    },
    {
        id: 4,
        name: "이량화",
        age: 27,
        gender: "Male"
    }
];

export const getById = id => {
    const filteredPeople = people.filter(person => id === people.id);
    return filteredPeople[0];
}