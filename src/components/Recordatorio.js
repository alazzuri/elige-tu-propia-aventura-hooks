import React from "react";

/*
Hola otra vez...

Ahora que ya tenemos el componente Opciones, nos ocuparemos de este componente,
el que se encargará de mostrar la selección anterior de la persona, así como el 
historial de selecciones.

Para ayudarte con esta tarea, te dejamos a continuación la estructura del JSX que deberá 
retornar el componente. No te olvides de prestar atención a aquella información dinámica
que el componente deberá recibir como "props".

JSX:

<div className="recordatorio">
    <h3>Selección anterior: {...esto debería venir desde otro lado...}</h3>
    <h4>Historial de opciones elegidas: </h4>
    <ul>{...esto también...}</ul>
</div>

*/

// ESCRIBE TU COMPONENTE A COTNINUACION (NO TE OLVIDES DE EXPORTARLO!!)

const Recordatorio = (props) => (
  <div className="recordatorio">
    <h3>Selección anterior: {props.seleccionPrevia}</h3>
    <h4>Historial de opciones elegidas: </h4>
    <ul>{props.historial}</ul>
  </div>
);

export default Recordatorio;
