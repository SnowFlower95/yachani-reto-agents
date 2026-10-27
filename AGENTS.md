# Política de trabajo del proyecto

## Objetivo
Crear cuatro interfaces de práctica de Yachani a partir de Figma:
inicio de sesión, registro, inicio del estudiante e inicio del tutor.

Este proyecto es independiente del proyecto principal.
Trabajar únicamente dentro de esta carpeta.

## Tecnologías y estructura
- Usar Angular con componentes standalone y CSS.
- Mantener HTML, CSS y TypeScript en archivos separados.
- Organizar las páginas dentro de src/app/features.
- Reutilizar layouts y componentes cuando compartan estructura.
- Revisar package.json antes de usar o instalar dependencias.

## Diseño
- Consultar mediante Figma MCP únicamente los frames indicados.
- Respetar su distribución y adaptar las interfaces a móvil.
- Usar Roboto y una iconografía consistente.
- Centralizar los colores en variables CSS:
  - Azul oscuro para títulos y paneles: #0F2742.
  - Azul para botones principales: #0369A1.
  - Celeste para acentos y detalles: #38BDF8.
  - Fondo claro: #F0F9FF.
  - Blanco para tarjetas y texto sobre botones: #FFFFFF.
  - Azul pálido para etiquetas: #E0F2FE.
- Sustituir los tonos púrpura y ciruela de Figma por esta paleta.
- Usar texto blanco sobre los botones principales de fondo azul.
- Usar etiquetas de formulario, foco visible y botones accesibles.
- Evitar desbordamiento horizontal.

## Alcance
- Implementar solo frontend.
- No conectar backend ni servicios de IA.
- Los datos de demostración deben estar separados de la presentación.
- No presentar autenticaciones ni operaciones simuladas como reales.
- No guardar contraseñas ni credenciales.

## Verificación
- Ejecutar npm run build al terminar cada interfaz.
- Informar errores y advertencias sin ocultarlos.
- No afirmar que se revisó visualmente si no se hizo.
- No ejecutar pruebas automatizadas salvo que el usuario las solicite.

## Entrega
- Explicar los archivos modificados.
- Indicar la ruta para visualizar cada interfaz.
- Señalar las funcionalidades pendientes.