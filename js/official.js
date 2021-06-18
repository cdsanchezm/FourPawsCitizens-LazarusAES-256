var username = sessionStorage.getItem("username")
var url2 =  "http://localhost:8080/FourPawsCitizens-LazarusAES-25-1.0-SNAPSHOT/api/officials/" + username + "/getOwners"; 
var url1 =  "http://localhost:8080/FourPawsCitizens-LazarusAES-25-1.0-SNAPSHOT/api/officials/" + username + "/getOwners"; 

//get data from api for table 2 
fetch(url1)
  .then(response => response.json())
  .then(json =>
    tablaListado=$("#tabla1").DataTable({
        "data":json,
        "columns":[
            {"data":"petId"},
            {"data":"microship"},
            {"data":"name"},
            {"data":"species"},
            {"data":"race"},
            {"data": "size"},
            {"data": "sex"},
            {"data" : ""}
        ],
        "columnDefs": [ {
          "targets": 4,
          "data": null,
          "defaultContent": "2"
      } ]
      })

   )


//get data from api for table 2 
fetch(url2)
  .then(response => response.json())
  .then(json =>
    tablaListado=$("#tabla2").DataTable({
        "data":json,
        "columns":[
            {"data":"ownerId"},
            {"data":"petId"},
            {"data":"neighborhood"},
            {"data":"address"},
            {"data":"microship"}
        ],
        "columnDefs": [ {
          "targets": 4,
          "data": null,
          "defaultContent": "2"
      } ]
      })

   )



