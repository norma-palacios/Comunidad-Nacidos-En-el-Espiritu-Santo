# language: es
Característica: Página de Eventos (/eventos)
  Como visitante de la plataforma,
  Quiero ver la página completa de eventos,
  Para explorar el calendario de actividades de la comunidad.

  Escenario: Muestra el banner con el título de la página
    Dado que cargo la página de eventos
    Cuando inspecciono el contenido
    Entonces debe mostrar el título "Nuestras Actividades"

  Escenario: Muestra el filtro de categorías
    Dado que cargo la página de eventos
    Cuando inspecciono el contenido
    Entonces debe estar presente el filtro de eventos

  Escenario: Muestra la lista de eventos
    Dado que cargo la página de eventos
    Cuando inspecciono el contenido
    Entonces debe estar presente la lista de eventos
