# language: es
Característica: Tarjeta de Información Bancaria (DonationCard)
  Como visitante de la plataforma,
  Quiero ver la información para realizar una donación,
  Para poder apoyar económicamente a la comunidad.

  Escenario: Renderizado básico de la tarjeta
    Dado que se renderiza el componente DonationCard
    Cuando inspecciono el contenido
    Entonces debe estar presente el elemento con data-testid "donation-card"

  Escenario: Muestra el nombre del banco o entidad
    Dado que se renderiza el DonationCard con banco "Banco Nacional"
    Cuando inspecciono el contenido
    Entonces debe mostrar el texto "Banco Nacional"

  Escenario: Muestra el número de cuenta
    Dado que se renderiza el DonationCard con cuenta "001-123456-78"
    Cuando inspecciono el contenido
    Entonces debe mostrar el número de cuenta "001-123456-78"


