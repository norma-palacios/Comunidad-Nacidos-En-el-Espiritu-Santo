"use client";

import Button from '@/components/ui/Button';

export default function HeroSection({
  titulo = 'Nacidos en el Espíritu Santo',
  descripcion = 'Una familia unida en la fe, el servicio y el amor de Dios. Descubre nuestra comunidad y forma parte de algo que transforma vidas.',
  imagenFondo = '/images/hero-fondo.jpg',
  onPrimarioClick,
  onSecundarioClick,
}) {
  return (
    <section
      className="relative w-full"
      style={{ minHeight: '80vh' }}
      aria-label="Sección principal de bienvenida"
    >
      {/* Imagen de fondo */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${imagenFondo})` }}
        role="img"
        aria-label="Imagen de fondo de la comunidad"
      />

      {/* Overlay oscuro */}
      <div
        data-testid="hero-overlay"
        className="absolute inset-0 bg-[#5C0324]/80"
      />

      {/* Contenido */}
      <div className="relative z-10 flex min-h-[80vh] flex-col items-center justify-center px-4 py-20 text-center sm:px-8 lg:px-16">
        <h1 className="max-w-3xl text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl mb-6">
          {titulo}
        </h1>

        <p className="max-w-xl text-base text-white/80 sm:text-lg leading-relaxed mb-10">
          {descripcion}
        </p>

        <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
          <Button variante="secondary" onClick={onPrimarioClick}>
            Conócenos
          </Button>
          <Button variante="outline" onClick={onSecundarioClick}>
            Ver Predicaciones
          </Button>
        </div>
      </div>
    </section>
  );
}
