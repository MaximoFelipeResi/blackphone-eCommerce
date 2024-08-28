
"use client";

import React from 'react';
import { useCart } from '@/app/context/CartContext';
import Image from 'next/image';

const Carrito = () => {
  const { cart, removeFromCart, clearCart } = useCart();

  if (cart.length === 0) {
    return <div className="mt-24 text-center">Tu carrito está vacío.</div>;
  }

  return (
    <div className="min-h-screen mt-24 mx-auto max-w-screen-xl p-4">
      <h1 className="text-3xl font-bold mb-4">Carrito de Compras</h1>
      {cart.map((item) => (
        <div key={item.id} className="flex items-center justify-between mb-4">
          <Image src={item.prodImg} alt={item.model} width={100} height={100} className="rounded-lg" />
          <div className="ml-4">
            <h2 className="text-xl font-bold">{item.model}</h2>
            <p>{item.brand}</p>
            <p className="text-green-500 font-bold">${item.price}</p>
            <p>Cantidad: {item.quantity}</p>
          </div>
          <button
            onClick={() => removeFromCart(item.id)}
            className="px-4 py-2 bg-red-500 text-white rounded-lg"
          >
            Eliminar
          </button>
        </div>
      ))}
      <button
        onClick={clearCart}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
      >
        Vaciar Carrito
      </button>
    </div>
  );
};

export default Carrito;
