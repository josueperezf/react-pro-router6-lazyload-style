import { RouteObject} from "react-router-dom";
import { LazyRouter } from "../01-lazyload/router/lazyRouter";


/**
 * aqui podemos colocar otros subRouters, ejemplo un router para empleados, entonces creariamos algo como
 * {path: "empleados", element: <empleadosRouter /> }, 
 * donde empleadosRouter tiene todas las rutas que involucran a empleado,
 * claro ye tendria 'empleados' como base, ahora sus path seria algo como '/:id' para ver empleado por id, ejemplo
*/


export const publicRouter: RouteObject[] = [
    {
        path: "/*",
        children: [...LazyRouter]
    },

];