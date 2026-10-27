# Yachani · Práctica de frontend

Proyecto independiente desarrollado únicamente en esta carpeta con Angular standalone, HTML, CSS y TypeScript separados. No se accedió al proyecto principal de Yachani.

## Ejecutar

```powershell
npm.cmd start
```

Abrir en el navegador:

- http://localhost:4200/login
- http://localhost:4200/registro
- http://localhost:4200/app/inicio-estudiante
- http://localhost:4200/app/inicio-tutor

La raíz redirige a `/login`. Las cuatro pantallas pueden abrirse directamente, sin iniciar sesión. Al desplegar en un servidor estático se debe configurar una redirección de las rutas de Angular a `index.html`.

## Alcance y datos ficticios

Este proyecto es una práctica de frontend sin conexión al backend ni a servicios de IA. Todos los nombres, iniciales, grupos, sesiones, estadísticas, avisos, recomendaciones, solicitudes y progresos son datos ficticios de los frames de Figma. Están separados de la presentación en `src/app/data/demo.ts`; las fechas son contenido fijo del diseño, no una agenda actual.

Los formularios solo validan los datos en memoria. No autentican, crean cuentas, envían formularios ni guardan contraseñas o credenciales. Al validar correctamente se informa explícitamente de ese alcance y se vacían las contraseñas. Los dashboards no dependen de los formularios.

Las acciones fuera del alcance están deshabilitadas y asociadas a una explicación accesible: recuperación de contraseña, exploración y gestión de grupos, creación de grupos, recomendaciones de IA, flashcards, detalles y acceso a sesiones, calendario, avisos y aceptación o rechazo de solicitudes. No existen páginas adicionales para ellas.

## Estructura

- `src/app/features/access/`: login y registro con formularios reactivos, campos obligatorios que rechazan espacios en blanco, validación de correo, dominio exacto `upc.edu.pe`, confirmación de contraseña y visibilidad independiente de contraseñas.
- `src/app/features/dashboard/`: inicio del estudiante e inicio del tutor seleccionados por su ruta.
- `src/app/layouts/access-layout.*`: panel de marca e ilustración compartidos por login y registro.
- `src/app/layouts/application-layout.*`: sidebar por rol, topbar, perfil y navegación móvil.
- `src/app/shared/group-cards.*`: tarjetas de grupos compartidas por ambos roles.
- `src/app/shared/dashboard-common.css`: estilos comunes de paneles, tarjetas y progreso, importados por los estilos globales.
- `src/app/data/demo.ts`: contenido ficticio separado de las plantillas.
- `src/styles.css`: paleta centralizada y Roboto alojada localmente, estilos comunes y foco visible.
- `src/app/app.routes.ts`: cuatro rutas, redirección inicial y fallback a login.
- `public/assets/`: recursos descargados de los cuatro frames y fuentes Roboto locales.

Se preservan los textos y la distribución de Figma, adaptando los tonos púrpura/ciruela a azul y celeste. Se usan etiquetas, mensajes asociados a cada campo, radios nativos para el rol, botones de visibilidad con estado accesible, enlace para saltar al contenido y menú móvil operable por teclado.

## Referencias de Figma

Se consultaron mediante Figma MCP únicamente estos frames del archivo `c7osPShS4l3A0vE8W6J3oD`:

- Inicio de sesión: `63:5398`.
- Registro: `73:5957`.
- Inicio del estudiante: `63:4223`.
- Inicio del tutor: `63:4437`.

## Verificación

```powershell
npm.cmd run build
```

En este equipo PowerShell bloquea `npm.ps1`; `npm.cmd` ejecuta el mismo script sin cambiar la política de ejecución. El sandbox produjo errores de acceso del compilador, por lo que se compiló con autorización fuera del sandbox.

No se ejecutaron pruebas automatizadas. La conexión del navegador integrado falló con el error `missing field sandboxPolicy`, por lo que queda pendiente la revisión visual y manual de interacción en escritorio y móvil. La compilación no sustituye esa revisión.

Resultado final: `npm.cmd run build` completó correctamente, sin errores ni advertencias. El paquete inicial fue de 235,75 kB y la salida se generó en `dist/yachani-reto`. La advertencia intermedia del tamaño del CSS del dashboard se corrigió extrayendo los estilos compartidos a `src/app/shared/dashboard-common.css`, sin aumentar los presupuestos de Angular.
