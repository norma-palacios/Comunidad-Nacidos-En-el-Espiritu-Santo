import React from 'react';
import { render, screen } from '@testing-library/react';
import { loadFeature, defineFeature } from 'jest-cucumber';
import RootLayoutContent from '../layout';

const feature = loadFeature('./features/layout/RootLayout.feature');

defineFeature(feature, (test) => {
  // Escenario 1: Navbar presente
  test('Renderizado del Navbar en el layout', ({ given, when, then }) => {
    given('que se renderiza el RootLayoutContent con contenido', () => {
      render(<RootLayoutContent><p>Contenido</p></RootLayoutContent>);
    });

    when('inspecciono el layout', () => {});

    then('debe estar presente la barra de navegación', () => {
      expect(document.querySelector('[data-testid="navbar"]')).toBeInTheDocument();
    });
  });

  // Escenario 2: children renderizados
  test('Renderizado del contenido (children) en el layout', ({ given, when, then }) => {
    given('que se renderiza el RootLayoutContent con contenido "Mi Página"', () => {
      render(<RootLayoutContent><p>Mi Página</p></RootLayoutContent>);
    });

    when('inspecciono el layout', () => {});

    then('debe mostrarse el contenido "Mi Página"', () => {
      expect(screen.getByText('Mi Página')).toBeInTheDocument();
    });
  });

  // Escenario 3: Footer presente
  test('Renderizado del Footer en el layout', ({ given, when, then }) => {
    given('que se renderiza el RootLayoutContent con contenido', () => {
      render(<RootLayoutContent><p>Contenido</p></RootLayoutContent>);
    });

    when('inspecciono el layout', () => {});

    then('debe estar presente el pie de página', () => {
      expect(document.querySelector('[data-testid="footer"]')).toBeInTheDocument();
    });
  });
});
