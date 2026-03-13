# language: es
Característica: Formulario de Peticiones y Contacto (DonationForm)
  Como visitante de la plataforma,
  Quiero enviar una petición de oración o mensaje junto con mi donación,
  Para comunicarme con la comunidad.

  Escenario: Renderizado del formulario
    Dado que se renderiza el componente DonationForm
    Cuando inspecciono el contenido
    Entonces debe estar presente el elemento con data-testid "donation-form"

  Escenario: Tiene los campos de nombre, email y mensaje
    Dado que se renderiza el componente DonationForm
    Cuando inspecciono el contenido
    Entonces debe existir el campo con data-testid "input-nombre"
    Y debe existir el campo con data-testid "input-email"
    Y debe existir el campo con data-testid "input-mensaje"

  Escenario: Tiene un botón de envío
    Dado que se renderiza el componente DonationForm
    Cuando inspecciono el contenido
    Entonces debe existir un botón con data-testid "btn-enviar"

  Escenario: Muestra error si se envía con campos vacíos
    Dado que se renderiza el componente DonationForm
    Cuando el usuario hace clic en el botón de envío sin completar el formulario
    Entonces debe mostrar el mensaje de error "obligatorio"
