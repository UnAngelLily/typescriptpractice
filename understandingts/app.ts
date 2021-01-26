const person: {
    // key values can be stored in curly brackets
    name: string;
    age: number
} = {
    // {} is typescript's specialized notation for showing an object type instead of 
    // const person: object = 
    name: 'Theo',
    age: 0
};

console.log(person.name);