# language: es
Característica: Tarjeta de Acceso Rápido (QuickAccessCard)
  Como miembro de la comunidad,
  Quiero ver tarjetas visuales de acceso rápido,
  Para navegar fácilmente hacia las secciones principales.

  Escenario: Renderizado del título de la tarjeta
    Dado que se renderiza una QuickAccessCard con título "Predicaciones"
    Cuando inspecciono la tarjeta
    Entonces debe mostrar el texto "Predicaciones"

  Escenario: Renderizado de la descripción de la tarjeta
    Dado que se renderiza una QuickAccessCard con descripción "Escucha nuestra palabra"
    Cuando inspecciono la tarjeta
    Entonces debe mostrar el texto "Escucha nuestra palabra"

  Escenario: La tarjeta tiene bordes redondeados
    Dado que se renderiza una QuickAccessCard con título "Galería"
    Cuando inspecciono la tarjeta
    Entonces la tarjeta debe tener clase de bordes redondeados

  Escenario: Enlace "Ver más" presente en la tarjeta
    Dado que se renderiza una QuickAccessCard con título "Ayuda Social"
    Cuando inspecciono la tarjeta
    Entonces debe existir un enlace con el texto "Ver más"

  Escenario: La tarjeta tiene animación de elevación al hacer hover
    Dado que se renderiza una QuickAccessCard con título "Predicaciones"
    Cuando inspecciono la tarjeta
    Entonces la tarjeta debe tener clase de elevación hover
