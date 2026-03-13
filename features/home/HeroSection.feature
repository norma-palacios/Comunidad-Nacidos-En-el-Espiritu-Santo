# language: es
Característica: Sección Hero (HeroSection)
  Como visitante de la plataforma,
  Quiero ver una portada impactante al ingresar a la página de inicio,
  Para sentir la bienvenida de la comunidad.

  Escenario: Renderizado del título principal
    Dado que se renderiza la HeroSection con un título
    Cuando inspecciono la sección
    Entonces debe mostrar el título proporcionado

  Escenario: Altura de la sección es 80vh
    Dado que se renderiza la HeroSection
    Cuando inspecciono la sección
    Entonces la sección debe tener una altura mínima de 80vh

  Escenario: Overlay oscuro de fondo presente
    Dado que se renderiza la HeroSection
    Cuando inspecciono la sección
    Entonces debe existir un overlay oscuro con atributo "data-testid" igual a "hero-overlay"

  Escenario: Renderizado de los botones de acción
    Dado que se renderiza la HeroSection
    Cuando inspecciono la sección
    Entonces debe existir al menos un botón con fondo dorado
    Y debe existir al menos un botón con fondo semitransparente
