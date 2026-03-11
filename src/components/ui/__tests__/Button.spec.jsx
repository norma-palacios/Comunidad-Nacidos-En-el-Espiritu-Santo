import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { loadFeature, defineFeature } from 'jest-cucumber';
import Button from '../Button';

const feature = loadFeature('./features/ui/Button.feature');

defineFeature(feature, (test) => {
  // Escenario 1: variante primary
  test('Renderizado con variante primary', ({ given, when, then, and }) => {
    given('que se renderiza el componente Button con variante "primary"', () => {
      render(<Button variante="primary">Conócenos</Button>);
    });

    when('inspecciono el botón', () => {});

    then('debe mostrar el texto proporcionado', () => {
      expect(screen.getByRole('button', { name: /Conócenos/i })).toBeInTheDocument();
    });

    and('debe tener la clase de fondo púrpura "bg-[#880E4F]"', () => {
      expect(screen.getByRole('button').className).toContain('bg-[#880E4F]');
    });
  });

  // Escenario 2: variante secondary
  test('Renderizado con variante secondary', ({ given, when, then, and }) => {
    given('que se renderiza el componente Button con variante "secondary"', () => {
      render(<Button variante="secondary">Donaciones</Button>);
    });

    when('inspecciono el botón', () => {});

    then('debe mostrar el texto proporcionado', () => {
      expect(screen.getByRole('button', { name: /Donaciones/i })).toBeInTheDocument();
    });

    and('debe tener la clase de fondo dorado "bg-[#FFD600]"', () => {
      expect(screen.getByRole('button').className).toContain('bg-[#FFD600]');
    });

    and('debe tener texto oscuro para contraste', () => {
      expect(screen.getByRole('button').className).toContain('text-[#5C0324]');
    });
  });

  // Escenario 3: variante outline
  test('Renderizado con variante outline', ({ given, when, then, and }) => {
    given('que se renderiza el componente Button con variante "outline"', () => {
      render(<Button variante="outline">Ver más</Button>);
    });

    when('inspecciono el botón', () => {});

    then('debe mostrar el texto proporcionado', () => {
      expect(screen.getByRole('button', { name: /Ver más/i })).toBeInTheDocument();
    });

    and('debe tener un borde visible', () => {
      expect(screen.getByRole('button').className).toContain('border-2');
    });
  });

  // Escenario 4: variante ghost
  test('Renderizado con variante ghost', ({ given, when, then, and }) => {
    given('que se renderiza el componente Button con variante "ghost"', () => {
      render(<Button variante="ghost">Saltar</Button>);
    });

    when('inspecciono el botón', () => {});

    then('debe mostrar el texto proporcionado', () => {
      expect(screen.getByRole('button', { name: /Saltar/i })).toBeInTheDocument();
    });

    and('debe tener fondo transparente', () => {
      expect(screen.getByRole('button').className).toContain('bg-transparent');
    });
  });

  // Escenario 5: onClick
  test('Ejecución del manejador onClick', ({ given, when, then }) => {
    const manejadorClick = jest.fn();

    given('que se renderiza el componente Button con un manejador onClick', () => {
      render(
        <Button variante="primary" onClick={manejadorClick}>
          Confirmar
        </Button>
      );
    });

    when('el usuario hace clic en el botón', () => {
      fireEvent.click(screen.getByRole('button'));
    });

    then('el manejador onClick debe ser invocado exactamente una vez', () => {
      expect(manejadorClick).toHaveBeenCalledTimes(1);
    });
  });
});
