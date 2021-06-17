var urlO =
  "http://localhost:8080/FourPawsCitizens-LazarusAES-256-1.0-SNAPSHOT/api/owners";
var formOwner = document.getElementById("formOwner");
console.log(sessionStorage.getItem('username'));

formOwner.addEventListener("submit", function (e) {
  e.preventDefault();
  var data = new FormData(formOwner);
   
  fetch(urlO, {
    method: 'POST',
          
          
    body: JSON.stringify({
      "username":data.get('userName'),
      "name":data.get('nameO'),
      "address":data.get('addressO'),
      "neighborhood": data.get('neigborhoodO'),
      
       }),
  
       headers: {
        'Content-type': 'application/json',
      },
   
  })
  
    .then((response) => response.text())
    .then((json) => console.log(json));
  });


