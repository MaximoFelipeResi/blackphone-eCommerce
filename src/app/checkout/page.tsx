"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from '@/app/context/CartContext';

interface PersonalInfo {
  name: string;
  phone: string;
  email: string;
  address: string;
}

interface FormErrors {
  name: string;
  phone: string;
  email: string;
  address: string;
}

const Checkout = () => {
  const { cart, clearCart } = useCart();
  const router = useRouter();

  const [personalInfo, setPersonalInfo] = useState<PersonalInfo>({
    name: '',
    phone: '',
    email: '',
    address: ''
  });

  const [formErrors, setFormErrors] = useState<FormErrors>({
    name: '',
    phone: '',
    email: '',
    address: ''
  });

  const [orderId, setOrderId] = useState<string | null>(null);
  const [isPlacingOrder, setIsPlacingOrder] = useState<boolean>(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPersonalInfo(prevInfo => ({ ...prevInfo, [name]: value }));
  };

  const validateForm = () => {
    const errors: Partial<FormErrors> = {};
    
    if (!personalInfo.name) errors.name = 'Name is required';
    if (!personalInfo.phone) errors.phone = 'Phone number is required';
    if (!personalInfo.email) errors.email = 'Email is required';
    if (!personalInfo.address) errors.address = 'Address is required';
    
    setFormErrors(errors as FormErrors);
    return Object.keys(errors).length === 0;
  };

  const handlePlaceOrder = () => {
    if (!validateForm()) return;

    setIsPlacingOrder(true);
    const generatedOrderId = `ORD-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
    setOrderId(generatedOrderId);
    clearCart();

    setTimeout(() => {
      router.push('/tienda');
    }, 5000);
  };

  return (
    <div className="pt-52 min-h-screen p-4 bg-gray-900">
      <h1 className="text-3xl font-bold mb-4">Checkout</h1>

      <div className="max-w-4xl mx-auto bg-gray-200 p-6 rounded-lg shadow-md">
        <h2 className="text-black text-2xl font-semibold mb-4">Mi orden:</h2>

        {cart.length === 0 ? (
          <p className="text-gray-500">Your cart is empty.</p>
        ) : (
          <ul className="space-y-4">
            {cart.map((item) => (
              <li key={item.id} className="flex justify-between items-center border-b py-2">
                <div>
                  <h3 className="text-black text-lg font-medium">{item.model}</h3>
                  <p className="text-gray-600">{item.brand}</p>
                </div>
                <div className="text-right">
                  <p className="text-green-800 text-lg font-bold">${item.price}</p>
                  <p className="text-gray-500">Qty: {item.quantity}</p>
                </div>
              </li>
            ))}
          </ul>
        )}

        <h2 className="text-black text-2xl font-semibold mt-6 mb-4">Información Personal:</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700">Nombre:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={personalInfo.name}
              onChange={handleInputChange}
              className="p-2 border rounded-lg w-full"
            />
            {formErrors.name && <p className="text-red-500">{formErrors.name}</p>}
          </div>
          
          <div className="mb-4">
            <label htmlFor="phone" className="block text-gray-700">Teléfono:</label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={personalInfo.phone}
              onChange={handleInputChange}
              className="p-2 border rounded-lg w-full"
            />
            {formErrors.phone && <p className="text-red-500">{formErrors.phone}</p>}
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={personalInfo.email}
              onChange={handleInputChange}
              className="p-2 border rounded-lg w-full"
            />
            {formErrors.email && <p className="text-red-500">{formErrors.email}</p>}
          </div>

          <div className="mb-4">
            <label htmlFor="address" className="block text-gray-700">Dirección:</label>
            <input
              type="text"
              id="address"
              name="address"
              value={personalInfo.address}
              onChange={handleInputChange}
              className="p-2 border rounded-lg w-full"
            />
            {formErrors.address && <p className="text-red-500">{formErrors.address}</p>}
          </div>
        </form>

        {isPlacingOrder && orderId && (
          <div className="mt-6 bg-black p-4 rounded-lg">
            <h3 className="text-lg font-semibold">Gracias por tu pedido!</h3>
            <p>El ID de tu pedido es: <span className="font-bold">{orderId}</span></p>
            <p>Redireccionando a la tienda...</p>
          </div>
        )}

        <div className="mt-6 flex justify-end">
          <button
            onClick={handlePlaceOrder}
            className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600"
            disabled={isPlacingOrder}
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
