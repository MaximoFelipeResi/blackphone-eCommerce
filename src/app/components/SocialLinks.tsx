import React from "react";

const SocialLinks = () => {

    return (
    <section className="icons-container px-4 sm:px-8 md:px-16 lg:px-32 xl:px-64">
        <h2 className="text-center text-2xl font-bold my-4">Contáctanos</h2>
        <p className="text-slate-300 italic text-center mb-4 sm:px-4 md:px-16 lg:px-32 xl:px-48">
            En <strong className="font-black">Black Phone</strong>, nos enorgullece ofrecer el mejor servicio en el competitivo mercado tecnológico. Con una impresionante selección de celulares de las marcas más reconocidas y al mejor precio, incluyendo Apple, Samsung, Motorola, Xiaomi, entre otras; garantizamos que encontrarás el dispositivo perfecto para satisfacer todas tus necesidades. Además de nuestra amplia variedad de productos de alta calidad, nuestro servicio técnico se destaca por su excelencia y fiabilidad, respaldado por más de <strong className="font-black">20 años de experiencia</strong> en el sector y ejercido por un técnico certificado. Ya sea que necesites una reparación rápida, una actualización de software o simplemente asesoramiento de un experto, nuestro equipo de profesionales altamente capacitados está siempre dispuesto a brindarte el apoyo necesario para que disfrutes de una experiencia tecnológica única.
        </p>
        <p className="text-slate-300 italic text-center mb-4 sm:px-4 md:px-16 lg:px-32 xl:px-48">
            Visita Black Phone y descubre por qué somos la opción más recomendada preferida por los clientes exigentes que buscan lo mejor y <strong className="font-black">nunca se conforman</strong> en tecnología móvil.
            <br/> <br />Encuéntranos en: 
            <strong className="font-black"> Paseo de la Delicia 1181, local 20 "Galeria Gala" - Adrogué.</strong>
        </p>
        <div className="icons flex flex-wrap justify-center mb-12 gap-4">
            <a href="https://www.instagram.com/blackphone.adrogue/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
                <div className="layer">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span className="fab fa-instagram"></span>
                </div>
                <div className="text">Instagram</div>
            </a>

            <a href="https://api.whatsapp.com/send?phone=541130732191&text=&source=&data=&app_absent=" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
                <div className="layer">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span className="fab fa-whatsapp"></span>
                </div>
                <div className="text">WhatsApp</div>
            </a>
        
            {/* 
            <a href="https://api.whatsapp.com/send?phone=5411&text=&source=&data=&app_absent=" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center w-24">
                <div className="layer">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span className="fab fa-whatsapp"></span>
                </div>
                <div className="text">WhatsApp 2</div>
            </a>

            <a href="https://www.instagram.com/blackphone.adrogue/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center w-24">
                <div className="layer">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span className="fab fa-youtube"></span>
                </div>
                <div className="text">YouTube</div>
            </a>
            */}

            {/* 
            <a href="https://www.instagram.com/blackphone.adrogue/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center w-24">
                <div className="layer">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span className="fab fa-facebook-f"></span>
                </div>
                <div className="text">Facebook</div>
            </a>
            */}
        </div>
    </section>
    );
};

export default SocialLinks;
