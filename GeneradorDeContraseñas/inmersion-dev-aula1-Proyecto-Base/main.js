let cantidad = document.getElementById("cantidad");
let boton = document.getElementById("generar");
let contrasena = document.getElementById("contrasena");
let botonli = document.getElementById("limpiar");

const caracteresM = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const caracteresm = "abcdefghijklmnopqrstuvwxyz";
const numeros = "0123456789";
const caracteresEspeciales = "!@#$%^&*()";
const caracteres = caracteresM + caracteresm + numeros + caracteresEspeciales;

function generar() {
    let numeroDigitado = parseInt(cantidad.value);
    console.log(numeroDigitado);
    if (numeroDigitado < 6) {
        alert("La cantidad de caracteres es menor que 6");
        throw new Error();   
    }
    let password = "";
    for (let i = 0; i < numeroDigitado; i++) {
      password += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
  
    contrasena.value = password;
  
    let CaracterEsp = false;
    let Num = false;
    let Mayus = false;
    let Min = false;

    for (let i = 0; i < password.length; i++) {
        if (caracteresEspeciales.includes(password[i])) {
            CaracterEsp = true;
        }
        if (numeros.includes(password[i])) {
            Num = true;
        }
        if (caracteresM.includes(password[i])) {
            Mayus = true;
        }
        if (caracteresm.includes(password[i])) {
            Min = true;
        }
    }

    if (CaracterEsp && Num && Mayus && Min) {
        alert("La contraseña es Muy Segura");
    } else if (Num && Mayus&& Min) {
        alert("La contraseña es Segura"); 
    } else if (Mayus && Min) {
        alert("La contraseña es Debil");
    } else if (Min) {
        alert("La contraseña es Muy Debil");
    }
} 
function limpiar() {
    contrasena.value = "";
}
