"use client";

import { Heart, Copy } from 'lucide-react';

/**
 * Componente DonationCard — tarjeta de información bancaria para donaciones.
 * Props: banco, titular, cuenta, tipo, descripcion
 */
export default function DonationCard({
  banco = 'Banco Nacional',
  titular = 'Comunidad Nacidos en el Espíritu Santo',
  cuenta = '001-123456-78',
  tipo = 'Cuenta Corriente',
  descripcion = 'Tus ofrendas sostienen nuestra misión de evangelización y servicio a los más necesitados.',
}) {
  return (
    <div
      data-testid="donation-card"
      className="rounded-2xl bg-white shadow-lg overflow-hidden"
    >
      {/* Borde superior color Vino */}
      <div className="h-2 w-full bg-[#880E4F]" />

      <div className="p-6 sm:p-8">
        {/* Icono y título */}
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#880E4F]/10">
            <Heart size={22} className="text-[#880E4F]" />
          </div>
          <div>
            <h3 className="text-lg font-extrabold text-[#5C0324]">Información de Pago</h3>
            <p className="text-xs text-gray-400">Depósito o transferencia bancaria</p>
          </div>
        </div>

        {/* Descripción */}
        <p className="mb-6 text-sm leading-relaxed text-gray-500">{descripcion}</p>

        {/* Datos bancarios */}
        <div className="space-y-4 rounded-xl bg-gray-50 p-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">Banco</p>
            <p className="mt-1 font-bold text-gray-800">{banco}</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">Titular</p>
            <p className="mt-1 font-bold text-gray-800">{titular}</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">
              {tipo}
            </p>
            <div className="mt-1 flex items-center gap-2">
              <p className="font-bold text-[#880E4F]">{cuenta}</p>
              <button
                className="text-gray-400 hover:text-[#880E4F] transition-colors"
                onClick={() => navigator.clipboard?.writeText(cuenta)}
                aria-label="Copiar número de cuenta"
              >
                <Copy size={14} />
              </button>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
}
