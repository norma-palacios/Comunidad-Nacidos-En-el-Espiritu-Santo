/**
 * Componente SectionHeading reutilizable.
 * Muestra el título principal de una sección con línea decorativa amarilla
 * y un subtítulo opcional.
 *
 * Props:
 *  - titulo: string (requerido)
 *  - subtitulo: string (opcional)
 *  - alineacion: 'center' | 'left' (por defecto 'center')
 */

const alineaciones = {
  center: 'text-center items-center',
  left: 'text-left items-start',
};

export default function SectionHeading({
  titulo,
  subtitulo,
  alineacion = 'center',
}) {
  const estiloAlineacion = alineaciones[alineacion] ?? alineaciones.center;

  return (
    <div className={`flex flex-col gap-3 ${estiloAlineacion}`}>
      <h2 className="text-3xl sm:text-4xl font-bold text-[#5C0324] leading-tight">
        {titulo}
      </h2>

      {/* Línea decorativa amarilla */}
      <div className="h-1 w-16 rounded-full bg-[#FFD600]" />

      {subtitulo && (
        <p
          data-testid="section-heading-subtitulo"
          className="text-base sm:text-lg text-gray-600 max-w-2xl"
        >
          {subtitulo}
        </p>
      )}
    </div>
  );
}
