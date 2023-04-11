//ENTENDENDO O WHILE LOOP

let index = 0;

while (index <10) {
    console.log("indx é menor do que 10");
    //index = index + 1;
    //index += 1
    //msm coisa que acima
    index++; 
}

//ENTENDENDO O FOR IN LOOP
//não é muito rápido, então não usam muito
const person = {
    name: 'Jane',
    age:21,
};

for (property in person) {
    console.log(person[property]);
}