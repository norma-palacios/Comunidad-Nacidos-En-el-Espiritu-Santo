# language: es
Característica: Barra de Navegación (Navbar)
  Como visitante de la plataforma,
  Quiero ver una barra de navegación fija y clara,
  Para poder navegar entre secciones sin perder mi ubicación.

  Escenario: Renderizado del nombre/logo de la comunidad
    Dado que se renderiza el Navbar
    Cuando inspecciono la barra de navegación
    Entonces debe mostrar el nombre de la comunidad

  Escenario: La barra está fija en la parte superior
    Dado que se renderiza el Navbar
    Cuando inspecciono el contenedor principal
    Entonces debe tener la clase "fixed"

  Escenario: Presencia de los enlaces de navegación
    Dado que se renderiza el Navbar
    Cuando inspecciono la barra de navegación
    Entonces debe mostrar el enlace "Predicaciones"

  Escenario: Icono hamburguesa visible en versión móvil
    Dado que se renderiza el Navbar
    Cuando inspecciono la barra de navegación
    Entonces debe existir el botón del menú hamburguesa

  Escenario: El menú móvil se abre al hacer clic en hamburguesa
    Dado que se renderiza el Navbar
    Cuando el usuario hace clic en el botón hamburguesa
    Entonces debe mostrarse el menú de navegación móvil
