import { Clock, MapPin } from 'lucide-react';
import Button from '@/components/ui/Button';

/**
 * Componente EventCard — tarjeta de evento detallada.
 * Props: titulo, fecha {dia, mes}, hora, lugar, imagen, href
 */
export default function EventCard({
  titulo = 'Evento de la Comunidad',
  fecha = { dia: '01', mes: 'ENE' },
  hora = '10:00 AM',
  lugar = 'Por confirmar',
  imagen = '/images/evento-default.jpg',
  href = '#',
}) {
  return (
    <div
      data-testid="event-card"
      className="overflow-hidden rounded-2xl bg-white shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      {/* Imagen con badge de fecha */}
      <div className="relative h-48 bg-[#880E4F]/10">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${imagen})` }}
          role="img"
          aria-label={`Imagen del evento ${titulo}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

        {/* Badge de fecha */}
        <div
          data-testid="event-fecha"
          className="absolute left-4 top-4 rounded-xl bg-[#880E4F] px-3 py-2 text-center text-white shadow-md"
        >
          <p className="text-2xl font-extrabold leading-none">{fecha.dia}</p>
          <p className="mt-0.5 text-xs uppercase tracking-widest">{fecha.mes}</p>
        </div>
      </div>

      {/* Contenido */}
      <div className="p-5">
        <h3
          data-testid="event-titulo"
          className="mb-3 text-lg font-extrabold leading-tight text-[#5C0324]"
        >
          {titulo}
        </h3>

        <div className="mb-1 flex items-center gap-2 text-sm text-gray-500">
          <Clock size={14} className="shrink-0 text-[#880E4F]" />
          <span data-testid="event-hora">{hora}</span>
        </div>

        <div className="mb-5 flex items-center gap-2 text-sm text-gray-500">
          <MapPin size={14} className="shrink-0 text-[#880E4F]" />
          <span data-testid="event-lugar">{lugar}</span>
        </div>

        <Button
          data-testid="event-cta"
          variante="primary"
          className="w-full text-sm py-2"
        >
          Ver más
        </Button>
      </div>
    </div>
  );
}
