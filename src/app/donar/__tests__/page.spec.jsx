import React from 'react';
import { render, screen } from '@testing-library/react';
import { loadFeature, defineFeature } from 'jest-cucumber';
import DonarPage from '../page';

const feature = loadFeature('./features/donaciones/DonationPage.feature');

defineFeature(feature, (test) => {
  // Escenario 1: Encabezado
  test('Muestra el encabezado solemne de la página', ({ given, when, then }) => {
    given('que cargo la página de donaciones', () => {
      render(<DonarPage />);
    });
    when('inspecciono el contenido', () => {});
    then('debe mostrar el encabezado "Apoya Nuestra Misión"', () => {
      expect(screen.getByRole('heading', { name: /Apoya Nuestra Misión/i })).toBeInTheDocument();
    });
  });

  // Escenario 2: DonationCard
  test('Muestra la tarjeta de información bancaria', ({ given, when, then }) => {
    given('que cargo la página de donaciones', () => {
      render(<DonarPage />);
    });
    when('inspecciono el contenido', () => {});
    then('debe estar presente la tarjeta de donación', () => {
      expect(screen.getByTestId('donation-card')).toBeInTheDocument();
    });
  });

  // Escenario 3: DonationForm
  test('Muestra el formulario de contacto', ({ given, when, then }) => {
    given('que cargo la página de donaciones', () => {
      render(<DonarPage />);
    });
    when('inspecciono el contenido', () => {});
    then('debe estar presente el formulario de donación', () => {
      expect(screen.getByTestId('donation-form')).toBeInTheDocument();
    });
  });
});
