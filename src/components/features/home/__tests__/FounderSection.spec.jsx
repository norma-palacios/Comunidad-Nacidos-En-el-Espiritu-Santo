import React from 'react';
import { render, screen } from '@testing-library/react';
import { loadFeature, defineFeature } from 'jest-cucumber';
import FounderSection from '../FounderSection';

const feature = loadFeature('./features/home/FounderSection.feature');

defineFeature(feature, (test) => {
  // Escenario 1: Renderizado del componente
  test('Renderizado de la sección de la fundadora', ({ given, when, then }) => {
    given('que se renderiza el componente FounderSection', () => {
      render(<FounderSection />);
    });
    when('inspecciono el contenido', () => {});
    then('debe estar presente la sección con data-testid "founder-section"', () => {
      expect(screen.getByTestId('founder-section')).toBeInTheDocument();
    });
  });

  // Escenario 2: Nombre de la fundadora
  test('Muestra el nombre de la fundadora', ({ given, when, then }) => {
    given('que se renderiza el componente FounderSection', () => {
      render(<FounderSection />);
    });
    when('inspecciono el contenido', () => {});
    then('debe mostrar el nombre de la fundadora en un encabezado', () => {
      expect(screen.getByTestId('founder-nombre')).toBeInTheDocument();
    });
  });

  // Escenario 3: Descripción
  test('Muestra la descripción de la fundadora', ({ given, when, then }) => {
    given('que se renderiza el componente FounderSection', () => {
      render(<FounderSection />);
    });
    when('inspecciono el contenido', () => {});
    then('debe mostrar el texto descriptivo sobre la fundadora', () => {
      expect(screen.getByTestId('founder-descripcion')).toBeInTheDocument();
    });
  });

  // Escenario 4: Props personalizadas
  test('Acepta props personalizadas', ({ given, when, then }) => {
    given('que se renderiza el FounderSection con nombre "Hermana María de Jesús"', () => {
      render(<FounderSection nombre="Hermana María de Jesús" />);
    });
    when('inspecciono el contenido', () => {});
    then('debe mostrar "Hermana María de Jesús" en el encabezado', () => {
      expect(screen.getByText('Hermana María de Jesús')).toBeInTheDocument();
    });
  });
});
