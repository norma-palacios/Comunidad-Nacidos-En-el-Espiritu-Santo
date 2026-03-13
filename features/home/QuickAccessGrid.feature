# language: es
Característica: Sección de Accesos Rápidos (QuickAccessGrid)
  Como visitante de la página de inicio,
  Quiero ver un grupo de accesos rápidos a las secciones principales,
  Para navegar de inmediato a las áreas clave de la comunidad.

  Escenario: Renderizado de las tres tarjetas de acceso
    Dado que se renderiza el QuickAccessGrid con los accesos predeterminados
    Cuando inspecciono la sección
    Entonces debe mostrar la tarjeta "Predicaciones"
    Y debe mostrar la tarjeta "Actividades"
    Y debe mostrar la tarjeta "Ayuda Social"

  Escenario: El contenedor tiene clase de grilla
    Dado que se renderiza el QuickAccessGrid
    Cuando inspecciono el contenedor principal
    Entonces debe tener la clase "grid"

  Escenario: La sección acepta un arreglo de accesos personalizados
    Dado que se renderiza el QuickAccessGrid con el acceso "Oración Comunitaria"
    Cuando inspecciono la sección
    Entonces debe mostrar la tarjeta "Oración Comunitaria"
