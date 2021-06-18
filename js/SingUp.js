var formulario = document.getElementById('formSing');
var RadioB = document.getElementsByName('inlineRadioOptions');
var RadioV;
var username;
var password;
var email;
let url = 'http://localhost:8080/FourPawsCitizens-LazarusAES-25-1.0-SNAPSHOT/api/user';

formulario.addEventListener('submit', function(e){
    e.preventDefault();
    var data = new FormData(formulario);
    username = data.get('userName');
    password = data.get('password');
    email = data.get('mail');

      for(i=0; i<RadioB.length; i++){
          if(RadioB[i].checked){
             RadioV = RadioB[i].value;
          }
      }


      if(data.get('password') == data.get('RepeatPassword')){
        
        sessionStorage.setItem("username", username)
        sessionStorage.setItem("password", password)
        sessionStorage.setItem("email", email)
        sessionStorage.setItem("role", RadioV)
              if(RadioV == "owner"){
                console.log(RadioV);
               window.location.href = "/components/Property.html"
              }else if(RadioV == "vet"){
                console.log(RadioV);
                window.location.href = "/components/VeterinatiS.html"
              }else if(RadioV == "official"){
                console.log(RadioV);
                window.location.href = "/components/OfficialF.html"
                }

              
         
      }else{
        alert("El nombre de usuario ya existe");
        location.reload();
      }


});

