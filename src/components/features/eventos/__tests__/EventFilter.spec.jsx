import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { loadFeature, defineFeature } from 'jest-cucumber';
import EventFilter from '../EventFilter';

const feature = loadFeature('./features/eventos/EventFilter.feature');

defineFeature(feature, (test) => {
  // Escenario 1: Renderizado
  test('Renderizado del componente de filtro', ({ given, when, then }) => {
    given('que se renderiza el EventFilter', () => {
      render(<EventFilter />);
    });
    when('inspecciono el contenido', () => {});
    then('debe estar presente el elemento con data-testid "event-filter"', () => {
      expect(screen.getByTestId('event-filter')).toBeInTheDocument();
    });
  });

  // Escenario 2: Todos activo
  test('La opción "Todos" está activa por defecto', ({ given, when, then }) => {
    given('que se renderiza el EventFilter con filtro activo "Todos"', () => {
      render(<EventFilter filtroActivo="Todos" />);
    });
    when('inspecciono el contenido', () => {});
    then('debe existir el botón con data-testid "filter-todos"', () => {
      expect(screen.getByTestId('filter-todos')).toBeInTheDocument();
    });
  });

  // Escenario 3: Todas las opciones
  test('Muestra todas las opciones de filtro', ({ given, when, then }) => {
    given('que se renderiza el EventFilter', () => {
      render(<EventFilter />);
    });
    when('inspecciono el contenido', () => {});
    then('debe mostrar las opciones "Asambleas", "Retiros" y "Jóvenes"', () => {
      expect(screen.getByText('Asambleas')).toBeInTheDocument();
      expect(screen.getByText('Retiros')).toBeInTheDocument();
      expect(screen.getByText(/J/)).toBeInTheDocument();
    });
  });

  // Escenario 4: Callback
  test('Llama al callback al seleccionar una categoría', ({ given, when, then }) => {
    const mockFiltrar = jest.fn();
    given('que se renderiza el EventFilter con un callback onFiltrar', () => {
      render(<EventFilter filtroActivo="Todos" onFiltrar={mockFiltrar} />);
    });
    when('el usuario hace clic en "Asambleas"', () => {
      fireEvent.click(screen.getByText('Asambleas'));
    });
    then('el callback debe haberse llamado con "Asambleas"', () => {
      expect(mockFiltrar).toHaveBeenCalledWith('Asambleas');
    });
  });
});
