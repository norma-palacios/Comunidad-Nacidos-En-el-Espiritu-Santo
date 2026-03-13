"use client";

import { useState } from 'react';
import { Send } from 'lucide-react';
import Button from '@/components/ui/Button';

/**
 * Componente DonationForm — formulario de peticiones de oración y contacto.
 * Props: onEnviar (callback)
 */
export default function DonationForm({ onEnviar }) {
  const [campos, setCampos] = useState({ nombre: '', email: '', mensaje: '' });
  const [errores, setErrores] = useState({});
  const [enviado, setEnviado] = useState(false);

  const validar = () => {
    const nuevosErrores = {};
    if (!campos.nombre.trim()) nuevosErrores.nombre = 'El nombre es obligatorio';
    if (!campos.email.trim()) nuevosErrores.email = 'El email es obligatorio';
    if (!campos.mensaje.trim()) nuevosErrores.mensaje = 'El mensaje es obligatorio';
    return nuevosErrores;
  };

  const handleEnviar = (e) => {
    e.preventDefault();
    const nuevosErrores = validar();
    if (Object.keys(nuevosErrores).length > 0) {
      setErrores(nuevosErrores);
      return;
    }
    setErrores({});
    setEnviado(true);
    onEnviar?.(campos);
  };

  const handleCambio = (campo) => (e) => {
    setCampos((prev) => ({ ...prev, [campo]: e.target.value }));
    if (errores[campo]) setErrores((prev) => ({ ...prev, [campo]: undefined }));
  };

  const estiloInput =
    'w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:border-[#880E4F] focus:outline-none focus:ring-2 focus:ring-[#880E4F]/20 transition-all';

  if (enviado) {
    return (
      <div
        data-testid="donation-form"
        className="flex flex-col items-center justify-center rounded-2xl bg-white p-10 text-center shadow-lg"
      >
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#880E4F]/10">
          <Send size={28} className="text-[#880E4F]" />
        </div>
        <h3 className="text-xl font-extrabold text-[#5C0324]">¡Mensaje enviado!</h3>
        <p className="mt-2 text-sm text-gray-500">
          Gracias por comunicarte. Estaremos en oración por tu intención.
        </p>
      </div>
    );
  }

  return (
    <form
      data-testid="donation-form"
      onSubmit={handleEnviar}
      noValidate
      className="rounded-2xl bg-white p-6 shadow-lg sm:p-8"
    >
      <h3 className="mb-1 text-lg font-extrabold text-[#5C0324]">Petición de Oración</h3>
      <p className="mb-6 text-sm text-gray-400">
        Déjanos tu mensaje y oraremos por tu intención.
      </p>

      {/* Nombre */}
      <div className="mb-4">
        <label htmlFor="nombre" className="mb-1 block text-sm font-semibold text-gray-600">
          Nombre
        </label>
        <input
          id="nombre"
          data-testid="input-nombre"
          type="text"
          placeholder="Tu nombre completo"
          value={campos.nombre}
          onChange={handleCambio('nombre')}
          className={estiloInput}
        />
        {errores.nombre && (
          <p className="mt-1 text-xs text-red-500">{errores.nombre}</p>
        )}
      </div>

      {/* Email */}
      <div className="mb-4">
        <label htmlFor="email" className="mb-1 block text-sm font-semibold text-gray-600">
          Correo electrónico
        </label>
        <input
          id="email"
          data-testid="input-email"
          type="email"
          placeholder="tu@correo.com"
          value={campos.email}
          onChange={handleCambio('email')}
          className={estiloInput}
        />
        {errores.email && (
          <p className="mt-1 text-xs text-red-500">{errores.email}</p>
        )}
      </div>

      {/* Mensaje */}
      <div className="mb-6">
        <label htmlFor="mensaje" className="mb-1 block text-sm font-semibold text-gray-600">
          Mensaje o petición
        </label>
        <textarea
          id="mensaje"
          data-testid="input-mensaje"
          rows={4}
          placeholder="Escribe tu petición de oración o mensaje..."
          value={campos.mensaje}
          onChange={handleCambio('mensaje')}
          className={`${estiloInput} resize-none`}
        />
        {errores.mensaje && (
          <p className="mt-1 text-xs text-red-500">{errores.mensaje}</p>
        )}
      </div>

      <Button
        data-testid="btn-enviar"
        variante="primary"
        className="w-full gap-2"
        type="submit"
      >
        <Send size={16} />
        Enviar Mensaje
      </Button>
    </form>
  );
}
