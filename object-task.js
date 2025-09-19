// task 1
const colors = {
    red: "#ff0000",
    green: "#00ff00",
    blue: "#0000ff",
    "golden rod": '#daa520'
};

// console.log(colors["golden rod"]); 


// task 2
const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
};

car["passenger capacity"] = 5;

// console.log(car); 



// task 3
// const student = {
//     name: "Hamim Sakep",
//     id: 5421,
//     physics: {
//         subject: "HSC Physics",
//         author: "Shahjahan Tapan",
//         marks: 30
//     }
// };

// console.log(student.physics.marks); 



// task 4
let student = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
};

// const property = Object.keys(student); 
// console.log(property.length); 



// task 5
const person = {
    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true
}

for(const key in person) {
    const value = person[key]; 
    console.log("key:", key, "|", "type:", typeof person[key]); 
}