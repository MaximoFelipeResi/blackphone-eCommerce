import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import { Product } from "../assets/types";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
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
          <CardItem
            translateZ={20}
            as={Link}
            href="https://api.whatsapp.com/send?phone=541130732191&text=&source=&data=&app_absent="
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white bg-red-500 text-white sm:mr-2"
          >
            Consultar colores →
          </CardItem>
          <CardItem
            translateZ={20}
            as={Link}
            href={`/tienda/productos/${product.id}`}
            target=""
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            Detalles
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
};

export default ProductCard;
