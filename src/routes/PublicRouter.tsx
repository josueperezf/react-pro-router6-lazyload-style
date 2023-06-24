import { RouteObject, Navigate } from "react-router-dom";

/**
 * aqui podemos colocar otros subRouters, ejemplo un router para empleados, entonces creariamos algo como
 * {path: "empleados", element: <empleadosRouter /> }, 
 * donde empleadosRouter tiene todas las rutas que involucran a empleado,
 * claro ye tendria 'empleados' como base, ahora sus path seria algo como '/:id' para ver empleado por id, ejemplo
*/


export const publicRouter: RouteObject[] = [
    {path: "about", element: <h1>about page</h1> },
    {path: "users", element: <h1>users page</h1> },
    {path: "/", element: <h1>home page</h1> },
    {path: "/*", element: <Navigate to={"/"} replace  /> },
];