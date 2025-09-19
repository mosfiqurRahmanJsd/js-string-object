const phone = {
    brand: 'vivo', 
    price: 25500, 
    color: 'green', 
    camera: '64mp', 
    display: 'Super Amuled'
}

// for(const prop in phone) {
//     console.log(prop); 
//     console.log(phone[prop]); 
// }


const keys = Object.keys(phone); 
console.log(keys); 
for(const key of keys) {
    console.log(key, ':',  phone[key]); 
}