import React from 'react';
import { render, screen } from '@testing-library/react';
import { loadFeature, defineFeature } from 'jest-cucumber';
import EventList from '../EventList';

const feature = loadFeature('./features/eventos/EventList.feature');

const eventosEjemplo = [
  { id: 1, titulo: 'Asamblea General', fecha: { dia: '15', mes: 'MAR' }, hora: '6:00 PM', lugar: 'Salón Principal', categoria: 'Asambleas' },
  { id: 2, titulo: 'Retiro Espiritual', fecha: { dia: '22', mes: 'MAR' }, hora: '9:00 AM', lugar: 'Casa de Retiros', categoria: 'Retiros' },
];

defineFeature(feature, (test) => {
  // Escenario 1: Con eventos
  test('Muestra las tarjetas cuando hay eventos', ({ given, when, then }) => {
    given('que se renderiza el EventList con eventos disponibles', () => {
      render(<EventList eventos={eventosEjemplo} />);
    });
    when('inspecciono el contenido', () => {});
    then('debe mostrar las tarjetas de eventos', () => {
      expect(screen.getAllByTestId('event-card').length).toBeGreaterThan(0);
    });
  });

  // Escenario 2: Lista vacía
  test('Muestra mensaje de vacío cuando no hay eventos', ({ given, when, then }) => {
    given('que se renderiza el EventList sin eventos', () => {
      render(<EventList eventos={[]} />);
    });
    when('inspecciono el contenido', () => {});
    then('debe mostrar el mensaje "No hay eventos"', () => {
      expect(screen.getByText(/No hay eventos/i)).toBeInTheDocument();
    });
  });

  // Escenario 3: Evento personalizado
  test('Acepta un arreglo de eventos personalizado', ({ given, when, then }) => {
    given('que se renderiza el EventList con el evento "Retiro de Oración"', () => {
      render(<EventList eventos={[{ id: 99, titulo: 'Retiro de Oración', fecha: { dia: '10', mes: 'ABR' }, hora: '8:00 AM', lugar: 'Parroquia', categoria: 'Retiros' }]} />);
    });
    when('inspecciono el contenido', () => {});
    then('debe mostrar la tarjeta "Retiro de Oración"', () => {
      expect(screen.getByText('Retiro de Oración')).toBeInTheDocument();
    });
  });
});
