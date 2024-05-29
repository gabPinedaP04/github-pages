import portfolioINE from '../assets/images/votosapp.png';
import ṕortfolioBAJIO from '../assets/images/bajiosoft.png';


export default function Portfolio() {
    return (
        <main className="relative min-h-screen flex flex-col justify-center bg-pallete5 overflow-hidden">
        <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-24" id="Portfoliodiv">
    
            
            <div className="max-w-sm mx-auto grid gap-6 lg:grid-cols-3 items-start lg:max-w-none group" data-spotlight>
        
                
                <div className="relative h-full bg-slate-800 rounded-3xl p-px before:absolute before:w-80 before:h-80 before:-left-40 before:-top-40 before:bg-slate-400 before:rounded-full before:opacity-0 before:pointer-events-none before:transition-opacity before:duration-500 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:group-hover:opacity-100 before:z-10 before:blur-[100px] after:absolute after:w-96 after:h-96 after:-left-48 after:-top-48 after:bg-indigo-500 after:rounded-full after:opacity-0 after:pointer-events-none after:transition-opacity after:duration-500 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:hover:opacity-10 after:z-30 after:blur-[100px] overflow-hidden">
                    <div className="relative h-full bg-slate-900 p-6 pb-8 rounded-[inherit] z-20 overflow-hidden">
                        <div className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square" aria-hidden="true">
                            <div className="absolute inset-0 translate-z-0 bg-slate-800 rounded-full blur-[80px]"></div>
                        </div>
                        <div className="flex flex-col h-full items-center text-center">
                            <div className="relative inline-flex">
                                <div className="w-[40%] h-[40%] absolute inset-0 m-auto -translate-y-[10%] blur-3xl -z-10 rounded-full bg-indigo-600" aria-hidden="true"></div>
                                <img className="inline-flex" src={portfolioINE} width="200" height="200" alt="Card 01" />
                            </div>
                            <div className="grow mb-5">
                                <h2 className="text-xl text-slate-200 font-bold mb-1">Simulacion de elecciones presideciales</h2>
                                <p className="text-sm text-slate-500">Creada en Angular y Ionic, esta es una aplicacion que simula las votaciones de candidatos politicos y grafica en tiempo real</p>
                            </div>
                            <a className="inline-flex justify-center items-center whitespace-nowrap rounded-lg bg-slate-800 hover:bg-slate-900 border border-slate-700 px-3 py-1.5 text-sm font-medium text-slate-300 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150" href="https://github.com/gabPinedaP04/votos-ionic.git" target='blank'>
                                
                                <span>Visitar</span>
                            </a>
                        </div>
                    </div>
                </div>
  
                
                <div className="relative h-full bg-slate-800 rounded-3xl p-px before:absolute before:w-80 before:h-80 before:-left-40 before:-top-40 before:bg-slate-400 before:rounded-full before:opacity-0 before:pointer-events-none before:transition-opacity before:duration-500 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:group-hover:opacity-100 before:z-10 before:blur-[100px] after:absolute after:w-96 after:h-96 after:-left-48 after:-top-48 after:bg-indigo-500 after:rounded-full after:opacity-0 after:pointer-events-none after:transition-opacity after:duration-500 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:hover:opacity-10 after:z-30 after:blur-[100px] overflow-hidden">
                    <div className="relative h-full bg-slate-900 p-6 pb-8 rounded-[inherit] z-20 overflow-hidden">
                        <div className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square" aria-hidden="true">
                            <div className="absolute inset-0 translate-z-0 bg-slate-800 rounded-full blur-[80px]"></div>
                        </div>
                        <div className="flex flex-col h-full items-center text-center">
                            <div className="relative inline-flex">
                                <div className="w-[40%] h-[40%] absolute inset-0 m-auto -translate-y-[10%] blur-3xl -z-10 rounded-full bg-indigo-600" aria-hidden="true"></div>
                                <img className="inline-flex" src={ṕortfolioBAJIO} width="200" height="200" alt="Card 02" />
                            </div>
                            
                            <div className="grow mb-5">
                                <h2 className="text-xl text-slate-200 font-bold mb-1">Bajio Soft Solutions Landing page</h2>
                                <p className="text-sm text-slate-500">Landing page creada con nextJS usando tailwind css</p>
                            </div>
                            <a className="inline-flex justify-center items-center whitespace-nowrap rounded-lg bg-slate-800 hover:bg-slate-900 border border-slate-700 px-3 py-1.5 text-sm font-medium text-slate-300 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150" href="https://bajiosoft.com/" target="_blank">
                                
                                <span>Visitar</span>
                            </a>
                        </div>
                    </div>
                </div>
  
                
            </div>
    
        </div>
    </main>
    )
  }