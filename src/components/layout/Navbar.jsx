"use client";

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const enlacesNav = [
  { label: 'Inicio', href: '/' },
  { label: 'Predicaciones', href: '/predicaciones' },
  { label: 'Galería', href: '/galeria' },
  { label: 'Ayuda Social', href: '/ayuda-social' },
  { label: 'Nosotros', href: '/nosotros' },
];

/**
 * Componente Navbar — barra de navegación fija.
 * Logo a la izquierda, enlaces + botón donaciones a la derecha.
 * Menú hamburguesa funcional para versión móvil.
 */
export default function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  return (
    <nav
      data-testid="navbar"
      className="fixed top-0 left-0 right-0 z-50 bg-[#880E4F] shadow-lg"
    >
      <div className="flex h-16 w-full items-center justify-between px-4 sm:px-8 lg:px-16">
        {/* Logo / Nombre */}
        <a
          href="/"
          data-testid="navbar-logo"
          className="text-lg font-extrabold tracking-tight text-white sm:text-xl"
        >
          Nacidos en el{' '}
          <span className="text-[#FFD600]">Espíritu Santo</span>
        </a>

        {/* Links escritorio + hamburguesa agrupados a la derecha */}
        <div className="flex items-center gap-6">
          <ul className="hidden items-center gap-6 md:flex">
            {enlacesNav.map((enlace) => (
              <li key={enlace.href}>
                <a
                  href={enlace.href}
                  className="text-sm font-medium text-white/80 transition-colors hover:text-[#FFD600]"
                >
                  {enlace.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Botón hamburguesa */}
          <button
            data-testid="hamburger-menu"
            aria-label="Abrir menú"
            className="flex items-center justify-center rounded-lg p-2 text-white hover:bg-white/10 md:hidden"
            onClick={() => setMenuAbierto((prev) => !prev)}
          >
            {menuAbierto ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Menú móvil desplegable */}
      {menuAbierto && (
        <div
          data-testid="mobile-menu"
          className="border-t border-white/20 bg-[#880E4F] px-4 pb-4 pt-2 md:hidden"
        >
          <ul className="flex flex-col gap-3">
            {enlacesNav.map((enlace) => (
              <li key={enlace.href}>
                <a
                  href={enlace.href}
                  className="block text-sm font-medium text-white/80 hover:text-[#FFD600]"
                  onClick={() => setMenuAbierto(false)}
                >
                  {enlace.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
