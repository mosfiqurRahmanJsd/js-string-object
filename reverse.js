const sentence = 'I want to learn web development';


let reverse = '';
for (const letter of sentence) {
    // reverse = letter + reverse; 
}

// console.log(reverse); 


// let reverseFor = '';
// for (let i = 0; i < sentence.length; i++) {
//     const letter = sentence[i]; 
//     reverseFor = letter + reverseFor;
// }

// console.log(reverseFor); 


// shortcut
const web = 'I am learning web development'; 
const rev = web.split('').reverse().join(''); 
console.log(rev); 

