# language: es
Característica: Sección de la Fundadora (FounderSection)
  Como visitante de la plataforma,
  Quiero ver información sobre la fundadora de la comunidad,
  Para conocer los orígenes y el carisma de la comunidad.

  Escenario: Renderizado de la sección de la fundadora
    Dado que se renderiza el componente FounderSection
    Cuando inspecciono el contenido
    Entonces debe estar presente la sección con data-testid "founder-section"

  Escenario: Muestra el nombre de la fundadora
    Dado que se renderiza el componente FounderSection
    Cuando inspecciono el contenido
    Entonces debe mostrar el nombre de la fundadora en un encabezado

  Escenario: Muestra la descripción de la fundadora
    Dado que se renderiza el componente FounderSection
    Cuando inspecciono el contenido
    Entonces debe mostrar el texto descriptivo sobre la fundadora

  Escenario: Acepta props personalizadas
    Dado que se renderiza el FounderSection con nombre "Hermana María de Jesús"
    Cuando inspecciono el contenido
    Entonces debe mostrar "Hermana María de Jesús" en el encabezado
