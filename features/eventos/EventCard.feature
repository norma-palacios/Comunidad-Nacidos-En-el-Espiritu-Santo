# language: es
Característica: Tarjeta de Evento (EventCard)
  Como visitante de la plataforma,
  Quiero ver una tarjeta con información detallada de un evento,
  Para saber cuándo y dónde se realizará.

  Escenario: Renderizado básico de la tarjeta
    Dado que se renderiza el componente EventCard con datos válidos
    Cuando inspecciono el contenido
    Entonces debe estar presente el elemento con data-testid "event-card"

  Escenario: Muestra el título del evento
    Dado que se renderiza el EventCard con título "Asamblea General"
    Cuando inspecciono el contenido
    Entonces debe mostrar "Asamblea General" en el encabezado

  Escenario: Muestra la fecha del evento resaltada
    Dado que se renderiza el EventCard con fecha día "15" y mes "MAR"
    Cuando inspecciono el contenido
    Entonces debe mostrar el día "15" y el mes "MAR" en el badge de fecha

  Escenario: Muestra la hora y el lugar del evento
    Dado que se renderiza el EventCard con hora "6:00 PM" y lugar "Salón Principal"
    Cuando inspecciono el contenido
    Entonces debe mostrar la hora y el lugar del evento

  Escenario: Tiene un botón de acción
    Dado que se renderiza el componente EventCard con datos válidos
    Cuando inspecciono el contenido
    Entonces debe existir un botón con data-testid "event-cta"
