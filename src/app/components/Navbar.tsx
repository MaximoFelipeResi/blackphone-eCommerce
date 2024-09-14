"use client";
import React from "react";
import Link from "next/link";
import { getAuth, signOut } from "firebase/auth";
import firebaseConfig from "../utils/firebaseConfig";
import { initializeApp } from "firebase/app";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default function Navbar() {
  const handleSignOut = async () => {
    try {
      await signOut(auth);
      window.location.href = "/login";
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  return (
    <header className="fixed top-0 w-full z-50 backdrop-filter backdrop-blur-lg">
      <div className="w-full max-w-screen-xl mx-auto h-16 flex items-center justify-between bg-transparent px-4">
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
              <Link className="text-white font-semibold text-lg font-incompleeta gold-color" href="/carrito">
                Carrito
              </Link>
            </li>
          </ul>
        </nav>
        <button
          onClick={handleSignOut}
          className="text-white font-semibold text-lg font-incompleeta gold-color"
        >
          Cerrar Sesión
        </button>
      </div>
      <div className="w-full border-b-2 border-white"></div>
    </header>
  );
}
