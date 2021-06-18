var formulario = document.getElementById('formSing');
var RadioB = document.getElementsByName('inlineRadioOptions');
var RadioV;
var username;
var password;
var email;
let url = 'http://localhost:8080/FourPawsCitizens-LazarusAES-25-1.0-SNAPSHOT/api/user';
var urlIndex = "http://localhost:8080/FourPawsCitizens-LazarusAES-25-1.0-SNAPSHOT/api/user";

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
        var headers = new Headers();

        headers.append('Content-Type', 'text/json');
        headers.append('Authorization', 'Basic ' + btoa(username + ":" + password));
    
            fetch(urlIndex, {
                method: 'GET',
                headers: headers,
            })
                .then(response => response.text())
                .then(response => {
                  console.log(response)
                  if(response == "owner"||response == "official"||response == "vet"){
                    alert("Error! el usuario ya existe!")
                  }else{
                    sessionStorage.setItem("username", username)
                    sessionStorage.setItem("password", password)
                    sessionStorage.setItem("email", email)
                    sessionStorage.setItem("role", RadioV)
                          if(RadioV == "owner"){
                           window.location.href = "/components/officialForm.html"
                          }else if(RadioV == "vet"){
                            window.location.href = "/components/veterinaryForm.html"
                          }else if(RadioV == "official"){
                            window.location.href = "/components/officialForm.html"
                          }
                  }
                });   
      }else{
        alert("Sus contraseñas no coinciden");
        location.reload();
      }


});

