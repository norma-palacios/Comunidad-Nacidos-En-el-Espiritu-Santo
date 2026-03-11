# language: es
Característica: Layout Principal (RootLayoutContent)
  Como visitante de la plataforma,
  Quiero que todas las páginas compartan la misma estructura de navegación y pie de página,
  Para tener una experiencia de navegación consistente.

  Escenario: Renderizado del Navbar en el layout
    Dado que se renderiza el RootLayoutContent con contenido
    Cuando inspecciono el layout
    Entonces debe estar presente la barra de navegación

  Escenario: Renderizado del contenido (children) en el layout
    Dado que se renderiza el RootLayoutContent con contenido "Mi Página"
    Cuando inspecciono el layout
    Entonces debe mostrarse el contenido "Mi Página"

  Escenario: Renderizado del Footer en el layout
    Dado que se renderiza el RootLayoutContent con contenido
    Cuando inspecciono el layout
    Entonces debe estar presente el pie de página
