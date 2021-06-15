var urla =
  "http://localhost:8080/FourPawsCitizens-LazarusAES-256-1.0-SNAPSHOT/api/owners";
var formOwner = document.getElementById("formOwner");
var Name;
var Address;
var neighborhood;
var userName2 = username;

formOwner.addEventListener("submit", function (e) {
  e.preventDefault();
  var data = new FormData(formOwner);
  Name = data.get("nameO");
  Address = data.get("addressO");
  neighborhood = data.get("neigborhoodO");
  console.log();
});
