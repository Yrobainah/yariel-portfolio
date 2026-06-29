# Contribuir al proyecto

Gracias por tu interés en mejorar este portfolio. Este repositorio mantiene cambios pequeños, revisables y centrados en un único objetivo.

## Requisitos

- Node.js 22
- npm incluido con Node.js
- Git

## Preparar el entorno

1. Crea un fork o una rama a partir de `master`.
2. Instala las dependencias de forma reproducible:

   ```bash
   npm ci
   ```

3. Inicia el entorno local:

   ```bash
   npm start
   ```

## Validaciones

Antes de abrir un pull request, ejecuta:

```bash
npm run build
```

Para reproducir en local el build usado por GitHub Pages:

```bash
npm run deploy:local
```

## Convenciones

- Mantén cada cambio dentro del alcance descrito en el pull request.
- No incluyas credenciales, tokens, archivos generados ni dependencias instaladas.
- Respeta el estilo y la estructura existentes.
- Usa commits siguiendo [Conventional Commits](https://www.conventionalcommits.org/), por ejemplo:
  - `feat: add a new capability`
  - `fix: correct navigation behavior`
  - `docs: update contribution guide`
  - `ci: improve build workflow`
- Actualiza la documentación cuando cambie el proceso de desarrollo.

## Pull requests

- Dirige el pull request a `master`.
- Completa la plantilla y explica qué cambia y cómo se validó.
- Comprueba que CI y CodeQL finalizan correctamente.
- Mantén el pull request enfocado; separa cambios no relacionados.
- Solicita revisión antes de hacer merge.

Al contribuir aceptas que tu aportación se distribuya bajo los mismos términos que el resto del repositorio.
