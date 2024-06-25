import React, { useEffect, useState } from 'react';

interface APODData {
  url: string;
  title: string;
}

export default function APOD() {  
  const [diaRegistro, setDiaRegistro] = useState<number>(() => {
    const storedDiaRegistro = localStorage.getItem('diaRegistro');
    return storedDiaRegistro ? parseInt(storedDiaRegistro, 10) : 0;
  });

  const [data, setData] = useState<APODData | null>(null);

  const ahora = new Date();
  const diaActual = ahora.getDate();

  useEffect(() => {
    console.log("Componente creado");
    console.log("Dia actual: " + diaActual + ", dia en registro: " + diaRegistro);

    if (diaActual !== diaRegistro) {
      setDiaRegistro(diaActual);
      console.log("Actualizando el día, hoy es: " + diaActual);
      localStorage.setItem('diaRegistro', diaActual.toString());
      solicitarAPOD(diaActual);
    } else {
      console.log("El día ya está actualizado");
      let fechaFormateada = solicitarFechaFormateada();
      solicitarAPOD(fechaFormateada);
    }
  }, [diaActual, diaRegistro]);

  function solicitarFechaFormateada() {
    const fecha = new Date();
    const anio = fecha.getFullYear();
    let mes: number | string = fecha.getMonth() + 1; // Añadir 1 al mes
    let dia: number | string = fecha.getDate();

    if (mes < 10) {
      mes = "0" + mes;
    }
    if (dia < 10) {
      dia = "0" + dia;
    }

    const fechaFormato = `${anio}-${mes}-${dia}`;
    console.log(fechaFormato);
    return fechaFormato;
  } 

  function solicitarAPOD(fecha: number | string) {
    console.log("Solicitando APOD");
    console.log("Fecha de hoy: " + fecha);
    const apiKey = "zMm2wEorcFjh2W3pbUnPMQwEbMb1PYxD6CdQTKpu";
    
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&hd=true&date=${fecha}`)
      .then(response => response.json())
      .then((json: APODData) => setData(json))
      .catch(error => console.error(error));
  }

  return (
    <div id="APODdiv">
      {data ? (
        <img src={data.url} className="absolute inset-0 w-full h-full object-cover object-center" alt={data.title} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
