import React from 'react';
import { render, screen } from '@testing-library/react';
import { loadFeature, defineFeature } from 'jest-cucumber';
import EventosPage from '../page';

const feature = loadFeature('./features/eventos/EventPage.feature');

defineFeature(feature, (test) => {
  // Escenario 1: Banner con título
  test('Muestra el banner con el título de la página', ({ given, when, then }) => {
    given('que cargo la página de eventos', () => {
      render(<EventosPage />);
    });
    when('inspecciono el contenido', () => {});
    then('debe mostrar el título "Nuestras Actividades"', () => {
      expect(screen.getByRole('heading', { name: /Nuestras Actividades/i })).toBeInTheDocument();
    });
  });

  // Escenario 2: Filtro
  test('Muestra el filtro de categorías', ({ given, when, then }) => {
    given('que cargo la página de eventos', () => {
      render(<EventosPage />);
    });
    when('inspecciono el contenido', () => {});
    then('debe estar presente el filtro de eventos', () => {
      expect(screen.getByTestId('event-filter')).toBeInTheDocument();
    });
  });

  // Escenario 3: Lista
  test('Muestra la lista de eventos', ({ given, when, then }) => {
    given('que cargo la página de eventos', () => {
      render(<EventosPage />);
    });
    when('inspecciono el contenido', () => {});
    then('debe estar presente la lista de eventos', () => {
      expect(screen.getByTestId('event-list')).toBeInTheDocument();
    });
  });
});
