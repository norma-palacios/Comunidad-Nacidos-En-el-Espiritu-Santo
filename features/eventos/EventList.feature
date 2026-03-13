# language: es
Característica: Lista de Eventos (EventList)
  Como visitante de la plataforma,
  Quiero ver una lista de eventos disponibles,
  Para explorar todas las actividades de la comunidad.

  Escenario: Muestra las tarjetas cuando hay eventos
    Dado que se renderiza el EventList con eventos disponibles
    Cuando inspecciono el contenido
    Entonces debe mostrar las tarjetas de eventos

  Escenario: Muestra mensaje de vacío cuando no hay eventos
    Dado que se renderiza el EventList sin eventos
    Cuando inspecciono el contenido
    Entonces debe mostrar el mensaje "No hay eventos"

  Escenario: Acepta un arreglo de eventos personalizado
    Dado que se renderiza el EventList con el evento "Retiro de Oración"
    Cuando inspecciono el contenido
    Entonces debe mostrar la tarjeta "Retiro de Oración"
