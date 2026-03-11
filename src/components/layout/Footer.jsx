import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const enlacesRapidos = [
  { label: 'Inicio', href: '/' },
  { label: 'Predicaciones', href: '/predicaciones' },
  { label: 'Galería', href: '/galeria' },
  { label: 'Ayuda Social', href: '/ayuda-social' },
  { label: 'Nosotros', href: '/nosotros' },
];

/**
 * Componente Footer — pie de página de la plataforma.
 * Fondo púrpura (#880E4F) con 4 columnas:
 * Marca/Descripción | Enlaces Rápidos | Contacto | Redes Sociales
 */
export default function Footer() {
  const anioActual = new Date().getFullYear();

  return (
    <footer data-testid="footer" className="bg-[#880E4F] text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-8 lg:px-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Columna 1 — Marca */}
          <div data-testid="footer-brand" className="flex flex-col gap-4">
            <h3 className="text-lg font-extrabold tracking-tight">
              Nacidos en el{' '}
              <span className="text-[#FFD600]">Espíritu Santo</span>
            </h3>
            <p className="text-sm text-white/70 leading-relaxed">
              Comunidad Católica unida en la fe, el servicio y el amor de
              Dios. Unidos por el Espíritu Santo.
            </p>
          </div>

          {/* Columna 2 — Enlaces Rápidos */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-bold uppercase tracking-widest text-[#FFD600]">
              Enlaces Rápidos
            </h4>
            <ul className="flex flex-col gap-2">
              {enlacesRapidos.map((enlace) => (
                <li key={enlace.href}>
                  <a
                    href={enlace.href}
                    className="text-sm text-white/70 transition-colors hover:text-[#FFD600]"
                  >
                    {enlace.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3 — Contacto */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-bold uppercase tracking-widest text-[#FFD600]">
              Contacto
            </h4>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-2 text-sm text-white/70">
                <MapPin size={16} className="mt-0.5 shrink-0 text-[#FFD600]" />
                <span>Av. Principal 123, Ciudad</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-white/70">
                <Phone size={16} className="shrink-0 text-[#FFD600]" />
                <span>+1 (555) 000-0000</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-white/70">
                <Mail size={16} className="shrink-0 text-[#FFD600]" />
                <span>contacto@nacidosenelesp.com</span>
              </li>
            </ul>
          </div>

          {/* Columna 4 — Redes Sociales */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-bold uppercase tracking-widest text-[#FFD600]">
              Redes Sociales
            </h4>
            <div className="flex gap-4">
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#FFD600] hover:text-[#5C0324]"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#FFD600] hover:text-[#5C0324]"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#FFD600] hover:text-[#5C0324]"
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Línea divisoria y créditos */}
        <div className="mt-10 border-t border-white/20 pt-6 text-center text-xs text-white/50">
          © {anioActual} Comunidad Nacidos en el Espíritu Santo. Todos los
          derechos reservados.
        </div>
      </div>
    </footer>
  );
}
