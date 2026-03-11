# language: es
Característica: Componente Encabezado de Sección (SectionHeading)
  Como visitante de la plataforma,
  Quiero ver encabezados de sección claramente estructurados,
  Para identificar fácilmente el contenido de cada bloque.

  Escenario: Renderizado con título y subtítulo
    Dado que se renderiza el SectionHeading con título "Nuestros Servicios" y subtítulo "Todo lo que ofrecemos"
    Cuando inspecciono el componente
    Entonces debe mostrar el texto del título "Nuestros Servicios"
    Y debe mostrar el texto del subtítulo "Todo lo que ofrecemos"

  Escenario: Línea decorativa amarilla visible
    Dado que se renderiza el SectionHeading con título "Eventos"
    Cuando inspecciono el componente
    Entonces debe existir un elemento decorativo con la clase de fondo "bg-[#FFD600]"

  Escenario: Renderizado sólo con título (sin subtítulo)
    Dado que se renderiza el SectionHeading únicamente con título "Comunidad"
    Cuando inspecciono el componente
    Entonces debe mostrar el texto del título "Comunidad"
    Y el área de subtítulo no debe renderizarse
