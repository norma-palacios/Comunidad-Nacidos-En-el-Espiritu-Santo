import React from 'react';
import { render, screen } from '@testing-library/react';
import { loadFeature, defineFeature } from 'jest-cucumber';
import QuickAccessGrid from '../QuickAccessGrid';

const feature = loadFeature('./features/home/QuickAccessGrid.feature');

defineFeature(feature, (test) => {
  // Escenario 1: tres tarjetas predeterminadas
  test('Renderizado de las tres tarjetas de acceso', ({ given, when, then, and }) => {
    given('que se renderiza el QuickAccessGrid con los accesos predeterminados', () => {
      render(<QuickAccessGrid />);
    });
    when('inspecciono la sección', () => {});
    then('debe mostrar la tarjeta "Predicaciones"', () => {
      expect(screen.getByText('Predicaciones')).toBeInTheDocument();
    });
    and('debe mostrar la tarjeta "Galería"', () => {
      expect(screen.getByText('Galería')).toBeInTheDocument();
    });
    and('debe mostrar la tarjeta "Ayuda Social"', () => {
      expect(screen.getByText('Ayuda Social')).toBeInTheDocument();
    });
  });

  // Escenario 2: clase grid
  test('El contenedor tiene clase de grilla', ({ given, when, then }) => {
    given('que se renderiza el QuickAccessGrid', () => {
      render(<QuickAccessGrid />);
    });
    when('inspecciono el contenedor principal', () => {});
    then('debe tener la clase "grid"', () => {
      const contenedor = document.querySelector('[data-testid="quick-access-grid"]');
      expect(contenedor).toBeInTheDocument();
      expect(contenedor.className).toContain('grid');
    });
  });

  // Escenario 3: accesos personalizados
  test('La sección acepta un arreglo de accesos personalizados', ({ given, when, then }) => {
    const accesosPersonalizados = [
      { id: 1, titulo: 'Oración Comunitaria', descripcion: 'Oramos juntos cada semana', href: '/oracion' },
    ];
    given('que se renderiza el QuickAccessGrid con el acceso "Oración Comunitaria"', () => {
      render(<QuickAccessGrid accesos={accesosPersonalizados} />);
    });
    when('inspecciono la sección', () => {});
    then('debe mostrar la tarjeta "Oración Comunitaria"', () => {
      expect(screen.getByText('Oración Comunitaria')).toBeInTheDocument();
    });
  });
});
