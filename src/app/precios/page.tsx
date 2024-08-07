"use client"
import { useState } from 'react';

interface Phone {
  model: string;
  price: string;
}

interface PhoneData {
  Apple: Phone[];
  Samsung: Phone[];
  Motorola: Phone[];
  Xiaomi: Phone[];
  Google: Phone[];
  OnePlus: Phone[];
  TCL: Phone[];
  Nothing: Phone[];
}

const phoneData: PhoneData = {
  Apple: [
    { model: 'iPhone 15 Pro Max 256GB', price: 'U$D 1250' },
    { model: 'iPhone 15 Pro Max 512GB', price: 'U$D 1500' },
    { model: 'iPhone 15 Pro 128 GB', price: 'U$D 1050' },
    { model: 'iPhone 15 Pro 256 GB', price: 'U$D 1150' },
    { model: 'iPhone 15 128 GB', price: 'U$D 840' },
    { model: 'iPhone 15 256 GB', price: 'U$D 990' },
    { model: 'iPhone 15 Plus 128 GB', price: 'U$D 990' },
    { model: 'iPhone 15 Plus 256 GB', price: 'U$D 1110' },
    { model: 'iPhone 14 128 GB', price: 'U$D 760' },
    { model: 'iPhone 14 256 GB', price: 'U$D 850' },
    { model: 'iPhone 13 128 GB', price: 'U$D 670' },
    { model: 'iPhone 13 256 GB', price: 'U$D 800' },
    { model: 'iPhone 11 128 GB', price: 'U$D 500' },
    { model: 'Apple Watch 2 Ultra', price: 'U$D 950' },
    { model: 'Apple Watch serie 9 45mm', price: 'U$D 485' },
  ],
  Samsung: [
    { model: 'Galaxy S24 Ultra 5G 512GB 12 RAM', price: 'U$D 1180' },
    { model: 'Galaxy S24 Plus 5G 256GB 12 RAM', price: 'U$D 890' },
    { model: 'Galaxy S24 5G 256GB 8 RAM', price: 'U$D 790' },
    { model: 'Galaxy A55 5G 256GB 8 RAM', price: 'U$D 470' },
    { model: 'Galaxy A35 5G 256GB 8 RAM', price: 'U$D 410' },
    { model: 'Galaxy A25 5G 256GB 8 RAM', price: 'U$D 330' },
    { model: 'Galaxy A15 5G 256GB 8 RAM', price: 'U$D 290' },
    { model: 'Galaxy A15 4G 128GB 4 RAM', price: 'U$D 200' },
    { model: 'Galaxy A05s 4G 128GB 4 RAM', price: 'U$D 220' },
  ],
  Motorola: [
    { model: 'Motorola EDGE 50 Pro 5G 512GB 12 RAM', price: 'U$D 800' },
    { model: 'Motorola Razr 40 Ultra 5G 512GB 12 RAM', price: 'U$D 950' },
    { model: 'Motorola G84 5G 256GB 8 RAM', price: 'U$D 330' },
    { model: 'Motorola G54 5G 256GB 8 RAM', price: 'U$D 290' },
    { model: 'Motorola G24 4G 256GB 4 RAM', price: 'U$D 240' },
  ],
  Xiaomi: [
    { model: 'Xiaomi 14 Ultra 512GB 16 RAM ', price: 'U$D 1400' },
    { model: 'Xiaomi 14 256GB 12 RAM', price: 'U$D 960' },
    { model: 'Xiaomi Redmi Note 13 Pro + 5G 256GB 8RAM', price: 'U$D 490' },
    { model: 'Xiaomi Redmi Note 13 Pro 5G 512GB 12 RAM', price: 'U$D 470' },
    { model: 'Xiaomi Redmi Note 13 5G 256GB 8 RAM', price: 'U$D 350' },
    { model: 'Xiaomi Redmi 13C 4G 256GB 8 RAM', price: 'U$D 230' },
  ],
  Google: [
    { model: 'Pixel 8 Pro 5G 256GB 12 RAM', price: 'U$D 1250' },
    { model: 'Pixel 8 5G 256GB 8 RAM ', price: 'U$D 950' },
    { model: 'Pixel 8A 5G 128GB 8 RAM ', price: 'U$D 750' },
  ],
  OnePlus: [
    { model: 'OnePlus 12R 5G 256GB 16 RAM', price: 'U$D 900' },
    { model: 'OnePlus 12 5G 256GB 12 RAM', price: 'U$D 1050' },
  ],
  TCL: [
    { model: 'TCL 40 NXTPAPER 256GB 8 RAM', price: 'U$D 270' },
  ],
  Nothing: [
    { model: 'Nothing Phone 2A 5G 128GB 8 RAM', price: 'U$D 550' },
    { model: 'Nothing Phone 2 5G 256GB 8 RAM', price: 'U$D 960' },
  ],
};

const ListaPrecios: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="mt-24 px-4 py-8 md:px-8 lg:px-16 xl:px-24 2xl:px-32 flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md p-4 bg-gray-800 rounded-2xl shadow-lg">
        <h1 className="text-2xl font-bold text-center mb-4 text-white">Lista de Precios de Celulares</h1>
        {Object.keys(phoneData).map((brand, index) => (
          <div key={brand} className="mb-2">
            <button
              onClick={() => handleToggle(index)}
              className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-red-900 bg-red-100 rounded-lg hover:bg-red-200 focus:outline-none"
            >
              <span className="text-black font-bold uppercase">{brand}</span>
              <svg
                className={`w-5 h-5 text-red-500 transform transition-transform duration-400 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
            <div
              className={`transition-[max-height] duration-500 ease-in-out overflow-hidden ${
                openIndex === index ? 'max-h-[1000px]' : 'max-h-0'
              }`}
            >
              <div className="px-4 pt-4 pb-2 text-sm text-white font-semibold">
                <ul>
                  {phoneData[brand as keyof PhoneData].map((phone, phoneIndex) => (
                    <li key={phoneIndex} className="py-1 flex space-between">
                      {phone.model} - {phone.price}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ListaPrecios;
