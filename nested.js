const school = {
    name : 'HM tola school', 
    class: ['3', '4', 5],
    events: ['science fair', 'bijoy dibos', '21 feb'], 
    unique:{
        color: 'blue', 
        result: {
            gpa : 5, 
            merit: 'top'
        }
    }
}

school.unique.result.merit = 'top top top most'

console.log(school.unique.result.merit); 

console.log(school.events[1]); 