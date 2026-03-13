import EventCard from './EventCard';

/**
 * Componente EventList — lista de tarjetas de eventos.
 * Muestra un mensaje si no hay eventos disponibles.
 * Props: eventos (array de objetos evento)
 */
export default function EventList({ eventos = [] }) {
  if (eventos.length === 0) {
    return (
      <div
        data-testid="event-list"
        className="flex flex-col items-center justify-center py-20 text-center"
      >
        <p className="text-lg font-semibold text-gray-400">No hay eventos próximos</p>
        <p className="mt-1 text-sm text-gray-400">
          Vuelve pronto para conocer nuestras actividades.
        </p>
      </div>
    );
  }

  return (
    <div
      data-testid="event-list"
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
    >
      {eventos.map((evento) => (
        <EventCard
          key={evento.id}
          titulo={evento.titulo}
          fecha={evento.fecha}
          hora={evento.hora}
          lugar={evento.lugar}
          imagen={evento.imagen}
          href={evento.href}
        />
      ))}
    </div>
  );
}
