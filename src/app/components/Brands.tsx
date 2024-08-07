import { HoverEffect } from "./ui/card-hover-efect";

export function Brands() {
  return (
    <div className="max-w-5xl mx-auto px-8 mb-12">
      <h2 className="brands-title text-3xl flex items-center justify-center">Marcas</h2>
      <HoverEffect items={projects} />
    </div>
  );
}


export const projects = [
  {
    imgUrl: "/images/apple.svg",
    title: "Apple",
    description: "Una empresa tecnológica que se distingue por innovar productos que impulsan la misión de la tecnología de acercar al mundo.",
    link: "https://api.whatsapp.com/send?phone=541130732191&text=&source=&data=&app_absent=",
  },
  {
    imgUrl: "/images/samsung.svg",
    title: "Samsung",
    description: "Líder en tecnología que fabrica productos avanzados, contribuyendo a acercar a las personas mediante la innovación continua.",
    link: "https://api.whatsapp.com/send?phone=541130732191&text=&source=&data=&app_absent=",
  },
  {
    imgUrl: "/images/motorola.svg",
    title: "Motorola",
    description: "Pioneros en tecnología, creando productos que conectan y simplifican la vida moderna a través de soluciones innovadoras. (Posibilidad pago en pesos)",
    link: "https://api.whatsapp.com/send?phone=541130732191&text=&source=&data=&app_absent=",
  },
  {
    imgUrl: "/images/xiaomi.svg",
    title: "Xiaomi",
    description: "Una marca reconocida por su enfoque en ofrecer tecnología accesible y de vanguardia, mejorando la conectividad global.",
    link: "https://api.whatsapp.com/send?phone=541130732191&text=&source=&data=&app_absent=",
  },
  {
    imgUrl: "/images/googlepixel.svg",
    title: "Google Pixel",
    description: "Innovadores en la tecnología móvil, combinando hardware de primera con el poder del ecosistema Google para mejorar la experiencia digital.",
    link: "https://api.whatsapp.com/send?phone=541130732191&text=&source=&data=&app_absent=",
  },
  {
    imgUrl: "/images/tcl.svg",
    title: "TCL",
    description: "Comprometidos con la innovación en tecnología visual y dispositivos inteligentes, facilitando un estilo de vida más conectado y entretenido. (Posibilidad pago en pesos)",
    link: "https://api.whatsapp.com/send?phone=541130732191&text=&source=&data=&app_absent=",
  },
  {
    imgUrl: "/images/oneplus.svg",
    title: "OnePlus",
    description: "Dedicada a ofrecer tecnología de alta calidad, OnePlus se especializa en smartphones de alto rendimiento y diseño elegante, comprometidos con la innovación y satisfacción del usuario.",
    link: "https://api.whatsapp.com/send?phone=541130732191&text=&source=&data=&app_absent=",
  },
  {
    imgUrl: "/images/nothing.jpg",
    title: "Nothing Phone",
    description: "Una nueva promesa en el mundo de los smartphones, dedicada a desafiar lo convencional y reinventar la experiencia móvil.",
    link: "https://api.whatsapp.com/send?phone=541130732191&text=&source=&data=&app_absent=",
  },
];
