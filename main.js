//ENTENDENDO O MAP
const numbers = [1, 2, 3, 4, 5];

const numberMultipliedByTwo = numbers.map(function(number){
    return number * 2;
})

//console.log(numberMultipliedByTwo); -comentario para poder rodar o filter

//ENTENDENDO O FILTER
 
const ages = [8,13 ,27, 30, 22, 40]

const evenAges = ages.filter(function(age){
    return age % 2 === 0;
})

console.log(evenAges);