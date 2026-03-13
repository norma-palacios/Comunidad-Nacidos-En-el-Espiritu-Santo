"use client";

const CATEGORIAS = ['Todos', 'Asambleas', 'Retiros', 'Jóvenes'];

/**
 * Componente EventFilter — filtro de eventos por categoría tipo "pills".
 * Props: filtroActivo (string), onFiltrar (función callback)
 */
export default function EventFilter({ filtroActivo = 'Todos', onFiltrar = () => {} }) {
  return (
    <div
      data-testid="event-filter"
      className="flex flex-wrap gap-3"
    >
      {CATEGORIAS.map((categoria) => (
        <button
          key={categoria}
          data-testid={categoria === 'Todos' ? 'filter-todos' : undefined}
          onClick={() => onFiltrar(categoria)}
          className={`cursor-pointer rounded-full px-5 py-2 text-sm font-semibold transition-all duration-200 ${
            filtroActivo === categoria
              ? 'bg-[#880E4F] text-white shadow-md'
              : 'border border-gray-200 bg-white text-gray-600 hover:border-[#880E4F] hover:text-[#880E4F]'
          }`}
        >
          {categoria}
        </button>
      ))}
    </div>
  );
}
