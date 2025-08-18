<div align="center">
  <h1 align="center">Estados de red en tiempo real</h1>
</div>

<!-- ABOUT THE PROJECT -->
## Acerca del proyecto
Un sistema de monitoreo el cual mediante un ping a las ip's cedidas verifica si el dispositivo esta caido o funcionando, con la capacidad
de mandar un mensaje a traves de gmail avisando y mostrando una lista con los dispositivos caidos.

Motivos del proyecto:
* Necesidad de tener un monitoreo en tiempo real de una cantidad indeterminada de dispositivos.
* Saber con brevedad cuando un dispositivo se cae del sistema y poder actuar a tiempo.
* Tener un sistema con una interfaz visual sencilla y facil de entender.

### Desarrollado con:

This section should list any major frameworks/libraries used to bootstrap your project. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.

---
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

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- Modo de uso -->
## Modo de uso

Primero cuenta con 3 cuadros los cuales enumeran la cantidad de dispositivos conectados (Online), Desconectados (Offline) y el total de dispositivos.

<br>

<img width="589" height="163" alt="image" src="https://github.com/user-attachments/assets/b0ea2731-578b-47f0-8903-d48f07c753a3" />

<br>
Tambien cuenta con una barra de busqueda que puede filtrar tanto por nombre como por ip y 3 botones de filtro general para dispositivos activos, inactivos y todos.
<img width="567" height="109" alt="image" src="https://github.com/user-attachments/assets/49eff4a5-a8f9-4364-a171-a8bfdba2de69" />

<br>
Finalmente hay un panel donde muestra cada dispositivo en un recuadro como ayuda visual para ver mas informacion sobre cada ip.
<img width="559" height="368" alt="image" src="https://github.com/user-attachments/assets/1dc82d83-9cae-4d40-b157-cf1fcf0e0168" />

<br>
Asi se veria el visual general del proyecto
<img width="601" height="540" alt="image" src="https://github.com/user-attachments/assets/9f631bd7-b322-4fdb-a9ec-05ef91f137dd" />

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
