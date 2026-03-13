Plan de Ejecución: Pantalla de Ofrendas y Donaciones

Este documento detalla la construcción de la sección de apoyo económico y peticiones de oración, siguiendo la metodología SDD/BDD.

FASE 1: Componentes de Información y Acción

Tarea 1.1: Tarjeta de Información Bancaria (DonationCard)

[x] Paso 1: Especificación (features/donaciones/DonationCard.feature)

[x] Paso 2: Prueba (src/components/features/donaciones/__tests__/DonationCard.spec.jsx)

[x] Paso 3: Componente (src/components/features/donaciones/DonationCard.jsx)

Detalles: Tarjeta con borde superior color Vino (#880E4F), icono de corazón, detalles de cuenta bancaria y botón de "Notificar Donación".

Tarea 1.2: Formulario de Peticiones y Contacto (DonationForm)

[x] Paso 1: Especificación (features/donaciones/DonationForm.feature)

[x] Paso 2: Prueba (src/components/features/donaciones/__tests__/DonationForm.spec.jsx)

[x] Paso 3: Componente (src/components/features/donaciones/DonationForm.jsx)

Detalles: Campos para Nombre, Email y Mensaje/Petición. Validación de campos obligatorios y botón de envío con icono de avión de papel.

FASE 2: Integración y Página

Tarea 2.1: Página de Donaciones (src/app/donar/page.jsx)

[x] Paso 1: Especificación (features/donaciones/DonationPage.feature)

[x] Paso 2: Prueba (src/app/donar/__tests__/page.spec.jsx)

[x] Paso 3: Componente (src/app/donar/page.jsx)

Detalles: Layout de dos columnas (Escritorio) que integra la DonationCard y el DonationForm bajo un encabezado solemne.