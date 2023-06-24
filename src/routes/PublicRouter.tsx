import { RouteObject, Navigate } from "react-router-dom";
import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";

/**
 * aqui podemos colocar otros subRouters, ejemplo un router para empleados, entonces creariamos algo como
 * {path: "empleados", element: <empleadosRouter /> }, 
 * donde empleadosRouter tiene todas las rutas que involucran a empleado,
 * claro ye tendria 'empleados' como base, ahora sus path seria algo como '/:id' para ver empleado por id, ejemplo
*/


export const publicRouter: RouteObject[] = [
    {path: "lazy1", element: <LazyPage1 /> },
    {path: "lazy2", element: <LazyPage2 /> },
    {path: "lazy3", element: <LazyPage3 /> },
    {path: "/", element: <Navigate to={"/lazy1"} replace  /> },
    {path: "/*", element: <Navigate to={"/lazy1"} replace  /> },
];