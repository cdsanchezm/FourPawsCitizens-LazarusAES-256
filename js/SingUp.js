var formulario = document.getElementById('formSing');
var RadioB = document.getElementsByName('inlineRadioOptions');
var RadioV;
var username;
var password ;
var RepeatPassword ;
var mail ;
var role;
var username2;
var password2;
var mail2;
var role2;
let url = 'http://localhost:8080/FourPawsCitizens-LazarusAES-25-1.0-SNAPSHOT/api/user';
 

formulario.addEventListener('submit', function(e){
    e.preventDefault();
    var data = new FormData(formulario);
     username = data.get('userName');
     password = data.get('password');
     RepeatPassword = data.get('RepeatPassword');
     mail = data.get('mail');

      for(i=0; i<RadioB.length; i++){
          if(RadioB[i].checked){
             RadioV = RadioB[i].value;
          }
      }

      if(data.get('password') == data.get('RepeatPassword')){
        fetch(url, {
          method: 'POST',
          
          
          body: JSON.stringify({
            "username":data.get('userName'),
            "password":data.get('password'),
            "email":data.get('mail'),
            "role": RadioV,
            
             }),
        
             headers: {
              'Content-type': 'application/json',
            },
         
        })
        
          .then((response) => response.text())
          .then((json) => {validate(json)});
        
      }else{
        alert("andres es gay");
        location.reload();
      }

  
    
  

});


function validate(response){
  if(response.includes("ha sido creado")){
          if(response.includes("owner")){
           window.location.href = "/components/Property.html"
          }else if(response.includes("vet")){
            window.location.href = "/components/VeterinatiS.html"
          }else if(response.includes("official")){
            window.location.href = "/components/OfficialF.html"
          }
  }else{
    alert("El nombre de usuario ya existe, por favor escoja uno nuevo");
    location.reload();
  }
  
}



