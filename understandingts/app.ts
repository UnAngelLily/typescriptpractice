// const person: {
//     // key values can be stored in curly brackets
//     name: string;
//     age: number;
// } = {
    // {} is typescript's specialized notation for showing an object type instead of 
    // const person: object = 
//     name: 'Theo',
//     age: 0
// };

const person = {
    name: 'Theo',
    age: 0
    hobbies: ['crying', 'making fart noises with your mouth']
};
// better syntax
console.log(person.name);
// nested objects

const product = {
    id: 'abc1',
    price: 12.99,
    tags: ['great-offer', 'hot-and-new'],
    details: {
        title: 'Red Carpet',
        description: 'A great carpet - almost brand-new!'
    }
}

// type of the object
{
    id: string;
    tags: string [],
    details: {
        title: string;
        descript: string;
    }
}