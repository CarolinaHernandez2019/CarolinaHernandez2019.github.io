/* ==========================================================
   PORTAFOLIO - Carolina Hernandez
   Archivo de interactividad.

   Este archivo controla:
   - Los tags de expertise (clic para ver descripcion)
   - El menu hamburguesa en moviles
   - El cambio de tema claro/oscuro
   - La sombra de la barra al hacer scroll
   - El link activo en la navegacion segun la seccion visible
   ========================================================== */

document.addEventListener('DOMContentLoaded', () => {

    // --- Tags de expertise ---
    // Al hacer clic en un tag, se muestra su descripcion debajo
    const skillTags = document.querySelectorAll('.skill-tag');
    const skillDescs = document.querySelectorAll('.skill-desc');

    skillTags.forEach(tag => {
        tag.addEventListener('click', () => {
            const skillId = tag.dataset.skill;
            const desc = document.getElementById(`desc-${skillId}`);

            // Si el tag ya esta activo, se desactiva (toggle)
            if (tag.classList.contains('active')) {
                tag.classList.remove('active');
                desc.classList.remove('active');
                return;
            }

            // Se desactivan todos los demas
            skillTags.forEach(t => t.classList.remove('active'));
            skillDescs.forEach(d => d.classList.remove('active'));

            // Se activa el seleccionado
            tag.classList.add('active');
            desc.classList.add('active');
        });
    });

    // --- Menu hamburguesa (moviles) ---
    // Abre y cierra el menu de navegacion en pantallas pequenas
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');

    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Cerrar el menu al hacer clic en un link
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // --- Tema claro / oscuro ---
    // Se guarda la preferencia en localStorage para que persista
    const themeToggle = document.getElementById('themeToggle');
    const savedTheme = localStorage.getItem('theme');

    // Si ya eligio un tema antes, se aplica
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
        updateThemeIcon(savedTheme);
    }

    themeToggle.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme');
        const next = current === 'dark' ? 'light' : 'dark';

        document.documentElement.setAttribute('data-theme', next);
        localStorage.setItem('theme', next);
        updateThemeIcon(next);
    });

    // Cambia el icono entre luna (claro) y sol (oscuro)
    function updateThemeIcon(theme) {
        const icon = themeToggle.querySelector('i');
        icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    }

    // --- Sombra en la barra de navegacion al hacer scroll ---
    const navbar = document.getElementById('navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 10) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // --- Link activo segun la seccion visible ---
    // Resalta el link de la seccion que se esta viendo
    const sections = document.querySelectorAll('section[id]');
    const navItems = document.querySelectorAll('.nav-links a');

    const observerOptions = {
        rootMargin: '-100px 0px -60% 0px',
        threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navItems.forEach(item => {
                    item.classList.remove('active');
                    if (item.getAttribute('href') === `#${id}`) {
                        item.classList.add('active');
                    }
                });
            }
        });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));

    // --- Cambio de idioma (espanol / ingles) ---
    // Se guarda la preferencia en localStorage para que persista entre visitas
    const langToggle = document.getElementById('langToggle');
    let idiomaActual = localStorage.getItem('lang') || 'en';

    // Se aplica el idioma guardado al cargar la pagina
    aplicarIdioma(idiomaActual);

    langToggle.addEventListener('click', () => {
        // Alterna entre espanol e ingles
        idiomaActual = idiomaActual === 'es' ? 'en' : 'es';
        localStorage.setItem('lang', idiomaActual);
        aplicarIdioma(idiomaActual);
    });

    // Recorre todos los elementos con data-i18n y reemplaza su texto
    function aplicarIdioma(lang) {
        // Actualiza el boton para mostrar el idioma al que se puede cambiar
        langToggle.textContent = lang === 'es' ? 'EN' : 'ES';

        // Cambia el atributo lang del HTML (importante para accesibilidad y SEO)
        document.documentElement.lang = lang;

        // Recorre cada elemento marcado con data-i18n
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const clave = el.getAttribute('data-i18n');
            if (traducciones[clave] && traducciones[clave][lang]) {
                el.textContent = traducciones[clave][lang];
            }
        });

        // Actualiza el titulo de la pagina (pestaña del navegador)
        if (traducciones['page-title'] && traducciones['page-title'][lang]) {
            document.title = traducciones['page-title'][lang];
        }

        // Actualiza la meta description (para SEO)
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc && traducciones['meta-description'] && traducciones['meta-description'][lang]) {
            metaDesc.setAttribute('content', traducciones['meta-description'][lang]);
        }
    }
});
