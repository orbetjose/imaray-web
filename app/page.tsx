"use client";

import Image from "next/image";
import Footer from "./components/footer";
import { useState } from "react";
import ContactForm from "./components/ContactForm";

export default function Home() {
  const [activeMenu, setActiveMenu] = useState(false);
  const [activeVideo, setActiveVideo] = useState(false);

  const domain = process.env.WP_PUBLIC_DOMAIN;


  return (
    <main className="overflow-hidden">
      <div className="relative">
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
            className={`absolute md:top-10 md:right-20 top-5 right-5 ${activeMenu ? "opacity-0" : "opacity-100"} transition-opacity duration-400 cursor-pointer`}
            onClick={() => setActiveMenu(!activeMenu)}
          />
        </div>
        <div
          className={`bg-white absolute w-full h-[70vh] md:h-[85vh] top-0 right-0 md:w-70 pt-12 pl-12 menu transition-transform duration-400 z-10 ${activeMenu ? "translate-x-0" : "translate-x-400"}`}>
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
        <Image
          src="https://admin.imarayulloa.com/wp-content/uploads/2026/01/fondo-principal.webp"
          alt="Slider principal Imaray Ulloa"
          width={1920}
          height={720}
          className="w-full h-[70vh] md:h-[85vh]  object-cover object-center"
        />
        <Image
          src="https://admin.imarayulloa.com/wp-content/uploads/2026/01/imaray-banner-2.png"
          width={350}
          height={350}
          alt="Imaray Ulloa Foto 1"
          className="absolute right-50 bottom-0 z-1 2xl:h-120 2xl:w-auto 2xl:right-85 hidden md:block"
        />
        <Image
          src="https://admin.imarayulloa.com/wp-content/uploads/2026/01/imaray-banner-1.png"
          width={250}
          height={250}
          alt="Imaray Ulloa Foto 2"
          className="absolute right-0 bottom-0 2xl:h-90 2xl:w-auto hidden md:block"
        />
        <Image
          src="https://admin.imarayulloa.com/wp-content/uploads/2026/01/corazon-banner-1.png"
          width={50}
          height={50}
          alt="Imaray Ulloa Foto 2"
          className="absolute right-10 md:right-20 top-35 2xl:right-55"
        />
        <Image
          src="https://admin.imarayulloa.com/wp-content/uploads/2026/01/corazon-banner-2.png"
          width={50}
          height={50}
          alt="Imaray Ulloa Foto 2"
          className="absolute left-10 top-30 md:left-150 md:top-30 2xl:left-220"
        />
        <div className="absolute bottom-18 left-20 md:bottom-25 md:left-50 2xl:bottom-55 3xl:left-85">
          <div className="flex justify-center gap-4 pb-4">
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
          <div
            className="bg-contain bg-center py-4 bg-no-repeat mb-4"
            style={{ backgroundImage: "url('https://admin.imarayulloa.com/wp-content/uploads/2026/01/bg-text.png')" }}>
            <span className="font-sans text-xl  md:text-3xl 2xl:text-4xl block text-center">Vive la vida con</span>
          </div>
          <Image
            src="https://admin.imarayulloa.com/wp-content/uploads/2026/01/logo-imaray.png"
            alt="Logo Imaray Slider"
            width={300}
            height={300}
            className="h-15 md:h-20 2xl:h-30 w-auto"
          />
          <h1 className="hidden">Imaray</h1>
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
              className="mx-auto rounded-lg md:max-h-90 object-contain 2xl:max-h-100"
            />
          </div>
          <Image
            src="https://admin.imarayulloa.com/wp-content/uploads/2026/01/heart-right.png"
            alt="Icono corazon derecha"
            width={150}
            height={150}
            className="absolute md:-left-10 md:top-2/3 -left-15 -bottom-20 md:bottom-auto 2xl:-left-25"
          />
          <Image
            src="https://admin.imarayulloa.com/wp-content/uploads/2026/01/heart-left.png"
            alt="Icono corazon izquierda"
            width={150}
            height={150}
            className="absolute md:right-0 md:top-5 -top-25 -right-10 2xl:-right-20"
          />
        </div>
      </div>
      <div
        className="bg-cover bg-top-right mt-10 relative font-sans"
        style={{ backgroundImage: "url('https://admin.imarayulloa.com/wp-content/uploads/2026/01/fondo-yt.png')" }}>
        <div className="md:max-w-5xl 2xl:max-w-6xl mx-auto relative pt-18">
          <h3 className="text-center font-bold text-2xl md:text-3xl pt-4  2xl:pt-24 2xl:-mb-6 ">
            CANALES PRINCIPALES DE YOUTUBE
          </h3>
          <div className="flex flex-col md:flex-row items-center justify-center gap-14 md:gap-18 md:h-[45vh] 2xl:h-[40vh] py-10 md:py-0">
            <div className="flex flex-col items-center ">
              <Image
                src="https://admin.imarayulloa.com/wp-content/uploads/2026/01/yt.png"
                alt="Youtube Icono"
                width={100}
                height={100}
                className="h-18 object-contain"
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
            className="absolute left-5 bottom-0 hidden md:block 2xl:h-100 2xl:w-auto 2xl:left-0"
          />
          <Image
            src="https://admin.imarayulloa.com/wp-content/uploads/2026/01/yt-podcast.png"
            alt="Youtube Podcast Imaray"
            width={250}
            height={250}
            className="absolute right-5 bottom-0 hidden md:block 2xl:h-100 2xl:w-auto 2xl:right-0"
          />
        </div>
      </div>
      <div className="bg-white font-sans overflow-hidden relative">
        <div className="md:max-w-5xl mx-auto  ">
          <div className="md:max-w-2/5 text-black flex flex-col justify-center relative z-10 px-8 md:px-0 py-10 md:py-20 2xl:py-35">
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
        </div>
        <Image
          src="https://admin.imarayulloa.com/wp-content/uploads/2026/01/evento-miami-scaled.png"
          alt="Youtube Podcast Imaray"
          width={450}
          height={450}
          className="absolute right-0 bottom-0 md:w-[60%] md:h-[101%]  object-cover object-top hidden md:block"
        />
      </div>
      <div
        style={{
          backgroundImage: "url('https://admin.imarayulloa.com/wp-content/uploads/2026/01/fondo-video.webp')",
        }}
        className="bg-cover bg-center py-20 font-sans">
        <div className="md:max-w-5xl mx-auto flex flex-col items-center gap-6 px-8 md:px-0">
          <span className="text-white bg-purple px-5 rounded-xl py-1 font-black text-3xl w-fit">Show de la tóxica</span>
          <p className="text-lg">Un vistazo al show que combina actitud, emoción y espectáculo en un solo escenario.</p>
          <div className="relative md:max-w-4xl pt-2 rounded-2xl md:rounded-4xl overflow-hidden">
            <Image
              src="https://admin.imarayulloa.com/wp-content/uploads/2026/01/icono-play.png"
              alt="Icono play video"
              width={70}
              height={70}
              className={`h-10 w-10 md:auto md:w-auto absolute right-1/2 top-1/2 translate-x-1/2 -translate-y-1/2 ${activeVideo ? "hidden" : "block"} cursor-pointer`}
            />
            <video
              src="https://admin.imarayulloa.com/wp-content/uploads/2026/01/VIDEO-WEB.mp4"
              controls
              className="cursor-pointer h-80 object-cover"
              onClick={() => setActiveVideo(!activeVideo)}></video>
          </div>
        </div>
      </div>
      <div
        className="bg-center bg-cover relative overflow-hidden md:py-14"
        style={{
          backgroundImage: "url('https://admin.imarayulloa.com/wp-content/uploads/2026/01/fondo-contacto-imaray.png')",
        }}>
        <Image
          src="https://admin.imarayulloa.com/wp-content/uploads/2026/01/imaray-contacto.png"
          alt="Contacto Imaray Ulloa"
          width={450}
          height={450}
          className="absolute right-20 bottom-0 md:h-[90%] object-contain hidden md:block"
        />
        <div className="md:max-w-5xl mx-auto flex flex-col h-full justify-center px-8 md:px-0">
          <h4 className="font-sans font-black uppercase text-white text-4xl text-center md:text-left md:text-6xl py-6 md:py-0">
            Contacto
          </h4>
          <ContactForm />
        </div>
      </div>
      <Footer />
    </main>
  );
}
