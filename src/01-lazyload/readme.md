# conceptos basicos de la carga perezosa

1. carga perezosa o LAZY: la carga perezosa se realizar para indicarle al router que cuando se cargue la pagina en el navegador, ejemplo, en iniciar sesion, no cargue el contenido de listar estudiante, ya que problablemente el perfil que se loguee sea un estudiante y no va a necesitar la carga de este 'listar estudiante'. si cargamos este tipo de componentes, hariamos que la carga inicial de la pagina sera lenta sin necesidad, para solucionar ello esta el lazyload

2. cargar un componente de forma LAZY: esto se puede realizar de diferentes maneras, pero para este proyecto lo realice mediante objeto, asi que lo coloque en el archivo  index de la pagina pages de la siguiente manera ```React.lazy(() => import("../pages/LazyPage2"))```

3. Suspense: es una componente propiedad de react-router-dom, que sirve para envolver el componente que queremos mostrar, asi mismo nos permite monstrar un mensaje al usuario de ```espere...``` mientras se esta cargando ese componente que concideramos pesado

4. Await: es un componente hijo de Suspense que sirve para envolver el componente a cargar, y hace la espera, recibe un parametro 'resolve', pero si no se lo pasamos no hay problema.
