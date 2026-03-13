import React from 'react';
import { render, screen } from '@testing-library/react';
import { loadFeature, defineFeature } from 'jest-cucumber';
import EventCard from '../EventCard';

const feature = loadFeature('./features/eventos/EventCard.feature');

const datosPorDefecto = {
  titulo: 'Asamblea General',
  fecha: { dia: '15', mes: 'MAR' },
  hora: '6:00 PM',
  lugar: 'Salón Principal',
};

defineFeature(feature, (test) => {
  // Escenario 1: Renderizado básico
  test('Renderizado básico de la tarjeta', ({ given, when, then }) => {
    given('que se renderiza el componente EventCard con datos válidos', () => {
      render(<EventCard {...datosPorDefecto} />);
    });
    when('inspecciono el contenido', () => {});
    then('debe estar presente el elemento con data-testid "event-card"', () => {
      expect(screen.getByTestId('event-card')).toBeInTheDocument();
    });
  });

  // Escenario 2: Título
  test('Muestra el título del evento', ({ given, when, then }) => {
    given('que se renderiza el EventCard con título "Asamblea General"', () => {
      render(<EventCard {...datosPorDefecto} titulo="Asamblea General" />);
    });
    when('inspecciono el contenido', () => {});
    then('debe mostrar "Asamblea General" en el encabezado', () => {
      expect(screen.getByTestId('event-titulo')).toHaveTextContent('Asamblea General');
    });
  });

  // Escenario 3: Fecha
  test('Muestra la fecha del evento resaltada', ({ given, when, then }) => {
    given('que se renderiza el EventCard con fecha día "15" y mes "MAR"', () => {
      render(<EventCard {...datosPorDefecto} fecha={{ dia: '15', mes: 'MAR' }} />);
    });
    when('inspecciono el contenido', () => {});
    then('debe mostrar el día "15" y el mes "MAR" en el badge de fecha', () => {
      const badge = screen.getByTestId('event-fecha');
      expect(badge).toHaveTextContent('15');
      expect(badge).toHaveTextContent('MAR');
    });
  });

  // Escenario 4: Hora y lugar
  test('Muestra la hora y el lugar del evento', ({ given, when, then }) => {
    given('que se renderiza el EventCard con hora "6:00 PM" y lugar "Salón Principal"', () => {
      render(<EventCard {...datosPorDefecto} />);
    });
    when('inspecciono el contenido', () => {});
    then('debe mostrar la hora y el lugar del evento', () => {
      expect(screen.getByTestId('event-hora')).toHaveTextContent('6:00 PM');
      expect(screen.getByTestId('event-lugar')).toHaveTextContent('Principal');
    });
  });

  // Escenario 5: Botón CTA
  test('Tiene un botón de acción', ({ given, when, then }) => {
    given('que se renderiza el componente EventCard con datos válidos', () => {
      render(<EventCard {...datosPorDefecto} />);
    });
    when('inspecciono el contenido', () => {});
    then('debe existir un botón con data-testid "event-cta"', () => {
      expect(screen.getByTestId('event-cta')).toBeInTheDocument();
    });
  });
});
