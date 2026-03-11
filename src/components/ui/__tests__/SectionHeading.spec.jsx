import React from 'react';
import { render, screen } from '@testing-library/react';
import { loadFeature, defineFeature } from 'jest-cucumber';
import SectionHeading from '../SectionHeading';

const feature = loadFeature('./features/ui/SectionHeading.feature');

defineFeature(feature, (test) => {
  // Escenario 1: título y subtítulo
  test('Renderizado con título y subtítulo', ({ given, when, then, and }) => {
    given(
      'que se renderiza el SectionHeading con título "Nuestros Servicios" y subtítulo "Todo lo que ofrecemos"',
      () => {
        render(
          <SectionHeading
            titulo="Nuestros Servicios"
            subtitulo="Todo lo que ofrecemos"
          />
        );
      }
    );

    when('inspecciono el componente', () => {});

    then('debe mostrar el texto del título "Nuestros Servicios"', () => {
      expect(screen.getByText('Nuestros Servicios')).toBeInTheDocument();
    });

    and('debe mostrar el texto del subtítulo "Todo lo que ofrecemos"', () => {
      expect(screen.getByText('Todo lo que ofrecemos')).toBeInTheDocument();
    });
  });

  // Escenario 2: línea decorativa
  test('Línea decorativa amarilla visible', ({ given, when, then }) => {
    given('que se renderiza el SectionHeading con título "Eventos"', () => {
      render(<SectionHeading titulo="Eventos" />);
    });

    when('inspecciono el componente', () => {});

    then('debe existir un elemento decorativo con la clase de fondo "bg-[#FFD600]"', () => {
      const lineaDecorativa = document.querySelector('.bg-\\[\\#FFD600\\]');
      expect(lineaDecorativa).toBeInTheDocument();
    });
  });

  // Escenario 3: sin subtítulo
  test('Renderizado sólo con título (sin subtítulo)', ({ given, when, then, and }) => {
    given(
      'que se renderiza el SectionHeading únicamente con título "Comunidad"',
      () => {
        render(<SectionHeading titulo="Comunidad" />);
      }
    );

    when('inspecciono el componente', () => {});

    then('debe mostrar el texto del título "Comunidad"', () => {
      expect(screen.getByText('Comunidad')).toBeInTheDocument();
    });

    and('el área de subtítulo no debe renderizarse', () => {
      expect(screen.queryByTestId('section-heading-subtitulo')).not.toBeInTheDocument();
    });
  });
});
