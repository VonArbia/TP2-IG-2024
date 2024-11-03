// Selector de los eventos de cada país
const eventosArgentina = document.querySelectorAll('.argentina');
const eventosMexico = document.querySelectorAll('.mexico');

// Hace loop dentro de cada nodo para mostrarlo por default
eventosArgentina.forEach(evento => {
    evento.style.display = 'block';
});

// Hace loop dentro de cada nodo para mostrarlo por default
eventosMexico.forEach(evento => {
    evento.style.display = 'block';
});

// Variable para seleccionar los eventos a mostrar
let lugar = "todos"; // Por default al cargar la página, muestra todos los eventos
let dropdown = document.getElementById("dropdownMenuLink"); // Toma el elemento por su id
dropdown.addEventListener("change", function(){ // Cada vez que cambia, vuelve a tomar el valor
    lugar = dropdown.value;
    mostrarEventos(lugar);
});

// Cambia los displays de los eventos de cada país, según el valor de lugar vigente
function mostrarEventos (lugar) {
    if (lugar == "todos") {
        eventosArgentina.forEach(evento => {
            evento.style.display = 'block';
        });
        eventosMexico.forEach(evento => {
            evento.style.display = 'block';
        });
    }

    if (lugar == "argentina") {
        eventosArgentina.forEach(evento => {
            evento.style.display = 'block';
        });
        eventosMexico.forEach(evento => {
            evento.style.display = 'none';
        });
    }

    if (lugar == "mexico") {
        eventosArgentina.forEach(evento => {
            evento.style.display = 'none';
        });
        eventosMexico.forEach(evento => {
            evento.style.display = 'block';
        });
    }
}