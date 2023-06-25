import { Await, Outlet } from 'react-router-dom';
import { SideBar } from "../components/SideBar"
import "../../index.css";
import React from 'react';


export const Root = () => {
  return (
    <div className="main-layout">
        <SideBar/>
        <>
        {/*
        las dos siguientes componentes son para la carga perezosa,
        el primero sirve para mostrar un mensaje de espera mientras se carga el componente,
        el segundo es solo para hacer el await lo la espera mientras se carga

        lazy es para hacer que los componentes pesados no se carguen cuando no se vayan a utilizar,
        ejemplo un para el iut, un estudiante no necesita que se cargue el contenido de listar estudiantes,
        ya que eso ese html pesado y le corresponde a otro usuario
        */}
          <React.Suspense fallback={<p>Cargando componente con lazy...</p>}>
            <Await  resolve={undefined}>
              <Outlet />
            </Await>
          </React.Suspense>
        </>
    </div>
  )
}
