let cedula = document.getElementById("cedula");
let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let json = document.getElementById("idjson");
let guardar = document.getElementById("guardar");
let jsonguardar = document.getElementById("cedula");
let mensaje = document.getElementById("mensaje");
let jsontemp = {};
let cedtmp;
let nomtmp;
let aptmp;




const guardarDatos = (ced, nom, ap) => {
    if (ced.lenght >0 && nom.lenght >0 && ap.lenght >0) {

        cedula=ced;
        nombre=nom;
        apellido=ap;

        jsontemp = {
            cedula: cedula,
            nombre: nombre,
            apellido: apellido
        };
        json.inputMode = jsontemp;
        
    } else {
        mensaje.textContent = 'Datos incompletos';
    }
};

const guardarJson = (valor) => {
    if (json.textContent.length == !0) {
        jsontemp = {
            cedula: valor.cedula,
            nombre: valor.nombre,
            apellido: valor.apellido
        };

        cedula.textContent = valor.cedula;
        nombre.textContent = valor.nombre;
        apellido.textContent = valor.apellido;


    } else {
        mensaje.textContent = 'Datos incompletos';
       
    }
};
