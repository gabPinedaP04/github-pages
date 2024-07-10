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
  const [isDisabled, setDisabled] = useState(false);
  const [isAnimated, setAnimated] = useState(false);


  const [isLoading, setLoading] = useState(false);




  const handleClick = () => {
    // Deshabilitar el botón
    setDisabled(true);
    setAnimated(true);
    setLoading(true);

    solicitarRandomAPOD();
    // Aquí puedes realizar alguna acción, como una solicitud a una API
    // Simularemos una acción con un delay de 3 segundos
    setTimeout(() => {
      // Habilitar el botón después del delay
      setDisabled(false);
      setAnimated(false);
      setLoading(false);

      console.log("boton deshabilitado 3 segundos")
    }, 3000);
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

  function solicitarFechaFormateada(diaRandom?: number, mesRandom?: number, anioRandom?: number) {
    let fechaFormato: number | string
    let anio: number | string
    let mes: number | string
    let dia: number | string

    if (diaRandom && mesRandom && anioRandom) {
      anio = anioRandom
      mes = mesRandom
      dia = diaRandom
    }
    else {
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

  function solicitarRandomAPOD() {
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
            <h2 className='block  bg-gray-900 bg-opacity-50 my-2'>Image from NASA APOD API</h2>
            <button id='btnRandom' onClick={handleClick} disabled={isDisabled} type="button" className={`text-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 bg-gray-500 ${isAnimated ? 'animate-none duration-1000' : ''} ${isLoading ? 'hidden' : 'block'}`} >
              Random Image
            </button>
            <button disabled type="button" className={`py-2.5 px-5 me-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 inline-flex items-center ${isLoading ? 'block' : 'hidden'} `}>
              <svg aria-hidden="true" role="status" className="inline w-4 h-4 me-3 text-gray-200 animate-spin dark:text-gray-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#1C64F2" />
              </svg>
              Loading...
            </button>
          </div>


        </>

      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
