"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Product } from '../../../assets/types';
import { db } from '../../../utils/firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';
import { useCart } from '../../../context/CartContext';
import SuspenseFallback from '../../../components/SuspenseFallback';

interface Props {
  params: {
    id: string;
  };
}

const ProductDetailPage: React.FC<Props> = ({ params }) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const docRef = doc(db, 'productos', params.id);
        const docSnap = await getDoc(docRef);
  
        if (docSnap.exists()) {
          const productData = docSnap.data();
          if (productData) {
            setProduct({ id: docSnap.id, ...productData } as Product);
          } else {
            setError('Datos del producto inválidos');
          }
        } else {
          setError('Producto no encontrado');
        }
      } catch (err) {
        console.error('Error al obtener el producto:', err);
        setError('Error al obtener el producto');
      } finally {
        setLoading(false);
      }
    };
  
    fetchProduct();
  }, [params.id]);

  if (loading) {
    return <SuspenseFallback />;
  }

  if (error) {
    return <div className='min-h-screen flex text-center items-center justify-center text-purple-500 font-bold text-3xl'>{error}</div>;
  }

  if (!product) {
    return <div className='min-h-screen flex text-center items-center justify-center text-purple-500 font-bold text-3xl'>¡Producto no encontrado!</div>;
  }

  return (
    <div className='mt-24 min-h-screen flex flex-col justify-center items-center'>
      <h1 className='text-3xl font-bold'>{product.model}</h1>
      <Image src={product.prodImg} alt={product.model} width={500} height={500} className='rounded-lg mt-2' />
      <p className='mt-4 text-lg text-stone-300'>Descripción: {product.description}</p>
      <p className='mt-4 text-green-500 text-xl font-bold'>{product.price}</p>
      <p className='mt-2 mb-2 uppercase text-white text-lg font-bold'>Marca: {product.brand}</p>
      <a
        href="/tienda"
        className="mb-2 px-4 py-2 rounded-xl bg-white text-black text-xs font-bold hover:bg-gray-200 sm:text-sm"
      >
        Volver a la tienda
      </a>
      <button
        onClick={() => addToCart(product)}
        className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg"
      >
        Agregar al Carrito
      </button>
    </div>
  );
};

export default ProductDetailPage;
