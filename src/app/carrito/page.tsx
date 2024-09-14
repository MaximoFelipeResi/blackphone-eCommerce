"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from '@/app/context/CartContext';
import Image from 'next/image';

const Carrito = () => {
  const { cart, removeFromCart, clearCart, increaseQuantity, decreaseQuantity } = useCart();
  const router = useRouter();

  const totalPrice = cart.reduce((acc, item) => acc + (parseFloat(item.price.replace(/[^0-9.-]+/g, '')) * item.quantity), 0);

  if (cart.length === 0) {
    return <div className="min-h-screen text-3xl text-purple-500 font-bold flex justify-center items-center text-center">Tu carrito está vacío.</div>;
  }

  return (
    <div className="min-h-screen mt-24 mx-auto max-w-screen-xl p-4">
      <h1 className="text-3xl font-bold mb-4">Carrito de Compras</h1>
      {cart.map((item) => (
        <div key={item.id} className="flex items-center justify-between mb-4 border-b border-gray-300 pb-4">
          <Image src={item.prodImg} alt={item.model} width={100} height={100} className="rounded-lg" />
          <div className="ml-4 flex-grow">
            <h2 className="text-xl font-bold">{item.model}</h2>
            <p>{item.brand}</p>
            <p className="text-green-500 font-bold">${item.price}</p>
            <div className="flex items-center mt-2">
              <p className="mr-4">Cantidad: {item.quantity}</p>
              <div className="flex">
                <button
                  onClick={() => decreaseQuantity(item.id)}
                  className="px-2 py-1 bg-gray-300 rounded-lg mr-2"
                >
                  -
                </button>
                <button
                  onClick={() => increaseQuantity(item.id)}
                  className="px-2 py-1 bg-gray-300 rounded-lg"
                >
                  +
                </button>
              </div>
            </div>
          </div>
          <button
            onClick={() => removeFromCart(item.id)}
            className="px-4 py-2 bg-red-500 text-white rounded-lg"
          >
            Eliminar
          </button>
        </div>
      ))}
      <div className="flex flex-col sm:flex-row justify-between mt-4 items-center">
        <div className="text-xl font-bold text-green-500">
          Total: ${totalPrice.toFixed(2)}
        </div>
        <div className="flex space-x-4">
          <button
            onClick={clearCart}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg"
          >
            Vaciar Carrito
          </button>
          <button
            onClick={() => router.push('/checkout')}
            className="px-4 py-2 bg-green-500 text-white rounded-lg"
          >
            Proceder a la Compra
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carrito;
