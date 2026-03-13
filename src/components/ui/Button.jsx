"use client";

/**
 * Componente Button reutilizable.
 * Variantes: primary (Púrpura), secondary (Dorado), outline, ghost.
 */

const estilosVariante = {
  primary:     'bg-[#880E4F] text-white font-bold hover:bg-[#5C0324] shadow-md',
  secondary:   'bg-[#FFD600] text-[#5C0324] font-bold hover:bg-yellow-400 shadow-md',
  outline:     'bg-transparent border-2 border-[#880E4F] text-[#880E4F] hover:bg-[#880E4F]/10',
  ghost:       'bg-transparent text-[#880E4F] hover:bg-[#880E4F]/10',
  'ghost-white': 'bg-white/10 text-white font-bold hover:bg-[#FFD600] hover:text-[#5C0324]',
};

export default function Button({
  variante = 'primary',
  onClick,
  children,
  className = '',
  ...props
}) {
  const estiloBase =
    'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm sm:text-base transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#880E4F] cursor-pointer';

  const estiloFinal = `${estiloBase} ${estilosVariante[variante] ?? estilosVariante.primary} ${className}`;

  return (
    <button className={estiloFinal} onClick={onClick} {...props}>
      {children}
    </button>
  );
}
