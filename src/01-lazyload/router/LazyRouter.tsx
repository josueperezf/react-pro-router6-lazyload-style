import { RouteObject } from "react-router-dom";
import { lazy } from "react";
/**
 * aqui podemos colocar otros subRouters, ejemplo un router para empleados, entonces creariamos algo como
 * {path: "empleados", element: <empleadosRouter /> }, 
 * donde empleadosRouter tiene todas las rutas que involucran a empleado,
 * claro ye tendria 'empleados' como base, ahora sus path seria algo como '/:id' para ver empleado por id, ejemplo
*/


const LazyPage1 = lazy(() => import( /*webpackChunkName: "LazyPage1" */ "../pages/LazyPage1"));
const LazyPage2 = lazy(() => import( /*webpackChunkName: "LazyPage2" */ "../pages/LazyPage2"));
const LazyPage3 = lazy(() => import( /*webpackChunkName: "LazyPage3" */ "../pages/LazyPage3"));

// el LazyPage2 lo estoy cargando con lazyload o carga perezosa desde el archivo index de la carpeta pages
export const LazyRouter: RouteObject[] = [
    {path: "lazy1", Component: LazyPage1 },
    {path: "lazy2", Component: LazyPage2},
    {path: "lazy3", Component: LazyPage3 },
];