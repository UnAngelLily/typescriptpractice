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

// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string];
//     // this marks the tuple time
// } = {
//     name: 'Theo',
//     age: 0,
//     hobbies: ['crying', 'farts'],
//     role: [2, 'baby']
//     // truple where the array holds either strings or numbers and a around with two
//     // array with strings
// };

// person.role.push('admin');
// push is an exception
// person.role[1] = 10;

// person.role = [0, 'admin', 'user'];

// let favoriteActivities: any[];
// favoriteActivities = ['screaming', 'blowing bubbles with your mouth']
// // better syntax
// console.log(person.name);

// for (const hobby of person.hobbies) {
//     console.log(hobby.toUpperCase());
    // allows to add string attributes because hobby and activites are set up to be strings via the array with strings
// }
// nested objects

// const product = {
//     id: 'abc1',
//     price: 12.99,
//     tags: ['great-offer', 'hot-and-new'],
//     details: {
//         title: 'Red Carpet',
//         description: 'A great carpet - almost brand-new!'
//     }
// }

// // type of the object
// {
//     id: string;
//     tags: string [],
//     details: {
//         title: string;
//         descript: string;
//     }
// }


// ============= enum ================
// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

// enum Role {ADMIN, READ_ONLY, AUTHOR};
// // enum is a custom type so convention is to start with captial, often you'll see enums with all-uppercase values but that's not a must-do. You can go with any value names.
// // call assign the role with a different numbering than 0,1,2 etc... 
//     // enum Role { ADMIN = 5, READ_ONLY, AUTHOR }' this becomes 5, 6, 7 instead or you can assign all of them or text or even mix it with a string
//     // enum Role { ADMIN = 'ADMIN', READ_ONLY = 100, AUTHOR = 'AUTHOR };
// const person = {
//     name: 'Maximilian',
//     age: 30,
//     hobbies: ['Sports', 'Cooking'],
//     role: Role.ADMIN
// };

// let favoriteActivities: string [];
// favoriteActivities = ['Sports'];

// console.log(person.name);

// for (const hobby of person.hobbies) {
//     console.log(hobby.toUpperCase());
// }

// if (person.role === Role.AUTHOR) {
//     // this is refering the enum which assigns labels to numbers.
//     console.log('is author');
// }

// ==================== enum ===============================

const BABY = 0;
const READ_ONLY = 1;
const AUTHOR = 2;

const person: {
    name: 'Theo',
    age: 0,
    hobbies: ['farting', 'crying'],
    role: 'BABY'
};

let favoriteActivities: string [];
favoriteActivities = ['Playing'];

console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
};
    
if (person.role === 'BABY'){
    console.log('is the baby');
    
}
