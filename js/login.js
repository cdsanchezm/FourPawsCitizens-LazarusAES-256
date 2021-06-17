var loginbtn = document.getElementById("login_btn");
var username = document.getElementById("username");
var password = document.getElementById("password");
var form = document.getElementById("loginForm");
var user;
var psw;

var urlIndex = "http://localhost:8080/FourPawsCitizens-LazarusAES-25-1.0-SNAPSHOT/api/owners/" + username;


loginbtn.addEventListener('click', () => {

    sessionStorage.setItem('username', username.value);
    sessionStorage.setItem('psw', password.value);

    user = sessionStorage.getItem('username');
    psw = sessionStorage.getItem('password');

    console.log(user);
    console.log(psw);


})

//se tiene que validar que el usuario exista en la base de datos 

if (user != null) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var data = new FormData(form);
  
      fetch(urlIndex, {
        method: "POST",
  
        body: JSON.stringify({
          username: user,
          password: pwd
        }),
  
        headers: {
          "Content-type": "application/json",
        },
      })
        .then((response) => response.text())
        .then((json) => console.log(json));
    });
  }
  