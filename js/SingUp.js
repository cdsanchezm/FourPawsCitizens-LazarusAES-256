

console.log('funciona');
var formulario = document.getElementById('formSing');
var radioB1 = document.getElementById('inlineRadio1');
var radioB2 = document.getElementById('inlineRadio2');
var radioB3 = document.getElementById('inlineRadio3');

formulario.addEventListener('submit', function(e){
        e.preventDefault();
        var data = new FormData(formulario);
        console.log(data.get('userName'));
        console.log(data.get('password'));
        console.log(data.get('RepeatPassword'));
        console.log(data.get('mail'));
        
})