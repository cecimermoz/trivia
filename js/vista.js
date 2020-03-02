class Vista{
    constructor(jugador, pregunta){
        this.jugador = jugador,
        this.num_preg = $("#num-preg");
        this.text_preg = $("#text-preg");
        this.rta1 = $("#rta1");
        this.rta2 = $("#rta2");
        this.rta3 = $("#rta3");
        this.juega = $("#juega");
    }
    mostrarPregunta(pregunta){
        this.text_preg.html(pregunta.texto);
        this.rta1.html(pregunta.respuesta.uno.texto);
        this.rta2.html(pregunta.respuesta.dos.texto);
        this.rta3.html(pregunta.respuesta.tres.texto);
    }
    datosUser(){
    jugador.jugadorActual();
    this.juega.html(jugador.nombre);
    }
}