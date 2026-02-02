# Portafolio - Carolina Hernández · Cosas de Datos

Sitio web personal tipo portafolio. Muestra proyectos, temas de especialidad, herramientas y datos de contacto.

## Estructura del proyecto

```
Page/
├── index.html                  ← Página principal (todo el contenido)
├── style.css                   ← Estilos visuales y temas claro/oscuro
├── script.js                   ← Interactividad (menú, tags, tema)
├── profile.jpg                 ← Foto de perfil
├── tablero-jco-preview.png     ← Preview del proyecto Jóvenes con Oportunidades
├── monitor-noticias-preview.png← Preview del proyecto monitoreo de noticias
└── Bios/                       ← Documentos de referencia (CV, ejemplos)
```

## Secciones de la página

1. **Navegación**: barra superior fija con el nombre "Carolina Hernández · Cosas de Datos" y links a cada sección.
2. **Inicio (hero)**: subtítulo descriptivo y texto breve de presentación.
3. **Temas**: tags interactivos con las áreas de especialidad. Al hacer clic se despliega la descripción.
4. **Proyectos**: tarjetas con link a cada proyecto y su código en GitHub.
5. **Sobre mí**: foto, bio profesional y redes sociales.
6. **Contacto**: botones de email, GitHub y LinkedIn.

## Nota importante: h1 oculto para SEO

En la sección hero del `index.html` hay un `<h1>` con la clase `sr-only`:

```html
<h1 class="sr-only">Carolina Hernández · Cosas de Datos</h1>
```

**No se debe eliminar.** Este elemento no se ve en la página, pero cumple dos funciones:

- **Buscadores (Google, Bing, etc.)**: el `<h1>` es la etiqueta más importante que usan los motores de búsqueda para entender de qué trata la página. Sin él, el sitio pierde posicionamiento.
- **Accesibilidad**: los lectores de pantalla (herramientas que usan personas con discapacidad visual) leen este título para orientar al usuario.

La clase `.sr-only` está definida al inicio de `style.css`. Oculta el elemento visualmente pero lo deja accesible para buscadores y lectores de pantalla. Tampoco debe eliminarse.

Si se cambia el nombre o el concepto del sitio, se debe actualizar este `<h1>` para que coincida.

## Cómo hacer cambios

- **Cambiar textos**: editar directamente en `index.html`. Cada sección está marcada con comentarios (`<!-- ========== NOMBRE ========== -->`).
- **Cambiar colores**: en `style.css`, las variables CSS están al inicio del archivo (buscar `:root`). Cambiar los valores ahí modifica todo el sitio.
- **Agregar un proyecto**: copiar uno de los bloques `<article class="project-card">` en `index.html` y cambiar título, descripción, tags, imagen y links.
- **Agregar una herramienta**: copiar un bloque `<div class="tool-item">` y cambiar el ícono y nombre.

## Respaldo

El archivo `index_v1.html` es una copia de la versión original antes de los cambios de febrero 2026. Sirve como referencia si se necesita volver atrás.
