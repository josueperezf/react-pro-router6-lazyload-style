import { Navigation } from "../router/Navigation";

export const LazyLayout = () => {
  return (
    <>
      <div>
          <h1>LazyLayout - este ejemplo sirve de guia si queremos crear un modulo para estudiantes u otros</h1>
          <p>
            Este componente <b>LazyLayout</b> lo que hace es envolver o agrupar todos los componentes para que al cargarlo de forma perezosa, <br/>
            estariamos cargando indirectamente tambien de forma perezosa los componentes <b>lazy1, lazy2 y lazy3</b><br/><br/>
            <b>Ejemplo: </b><br/><br/>

            Si tenemos el modulo de estudiantes, y vamos a iniciar sesion desde una cuenta de coordinador,<br/>
            el modulo de estudiante no lo necesitamos cargar 'ninguno de sus componentes', <br/>
            para solucionar ello se crea un componente que envuelva todas las rutas de estudiantes,<br/>
            y decimos al router principal que el componente que envuelve a estudiantes se va a cargar de forma perezosa.<br/>
            importante destacar, que cada ruta del modulo estudiante debe cargarse en ese componente que envuelve,<br/>
            teniendo en el router principal solo la ruta al componente padre de estuduiantes<br/><br/>
            diciendo de algun modo en el router principal solo tendriamos 'estudiantes/', las demas rutas, ejemplo, estudiantes/materias <br/>
            estaria definidas en 
          </p>
          <p style={{color: 'aquamarine'}}>
            en el componente Navigation que creamos, es donde incluimos los enlaces de las subrutas,
            en ese archivo deje dos formas de cargar subrutas, una con <b>useRoutes</b>, <br/>
            y otro quedo comentado donde utiliza la etiqueda <b>Routes y Routes</b> con jsx
          </p>
          nuestro componente Navigation es el componente que renderiza cada una de las subrutas

          <Navigation />
        </div>
    </>

  )
}
export default LazyLayout;