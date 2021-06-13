

console.log('funciona');
var formulario = document.getElementById('formSing');
var RadioB = document.getElementsByName('inlineRadioOptions');
var RadioV;

formulario.addEventListener('submit', function(e){
    e.preventDefault();
    var data = new FormData(formulario);
    console.log(data.get('userName'));
    console.log(data.get('password'));
    console.log(data.get('RepeatPassword'));
    console.log(data.get('mail'));
  
      for(i=0; i<RadioB.length; i++){
          if(RadioB[i].checked){
             RadioV = RadioB[i].value;
          }
      }
      
      if(RadioV == "Propietario"){
       location = ("/components/Property.html");  
      }else if (RadioV == "Veterinario") {
        location = ("/components/VeterinatiS.html");
      } else if (RadioV == "Funcionario") {
        location = ("/components/OfficialF.html");
      }
    
})
