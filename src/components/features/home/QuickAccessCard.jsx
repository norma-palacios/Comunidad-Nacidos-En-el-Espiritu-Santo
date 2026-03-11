"use client";

/**
 * Componente QuickAccessCard — tarjeta de acceso rápido.
 * Bordes redondeados, icono central, título, descripción, enlace "Ver más".
 * Animación de elevación al hacer hover.
 *
 * Props:
 *  - titulo: string
 *  - descripcion: string
 *  - icono: React node (componente lucide-react)
 *  - colorIcono: string Tailwind
 *  - fondoIcono: string Tailwind
 *  - href: string (ruta de navegación)
 */
export default function QuickAccessCard({
  titulo,
  descripcion,
  icono,
  colorIcono = 'text-[#880E4F]',
  fondoIcono = 'bg-[#880E4F]/10',
  href = '#',
}) {
  return (
    <div
      data-testid="quick-access-card"
      className="rounded-2xl bg-white p-6 shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer"
    >
      {/* Icono */}
      {icono && (
        <div
          className={`mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl ${fondoIcono} ${colorIcono}`}
        >
          {icono}
        </div>
      )}

      {/* Texto */}
      <h3 className="mb-2 text-lg font-bold text-[#5C0324]">{titulo}</h3>
      <p className="mb-4 text-sm text-gray-500 leading-relaxed">{descripcion}</p>

      {/* Enlace */}
      <a
        href={href}
        className="inline-flex items-center gap-1 text-sm font-semibold text-[#880E4F] transition-all duration-200 hover:gap-2"
        aria-label={`Ir a ${titulo}`}
      >
        Ver más →
      </a>
    </div>
  );
}
