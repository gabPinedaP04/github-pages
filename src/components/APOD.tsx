import { useEffect, useState } from 'react';

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
  const[isDisabled, setDisabled] = useState(false);

  
    const handleClick = () => {
      // Deshabilitar el botón
      setDisabled(true);

      solicitarRandomAPOD();
      // Aquí puedes realizar alguna acción, como una solicitud a una API
      // Simularemos una acción con un delay de 3 segundos
      setTimeout(() => {
        // Habilitar el botón después del delay
        setDisabled(false);
        console.log("boton deshabilitado 3 segundos")
      }, 3000); // 3000 ms = 3 segundos
    };

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

  function solicitarFechaFormateada(diaRandom? : number, mesRandom? : number, anioRandom? : number) {
    let fechaFormato : number | string
    let anio : number | string
    let mes : number | string
    let dia : number | string 

    if(diaRandom && mesRandom && anioRandom){
      anio = anioRandom
      mes = mesRandom
      dia = diaRandom
    }
    else{
       const fecha = new Date();
    anio = fecha.getFullYear();
    mes = fecha.getMonth() + 1; // Añadir 1 al mes
    dia = fecha.getDate();
    }
    




    if (mes < 10) {
      mes = "0" + mes;
    }
    if (dia < 10) {
      dia = "0" + dia;
    }

    fechaFormato = `${anio}-${mes}-${dia}`;
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

   function solicitarRandomAPOD(){
    console.log("solicitando random apod")
    let diaRandom = Math.round(Math.random() * 28)
    let mesRandom = Math.round(Math.random() * 12)
    let anioRandom = 2000 + Math.round(Math.random() * 23)

    console.log("dia" + diaRandom)
    console.log("mes" + mesRandom)
    console.log("anio" + anioRandom)

    let fechaRandom = solicitarFechaFormateada(diaRandom, mesRandom, anioRandom)
    console.log(fechaRandom)
    solicitarAPOD(fechaRandom)
  }

  return (
    <div id="APODdiv">
      {data ? (
        <>
          <img src={data.url} className="absolute inset-0 w-full h-full object-cover object-center" alt={data.title} />
          <div className="absolute w-full py-2.5 bottom-0 inset-x-0  text-white text-xs text-center leading-4">
            <h2>Image from NASA APOD API</h2>
            <button id='btnRandom' onClick={handleClick} disabled={isDisabled} type="button" className="text-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              <svg className="w-2 h-2 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 21">
                <path d="M0 24q0 0.832 0.576 1.44t1.44 0.576h1.984q2.048 0 3.904-0.8t3.168-2.144 2.144-3.2 0.8-3.872q0-2.464 1.728-4.224t4.256-1.76h4v1.984q0 0.672 0.384 1.152t0.864 0.704 1.12 0.128 1.056-0.544l4-4q0.608-0.64 0.576-1.44t-0.576-1.408l-4-4q-0.48-0.448-1.088-0.544t-1.12 0.128-0.864 0.704-0.352 1.12v2.016h-4q-2.016 0-3.872 0.8t-3.2 2.112-2.144 3.2-0.768 3.872q0 2.496-1.76 4.256t-4.256 1.76h-1.984q-0.832 0-1.44 0.576t-0.576 1.408zM0 8.032q0 0.832 0.576 1.408t1.44 0.576h1.984q1.408 0 2.592 0.608t2.080 1.664q0.672-2.048 1.984-3.68-2.912-2.592-6.656-2.592h-1.984q-0.832 0-1.44 0.608t-0.576 1.408zM13.376 23.456q2.848 2.56 6.624 2.56h4v2.016q0 0.64 0.384 1.152t0.864 0.704 1.12 0.096 1.056-0.544l4-4q0.608-0.608 0.576-1.44t-0.576-1.376l-4-4q-0.48-0.48-1.088-0.576t-1.12 0.128-0.864 0.736-0.352 1.12v1.984h-4q-1.376 0-2.592-0.576t-2.048-1.664q-0.704 2.048-1.984 3.68z" />
              </svg>
              Random Image
            </button>
          </div>


        </>

      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
