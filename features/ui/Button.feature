# language: es
Característica: Componente Botón (Button)
  Como miembro de la comunidad que navega la plataforma,
  Quiero interactuar con botones claramente diferenciados,
  Para poder ejecutar acciones y navegar con facilidad.

  Escenario: Renderizado con variante primary
    Dado que se renderiza el componente Button con variante "primary"
    Cuando inspecciono el botón
    Entonces debe mostrar el texto proporcionado
    Y debe tener la clase de fondo púrpura "bg-[#880E4F]"

  Escenario: Renderizado con variante secondary
    Dado que se renderiza el componente Button con variante "secondary"
    Cuando inspecciono el botón
    Entonces debe mostrar el texto proporcionado
    Y debe tener la clase de fondo dorado "bg-[#FFD600]"
    Y debe tener texto oscuro para contraste

  Escenario: Renderizado con variante outline
    Dado que se renderiza el componente Button con variante "outline"
    Cuando inspecciono el botón
    Entonces debe mostrar el texto proporcionado
    Y debe tener un borde visible

  Escenario: Renderizado con variante ghost
    Dado que se renderiza el componente Button con variante "ghost"
    Cuando inspecciono el botón
    Entonces debe mostrar el texto proporcionado
    Y debe tener fondo transparente

  Escenario: Ejecución del manejador onClick
    Dado que se renderiza el componente Button con un manejador onClick
    Cuando el usuario hace clic en el botón
    Entonces el manejador onClick debe ser invocado exactamente una vez
