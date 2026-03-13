"use client";

import { useState } from 'react';
import EventFilter from '@/components/features/eventos/EventFilter';
import EventList from '@/components/features/eventos/EventList';

const eventosEjemplo = [
  {
    id: 1,
    titulo: 'Asamblea Mensual de la Comunidad',
    fecha: { dia: '15', mes: 'MAR' },
    hora: '6:00 PM',
    lugar: 'Salón San José – Parroquia Central',
    imagen: '/images/evento-asamblea.jpg',
    href: '/eventos/asamblea-marzo',
    categoria: 'Asambleas',
  },
  {
    id: 2,
    titulo: 'Retiro de Cuaresma',
    fecha: { dia: '22', mes: 'MAR' },
    hora: '9:00 AM',
    lugar: 'Casa de Retiros Nazaret',
    imagen: '/images/evento-retiro.jpg',
    href: '/eventos/retiro-cuaresma',
    categoria: 'Retiros',
  },
  {
    id: 3,
    titulo: 'Encuentro de Jóvenes',
    fecha: { dia: '29', mes: 'MAR' },
    hora: '4:00 PM',
    lugar: 'Auditorio Parroquial',
    imagen: '/images/evento-jovenes.jpg',
    href: '/eventos/encuentro-jovenes',
    categoria: 'Jóvenes',
  },
  {
    id: 4,
    titulo: 'Asamblea de Servidores',
    fecha: { dia: '05', mes: 'ABR' },
    hora: '7:00 PM',
    lugar: 'Sala de Reuniones',
    imagen: '/images/evento-servidores.jpg',
    href: '/eventos/asamblea-servidores',
    categoria: 'Asambleas',
  },
];

export default function EventosPage() {
  const [filtroActivo, setFiltroActivo] = useState('Todos');

  const eventosFiltrados =
    filtroActivo === 'Todos'
      ? eventosEjemplo
      : eventosEjemplo.filter((e) => e.categoria === filtroActivo);

  return (
    <main className="flex flex-col bg-gray-50">
      {/* Banner superior */}
      <section className="flex min-h-[240px] flex-col items-center justify-center bg-[#880E4F] px-4 py-16 text-center">
        <h1 className="text-4xl font-extrabold text-white sm:text-5xl">
          Nuestras Actividades
        </h1>
        <p className="mt-3 max-w-xl text-base text-white/80">
          Descubre los próximos eventos y únete a nuestra comunidad en oración y servicio.
        </p>
      </section>

      {/* Contenido principal */}
      <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-8 lg:px-16">
        <div className="mb-8">
          <EventFilter filtroActivo={filtroActivo} onFiltrar={setFiltroActivo} />
        </div>
        <EventList eventos={eventosFiltrados} />
      </section>
    </main>
  );
}
