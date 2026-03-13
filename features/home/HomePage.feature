# language: es
Característica: Página Principal (HomePage)
  Como visitante de la plataforma,
  Quiero ver la página de inicio completamente ensamblada,
  Para experimentar la bienvenida y las secciones principales de la comunidad.

  Escenario: Renderizado del HeroSection en la página
    Dado que cargo la página de inicio
    Cuando inspecciono el contenido
    Entonces debe estar presente la sección Hero con el título principal

  Escenario: Renderizado del QuickAccessGrid en la página
    Dado que cargo la página de inicio
    Cuando inspecciono el contenido
    Entonces debe mostrar el acceso rápido a "Predicaciones"
    Y debe mostrar el acceso rápido a "Actividades"
    Y debe mostrar el acceso rápido a "Ayuda Social"

  Escenario: Renderizado del FounderSection en la página
    Dado que cargo la página de inicio
    Cuando inspecciono el contenido
    Entonces debe estar presente la sección de la fundadora
