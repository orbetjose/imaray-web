'use client';

import Image from "next/image";
import Footer from "./components/footer";
import { useState } from "react";
import ContactForm from "./components/ContactForm";

export default function Home() {

  const [activeMenu, setActiveMenu] = useState(false)

  return (
    <main className="overflow-hidden">
      <div className="relative">
        <Image
          src="https://admin.imarayulloa.com/wp-content/uploads/2026/01/slider-principal.png"
          alt="Slider principal Imaray Ulloa"
          width={1920}
          height={720}
          className="w-full h-[70vh] md:h-[85vh] object-cover"
        />
        <div className="">
          <Image
            src="https://admin.imarayulloa.com/wp-content/uploads/2026/01/logo-imaray.png"
            alt="Logo header"
            width={140}
            height={140}
            className="absolute md:top-10 md:left-20 top-5 left-5"
          />
          <Image
            src="https://admin.imarayulloa.com/wp-content/uploads/2026/01/hamburger-menu.png"
            alt="Logo header"
            width={40}
            height={40}
            className={`absolute md:top-10 md:right-20 top-5 right-5 ${activeMenu ? 'opacity-0' : 'opacity-100' } transition-opacity duration-400 cursor-pointer`}
            onClick={() => setActiveMenu(!activeMenu)}
          />
        </div>
        <div className={`bg-white absolute w-full h-[70vh] md:h-[85vh] top-0 right-0 md:w-80 pt-12 pl-12 menu transition-transform duration-400 z-10 ${activeMenu ? 'translate-x-0' : 'translate-x-400'}`} >
          <Image
            src="https://admin.imarayulloa.com/wp-content/uploads/2026/01/logo-imaray-black.png"
            alt="Logo header"
            width={150}
            height={150}
            className=""
          />
          <Image
            src="https://admin.imarayulloa.com/wp-content/uploads/2026/01/cross-ico.png"
            alt="Close icono"
            width={20}
            height={20}
            className="absolute top-5 right-5 cursor-pointer"
            onClick={() => setActiveMenu(false)}
          />
          <div className="pt-12">
            <ul className="text-black font-sans font-bold uppercase text-lg space-y-6">
              <li>Podcast</li>
              <li>Especial</li>
              <li>Película</li>
              <li>Imaray</li>
              <li className="text-purple">Comprar tickets &#8599;</li>
            </ul>
          </div>
        </div>
        <div className="absolute bottom-5 left-20">
          <div className="flex gap-4">
            <Image
              src="https://admin.imarayulloa.com/wp-content/uploads/2026/01/ig-ico-transparent.png"
              alt="Instagram transparente"
              width={40}
              height={40}
              className=""
            />
            <Image
              src="https://admin.imarayulloa.com/wp-content/uploads/2026/01/fb-ico-transparent.png"
              alt="Instagram transparente"
              width={40}
              height={40}
              className=""
            />
            <Image
              src="https://admin.imarayulloa.com/wp-content/uploads/2026/01/yt-ico-transparent.png"
              alt="Instagram transparente"
              width={40}
              height={40}
              className=""
            />
            <Image
              src="https://admin.imarayulloa.com/wp-content/uploads/2026/01/tiktok-ico-transparent.png"
              alt="Instagram transparente"
              width={40}
              height={40}
              className=""
            />
          </div>
          <h1 className="uppercase text-white font-black font-sans text-center text-4xl md:text-8xl pt-4 md:pt-0 md:text-left">Imaray</h1>
        </div>
      </div>
      <div className=" bg-black py-16">
        <div className="max-w-5xl mx-auto flex flex-col gap-8 md:gap-0 md:flex-row justify-center items-center relative md:px-0 px-8">
          <div className="text-white space-y-4 md:max-w-2/5 font-sans">
            <h3 className="font-bold uppercase text-2xl">Soy Imaray Ulloa,</h3>
            <p className="text-justify">
              <span className="font-bold">una mujer auténtica, intensa, divertida y sin filtros</span>. Me encanta
              reírme de la vida, decir lo que pienso y transformar lo cotidiano en algo especial. Lo mío es el drama con
              humor, el corazón en todo lo que hago y una energía que no pasa desapercibida.
            </p>
            <p className="text-justify">
              A través de mis redes comparto momentos reales, locuras, emociones y todo lo que me hace vibrar. Si algo
              tengo claro, es que ser uno mismo siempre será el mejor papel que podemos interpretar.
            </p>
          </div>
          <div>
            <Image
              src="https://admin.imarayulloa.com/wp-content/uploads/2026/01/Sold-out.png"
              alt="Imaray Ulloa"
              width={400}
              height={300}
              className="mx-auto rounded-lg md:max-h-80 object-contain"
            />
          </div>
          <Image
            src="https://admin.imarayulloa.com/wp-content/uploads/2026/01/heart-right.png"
            alt="Icono corazon derecha"
            width={150}
            height={150}
            className="absolute md:-left-10 md:top-2/3 -left-15 -bottom-20 md:bottom-auto"
          />
          <Image
            src="https://admin.imarayulloa.com/wp-content/uploads/2026/01/heart-left.png"
            alt="Icono corazon izquierda"
            width={150}
            height={150}
            className="absolute md:right-0 md:top-5 -top-25 -right-10"
          />
        </div>
      </div>
      <div
        className="bg-cover bg-top-right mt-10 md:h-[70vh] 2xl:h-[55vh] relative font-sans"
        style={{ backgroundImage: "url('https://admin.imarayulloa.com/wp-content/uploads/2026/01/fondo-yt.png')" }}>
        <div className="max-w-5xl mx-auto relative md:h-[70vh] 2xl:h-[55vh] pt-18">
          <h3 className="text-center font-bold text-2xl md:text-3xl pt-4">CANALES PRINCIPALES DE YOUTUBE</h3>
          <div className="flex flex-col md:flex-row items-center justify-center gap-14 md:gap-18 md:h-[45vh] 2xl:h-[40vh] py-10 md:py-0">
            <div className="flex flex-col items-center ">
              <Image
                src="https://admin.imarayulloa.com/wp-content/uploads/2026/01/yt.png"
                alt="Youtube Icono"
                width={100}
                height={100}
                className="h-18 object-contain "
              />
              <div className="flex flex-col gap-2 items-center">
                <span className="font-bold text-2xl">Imaray Ulloa</span>
                <span className="bg-white text-black px-4 rounded-xl">Ver canal</span>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="https://admin.imarayulloa.com/wp-content/uploads/2026/01/yt.png"
                alt="Youtube Icono"
                width={100}
                height={100}
                className="h-18 object-contain"
              />
              <div className="flex flex-col gap-1 items-center">
                <span className="font-bold text-2xl">Imaray Ulloa</span>
                <span className="text-2xl">Podcast</span>
                <span className="bg-white text-black px-4 rounded-xl">Ver canal</span>
              </div>
            </div>
          </div>
          <Image
            src="https://admin.imarayulloa.com/wp-content/uploads/2026/01/yt-channel.png"
            alt="Youtube Channel Imaray"
            width={250}
            height={250}
            className="absolute left-5 bottom-0 hidden md:block"
          />
          <Image
            src="https://admin.imarayulloa.com/wp-content/uploads/2026/01/yt-podcast.png"
            alt="Youtube Podcast Imaray"
            width={250}
            height={250}
            className="absolute right-5 bottom-0 hidden md:block"
          />
        </div>
      </div>
      <div className="bg-white font-sans overflow-hidden">
        <div className="md:max-w-5xl mx-auto relative ">
          <div className="md:max-w-2/5 text-black flex flex-col justify-center md:h-[80vh] 2xl:h-[70vh] relative z-10 px-8 md:px-0 py-10 md:py-0">
            <h3 className="font-bold text-2xl md:text-3xl text-purple pb-4">
              ¡Prepárate para reír, llorar y gritar "¡tóxica!" en vivo!
            </h3>
            <p className="pb-4">
              No te pierdas mi show, donde la locura, el drama y el humor se juntan en un espectáculo único (y muy
              Imaray).
            </p>
            <p>Compra ya tus tiquetes y ven a vivir una noche que no vas a olvidar.</p>
            <p className="font-bold pb-4">¡Nos vemos en el escenario!</p>
            <p className="font-bold pb-4">Prepárate para reír - Tour 2026</p>
            <a
              href=""
              className="text-white bg-purple px-4 rounded-xl text-lg py-1">
              Únete a nuestra lista de espera tour 2026
            </a>
          </div>
          <Image
            src="https://admin.imarayulloa.com/wp-content/uploads/2026/01/evento-miami-scaled.png"
            alt="Youtube Podcast Imaray"
            width={450}
            height={450}
            className="absolute -right-35 top-0 md:w-200 md:h-120 2xl:w-200 2xl:h-180 object-cover hidden md:block"
          />
        </div>
      </div>
      <div className="md:h-[90vh] 2xl:h-[60vh] bg-center bg-cover relative overflow-hidden" style={{ backgroundImage: "url('https://admin.imarayulloa.com/wp-content/uploads/2026/01/fondo-contacto-imaray.png')" }}>
          <Image
            src="https://admin.imarayulloa.com/wp-content/uploads/2026/01/imaray-contacto.png"
            alt="Contacto Imaray Ulloa"
            width={450}
            height={450}
            className="absolute right-20 bottom-0 md:h-100 object-contain 2xl:right-70 2xl:h-130 2xl:-bottom-5 hidden md:block"
          />
          <div className="md:max-w-5xl mx-auto flex flex-col h-full justify-center px-8 md:px-0">
              <h4 className="font-sans font-black uppercase text-white text-4xl text-center md:text-left md:text-6xl py-6 md:py-0">Contacto</h4>
              <ContactForm />
          </div>
      </div>
      <Footer />
    </main>
  );
}
