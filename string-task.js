
// task 1
// const javaScript = 'which A released a more polished browser, Netscape Navigator, in 1994. This quickly became the most-used.'; 

// let count = 0; 
// for(let i = 0; i <= javaScript.length; i++) {
//     const letter = javaScript[i]; 
//     if(letter === 'a') {
//         count = count + 1; 
//     }
// }

// console.log(count); 



// task 2
// const javaScript = 'A which A released a more polished browser, Netscape Navigator, in 1994. This quickly became the most-used.'; 

// let count = 0; 
// for(let i = 0; i <= javaScript.length; i++) {
//     const letter = javaScript[i]; 
//     if(letter === 'A' || letter === 'a') {
//         count = count + 1; 
//     }
// }

// console.log(count); 


// const jsStr = "every single person a. i love you"
// if(jsStr.includes('a') && jsStr.includes('e') && jsStr.includes('i') && jsStr.includes('o') && jsStr.includes('u')) {
//     console.log('Have Vowel'); 
// } else {
//     console.log('no vowel here'); 
// }



// let message = "I X love X  You Bangladesh. X I have Experience. Bangladesh have a extra Person to You"; 

// let removex = message.split('x'); 
// let joiny = removex.join('y'); 
// console.log(joiny); 

// let xVanglam = message.split('X'); 
// let yJoin = xVanglam.join('Y'); 
// console.log(yJoin);



let myString = "Capitalize Every first Letter of each word in a String";

let words = myString.split(' '); 
for(let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1); 
}

const result = words.join(' '); 
console.log(result); 





