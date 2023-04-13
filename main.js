//validando o nome e o email

const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const submitButton = document.querySelector("#submit-button");

const errorMessage = document.querySelector(".msg");
//add o usuário na lista de itens
const items = document.querySelector(".items");

const li = document.createElement("li")

submitButton.addEventListener("click", (e) => {
  e.preventDefault()

  const nameValue = nameInput.value;
  const emailValue = emailInput.value;
//mostrando uma mensagem de erro
  if(nameValue === "" || emailValue === "" ){
   errorMessage.textContent = "Please fill out the fields!";
   errorMessage.classList = "error";
//deixar a mensagem de erro por 3 segundos
   setTimeout(() => {
    errorMessage.textContent = "";
    errorMessage.classList = "";
   },3000);

   return;
  } 
    li.classList = "item";
    li.innerHTML = `Nome: ${nameValue}<br/> Email: ${emailValue}`

    items.appendChild(li);

    nameInput.value = "";
    emailInput.value = "";

})


 // console.log(li);
