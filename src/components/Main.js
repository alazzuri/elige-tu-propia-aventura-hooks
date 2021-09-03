import data from "./data";
import React, { useEffect, useState } from "react";
import Opciones from "./Opciones";
import Recordatorio from "./Recordatorio";

/*
CONSIGNA: La consigna del ejercicio es repetir el ejercicio del primer entregable, 
pero en esta oportunidad lo vamos a pensar y codear utilizando exclusivamente componentes
funcionales y hooks. Para ello, te dejamos una serie de pasos que podrás utilizar como
gúia poder realizar esta actividad:

PASO 1: CODEAR COMPONENTES REPRESENTACIONALES.
  En primer lugar, vamos a crear los componentes representacionales. Para ello, dirígete
  a los siguientes archivos:
    - Opciones.js
    - Recordatorio.js

Una vez realizadas las consignas allí expresadas, podrás continuar con el paso siguiente.


PASO 2: CODEAR COMPONENTE MAIN.

¡Feliicidades!. Si llegaste hasta aquí, ya tienes tus componentes representacionales
listos para utilizar. Ahora, nos enfocaremos en el componente Main.

Este componente, será el encargado de manejar los estados y eventos necesarios para
escuchar las acciones de la persona que utilice la aplicación, y manipular la información
que se renderizará en la pantalla.

¿Suena dificil? No te preocupes, te dejamos un par de tips para ayudarte en este camino.

*/

// ESTE ES TU COMPONENTE
const Main = () => {
  // En primer lugar, necesitamos llevar la cuenta de los pasos que vamos realizando, como
  // si fuera un contador.
  // Si tan solo tuviéramos un hook que nos permita almacenar esta información y actualizarla
  // en el futuro... 👀
  const [counter, setCounter] = useState(0);

  // De igual manera, tenemos que almacenar la selección previa del usuario para mostrarla en la
  // pantalla. Este dato, también se irá actualizando de tiempo en tiempo, como el contador...
  const [prevSelected, setPrevSelected] = useState("");

  // Finalmente, debemos almacenar el historial de selecciones, como una lista que iremos acualizando
  // con cada nueva selección...
  const [history, setHistory] = useState([]);

  // Ahora que ya tenemos la manera de almacenar y actualizar la información, debemos crear
  // una función "handleClick" que se ejecute cuando se elige una opción.
  // Dicha función, deberá navegar entre las distintas opciones de historia, en base
  // a la opción que elija la persona. Además, deberá validarse el caso de que
  // la historia llegue a su fin, para informar tal situación en la pantalla.
  const handleClick = (e) => {
    const id = e.target.id;
    if (counter >= 7) {
      alert("Fin.");
    } else if (id === "A" && prevSelected !== "A") {
      setCounter((prevCount) => prevCount + 1);
      setPrevSelected("A");
    } else if (id === "A" && prevSelected === "A") {
      setCounter((prevCount) => prevCount + 2);
    } else if (id === "B" && prevSelected === "A") {
      setCounter((prevCount) => prevCount + 3);
      setPrevSelected("B");
    } else if (id === "B") {
      setCounter((prevCount) => prevCount + 3);
      setPrevSelected("B");
    }
  };

  // Una vez que tenemos la función que se invocará al elegir una de las opciones,
  // debemos encargarnos de almacenar dicha selección en el historial. Podemos pensar
  // esto como un "efecto" que se dispara cada vez que la persona elije una nueva opción,
  // mediante el cual agregamos el item seleccionado a la lista del historial.

  useEffect(() => {
    if (!prevSelected) return;

    const newHistory = [...history, prevSelected];

    setHistory(newHistory);
  }, [prevSelected]);

  // Aquí te dejamos la estructura del JSX que retornará nuestro componente, para
  // que puedas tener como referencia:

  /*
  return (
    <div className="layout">
      <h1 className="historia">{...aqui va la parte actual de la historia...}</h1>
      <Opciones
        handleClick={...🤔...}
        opcionA={...esto lo deberíamos buscar en la info de la historia...}
        opcionB={...al igual que esto...}
      />
      <Recordatorio
        seleccionPrevia={...esta info la teníamos en algun lado 👀...}
        historial={...aquí deberíamos pasar el listado de selecciones previas...}
      />
    </div>
  );
  */

  return (
    <div className="layout">
      <h1 className="historia">{data[counter].historia}</h1>
      <Opciones
        handleClick={handleClick}
        opcionA={data[counter].opciones.a}
        opcionB={data[counter].opciones.b}
      />
      <Recordatorio
        seleccionPrevia={prevSelected}
        historial={history.map((e, index) => (
          <li key={index}>{e}</li>
        ))}
      />
    </div>
  );
};

export default Main;
