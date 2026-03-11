import SectionHeading from '@/components/ui/SectionHeading';

/**
 * Componente FounderSection — sección de la fundadora de la comunidad.
 * Diseño 50/50: imagen a la izquierda, texto a la derecha (apilado en móvil).
 *
 * Props:
 *  - nombre: string
 *  - cargo: string
 *  - descripcion: string
 *  - cita: string
 *  - imagenUrl: string (URL de la foto de la fundadora)
 */
export default function FounderSection({
  nombre = 'Nuestra Fundadora',
  cargo = 'Fundadora y Directora Espiritual',
  descripcion = 'Con un corazón lleno de fe y una visión profética, nuestra fundadora dio inicio a esta comunidad hace más de dos décadas. Su dedicación al servicio, la oración y la evangelización ha transformado miles de vidas, sembrando el amor de Dios en cada rincón de nuestra ciudad.',
  cita = '"El Espíritu Santo nos llamó a ser una sola familia, unida en el amor y la misericordia de Dios."',
  imagenUrl = '/images/fundadora.jpg',
}) {
  return (
    <section
      data-testid="founder-section"
      className="w-full bg-white py-20 px-4 sm:px-8 lg:px-16"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">

          {/* Columna izquierda — Imagen */}
          <div className="relative h-80 overflow-hidden rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.15)] lg:h-[480px]">
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${imagenUrl})` }}
              role="img"
              aria-label={`Fotografía de ${nombre}`}
            />
            {/* Gradiente inferior */}
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#5C0324]/60 to-transparent" />
          </div>

          {/* Columna derecha — Texto */}
          <div className="flex flex-col justify-center">
            <SectionHeading
              titulo="Conoce Nuestra Historia"
              subtitulo="La fe que nos fundó"
              alineacion="left"
            />

            <h2
              data-testid="founder-nombre"
              className="mt-6 text-2xl font-extrabold text-[#880E4F] sm:text-3xl"
            >
              {nombre}
            </h2>

            <p className="mt-1 text-sm font-semibold uppercase tracking-widest text-[#E64A19]">
              {cargo}
            </p>

            <p
              data-testid="founder-descripcion"
              className="mt-4 text-base leading-relaxed text-gray-600"
            >
              {descripcion}
            </p>

            {/* Cita destacada */}
            <blockquote className="mt-6 border-l-4 border-[#FFD600] pl-4 italic text-gray-700">
              {cita}
            </blockquote>
          </div>

        </div>
      </div>
    </section>
  );
}
