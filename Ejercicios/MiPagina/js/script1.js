document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario").addEventListener('submit', validarFormulario); 
});
function validarFormulario(evento) {
    evento.preventDefault();
    var usuario = document.getElementById('usuario').value;
    if(usuario.length == 0) {
        alert('No has escrito nada en el usuario');
        return;
    }
    var clave = document.getElementById('clave').value;
    if (clave.length < 6) {
        alert('La clave no es válida, prueba con una más larga.');
        return;
    }
    var email = document.getElementById('email').value;
    if(email.length == 0) {
        alert('Correo no puede ser vacío');
        return;
    }
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/.test(email)){
        alert("La dirección de email " + email + " es correcta.");
    } else {
        alert("La dirección de email es incorrecta.");
    }    
    this.submit();
}