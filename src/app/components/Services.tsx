import React from "react";
import { Meteors } from "./ui/meteors";

export function Services() {
  return (
    <section className="services-container min-h-screen p-4 sm:p-8 md:p-16 lg:p-24">
      <h2 className="text-3xl w-full grid justify-center py-12 font-semibold">Servicios</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 lg:grid-cols-3 gap-8 items-center justify-items-center">
      
        <div className="py-12 w-full relative max-w-xs">
          <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
          <div className="relative shadow-xl bg-gray-900 border border-gray-800 px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start min-h-[350px]">
            <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-2 w-2 text-gray-300"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
                />
              </svg>
            </div>

            <h1 className="font-bold text-xl text-white mb-4 relative z-50">
              Servicio Técnico
            </h1>

            <p className="font-normal text-base text-slate-400 mb-4 relative z-50">
              Nos contás cuál es el problema que tiene tu equipo. Lo revisamos sin costo, diagnosticamos y cotizamos. Una vez aprobado el presupuesto, hacemos el arreglo. Esto podría tomar de 24 a 48 horas.
            </p>

            <a className="text-white" target="_blank" href="https://api.whatsapp.com/send?phone=541130732191&text=&source=&data=&app_absent=">
              <button className="border px-4 py-1 rounded-lg border-gray-500 text-gray-300">
                Explorá
              </button>
            </a>

            <Meteors number={30} />
          </div>
        </div>

        <div className="py-12 w-full relative max-w-xs">
          <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
          <div className="relative shadow-xl bg-gray-900 border border-gray-800 px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start min-h-[350px]">
            <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-2 w-2 text-gray-300"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
                />
              </svg>
            </div>

            <h1 className="font-bold text-xl text-white mb-4 relative z-50">
              Hidrogel y accesorios
            </h1>

            <p className="font-normal text-base text-slate-400 mb-4 relative z-50">
              Colocación y configuración de los accesorios de alta calidad para mayor resistencia y protección de tus dispositivos, garantizando una experiencia superior al momento del uso.
            </p>

            <a className="text-white" target="_blank" href="https://api.whatsapp.com/send?phone=541130732191&text=&source=&data=&app_absent=">
              <button className="border px-4 py-1 rounded-lg border-gray-500 text-gray-300">
                Explorá
              </button>
            </a>

            <Meteors number={30} />
          </div>
        </div>

        <div className="py-12 w-full relative max-w-xs">
          <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
          <div className="relative shadow-xl bg-gray-900 border border-gray-800 px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start min-h-[350px]">
            <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-2 border-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-2 w-2 text-gray-300"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
                />
              </svg>
            </div>

            <h1 className="font-bold text-xl text-white mb-2 relative z-50">
              Armamos tu PC
            </h1>

            <p className="font-normal text-base text-slate-400 mb-2 relative z-50">
              A tu medida, con los mejores componentes y el asesoramiento experto que necesitas. Ya sea que busques un equipo para gaming, diseño gráfico, edición de video o simplemente una computadora potente para uso diario, nos aseguramos de que cada pieza sea seleccionada para maximizar el rendimiento y la eficiencia.
            </p>

            <a className="text-white" target="_blank" href="https://api.whatsapp.com/send?phone=541130732191&text=&source=&data=&app_absent=">
              <button className="border px-4 py-1 rounded-lg border-gray-500 text-gray-300">
                Explorá
              </button>
            </a>

            <Meteors number={30} />
          </div>
        </div>

      </div>
    </section>
  );
}
