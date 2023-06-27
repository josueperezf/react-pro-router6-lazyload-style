import { Navigate, RouteObject } from "react-router-dom";
import { LazyPage1, LazyPage2, LazyPage3 } from "../pages";

/* este es un router comun y corriente, se llama LazyRouter solo porque el ejercicio se llama asi,
pero no tiene nada de carga perezosa, ya que en vez de cargar de manera perezosa cada ruta,
al cargar el la ruta padre '/lazyLayout/', entonces cargamos todas estas de golpe*/
export const LazyRouter: RouteObject[] = [
    {path: "/", element: <Navigate to={"lazy1"} /> }, // listar estudiante - solo ejemplo de 
    {path: "lazy1", Component: LazyPage1 }, // listar estudiante - solo ejemplo de 
    {path: "lazy2", Component: LazyPage2},  // ver estudiante - solo ejemplo de 
    {path: "lazy3", Component: LazyPage3 },// agregar estudiante  - solo ejemplo de 
];