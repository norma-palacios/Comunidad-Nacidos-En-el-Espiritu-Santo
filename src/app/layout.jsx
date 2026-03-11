import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

/**
 * Componente RootLayoutContent — estructura base de todas las páginas.
 * Coloca el Navbar en la parte superior, el contenido en el centro
 * y el Footer en la parte inferior.
 *
 * Props:
 *  - children: React.ReactNode
 */
export default function RootLayoutContent({ children }) {
  return (
    <>
      <Navbar />
      {/* pt-16 compensa la altura del Navbar fijo (h-16) */}
      <div className="pt-16">{children}</div>
      <Footer />
    </>
  );
}
