import React from 'react';
import { render, screen } from '@testing-library/react';
import { loadFeature, defineFeature } from 'jest-cucumber';
import DonationCard from '../DonationCard';

const feature = loadFeature('./features/donaciones/DonationCard.feature');

defineFeature(feature, (test) => {
  // Escenario 1: Renderizado básico
  test('Renderizado básico de la tarjeta', ({ given, when, then }) => {
    given('que se renderiza el componente DonationCard', () => {
      render(<DonationCard />);
    });
    when('inspecciono el contenido', () => {});
    then('debe estar presente el elemento con data-testid "donation-card"', () => {
      expect(screen.getByTestId('donation-card')).toBeInTheDocument();
    });
  });

  // Escenario 2: Nombre del banco
  test('Muestra el nombre del banco o entidad', ({ given, when, then }) => {
    given('que se renderiza el DonationCard con banco "Banco Nacional"', () => {
      render(<DonationCard banco="Banco Nacional" />);
    });
    when('inspecciono el contenido', () => {});
    then('debe mostrar el texto "Banco Nacional"', () => {
      expect(screen.getByText('Banco Nacional')).toBeInTheDocument();
    });
  });

  // Escenario 3: Número de cuenta
  test('Muestra el número de cuenta', ({ given, when, then }) => {
    given('que se renderiza el DonationCard con cuenta "001-123456-78"', () => {
      render(<DonationCard cuenta="001-123456-78" />);
    });
    when('inspecciono el contenido', () => {});
    then('debe mostrar el número de cuenta "001-123456-78"', () => {
      expect(screen.getByText('001-123456-78')).toBeInTheDocument();
    });
  });


});
