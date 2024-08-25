# Plant store landing page

Este proyecto se realiza siguiendo el tutorial de [youtube](https://www.youtube.com/watch?v=zKguO4oaAGs)

## Instalación de Tailwind Css en Vite
Para instalar la herramienta de Tailwind en proyectos generados con Vite, se siguen las instrucciones de la [web oficial](https://tailwindcss.com/docs/guides/vite), a continuación descritas.

1. Instalar `tailwindcss` y sus dependencias, luego crear los archivos `tailwind.config.js` y `postcss.config.js` con los siguientes comandos.
```bash
$ npm install -D tailwindcss postcss autoprefixer
$ npx tailwindcss init -p
```

2. Configurar las rutas de los archivos en `tailwind.config.js` agregando las siguientes líneas de código

``` js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

3. Agregar directivas de Tailwind para cada capa a su archivo CSS `./src/index.css`.
```CSS
@tailwind base;
@tailwind components;
@tailwind utilities;
```

4. Probar si la instalación se realizó correctamente en el proyecto mediante la utilización de las clases proporcionadas por Tailwind a cualquier componente.
```jsx
export default function App() {
  return (
    <h1 className="text-4xl font-bold text-rose-600">
      Hello Tailwind CSS !!!
    </h1>
  )
}
```


## Enseñanzas del proyecto.
- 🛠 Instalar Tailwind CSS en un proyecto generado con Vite. Se crea un mini tutorial para realizar esta tarea.
- 💪 El proyecto original usa solamente HTML, CSS y Javascript, este proyecto se modificará para usar ReactJs.
- 🤓 Tiene manejo avanzado de Tailwind lo que permite aprender nuevas cosas
- 🧐 A traves del código se pusieron etiquetas con la palabra "interesante" para resaltar algun manejo avanzado o punto a tener en cuenta en diseños de paginas web.
- 💪 Al implementar el tutorial en ReactJs, se crear componentes reutilzables y se hace uso de estados y hooks para manipular algunas acciones como el scroll y mostrar y ocultar el menu en vistas de dispositivos pequeños.
- ⚡ En general el tutorial es fácil de seguir, contiene varias partes interesantes y enseña a usar Tailwind de una manera activa y enriquecedora.
- 💢 Usa algunas bibliotecas para crear el carousel y las animaciones por lo que no se pudo replicar esas funcionalidades, no es completamente nativo y se ve la necesidad de buscar otras opciones para comletar el tutorial.
- 👻 Falta por implementar el carousel, las animaciones y el estado activo del menu header de la sección activa