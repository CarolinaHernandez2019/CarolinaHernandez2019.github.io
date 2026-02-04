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
        es: "Política social y evaluación de impacto",
        en: "Social policy and impact evaluation"
    },
    "skill-demographics": {
        es: "Demografía y análisis poblacional",
        en: "Demographics and population analysis"
    },
    "skill-dataviz": {
        es: "Visualización de datos",
        en: "Data visualization"
    },
    "skill-monitoring": {
        es: "Diseño de sistemas de monitoreo",
        en: "Monitoring systems design"
    },
    "skill-education": {
        es: "Educación y políticas de juventud",
        en: "Education and youth policies"
    },
    "desc-policy": {
        es: "Diseño e implementación de evaluaciones de impacto para programas sociales en América Latina. Experiencia evaluando la efectividad de políticas públicas en colaboración con instituciones gubernamentales y organizaciones internacionales como el BID.",
        en: "Design and implementation of impact evaluations for social programs in Latin America. Experience evaluating public policy effectiveness in collaboration with government institutions and international organizations such as the IDB."
    },
    "desc-demographics": {
        es: "Proyecciones de población, análisis demográfico y procesamiento de datos censales. Experiencia con datos del DANE y modelamiento demográfico regional para la planificación de políticas en instituciones colombianas.",
        en: "Population projections, demographic analysis, and census data processing. Experience with DANE data and regional demographic modeling for policy planning in Colombian institutions."
    },
    "desc-dataviz": {
        es: "Transformación de conjuntos de datos complejos en visualizaciones claras y accesibles, tanto para audiencias técnicas como no técnicas. Creación de tableros y reportes con Power BI, Python (matplotlib, seaborn) y R (ggplot2).",
        en: "Transforming complex datasets into clear and accessible visualizations for both technical and non-technical audiences. Building dashboards and reports with Power BI, Python (matplotlib, seaborn), and R (ggplot2)."
    },
    "desc-monitoring": {
        es: "Diseño de sistemas de monitoreo basados en datos para programas sociales, permitiendo el seguimiento en tiempo real de indicadores y la toma de decisiones basada en evidencia en instituciones públicas.",
        en: "Design of data-driven monitoring systems for social programs, enabling real-time indicator tracking and evidence-based decision-making in public institutions."
    },
    "desc-education": {
        es: "Conocimiento especializado en política educativa y programas de desarrollo juvenil. Análisis de datos enfocado en acceso educativo, métricas de calidad y resultados de programas en diversos contextos latinoamericanos.",
        en: "Specialized knowledge in education policy and youth development programs. Data analysis focused on educational access, quality metrics, and program outcomes across diverse Latin American contexts."
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
        es: "Tablero interactivo para explorar la priorización de programas sociales en Bogotá según datos de población joven vulnerable de la ciudad, en este caso con datos del SISBEN 2024. Este tablero incluye mapas, rankings dinámicos por grupos SISBEN y análisis comparativo por localidad.",
        en: "Interactive dashboard to explore the prioritization of social programs in Bogotá based on the city's vulnerable youth population data, using SISBEN 2024 data. This dashboard includes maps, dynamic rankings by SISBEN groups, and comparative analysis by locality."
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
        es: "Sistema automatizado de scraping y monitoreo de noticias relacionadas con juventud. Recopila artículos de prensa, los procesa y los presenta en un tablero para seguimiento temático.",
        en: "Automated scraping and monitoring system for youth-related news. Collects press articles, processes them, and presents them on a dashboard for topic tracking."
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
        es: "Estudié economía y tengo una maestría en demografía, pero me considero una eterna aprendiz de muchas cosas, entre ellas: automatización, visualización de datos e IA responsable. Tengo +8 años de experiencia en análisis de datos con instituciones públicas colombianas y organizaciones como el BID en América Latina. Mi trabajo: sistemas de monitoreo, evaluación de impacto en educación y juventud, machine learning para encuestas de hogares, convirtiendo datos complejos en información útil para decisiones de política pública.",
        en: "I studied economics and have a master's degree in demography, but I consider myself an eternal learner of many things, among them: automation, data visualization, and responsible AI. I have 8+ years of experience in data analysis with Colombian public institutions and organizations like the IDB in Latin America. My work: monitoring systems, impact evaluation in education and youth, machine learning for household surveys, turning complex data into useful information for public policy decisions."
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
