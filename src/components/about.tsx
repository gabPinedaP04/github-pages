import '../assets/styles/about.css';
import angularImg from '../assets/images/angular.png';
import djangoImg from '../assets/images/djangologo.png';
import gitImg from '../assets/images/git.png';
import mysql from '../assets/images/mysql.png';
import tailwindImg from '../assets/images/tailwind.png';
import reactLogo from '../assets/images/react.png';
import cssLogo from '../assets/images/css.png';
import htmlLogo from '../assets/images/html.png';
import vuejsLogo from '../assets/images/vue.png';




export default function About() {

  return (
    <>
    <div id="Aboutdiv" className="bg-pallete5 p-8 h-auto flex flex-col items-center justify-center relative text-xl">
      <section className="text-gray-700 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Sobre mí
            </h1>
            <p className="mb-8 leading-relaxed text-white">Soy estudiante de ingenieria de software y sistemas computacionales en la universidad La Salle Bajio.
              Me gusta la resolucion de problemas y estoy interesado en el desarrollo Web y Movil.
            </p>
            
          </div>
          
        </div>
      </section>


      <section id="features" className="container mx-auto px-4 space-y-6 bg-pallete5 py-8 md:py-12 lg:py-20">

        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
    
            <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl text-white">Skills</h2>
    
    
        </div>
    
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3 ">
    
            <div
                className="relative overflow-hidden rounded-lg border bg-pallete4 select-none hover:shadow hover:shadow-teal-200 p-2">
                <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                    <img src={djangoImg} className="h-12 w-12 fill-current" alt=""/>
                 
                    <div className="space-y-2">
                        <h3 className="font-bold text-white">Django</h3>
                        <p className="text-sm text-white">He desarrollado aplicaciones web con bases de datos en Django</p>
                    </div>
                </div>
            </div>
    
            <div
                className="relative overflow-hidden rounded-lg border bg-pallete4 select-none hover:shadow hover:shadow-teal-200 p-2">
                <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                    <img src={vuejsLogo} className="h-12 w-12 fill-current" alt=""/>
                 
                    <div className="space-y-2">
                        <h3 className="font-bold text-white">VueJS</h3>
                        <p className="text-sm text-white">Conozco vue js y he desarrollado proyectos en este framework</p>
                    </div>
                </div>
            </div>
    
            <div
                className="relative overflow-hidden rounded-lg border bg-pallete4 select-none hover:shadow hover:shadow-teal-200 p-2">
                <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                    <img src={angularImg} className="h-12 w-12 fill-current" alt=""/>
                 
                    <div className="space-y-2">
                        <h3 className="font-bold text-white">Angular</h3>
                        <p className="text-sm text-white">Tengo experiencia en la creación de aplicaciones web utilizando Angular. También he utilizando Ionic</p>
                    </div>
                </div>
            </div>

            <div
                className="relative overflow-hidden rounded-lg border bg-pallete4 select-none hover:shadow hover:shadow-teal-200 p-2">
                <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                    <img src={tailwindImg} className="h-12 w-12 fill-current" alt=""/>
                 
                    <div className="space-y-2">
                        <h3 className="font-bold text-white">Tailwind</h3>
                        <p className="text-sm text-white">Utilizo Tailwind CSS para diseñar interfaces de usuario modernas y responsivas.</p>
                    </div>
                </div>
            </div>

            <div
                className="relative overflow-hidden rounded-lg border bg-pallete4 select-none hover:shadow hover:shadow-teal-200 p-2">
                <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                    <img src={gitImg} className="h-12 w-12 fill-current" alt=""/>
                 
                    <div className="space-y-2">
                        <h3 className="font-bold text-white">Git</h3>
                        <p className="text-sm text-white">Utilizo Git para el control de versiones en todos mis proyectos y seguir los cambios de manera eficiente. </p>
                    </div>
                </div>
            </div>
    
    
            <div
                className="relative overflow-hidden rounded-lg border bg-pallete4 select-none hover:shadow hover:shadow-teal-200 p-2">
                <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                    <img src={mysql} className="h-12 w-12 fill-current" alt=""/>
                 
                    <div className="space-y-2">
                        <h3 className="font-bold text-white">MySql</h3>
                        <p className="text-sm text-white">Tengo experiencia en el diseño y gestión de bases de datos relacionales utilizando MySQL</p>
                    </div>
                </div>
            </div>
            <div
                className="relative overflow-hidden rounded-lg border bg-pallete4 select-none hover:shadow hover:shadow-teal-200 p-2">
                <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                    <img src={reactLogo} className="h-12 w-12 fill-current" alt=""/>
                 
                    <div className="space-y-2">
                        <h3 className="font-bold text-white">React</h3>
                        <p className="text-sm text-white">Utilizo React para construir interfaces de usuario dinámicas y reactivas y la creación de componentes reutilizables.</p>
                    </div>
                </div>
            </div>
            <div
                className="relative overflow-hidden rounded-lg border bg-pallete4 select-none hover:shadow hover:shadow-teal-200 p-2">
                <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                    <img src={htmlLogo} className="h-12 w-12 fill-current" alt=""/>
                 
                    <div className="space-y-2">
                        <h3 className="font-bold text-white">HTML</h3>
                        <p className="text-sm text-white">Sólida comprensión de HTML lo que me permite crear estructuras web semánticas y estilos atractivos.</p>
                    </div>
                </div>
            </div>

            <div
                className="relative overflow-hidden rounded-lg border bg-pallete4 select-none hover:shadow hover:shadow-teal-200 p-2">
                <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                    <img src={cssLogo} className="h-12 w-12 fill-current" alt=""/>
                 
                    <div className="space-y-2">
                        <h3 className="font-bold text-white">CSS</h3>
                        <p className="text-sm text-white">Utilizo css para elaborar mis propios diseños y crear sitios responsivos.</p>
                    </div>
                </div>
            </div>
    
        </div>
    
    </section>


      

    </div>
    </>
  );

}