"use client";
import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50 backdrop-filter backdrop-blur-lg">
      <div className="w-full max-w-screen-xl mx-auto h-16 flex items-center justify-center bg-transparent px-4">
        <nav className="flex flex-row gap-8 items-center">
          <ul className="flex flex-row gap-8">
            <li>
              <Link className="text-white font-semibold text-lg font-incompleeta gold-color" href="/">
                Inicio
              </Link>
            </li>
            <li>
              <Link className="text-white font-semibold text-lg font-incompleeta gold-color" href="/tienda">
                Tienda
              </Link>
            </li>
            <li>
              <Link className="text-white font-semibold text-lg font-incompleeta gold-color" href="/precios">
                Lista Precios
              </Link>
            </li>
            <li>
              <Link className="text-white font-semibold text-lg font-incompleeta gold-color" href="/carrito">
                Carrito
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="w-full border-b-2 border-white"></div>
    </header>
  );
}
