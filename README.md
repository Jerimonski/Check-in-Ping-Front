<div align="center">
  <h1 align="center">Estados de red en tiempo real</h1>
</div>

<!-- ABOUT THE PROJECT -->
### Acerca del proyecto

Un sistema de monitoreo el cual mediante un ping a las ip's cedidas verifica si el dispositivo esta caido o funcionando, con la capacidad
de mandar un mensaje a traves de gmail avisando y mostrando una lista con los dispositivos caidos.

Motivos del proyecto:
* Necesidad de tener un monitoreo en tiempo real de una cantidad indeterminada de dispositivos.
* Saber con brevedad cuando un dispositivo se cae del sistema y poder actuar a tiempo.
* Tener un sistema con una interfaz visual sencilla y facil de entender.

### Desarrollado con:
### Tecnologías
* [![React][React.js]][React-url]
* [![Vite][Vite.js]][Vite-url]
* [![TailwindCSS][TailwindCSS.com]][TailwindCSS-url]
* [![HTML5][HTML5.com]][HTML5-url]
* [![CSS3][CSS3.com]][CSS3-url]
* [![ESLint][ESLint.com]][ESLint-url]
* [![Websocket][Websocket.com]][Websocket-url]

<!-- Preparacion antes del codigo -->
## Preparacion antes del codigo

### Instalacion

1. Clonacion del repositorio:
   ```sh
   git clone https://github.com/Jerimonski/Check-in-Ping-Front.git
   ```
3. Instalacion de los paquetes NPM
   ```sh
   npm install
   ```
4. Cambia el git remote url para evitar subir codigo erroneo al proyecto base:
   ```sh
   git remote set-url origin https://github.com/Jerimonski/Check-in-Ping-Front.git
   git remote -v # Para confirmar los cambios
   ```

<!-- Modo de uso -->
## Modo de uso

Este frontend está diseñado para funcionar en conjunto con el backend. La comunicación se realiza a través de WebSockets, por lo que es esencial que el backend esté en ejecución antes de iniciar este proyecto.

### Ejecucion
1. Asegúrate de que el servidor del backend esté corriendo en http://localhost:5000. Si no es así, consulta el README del backend para saber cómo iniciarlo.
2. Abre una terminal en la carpeta raíz de este repositorio y ejecuta la aplicación:
```sh
npm run dev
```
3. El proyecto se abrirá en tu navegador, mostrando la interfaz que se conecta al backend para obtener los datos.
   
### Caracteristicas de la interfaz
la ui cuenta con varias secciones de monitoreo:
* Estados: Hay 4 cuadros que representan cada estadode los dispositivos, Activo (online), Caido (offline), Perdido/s (lost) y el total de dispositivos.
* Barra de busqueda y filtros: Un campo de busqueda que te permite filtrar dispositivos por nombre o direccion ip, y tiene botones de filtro para ver rapidamente los dispositivos.
* Panel de dispositivos: Un panel principal que muestra cada dispositivo en un cuadro individual con informacion de cada uno como el nombre, ip, estado y descripcion.
* Vista general: 
<img width="597" height="633" alt="image" src="https://github.com/user-attachments/assets/ae0e86b1-25ad-4ba7-a7d8-786581ba051d" />


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vite.js]: https://img.shields.io/badge/Vite-B7B7FF?style=for-the-badge&logo=vite&logoColor=646CFF
[Vite-url]: https://vitejs.dev/
[TailwindCSS.com]: https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white
[TailwindCSS-url]: https://tailwindcss.com/
[HTML5.com]: https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white
[HTML5-url]: https://developer.mozilla.org/es/docs/Glossary/HTML5
[CSS3.com]: https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white
[CSS3-url]: https://developer.mozilla.org/es/docs/Web/CSS/CSS3
[ESLint.com]: https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white
[ESLint-url]: https://eslint.org/
[Websocket.com]: https://img.shields.io/badge/Websocket-111111?style=for-the-badge&logo=websocket&logoColor=white
[Websocket-url]: https://developer.mozilla.org/es/docs/Web/API/WebSockets_API
