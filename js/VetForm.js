var usernameVet = sessionStorage.getItem("username") 
var urlVet =
  "http://localhost:8080/FourPawsCitizens-LazarusAES-256-1.0-SNAPSHOT/api/vets/"+usernameVet;
var formVet = document.getElementById("formVet");
console.log(usernameVet)
if (usernameVet != null) {
  formVet.addEventListener("submit", function (e) {
    e.preventDefault();
    var data = new FormData(formVet);
    fetch(urlVet, {
      method: 'POST',
      body: JSON.stringify({
        "name": data.get('name'),
        "address": data.get('address'),
        "neighborhood": data.get('neighborhood'),
      }),
      headers: {
        'Content-type': 'application/json',
      },
    })
      .then((response) => response.text())
      .then((json) => console.log(json));
  })
}

