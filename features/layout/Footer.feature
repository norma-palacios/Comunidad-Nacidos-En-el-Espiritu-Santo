# language: es
Característica: Pie de Página (Footer)
  Como visitante de la plataforma,
  Quiero ver un pie de página informativo y bien estructurado,
  Para acceder a enlaces y datos de contacto de la comunidad.

  Escenario: El Footer tiene fondo púrpura
    Dado que se renderiza el Footer
    Cuando inspecciono el contenedor del footer
    Entonces debe tener la clase de fondo púrpura "bg-[#880E4F]"

  Escenario: Columna de Marca visible
    Dado que se renderiza el Footer
    Cuando inspecciono su contenido
    Entonces debe mostrar el nombre de la comunidad en el footer

  Escenario: Columna de Enlaces Rápidos visible
    Dado que se renderiza el Footer
    Cuando inspecciono la columna de enlaces rápidos
    Entonces debe mostrar la sección "Enlaces Rápidos"

  Escenario: Columna de Contacto visible
    Dado que se renderiza el Footer
    Cuando inspecciono la columna de contacto
    Entonces debe mostrar la sección "Contacto"

  Escenario: Columna de Redes Sociales visible
    Dado que se renderiza el Footer
    Cuando inspecciono la columna de redes sociales
    Entonces debe mostrar la sección "Redes Sociales"
