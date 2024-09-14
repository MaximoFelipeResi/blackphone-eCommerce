import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import { Product } from "../assets/types";
import { useCart } from '@/app/context/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const [notificationVisible, setNotificationVisible] = useState(false);

  const handleAddToCart = () => {
    if (product.stock > 0) {
      addToCart(product);
      setNotificationVisible(true);
      setTimeout(() => setNotificationVisible(false), 3000);
    }
  };

  return (
    <>
      <CardContainer className="card-container inter-var">
        <CardBody className="card-body bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full sm:w-[20rem] h-auto rounded-xl p-6 border">
          <CardItem
            translateZ="50"
            className="text-lg sm:text-xl font-bold text-neutral-600 dark:text-white"
          >
            {product.model}
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm sm:text-base max-w-sm mt-2 dark:text-neutral-300"
          >
            {product.brand}
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
            <Image
              src={product.prodImg}
              alt={product.model}
              title={product.model}
              height="1000"
              width="1000"
              className="h-65 sm:h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            />
          </CardItem>
          <div className="flex flex-col sm:flex-row justify-between items-center mt-10 sm:mt-20 space-y-2 sm:space-y-0">
            <button
              onClick={handleAddToCart}
              className={`px-4 py-2 rounded-xl text-xs font-normal dark:text-white ${product.stock > 0 ? 'bg-red-500 text-white' : 'bg-gray-400 text-gray-700 cursor-not-allowed'}`}
              disabled={product.stock <= 0}
            >
              {product.stock > 0 ? 'Agregar al Carrito →' : 'Agotado'}
            </button>
            <CardItem
              translateZ={20}
              as={Link}
              href={`/tienda/productos/${product.id}`}
              className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
            >
              Detalles
            </CardItem>
          </div>
          {product.stock > 0 && (
            <p className="mt-2 text-sm text-gray-500">Stock: {product.stock}</p>
          )}
        </CardBody>
      </CardContainer>

      {notificationVisible && (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white p-3 rounded-lg shadow-lg">
          Producto añadido al carrito
        </div>
      )}
    </>
  );
};

export default ProductCard;
