
var pr = 0;
function formularios(){
    if(document.getElementById('inlineRadio1').checked)
    {
        pr=1;
    }
    else if (document.getElementById('inlineRadio2').checked) {
        pr=2;
    }
    else if (document.getElementById('inlineRadio3').checked) {
        pr = 3;
       
    }else {
        alert("es tan amable de escoger una opcion imbecil");
    }   
}


    formularios();

    if(pr == 1){
        document.getElementById('buttonN').addEventListener("click", () => {
            
            location = ("/components/Property.html");
          
    }); 
    }else if(pr == 2){
        document.getElementById('buttonN').addEventListener("click", () => {
         alert("funciono");
        location = ("/components/VeterinatiS.html");
    }); 
    }else if(pr == 3){
        document.getElementById('buttonN').addEventListener("click", () => {
             alert("funciono");
            location = ("/components/OfficialF.html");
          
    }); 
    
    }
