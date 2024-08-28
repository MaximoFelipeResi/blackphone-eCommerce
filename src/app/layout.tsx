import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { CartProvider } from './context/CartContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'BLACKPHONE - Tienda de Celulares y PC',
  description: 'BlackPhone: Tu tienda de tecnología especializada en productos Apple, Samsung, Motorola, Xiaomi, Google Pixel, OnePlus, Nothing Phone, TCL y más. Ofrecemos servicio técnico, reparación de PCs, ensamblaje personalizado y una amplia gama de accesorios para celulares.',
  keywords: 'BlackPhone, tecnología, tienda de tecnología, Apple, Samsung, Motorola, Xiaomi, Google Pixel, OnePlus, Nothing Phone, TCL, servicio técnico, reparación de PCs, ensamblaje de PCs, accesorios para celulares, productos electrónicos, componentes de PC, gadgets, informática, reparación de celulares'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <meta name="author" content="Máximo Felipe Resi" />
        <meta name="audience" content="all" />
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="robots" content="index, all, follow" />
        <meta name="category" content="Tecnología" />
        <meta itemProp="name" content="Venta de Equipos y Servicio Técnico" />
        <meta itemProp="address" content="P.º de la Delicia 1181, Adrogué, Provincia de Buenos Aires" />
        <meta itemProp="telephone" content="+54 11 3073 2191" /> 
        <meta http-equiv='cache-control' content='no-cache'/>
        <meta http-equiv='expires' content='0'/>
        <meta http-equiv='pragma' content='no-cache' />
        <meta http-equiv="Content-Security-Policy" content="" />

        <link rel="icon" href="/images/logo.png"></link>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        <script src="https://kit.fontawesome.com/" crossOrigin="anonymous"></script>

        <title>{metadata.title}</title>
      </head>
      <body className={inter.className}>
        <CartProvider>
          <Navbar />
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
