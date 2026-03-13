# language: es
Característica: Filtro de Categorías (EventFilter)
  Como visitante de la plataforma,
  Quiero filtrar los eventos por categoría,
  Para encontrar fácilmente los que me interesan.

  Escenario: Renderizado del componente de filtro
    Dado que se renderiza el EventFilter
    Cuando inspecciono el contenido
    Entonces debe estar presente el elemento con data-testid "event-filter"

  Escenario: La opción "Todos" está activa por defecto
    Dado que se renderiza el EventFilter con filtro activo "Todos"
    Cuando inspecciono el contenido
    Entonces debe existir el botón con data-testid "filter-todos"

  Escenario: Muestra todas las opciones de filtro
    Dado que se renderiza el EventFilter
    Cuando inspecciono el contenido
    Entonces debe mostrar las opciones "Asambleas", "Retiros" y "Jóvenes"

  Escenario: Llama al callback al seleccionar una categoría
    Dado que se renderiza el EventFilter con un callback onFiltrar
    Cuando el usuario hace clic en "Asambleas"
    Entonces el callback debe haberse llamado con "Asambleas"
