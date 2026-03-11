import { BookOpen, Image, Heart } from 'lucide-react';
import QuickAccessCard from './QuickAccessCard';

/**
 * Datos predeterminados de los accesos rápidos.
 * El componente acepta accesos personalizados mediante la prop `accesos`.
 */
const accesosDefecto = [
  {
    id: 1,
    titulo: 'Predicaciones',
    descripcion: 'Escucha la Palabra de Dios a través de nuestras homilías y retiros espirituales.',
    icono: <BookOpen size={24} />,
    colorIcono: 'text-[#880E4F]',
    fondoIcono: 'bg-[#880E4F]/10',
    href: '/predicaciones',
  },
  {
    id: 2,
    titulo: 'Galería',
    descripcion: 'Revive los momentos especiales de nuestra comunidad reunida en oración.',
    icono: <Image size={24} />,
    colorIcono: 'text-[#E64A19]',
    fondoIcono: 'bg-[#E64A19]/10',
    href: '/galeria',
  },
  {
    id: 3,
    titulo: 'Ayuda Social',
    descripcion: 'Conoce nuestros proyectos de servicio y cómo puedes contribuir al prójimo.',
    icono: <Heart size={24} />,
    colorIcono: 'text-[#FFD600]',
    fondoIcono: 'bg-[#FFD600]/10',
    href: '/ayuda-social',
  },
];

/**
 * Componente QuickAccessGrid — grilla de accesos rápidos.
 * Agrupa 3 QuickAccessCard en una cuadrícula responsiva.
 *
 * Props:
 *  - accesos: array de objetos de acceso (usa predeterminados si no se provee)
 */
export default function QuickAccessGrid({ accesos = accesosDefecto }) {
  return (
    <section
      className="w-full bg-gray-50 py-16 px-4 sm:px-8 lg:px-16"
    >
      <div data-testid="quick-access-grid" className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {accesos.map((acceso) => (
          <QuickAccessCard
            key={acceso.id}
            titulo={acceso.titulo}
            descripcion={acceso.descripcion}
            icono={acceso.icono}
            colorIcono={acceso.colorIcono}
            fondoIcono={acceso.fondoIcono}
            href={acceso.href}
          />
        ))}
      </div>
    </section>
  );
}
