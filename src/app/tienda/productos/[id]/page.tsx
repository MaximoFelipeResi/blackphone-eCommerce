
import { Product } from '../../../assets/types';
import { productsData } from '../../../assets/products';
import Image from 'next/image';

interface Props {
  params: {
    id: string;
  };
}

const ProductDetail = ({ params }: Props) => {
  const productId = parseInt(params.id, 10);
  const product = productsData.find((prod) => prod.id === productId);

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <div className='mt-24 flex flex-col justify-center items-center'>
      <h1 className='text-3xl font-bold'>{product.model}</h1>
      <Image src={product.prodImg} alt={product.model} width={500} height={500} className='rounded-lg mt-2' />
      <p className='mt-4 text-lg text-stone-300'>Descripción: {product.description}</p>
      <p className='mt-4 text-green-500 text-xl font-bold'>{product.price}</p>
      <p className='mt-2 mb-2 uppercase text-lg font-bold'>Marca: {product.brand}</p>	
      <a
          href="/tienda"
          className="mb-2 px-4 py-2 rounded-xl bg-white text-black text-xs font-bold hover:bg-gray-200 sm:text-sm"
        >
          Volver a la tienda
 </a>
    </div>
  );
};

export default ProductDetail;
