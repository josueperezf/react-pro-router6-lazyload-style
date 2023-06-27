import { lazy } from 'react';
import { RouteObject} from "react-router-dom";
import { SinLazy } from "../01-lazyload/pages/SinLazy";

// const LazyLayout = lazy(() => import( /*webpackChunkName: "LazyPage3" */ "../01-lazyload/layout/LazyLayout"));

/**
 * aqui podemos colocar otros subRouters, ejemplo un router para empleados, entonces creariamos algo como
 * {path: "empleados", element: <empleadosRouter /> }, 
 * donde empleadosRouter tiene todas las rutas que involucran a empleado,
 * claro ye tendria 'empleados' como base, ahora sus path seria algo como '/:id' para ver empleado por id, ejemplo
*/


export const publicRouter: RouteObject[] = [
    {
        path: "/",
        children: [
            {path: 'lazyLayout/*', 
            Component: lazy( () => import(/* webpackChunkName: "LazyLayout" */ '../01-lazyload/layout/LazyLayout') ),
        },
            {path: 'sin-lazy', Component: SinLazy}
        ]
    },

];