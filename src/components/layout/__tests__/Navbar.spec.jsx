import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { loadFeature, defineFeature } from 'jest-cucumber';
import Navbar from '../Navbar';

const feature = loadFeature('./features/layout/Navbar.feature');

defineFeature(feature, (test) => {
  // Escenario 1: nombre comunidad
  test('Renderizado del nombre/logo de la comunidad', ({ given, when, then }) => {
    given('que se renderiza el Navbar', () => {
      render(<Navbar />);
    });

    when('inspecciono la barra de navegación', () => {});

    then('debe mostrar el nombre de la comunidad', () => {
      expect(screen.getByTestId('navbar-logo')).toBeInTheDocument();
    });
  });

  // Escenario 2: clase fixed
  test('La barra está fija en la parte superior', ({ given, when, then }) => {
    given('que se renderiza el Navbar', () => {
      render(<Navbar />);
    });

    when('inspecciono el contenedor principal', () => {});

    then('debe tener la clase "fixed"', () => {
      const nav = document.querySelector('[data-testid="navbar"]');
      expect(nav).toBeInTheDocument();
      expect(nav.className).toContain('fixed');
    });
  });

  // Escenario 3: enlaces de navegación
  test('Presencia de los enlaces de navegación', ({ given, when, then }) => {
    given('que se renderiza el Navbar', () => {
      render(<Navbar />);
    });

    when('inspecciono la barra de navegación', () => {});

    then('debe mostrar el enlace "Predicaciones"', () => {
      expect(screen.getAllByText('Predicaciones')[0]).toBeInTheDocument();
    });
  });

  // Escenario 4: icono hamburguesa
  test('Icono hamburguesa visible en versión móvil', ({ given, when, then }) => {
    given('que se renderiza el Navbar', () => {
      render(<Navbar />);
    });

    when('inspecciono la barra de navegación', () => {});

    then('debe existir el botón del menú hamburguesa', () => {
      expect(screen.getByTestId('hamburger-menu')).toBeInTheDocument();
    });
  });

  // Escenario 5: apertura del menú móvil
  test('El menú móvil se abre al hacer clic en hamburguesa', ({ given, when, then }) => {
    given('que se renderiza el Navbar', () => {
      render(<Navbar />);
    });

    when('el usuario hace clic en el botón hamburguesa', () => {
      fireEvent.click(screen.getByTestId('hamburger-menu'));
    });

    then('debe mostrarse el menú de navegación móvil', () => {
      expect(screen.getByTestId('mobile-menu')).toBeInTheDocument();
    });
  });
});
