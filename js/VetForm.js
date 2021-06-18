var usernameVet = sessionStorage.getItem("username") 
var passwordVet = sessionStorage.getItem("password")
var emailVet = sessionStorage.getItem("email")
var roleVet = sessionStorage.getItem("role")
var urlVet =
  "http://localhost:8080/FourPawsCitizens-LazarusAES-25-1.0-SNAPSHOT/api/vets/"+usernameVet;
var formVet = document.getElementById("formVet");
console.log(usernameVet)
if (usernameVet != null) {
  formVet.addEventListener("submit", function (e) {
    e.preventDefault();
    var data = new FormData(formVet);
    fetch(urlVet, {
      method: 'POST',
      body: JSON.stringify({
        "username": usernameVet,
        "password": passwordVet,
        "emailVet": emailVet,
        "role": roleVet,
        "name": data.get('name'),
        "address": data.get('address'),
        "neighborhood": data.get('neighborhood'),
      }),
      headers: {
        'Content-type': 'application/json',
      },
    })
      .then((response) => response.text())
      .then((json) => {validate_vet2(json)});
  })
}

//Funcion que lo lleva a la pagina publica

function validate_vet2 (response){
if(response == "vet"){
  alert("su Registro a sido exitoso");
  window.location.href = "/components/veterinary.html"
}else{
  alert("a ocurrido un problema, porfavor verifique su informacion");
  location.reload();
}
}
