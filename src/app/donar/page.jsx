import SectionHeading from '@/components/ui/SectionHeading';
import DonationCard from '@/components/features/donaciones/DonationCard';
import DonationForm from '@/components/features/donaciones/DonationForm';

export default function DonarPage() {
  return (
    <main className="flex flex-col bg-gray-50">
      {/* Banner superior */}
      <section className="flex min-h-[200px] flex-col items-center justify-center bg-[#880E4F] px-4 py-16 text-center">
        <h1 className="text-4xl font-extrabold text-white sm:text-5xl">
          Apoya Nuestra Misión
        </h1>
        <p className="mt-3 max-w-xl text-base text-white/80">
          Tu generosidad hace posible nuestra labor de evangelización y servicio a los más necesitados.
        </p>
      </section>

      {/* Contenido en dos columnas */}
      <section className="mx-auto w-full max-w-5xl px-4 py-16 sm:px-8 lg:px-0">
        <div className="mb-12 text-center">
          <SectionHeading
            titulo="¿Cómo Contribuir?"
            subtitulo="Elige la forma que más te convenga"
            alineacion="center"
          />
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <DonationCard />
          <DonationForm />
        </div>
      </section>
    </main>
  );
}
