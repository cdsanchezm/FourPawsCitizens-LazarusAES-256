var usernameOfficial = sessionStorage.getItem("username");
var passwordOfficial = sessionStorage.getItem("password");
var emailOffical = sessionStorage.getItem("email");
var roleOfficial = sessionStorage.getItem("role");
var urlOf =
  "http://localhost:8080/FourPawsCitizens-LazarusAES-25-1.0-SNAPSHOT/api/officials/" +
  usernameOfficial;

var OfficialForm = document.getElementById("formOfficial");

if (usernameOfficial != null) {
  OfficialForm.addEventListener("submit", function (e) {
    e.preventDefault();
    var data = new FormData(OfficialForm);

    fetch(urlOf, {
      method: "POST",

      body: JSON.stringify({
        username: usernameOfficial,
        password: passwordOfficial,
        email: emailOffical,
        role: roleOfficial,
        name: data.get('nameOF'),
      }),

      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => response.text())
      .then((json) => console.log(json));
  });
}
