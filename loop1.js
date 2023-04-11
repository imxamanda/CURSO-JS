//Entendendo o for loop

for (let index = 0; index < 10; index++) {
    console.log(index);
}

//UTILIZANDO O FOR LOOP COM LISTAS
 const cars = ["Ferrari", "Tesla", "Mercedes"];

for (let i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}

//ENTENDENDO O FOR OF LOOP

for (let car of cars) {
    console.log(car);
}

//ENTENDENDO forEaCH LOOP

cars.forEach(function(car){
    console.log(index);
    console.log(car);
})