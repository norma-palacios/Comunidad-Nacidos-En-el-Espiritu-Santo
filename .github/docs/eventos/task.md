Plan de Ejecución: Pantalla de Eventos y Actividades

Este documento detalla la construcción de la página /eventos, enfocada en mostrar el calendario de la comunidad y detalles de actividades.

FASE 1: Componentes de Visualización

Tarea 1.1: Tarjeta de Evento Detallada (EventCard)

[ ] Paso 1: Especificación (features/eventos/EventCard.feature)

[ ] Paso 2: Prueba (src/components/features/eventos/__tests__/EventCard.spec.jsx)

[ ] Paso 3: Componente (src/components/features/eventos/EventCard.jsx)

Detalles: Debe mostrar imagen, fecha (en formato día/mes resaltado), título, hora y lugar. Incluye un botón de "Interesado" o "Ver más".

Tarea 1.2: Filtro de Categorías (EventFilter)

[ ] Paso 1: Especificación (features/eventos/EventFilter.feature)

[ ] Paso 2: Prueba (src/components/features/eventos/__tests__/EventFilter.spec.jsx)

[ ] Paso 3: Componente (src/components/features/eventos/EventFilter.jsx)

Detalles: Botones tipo "pills" para filtrar entre: "Todos", "Asambleas", "Retiros", "Jóvenes".

FASE 2: Integración de Datos (Firebase Ready)

Tarea 2.1: Contenedor de Lista de Eventos (EventList)

[ ] Paso 1: Especificación (features/eventos/EventList.feature)

[ ] Paso 2: Prueba (src/components/features/eventos/__tests__/EventList.spec.jsx)

[ ] Paso 3: Componente (src/components/features/eventos/EventList.jsx)

Detalles: Mapea un arreglo de objetos de eventos. Debe mostrar un mensaje de "No hay eventos próximos" si la lista está vacía.

FASE 3: Ensamblaje de Pantalla

Tarea 3.1: Página de Eventos (src/app/eventos/page.jsx)

[ ] Paso 1: Especificación (features/eventos/EventPage.feature)

[ ] Paso 2: Prueba (src/app/eventos/__tests__/page.spec.jsx)

[ ] Paso 3: Componente (src/app/eventos/page.jsx)

Detalles: Integra el Navbar, un Banner superior con el título "Nuestras Actividades", el EventFilter y la EventList.