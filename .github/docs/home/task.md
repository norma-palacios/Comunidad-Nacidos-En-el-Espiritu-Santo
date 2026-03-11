Plan de Ejecución: Pantalla de Inicio (Home)

Este documento contiene el desglose de tareas para construir la página de inicio (/) y la estructura base de la aplicación aplicando la metodología SDD/BDD clásica (Paso a Paso, sin Modo Turbo).

FASE 1: Componentes UI Base y Layout (Reutilizables)

Estos componentes son la base estructural y visual que se usará en toda la aplicación.

Tarea 1.1: Componente Botón (Button)

[x] Paso 1: Especificación (features/ui/Button.feature)

[x] Paso 2: Prueba (src/components/ui/__tests__/Button.spec.jsx)

[x] Paso 3: Componente (src/components/ui/Button.jsx)

Detalles: Debe soportar las variantes primary (Púrpura), secondary (Dorado), outline y ghost, además de ejecutar onClick.

Tarea 1.2: Componente Encabezado de Sección (SectionHeading)

[x] Paso 1: Especificación (features/ui/SectionHeading.feature)

[x] Paso 2: Prueba (src/components/ui/__tests__/SectionHeading.spec.jsx)

[x] Paso 3: Componente (src/components/ui/SectionHeading.jsx)

Detalles: Recibe title y subtitle. Debe incluir la línea decorativa dorada debajo del título.

Tarea 1.3: Barra de Navegación (Navbar)

[x] Paso 1: Especificación (features/layout/Navbar.feature)

[x] Paso 2: Prueba (src/components/layout/__tests__/Navbar.spec.jsx)

[x] Paso 3: Componente (src/components/layout/Navbar.jsx)

Detalles: Topbar responsive. Lado izquierdo: Logo/Nombre. Lado derecho: Enlaces de navegación y botón de donaciones. Debe incluir el menú hamburguesa (lucide-react) funcional para versión móvil y mantenerse fija en la parte superior (fixed).

Tarea 1.4: Pie de Página (Footer)

[x] Paso 1: Especificación (features/layout/Footer.feature)

[x] Paso 2: Prueba (src/components/layout/__tests__/Footer.spec.jsx)

[x] Paso 3: Componente (src/components/layout/Footer.jsx)

Detalles: Footer de color Púrpura con 4 columnas: Marca/Descripción, Enlaces Rápidos, Contacto y Redes Sociales.

FASE 2: Componentes Específicos del Home

Tarea 2.1: Sección Hero (HeroSection)

[x] Paso 1: Especificación (features/home/HeroSection.feature)

[x] Paso 2: Prueba (src/components/features/home/__tests__/HeroSection.spec.jsx)

[x] Paso 3: Componente (src/components/features/home/HeroSection.jsx)

Detalles: Portada de 80vh. Fondo con imagen y overlay oscuro. Título principal y uso de los botones creados en la Fase 1.

Tarea 2.2: Tarjeta de Acceso Rápido (QuickAccessCard)

[x] Paso 1: Especificación (features/home/QuickAccessCard.feature)

[x] Paso 2: Prueba (src/components/features/home/__tests__/QuickAccessCard.spec.jsx)

[x] Paso 3: Componente (src/components/features/home/QuickAccessCard.jsx)

Detalles: Tarjeta con bordes redondeados, icono central, título, descripción y botón "Ver más". Animación hover de elevación.

Tarea 2.3: Sección de Accesos Rápidos (QuickAccessGrid)

[x] Paso 1: Especificación (features/home/QuickAccessGrid.feature)

[x] Paso 2: Prueba (src/components/features/home/__tests__/QuickAccessGrid.spec.jsx)

[x] Paso 3: Componente (src/components/features/home/QuickAccessGrid.jsx)

Detalles: Contenedor que agrupa 3 QuickAccessCard (Predicaciones, Galería, Ayuda Social).

FASE 3: Ensamblaje Final

Tarea 3.1: Layout Principal (layout.jsx)

[x] Paso 1: Especificación (features/layout/RootLayout.feature)

[x] Paso 2: Prueba (src/app/__tests__/layout.spec.jsx)

[x] Paso 3: Componente (src/app/layout.jsx)

Detalles: Este es el archivo maestro de Next.js. Debe colocar el componente Navbar en la parte superior, el contenido (children) en medio, y el Footer en la parte inferior.

Tarea 3.2: Página Principal (page.jsx)

[x] Paso 1: Especificación (features/home/HomePage.feature)

[x] Paso 2: Prueba (src/app/__tests__/page.spec.jsx)

[x] Paso 3: Componente (src/app/page.jsx)

Detalles: Ensamblar HeroSection y QuickAccessGrid en la ruta raíz de la aplicación.