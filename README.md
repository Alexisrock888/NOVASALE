# NovaSale

Frontend demostrativo de una tienda e-commerce con área de cliente, administración y vista de arquitectura. No incluye backend, APIs, base de datos, pagos ni integraciones externas. Los datos viven en el estado local de React y se reinician al recargar la página.

## Ejecutar

```bash
npm install
npm run dev
```

Para generar la versión de producción: `npm run build`.

## Publicación

GitHub Actions compila y publica automáticamente los cambios de `main` en GitHub Pages. La URL del sitio es <https://alexisrock888.github.io/NOVASALE/>. Para que se sirva la compilación (y no el código fuente), selecciona **Settings → Pages → Build and deployment → Source: GitHub Actions** en el repositorio. Después, ejecuta el workflow **Deploy NovaSale to GitHub Pages** desde la pestaña **Actions**.

## Acceso de demostración

- Cliente: `cliente@novasale.co` · `Cliente123`.
- Administradora: `admin@novasale.co` · `Admin123`.

Las credenciales también aparecen en la pantalla de acceso. Los botones de demostración permiten entrar directamente como cliente o administradora. Las cuentas creadas desde el formulario de registro quedan disponibles durante la sesión actual.
