import React from 'react';
import { render, screen } from '@testing-library/react';
import { loadFeature, defineFeature } from 'jest-cucumber';
import HomePage from '../page';

const feature = loadFeature('./features/home/HomePage.feature');

defineFeature(feature, (test) => {
  // Escenario 1: HeroSection en la página
  test('Renderizado del HeroSection en la página', ({ given, when, then }) => {
    given('que cargo la página de inicio', () => {
      render(<HomePage />);
    });
    when('inspecciono el contenido', () => {});
    then('debe estar presente la sección Hero con el título principal', () => {
      expect(
        screen.getByRole('heading', { name: /Nacidos en el Esp/i })
      ).toBeInTheDocument();
    });
  });

  // Escenario 2: QuickAccessGrid en la página
  test('Renderizado del QuickAccessGrid en la página', ({ given, when, then, and }) => {
    given('que cargo la página de inicio', () => {
      render(<HomePage />);
    });
    when('inspecciono el contenido', () => {});
    then('debe mostrar el acceso rápido a "Predicaciones"', () => {
      expect(screen.getByText('Predicaciones')).toBeInTheDocument();
    });
    and('debe mostrar el acceso rápido a "Galería"', () => {
      expect(screen.getByText('Galería')).toBeInTheDocument();
    });
    and('debe mostrar el acceso rápido a "Ayuda Social"', () => {
      expect(screen.getByText('Ayuda Social')).toBeInTheDocument();
    });
  });

  // Escenario 3: FounderSection en la página
  test('Renderizado del FounderSection en la página', ({ given, when, then }) => {
    given('que cargo la página de inicio', () => {
      render(<HomePage />);
    });
    when('inspecciono el contenido', () => {});
    then('debe estar presente la sección de la fundadora', () => {
      expect(screen.getByTestId('founder-section')).toBeInTheDocument();
    });
  });
});
