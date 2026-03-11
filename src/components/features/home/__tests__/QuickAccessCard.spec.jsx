import React from 'react';
import { render, screen } from '@testing-library/react';
import { loadFeature, defineFeature } from 'jest-cucumber';
import QuickAccessCard from '../QuickAccessCard';

const feature = loadFeature('./features/home/QuickAccessCard.feature');

defineFeature(feature, (test) => {
  // Escenario 1: título
  test('Renderizado del título de la tarjeta', ({ given, when, then }) => {
    given('que se renderiza una QuickAccessCard con título "Predicaciones"', () => {
      render(<QuickAccessCard titulo="Predicaciones" descripcion="Escucha la palabra" />);
    });
    when('inspecciono la tarjeta', () => {});
    then('debe mostrar el texto "Predicaciones"', () => {
      expect(screen.getByText('Predicaciones')).toBeInTheDocument();
    });
  });

  // Escenario 2: descripción
  test('Renderizado de la descripción de la tarjeta', ({ given, when, then }) => {
    given('que se renderiza una QuickAccessCard con descripción "Escucha nuestra palabra"', () => {
      render(<QuickAccessCard titulo="Predicaciones" descripcion="Escucha nuestra palabra" />);
    });
    when('inspecciono la tarjeta', () => {});
    then('debe mostrar el texto "Escucha nuestra palabra"', () => {
      expect(screen.getByText('Escucha nuestra palabra')).toBeInTheDocument();
    });
  });

  // Escenario 3: bordes redondeados
  test('La tarjeta tiene bordes redondeados', ({ given, when, then }) => {
    given('que se renderiza una QuickAccessCard con título "Galería"', () => {
      render(<QuickAccessCard titulo="Galería" descripcion="Nuestros momentos" />);
    });
    when('inspecciono la tarjeta', () => {});
    then('la tarjeta debe tener clase de bordes redondeados', () => {
      const tarjeta = document.querySelector('[data-testid="quick-access-card"]');
      expect(tarjeta).toBeInTheDocument();
      expect(tarjeta.className).toMatch(/rounded/);
    });
  });

  // Escenario 4: enlace "Ver más"
  test('Enlace "Ver más" presente en la tarjeta', ({ given, when, then }) => {
    given('que se renderiza una QuickAccessCard con título "Ayuda Social"', () => {
      render(<QuickAccessCard titulo="Ayuda Social" descripcion="Servicio al prójimo" />);
    });
    when('inspecciono la tarjeta', () => {});
    then('debe existir un enlace con el texto "Ver más"', () => {
      expect(screen.getByText(/Ver más/i)).toBeInTheDocument();
    });
  });

  // Escenario 5: elevación hover
  test('La tarjeta tiene animación de elevación al hacer hover', ({ given, when, then }) => {
    given('que se renderiza una QuickAccessCard con título "Predicaciones"', () => {
      render(<QuickAccessCard titulo="Predicaciones" descripcion="La Palabra" />);
    });
    when('inspecciono la tarjeta', () => {});
    then('la tarjeta debe tener clase de elevación hover', () => {
      const tarjeta = document.querySelector('[data-testid="quick-access-card"]');
      expect(tarjeta.className).toContain('hover:-translate-y');
    });
  });
});
