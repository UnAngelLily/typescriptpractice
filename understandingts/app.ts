function add(n1: number, n2: number, showResult: boolean, phrase: string){
// typescript - type inference: type assignments does not need to be listed in lines 17-25 because typescript understands what types are in a certain variable and constant.
    // console.log(typeof number1);
    // if(typeof n1 !== 'number' || typeof n2 !== 'number') {
    //     throw new Error('Incorrect input!');
    // }
    // above is javascript but not typescript, not nescerry to write some much for the code type
    const result = n1 + n2;
    // store the result so that n1 and n2 remain numbers and do not get turned into string and concatenate
    if (showResult) {
        console.log(phrase + result);
    } else {
    return result;
    }
}
// Type Inferece - you don't have to reassign the core type, it detects the type is either a number, boolean, or string
// a const doesn't need to be told again, a let can allow the reassignment and can be allowed anytime if not assigned with the " variable: core type; "
const number1 = 3;
// get Error from line 4 by putting '' around one of the numbers to convert it to a string from an intergre
const number2 = 2.8;
// all numbers are floats by defaults in typescript
const printResult = true;
// can also be let instead of const, example of boolean
const resultPhrase = 'Result is: ';
const result = add(number1, number2, printResult, resultPhrase);
// console.log(result); no longer need with the printResult boolean in place