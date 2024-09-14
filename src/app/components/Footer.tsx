import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {

  const year = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto flex flex-col lg:flex-row lg:justify-between gap-8">
        <div className="flex-1">
          <h2 className="text-lg font-semibold mb-6">Accesos Rápidos</h2>
          <ul>
            <li className="mb-2 hover-up">
              <Link className="text-white" href="/">Inicio</Link>
            </li>
            <li className="mb-2 hover-up">
              <Link className="text-white" href="/tienda">Tienda</Link>
            </li>
            <li className="mb-2 hover-up">
              <Link className="text-white" href="/precios">Lista Precios</Link>
            </li>
          </ul>
        </div>
        <div className="flex-1">
          <h2 className="text-lg font-semibold mb-6">Contáctanos</h2>
          <ul className="flex space-x-8">
            <li className="hover-up">
              <a href="https://www.instagram.com/blackphone.adrogue/" target="_blank" rel="noopener noreferrer">
                <Image src="/images/logo-instagram.svg" alt="Instagram" className="footer-logo text-white fill-current" width={20} height={20}/>
              </a>
            </li>
            <li className="hover-up">
              <a href="https://api.whatsapp.com/send?phone=541130732191&text=&source=&data=&app_absent=" target="_blank" rel="noopener noreferrer">
                <Image src="/images/logo-whatsapp.svg" alt="WhatsApp" className="footer-logo text-white fill-current" width={20} height={20}/>
              </a>
            </li>
            <li className="hover-up">
              <a href="mailto:fernandoresi@gmail.com">
                <Image src="/images/mail-outline.svg" alt="Gmail" className="footer-logo text-white fill-current" width={20} height={20}/>
              </a>
            </li>
          </ul>
        </div>
        <div className="flex-1">
          <h2 className="text-lg font-semibold mb-4">Ubicación</h2>
          <div className="w-full h-64">
            <p>P.º de la Delicia 1181, Adrogué, Provincia de Buenos Aires</p>
            <p>Teléfono: +54 11 3073 2191</p>
          </div>
        </div>
      </div>
      <div className="text-center mt-8">
        <p>&copy; {year} Máximo Felipe Resi. All rights reserved.</p>
      </div>
    </footer>
  );
}
