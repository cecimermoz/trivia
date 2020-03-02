/* PREGUNTA {
dificultad = numero,
rta = [
    1: {
        texto: "....",
        bool: booleano,
    }
    2: {
        texto: "....",
        bool: booleano,
    }
    3: {
        texto: "....",
        bool: booleano,
    }
],
puntaje = numero
};

*/
class Jugador {
    constructor(nombre, dni){
        this.nombre = nombre,
        this.dni = dni,
        this.puntaje = 0
    }
    jugadorActual(){
        this.nombre = prompt("Escriba su nombre completo"),
        this.dni = prompt("Y su DNI sin puntos ni comas")
    }
}

class Pregunta {
    constructor(dificultad, puntaje, texto, respuesta){
        this.dificultad = dificultad;
        this.puntaje = puntaje;
        this.texto = texto;
        this.respuesta = respuesta;
    }
}