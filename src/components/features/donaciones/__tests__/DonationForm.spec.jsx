import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { loadFeature, defineFeature } from 'jest-cucumber';
import DonationForm from '../DonationForm';

const feature = loadFeature('./features/donaciones/DonationForm.feature');

defineFeature(feature, (test) => {
  // Escenario 1: Renderizado
  test('Renderizado del formulario', ({ given, when, then }) => {
    given('que se renderiza el componente DonationForm', () => {
      render(<DonationForm />);
    });
    when('inspecciono el contenido', () => {});
    then('debe estar presente el elemento con data-testid "donation-form"', () => {
      expect(screen.getByTestId('donation-form')).toBeInTheDocument();
    });
  });

  // Escenario 2: Campos
  test('Tiene los campos de nombre, email y mensaje', ({ given, when, then, and }) => {
    given('que se renderiza el componente DonationForm', () => {
      render(<DonationForm />);
    });
    when('inspecciono el contenido', () => {});
    then('debe existir el campo con data-testid "input-nombre"', () => {
      expect(screen.getByTestId('input-nombre')).toBeInTheDocument();
    });
    and('debe existir el campo con data-testid "input-email"', () => {
      expect(screen.getByTestId('input-email')).toBeInTheDocument();
    });
    and('debe existir el campo con data-testid "input-mensaje"', () => {
      expect(screen.getByTestId('input-mensaje')).toBeInTheDocument();
    });
  });

  // Escenario 3: Botón enviar
  test('Tiene un botón de envío', ({ given, when, then }) => {
    given('que se renderiza el componente DonationForm', () => {
      render(<DonationForm />);
    });
    when('inspecciono el contenido', () => {});
    then('debe existir un botón con data-testid "btn-enviar"', () => {
      expect(screen.getByTestId('btn-enviar')).toBeInTheDocument();
    });
  });

  // Escenario 4: Validación campos vacíos
  test('Muestra error si se envía con campos vacíos', ({ given, when, then }) => {
    given('que se renderiza el componente DonationForm', () => {
      render(<DonationForm />);
    });
    when('el usuario hace clic en el botón de envío sin completar el formulario', () => {
      fireEvent.click(screen.getByTestId('btn-enviar'));
    });
    then('debe mostrar el mensaje de error "obligatorio"', () => {
      expect(screen.getAllByText(/obligatorio/i).length).toBeGreaterThan(0);
    });
  });
});
