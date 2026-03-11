import React from 'react';
import { render, screen } from '@testing-library/react';
import { loadFeature, defineFeature } from 'jest-cucumber';
import HeroSection from '../HeroSection';

const feature = loadFeature('./features/home/HeroSection.feature');

defineFeature(feature, (test) => {
  // Escenario 1: título principal
  test('Renderizado del título principal', ({ given, when, then }) => {
    given('que se renderiza la HeroSection con un título', () => {
      render(<HeroSection titulo="Nacidos en el Espíritu Santo" />);
    });

    when('inspecciono la sección', () => {});

    then('debe mostrar el título proporcionado', () => {
      expect(
        screen.getByRole('heading', { name: /Nacidos en el Espíritu Santo/i })
      ).toBeInTheDocument();
    });
  });

  // Escenario 2: altura 80vh
  test('Altura de la sección es 80vh', ({ given, when, then }) => {
    given('que se renderiza la HeroSection', () => {
      render(<HeroSection titulo="Nacidos en el Espíritu Santo" />);
    });

    when('inspecciono la sección', () => {});

    then('la sección debe tener una altura mínima de 80vh', () => {
      const seccion = document.querySelector('section');
      expect(seccion.style.minHeight).toBe('80vh');
    });
  });

  // Escenario 3: overlay oscuro
  test('Overlay oscuro de fondo presente', ({ given, when, then }) => {
    given('que se renderiza la HeroSection', () => {
      render(<HeroSection titulo="Nacidos en el Espíritu Santo" />);
    });

    when('inspecciono la sección', () => {});

    then('debe existir un overlay oscuro con atributo "data-testid" igual a "hero-overlay"', () => {
      expect(document.querySelector('[data-testid="hero-overlay"]')).toBeInTheDocument();
    });
  });

  // Escenario 4: botones de acción
  test('Renderizado de los botones de acción', ({ given, when, then, and }) => {
    given('que se renderiza la HeroSection', () => {
      render(<HeroSection titulo="Nacidos en el Espíritu Santo" />);
    });

    when('inspecciono la sección', () => {});

    then('debe existir al menos un botón con fondo dorado', () => {
      const botones = screen.getAllByRole('button');
      expect(botones.some((b) => b.className.includes('bg-[#FFD600]'))).toBe(true);
    });

    and('debe existir al menos un botón con borde visible', () => {
      const botones = screen.getAllByRole('button');
      expect(botones.some((b) => b.className.includes('border-2'))).toBe(true);
    });
  });
});
