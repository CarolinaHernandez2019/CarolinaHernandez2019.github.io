/* ==========================================================
   TRADUCCIONES - Espanol / Ingles
   Archivo con todo el texto del sitio en ambos idiomas.

   Para agregar una traduccion nueva:
   1. Elegir una clave descriptiva (ej: "hero-bio")
   2. Agregar el texto en espanol bajo "es" y en ingles bajo "en"
   3. En el HTML, agregar data-i18n="la-clave" al elemento
   ========================================================== */

const traducciones = {

    // --- Navegacion ---
    "nav-logo": {
        es: "Carolina Hernández · Cosas de Datos",
        en: "Carolina Hernández · Data Stuff"
    },
    "nav-inicio": {
        es: "Inicio",
        en: "Home"
    },
    "nav-temas": {
        es: "Temas",
        en: "Topics"
    },
    "nav-proyectos": {
        es: "Proyectos",
        en: "Projects"
    },
    "nav-sobre": {
        es: "Sobre mí",
        en: "About"
    },
    "nav-contacto": {
        es: "Contacto",
        en: "Contact"
    },

    // --- Hero / Presentacion ---
    "hero-sr": {
        es: "Carolina Hernández · Cosas de Datos",
        en: "Carolina Hernández · Data Stuff"
    },
    "hero-subtitle": {
        es: "Portafolio, laboratorio de ideas, repositorio de información",
        en: "Portfolio, ideas lab, information repository"
    },
    "hero-bio": {
        es: "Cuando me preguntan a qué me dedico, siempre respondo: cosas de datos. Este sitio es justamente eso: un espacio para explorar y recopilar aprendizajes sobre datos.",
        en: "When people ask me what I do, I always answer: data stuff. This site is exactly that: a space to explore and gather learnings about data."
    },

    // --- Temas / Expertise ---
    "section-temas": {
        es: "Temas",
        en: "Topics"
    },
    "skill-policy": {
        es: "Análisis de datos sociales",
        en: "Social data analysis"
    },
    "skill-demographics": {
        es: "Análisis poblacional",
        en: "Population analysis"
    },
    "skill-dataviz": {
        es: "Visualización de datos",
        en: "Data visualization"
    },
    "skill-monitoring": {
        es: "Evaluación de políticas públicas",
        en: "Public policy evaluation"
    },
    "skill-education": {
        es: "Juventud y educación",
        en: "Youth and education"
    },
    "desc-policy": {
        es: "Experiencia en investigación sobre mercado laboral, juventud, educación y migración. Trabajo con encuestas de hogares de Colombia y América Latina.",
        en: "Research experience in labor markets, youth, education, and migration. Working with household surveys from Colombia and Latin America."
    },
    "desc-demographics": {
        es: "Desde 2013 trabajando en temas poblacionales, comenzando como asistente de investigación. Formación formal con maestría en demografía en El Colegio de México.",
        en: "Working on population topics since 2013, starting as a research assistant. Formal training with a master's degree in demography from El Colegio de México."
    },
    "desc-dataviz": {
        es: "Para públicos técnicos y no técnicos. Visualizaciones listas para publicación en ggplot2 y Plotly. Actualmente estudiando D3.js para crear visualizaciones web interactivas.",
        en: "For technical and non-technical audiences. Publication-ready visualizations in ggplot2 and Plotly. Currently studying D3.js to create interactive web visualizations."
    },
    "desc-monitoring": {
        es: "Experiencia en evaluación de políticas de juventud y educación a través de mi trabajo con el BID y la Secretaría Distrital de Integración Social de Bogotá.",
        en: "Experience in youth and education policy evaluation through my work with the IDB and the District Secretariat of Social Integration in Bogotá."
    },
    "desc-education": {
        es: "Más de 8 años especializándome en análisis y evaluación de políticas dirigidas a población joven, con énfasis en educación, empleo y participación.",
        en: "Over 8 years specializing in analysis and evaluation of policies targeting young populations, with emphasis on education, employment, and participation."
    },
    "subsection-herramientas": {
        es: "Herramientas",
        en: "Tools"
    },

    // --- Navegacion: Publicaciones ---
    "nav-publicaciones": {
        es: "Publicaciones",
        en: "Publications"
    },

    // --- Proyectos ---
    "section-proyectos": {
        es: "Proyectos recientes",
        en: "Recent projects"
    },
    "project1-title": {
        es: "Tablero de priorización para programas de juventud en Bogotá",
        en: "Prioritization dashboard for youth programs in Bogotá"
    },
    "project1-desc": {
        es: "Desarrollado para apoyar la asignación de programas sociales de la Secretaría Distrital de Integración Social. Permite identificar localidades con mayor concentración de jóvenes vulnerables según SISBEN 2024 y comparar necesidades entre territorios.",
        en: "Developed to support social program allocation at the District Secretariat of Social Integration. Identifies localities with the highest concentration of vulnerable youth based on SISBEN 2024 data and compares needs across territories."
    },
    "project1-link-app": {
        es: "Ver app",
        en: "View app"
    },
    "project1-link-code": {
        es: "Código",
        en: "Code"
    },
    "project2-title": {
        es: "Monitoreo de noticias de juventud",
        en: "Youth news monitoring"
    },
    "project2-desc": {
        es: "Herramienta para rastrear cómo se habla de juventud en medios colombianos. Automatiza la recolección diaria de noticias, categoriza menciones por temas y genera visualizaciones para identificar tendencias en la cobertura mediática.",
        en: "Tool for tracking how youth is covered in Colombian media. Automates daily news collection, categorizes mentions by topic, and generates visualizations to identify trends in media coverage."
    },
    "project2-link-app": {
        es: "Ver app",
        en: "View app"
    },
    "project2-link-code": {
        es: "Código",
        en: "Code"
    },

    // --- Tags de proyecto ---
    "tag-youth": {
        es: "Juventud",
        en: "Youth"
    },

    // --- Publicaciones ---
    "section-publicaciones": {
        es: "Publicaciones",
        en: "Publications"
    },
    "pub0-title": {
        es: "Evaluación de operaciones de la política distrital de juventud de Bogotá",
        en: "Operations evaluation of Bogotá's district youth policy"
    },
    "pub1-title": {
        es: "Educación en la región Amazónica",
        en: "Education in the Amazon region"
    },
    "pub2-title": {
        es: "Multiplicar aprendizajes: tutorías a distancia para potenciar la escuela",
        en: "Multiplying learning: remote tutoring to enhance schooling"
    },
    "pub3-title": {
        es: "¿Cómo reconstruir la educación postpandemia?",
        en: "How to reboot education post-pandemic"
    },
    "pub4-title": {
        es: "Estudiantes desvinculados: los costos reales de la pandemia",
        en: "Disconnected students: the real costs of the pandemic"
    },
    "pub-scholar-link": {
        es: "Ver todas las publicaciones en Google Scholar",
        en: "See all publications on Google Scholar"
    },

    // --- Sobre mi ---
    "section-sobre": {
        es: "Sobre mí",
        en: "About me"
    },
    "about-bio": {
        es: "He trabajado +8 años en análisis de datos sociales con instituciones públicas colombianas y organizaciones como el BID. Mi enfoque: sistemas de monitoreo, evaluación de impacto en educación y juventud, y transformar datos de encuestas de hogares en información para política pública. Estudié economía y demografía, pero mucho de lo que sé viene del autoaprendizaje continuo.",
        en: "I have 8+ years of experience in social data analysis with Colombian public institutions and organizations like the IDB. My focus: monitoring systems, impact evaluation in education and youth, and turning household survey data into information for public policy. I studied economics and demography, but much of what I know comes from continuous self-learning."
    },

    "about-cv-btn": {
        es: "Descargar CV",
        en: "Download CV"
    },

    // --- Contacto ---
    "section-contacto": {
        es: "Contacto",
        en: "Contact"
    },
    "contact-text": {
        es: "Si tienes preguntas, ideas o propuestas, aquí están mis datos.",
        en: "If you have questions, ideas, or proposals, here's how to reach me."
    },
    "contact-btn-email": {
        es: "Correo",
        en: "Email"
    },

    // --- Footer ---
    "footer-text": {
        es: "© 2026 Jenny Carolina Hernández Cardozo · Cosas de Datos",
        en: "© 2026 Jenny Carolina Hernández Cardozo · Data Stuff"
    },

    // --- Metadatos de la pagina ---
    "page-title": {
        es: "Cosas de Datos | Jenny Carolina Hernández Cardozo",
        en: "Data Stuff | Jenny Carolina Hernández Cardozo"
    },
    "meta-description": {
        es: "Laboratorio de ideas, repositorio de información...",
        en: "Ideas lab, information repository..."
    }
};
