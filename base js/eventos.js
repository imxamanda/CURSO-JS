//Escutando o evento de envio do formulário
const submitButton = document.querySelector("#submit-button");
const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");

const items = document.querySelector('.items')
const body = document.querySelector('body')

submitButton.addEventListener("click", function (e) {
    e.preventDefault(); //impede o comportamento padrão 
    //console.log(e);
    //console.log("clicked!");

    const nameValue = nameInput.value;
    const emailValue = emailInput.value;
    //console.log(nameValue);



//Escutando o evento de mudança de um input
 
//nameInput.addEventListener("change", function (e) {
//    console.log(e.target.Value);
//})

//Validação simples dos inputs do formulário

if (nameValue === '' || emailValue === ''){
    return alert("Please fill out all the fields!");
} 
//coloca o texto do form dentro dos itens
items.firstElementChild.textContent = nameValue;
items.children[1].textContent = emailValue;


});


myForm.style.background = "red";
body.style.background = "white";
