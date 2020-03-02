/* Controlador

    jugador = jugador
    preguntas = [preguntas]

*/
const jugador = new Jugador();
const vista = new Vista();
let pregunta = {
    uno: new Pregunta(
        1, 
        100, 
        "1)	Son sujetos del impuesto: ",
        {
            uno: {
                texto: "Las personas humanas domiciliadas en el país y las sucesiones indivisas radicadas en el mismo",
                bool: false,
            },
            dos: {
                texto: "Las personas humanas domiciliadas en el país y las sucesiones indivisas radicadas en el mismo y las personas humanas y sucesiones indivisas radicadas en el exterior",
                bool: true,
            },
            tres: {
                texto: "Las personas humanas y sucesiones indivisas radicadas en el país y en el exterior, las empresas unipersonales y sociedades de hecho",
                bool: false,
            }
        }),
    dos: new Pregunta(
        1, 
        20, 
        "2)	Las personas humanas de nacionalidad extranjera domiciliadas en el país por razones de índole laboral: ",
        {
            uno: {
                texto: "Tributan siempre el impuesto sobre la totalidad de sus bienes en el país y en el exterior",
                bool: false,
            },
            dos: {
                texto: "Tributan exclusivamente sobre los bienes ubicados en el país, si las razones de orden laboral requieren una residencia en el país que no supere los 5 años",
                bool: true,
            },
            tres: {
                texto: "a.	Tributan exclusivamente sobre los viene ubicados en el país",
                bool: false,
            }
        }),
    tres: new Pregunta(
        2, 
        30, 
        "3)	El criterio de vinculación es: ",
        {
            uno: {
                texto: "Domicilio y ubicación de los bienes sujetos",
                bool: false,
            },
            dos: {
                texto: "Residencia",
                bool: true,
            },
            tres: {
                texto: "Ubicación de los bienes del sujeto",
                bool: false,
            }
        }),
};

vista.mostrarPregunta(pregunta.uno);







