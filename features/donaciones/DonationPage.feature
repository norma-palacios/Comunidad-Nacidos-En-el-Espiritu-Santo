# language: es
Característica: Página de Donaciones (/donar)
  Como visitante de la plataforma,
  Quiero ver la página completa de donaciones,
  Para conocer cómo apoyar a la comunidad y enviar un mensaje.

  Escenario: Muestra el encabezado solemne de la página
    Dado que cargo la página de donaciones
    Cuando inspecciono el contenido
    Entonces debe mostrar el encabezado "Apoya Nuestra Misión"

  Escenario: Muestra la tarjeta de información bancaria
    Dado que cargo la página de donaciones
    Cuando inspecciono el contenido
    Entonces debe estar presente la tarjeta de donación

  Escenario: Muestra el formulario de contacto
    Dado que cargo la página de donaciones
    Cuando inspecciono el contenido
    Entonces debe estar presente el formulario de donación
