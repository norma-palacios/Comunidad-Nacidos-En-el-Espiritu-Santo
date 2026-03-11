import React from 'react';
import { render, screen } from '@testing-library/react';
import { loadFeature, defineFeature } from 'jest-cucumber';
import Footer from '../Footer';

const feature = loadFeature('./features/layout/Footer.feature');

defineFeature(feature, (test) => {
  // Escenario 1: fondo púrpura
  test('El Footer tiene fondo púrpura', ({ given, when, then }) => {
    given('que se renderiza el Footer', () => {
      render(<Footer />);
    });

    when('inspecciono el contenedor del footer', () => {});

    then('debe tener la clase de fondo púrpura "bg-[#880E4F]"', () => {
      const footer = document.querySelector('[data-testid="footer"]');
      expect(footer).toBeInTheDocument();
      expect(footer.className).toContain('bg-[#880E4F]');
    });
  });

  // Escenario 2: columna marca
  test('Columna de Marca visible', ({ given, when, then }) => {
    given('que se renderiza el Footer', () => {
      render(<Footer />);
    });

    when('inspecciono su contenido', () => {});

    then('debe mostrar el nombre de la comunidad en el footer', () => {
      expect(screen.getByTestId('footer-brand')).toBeInTheDocument();
    });
  });

  // Escenario 3: enlaces rápidos
  test('Columna de Enlaces Rápidos visible', ({ given, when, then }) => {
    given('que se renderiza el Footer', () => {
      render(<Footer />);
    });

    when('inspecciono la columna de enlaces rápidos', () => {});

    then('debe mostrar la sección "Enlaces Rápidos"', () => {
      expect(screen.getByText('Enlaces Rápidos')).toBeInTheDocument();
    });
  });

  // Escenario 4: contacto
  test('Columna de Contacto visible', ({ given, when, then }) => {
    given('que se renderiza el Footer', () => {
      render(<Footer />);
    });

    when('inspecciono la columna de contacto', () => {});

    then('debe mostrar la sección "Contacto"', () => {
      expect(screen.getByText('Contacto')).toBeInTheDocument();
    });
  });

  // Escenario 5: redes sociales
  test('Columna de Redes Sociales visible', ({ given, when, then }) => {
    given('que se renderiza el Footer', () => {
      render(<Footer />);
    });

    when('inspecciono la columna de redes sociales', () => {});

    then('debe mostrar la sección "Redes Sociales"', () => {
      expect(screen.getByText('Redes Sociales')).toBeInTheDocument();
    });
  });
});
