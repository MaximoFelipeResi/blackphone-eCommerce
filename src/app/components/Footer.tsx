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
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3276.282158656514!2d-58.3939745588095!3d-34.79884250672701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcd33f5e0248f9%3A0xa8358dbed54fa6e4!2sP.%C2%BA%20de%20la%20Delicia%201181%2C%20Adrogu%C3%A9%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1718495975699!5m2!1ses!2sar" 
              width="100%" 
              height="100%" 
              title="Google Maps BlackPhone Adrogue"
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>
      </div>
      <div className="text-center mt-8">
        <p>&copy; {year} Máximo Felipe Resi. All rights reserved.</p>
      </div>
    </footer>
  );
}
