# Política de seguridad

## Versiones compatibles

La rama `master` es la única versión mantenida y recibe las correcciones de seguridad. Las ramas de desarrollo y despliegue no se consideran versiones compatibles.

## Comunicar una vulnerabilidad

No publiques vulnerabilidades en un issue, discusión o pull request público.

1. Utiliza **Security > Report a vulnerability** en GitHub para enviar un informe privado, si la opción está disponible.
2. Si el canal privado no está habilitado, contacta primero con el propietario del repositorio a través de GitHub sin incluir detalles explotables públicamente.
3. Incluye una descripción clara, pasos de reproducción, impacto estimado y una posible mitigación si la conoces.

Se intentará confirmar la recepción en un plazo de 7 días y comunicar el progreso mientras se analiza el informe. Los plazos de corrección dependerán de la severidad y complejidad del problema.

## Alcance

Se consideran dentro del alcance:

- El código fuente de la aplicación.
- La configuración de compilación y despliegue.
- Los workflows de GitHub Actions.
- Dependencias con impacto demostrable en la aplicación desplegada.

Los problemas sin impacto de seguridad verificable deben comunicarse mediante la plantilla de errores del repositorio.

Gracias por ayudar a mantener el proyecto y a sus usuarios seguros.
