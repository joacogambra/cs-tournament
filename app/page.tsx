"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Menu, X } from 'lucide-react'

export default function TournamentLanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setMobileMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Sticky Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-0 backdrop-blur-sm">
      {/* <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900 backdrop-blur-sm border-b border-gray-0"> Este texto es para borde y bg color */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Image
                src="/images/9z-logo.png"
                alt="Movistar Logo"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors"
                >
                  Acerca del torneo
                </button>
                <button
                  onClick={() => scrollToSection("phases")}
                  className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors"
                >
                  Fases del torneo
                </button>
                <button
                  onClick={() => scrollToSection("prizes")}
                  className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors"
                >
                  Premios
                </button>
                <button
                  onClick={() => scrollToSection("faqs")}
                  className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors"
                >
                  FAQs
                </button>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-gray-900 transition-colors bg-transparent"
                >
                  <a href="https://battlefy.com/9z-copa-movistar-fibra/copa-movistar-fibra/692132c7243333002192d747/info?infoTab=details" target="_blank">Participar</a>
                </Button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-gray-400 hover:text-white">
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-gray-900 border-t border-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium w-full text-left"
              >
                Acerca del torneo
              </button>
              <button
                onClick={() => scrollToSection("phases")}
                className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium w-full text-left"
              >
                Fases del torneo
              </button>
              <button
                onClick={() => scrollToSection("prizes")}
                className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium w-full text-left"
              >
                Premios
              </button>
              <button
                onClick={() => scrollToSection("faqs")}
                className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium w-full text-left"
              >
                FAQs
              </button>
              <div className="px-3 py-2">
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-gray-900 transition-colors w-full bg-transparent"
                >
                  Participar
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/fondo-NT1.jpg"
            alt="Esports Tournament Gaming Setup"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          {/* <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">Copa Movistar Fibra</h1> */}
          <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
            Un nuevo torneo de 9z Globant arriba a Chile ! y te está esperando. Anotate ahora a esta primera edición ¡A jugar!
          </p>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-gray-900 transition-colors text-lg px-8 py-4 bg-transparent"
          >
            <a href="https://battlefy.com/9z-copa-movistar-fibra/copa-movistar-fibra/692132c7243333002192d747/info?infoTab=details" target="_blank">Quiero jugar</a>
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative h-screen flex items-center justify-center bg-gray-800 overflow-hidden">
        {/* Background Image - Left Side */}
        <div className="absolute left-0 top-0 w-1/2 h-full">
          <Image src="/images/DSC09078.jpg" alt="CS2 Tournament Player" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-800/50 to-gray-800" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Acerca del torneo</h2>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
            El torneo reúne a jugadores de Chile en EAFC26, con clasificatorias abiertas y una final inolvidable. Organizado por 9z Globant.
          </p>
        </div>
      </section>

      {/* Tournament Phases Section */}
      <section id="phases" className="relative h-screen flex items-center justify-center bg-gray-900 overflow-hidden">
        {/* Background Image - Right Side */}
        <div className="absolute right-0 top-0 w-1/2 h-full">
          <Image src="/images/DSC09011.jpg" alt="CS2 Tournament Competition" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-gray-900/50 to-gray-900" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Fases del torneo</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800/90 backdrop-blur-sm p-8 rounded-lg text-center border border-gray-700">
              <h3 className="text-2xl font-bold mb-4 text-blue-400">Inscripciones</h3>
              <p className="text-gray-300">
                Inscripciones abiertas desde el 6 de Marzo 19hs. Cierre el 20 de Marzo a las 19hs
              </p>
            </div>
            <div className="bg-gray-800/90 backdrop-blur-sm p-8 rounded-lg text-center border border-gray-700">
              <h3 className="text-2xl font-bold mb-4 text-green-400">Clasificatorias</h3>
              <p className="text-gray-300">
                Los equipos se enfrentaran desde las 14hs el Sabado 21 de Marzo
              </p>
            </div>
            <div className="bg-gray-800/90 backdrop-blur-sm p-8 rounded-lg text-center border border-gray-700">
              <h3 className="text-2xl font-bold mb-4 text-yellow-400">Final Presencial</h3>
              <p className="text-gray-300">
                Las semifinales y LA GRAN FINAL seran el dia 25 de Marzo en la Sky Tower de Santiago, Chile.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Prizes Section */}
      <section id="prizes" className="relative min-h-screen flex items-center justify-center bg-gray-800 overflow-hidden">
        {/* Background Image - Left Side */}
        <div className="absolute left-0 top-0 w-1/2 h-full">
          <Image src="/images/DSC08895.jpg" alt="CS2 Tournament Teams" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-800/50 to-gray-800" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Premios</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-900/90 backdrop-blur-sm p-8 rounded-lg text-center border border-gray-600">
              <div className="mb-6">
                {/* <Image
                  src="/images/neos3.png"
                  alt="Duki Concert Tickets"
                  width={200}
                  height={200}
                  className="mx-auto rounded-lg"
                /> */}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-green-400">Productos 9Z Pro</h3>
              <p className="text-gray-300">
                Perifericos
              </p>
            </div>
            <div className="bg-gray-900/90 backdrop-blur-sm p-8 rounded-lg text-center border border-gray-600">
              <div className="mb-6">
                {/* <Image
                  src="/images/moto9z.png"
                  alt="Gaming Monitor"
                  width={200}
                  height={200}
                  className="mx-auto rounded-lg"
                /> */}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-blue-400">Merch 9z</h3>
              <p className="text-gray-300">
                Merch sorpresa de 9z
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section id="faqs" className="relative h-screen flex items-center justify-center bg-gray-900 overflow-hidden">
        {/* Background Image - Right Side */}
        <div className="absolute right-0 top-0 w-1/2 h-full">
          <Image src="/images/DSC08876.jpg" alt="CS2 Professional Gaming" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-gray-900/50 to-gray-900" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 w-full">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">FAQs</h2>
          <Accordion type="single" collapsible className="w-full" defaultValue="item-1">
            <AccordionItem
              value="item-1"
              className="border-gray-700 bg-gray-800/90 backdrop-blur-sm rounded-lg mb-4 px-6"
            >
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-blue-400">
                ¿Quiénes pueden participar?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300 text-base">
                Pueden participar todos los jugadores mayores de 18 años residentes en Chile.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-2"
              className="border-gray-700 bg-gray-800/90 backdrop-blur-sm rounded-lg mb-4 px-6"
            >
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-blue-400">
                ¿Es online o presencial?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300 text-base">
                Las fases clasificatorias son completamente online. Semifinales y la final se jugaran presencialmente en Santiago, Chile.
              </AccordionContent>
            </AccordionItem>
            {/* <AccordionItem
              value="item-3"
              className="border-gray-700 bg-gray-800/90 backdrop-blur-sm rounded-lg mb-4 px-6"
            >
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-blue-400">
                ¿Cómo me inscribo?¿Cuanto tiempo hay para inscribirse?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300 text-base">
                La inscripción se realiza a través de FACEIT. Necesitás formar un equipo de 5
                jugadores y completar el formulario de registro con los datos de todos los integrantes.
                Las inscripciones comienzan el 4 de Agosto 10AM hasta el 18 de Agosto.
              </AccordionContent>
            </AccordionItem> */}
            <AccordionItem
              value="item-4"
              className="border-gray-700 bg-gray-800/90 backdrop-blur-sm rounded-lg mb-4 px-6"
            >
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-blue-400">
                ¿Qué necesito para jugar?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300 text-base">
                El torneo es para NextGen. Solamente inscribirte en Battlefy y conectarte el dia 21 de Marzo.
              </AccordionContent>
            </AccordionItem>
            {/* <AccordionItem
              value="item-5"
              className="border-gray-700 bg-gray-800/90 backdrop-blur-sm rounded-lg mb-4 px-6"
            >
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-blue-400">
                ¿Qué modo de juego es?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300 text-base">
                El modo 
              </AccordionContent>
            </AccordionItem> */}
            {/* <AccordionItem
              value="item-6"
              className="border-gray-700 bg-gray-800/90 backdrop-blur-sm rounded-lg mb-4 px-6"
            >
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-blue-400">
                ¿Me puedo anotar solo?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300 text-base">
                Podes buscar compañeros o un team incompleto desde FACEIT o en el chat <a href="https://discord.gg/UbtP3taKbh">de Discord de 9z</a>.
              </AccordionContent>
            </AccordionItem> */}
          </Accordion>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            {/* <h3 className="text-2xl font-bold mb-6">Sponsors Oficiales</h3> */}
          </div>
          {/* <div className="grid grid-cols-2 md:grid-cols-3 gap-8 items-center justify-items-center">
            <a href="https://www.movistar.com.ar/" target="_blank" rel="noopener noreferrer">
            <Image
              src="/images/movistar-footer-logo.png"
              alt="Movistar Logo"
              width={900}
              height={120}
              className="h-20 w-auto opacity-80 hover:opacity-100 transition-opacity"
            />
            </a>
            <a href="https://heromotos.com.ar/urbanas/hunk-160r/" target="_blank" rel="noopener noreferrer">
            <Image
              src="/images/globant-logo.png"
              alt="Globant Logo"
              width={200}
              height={80}
              className="h-16 w-auto opacity-80 hover:opacity-100 transition-opacity"
            />
            </a>
            <a href="https://www.nubia.com/ar/products/smartphones/nubia/nubia-neo-3-5g.html" target="_blank" rel="noopener noreferrer">
            <Image
              src="/images/nubia.png"
              alt="9z Team Logo"
              width={120}
              height={80}
              className="h-12 w-auto opacity-80 hover:opacity-100 transition-opacity col-span-2 md:col-span-1"
            />
            </a>
          </div> */}
          <div className="text-center mt-8 pt-8 border-t border-gray-800">
            <p className="text-gray-400">© 2026 9z Globant. Todos los derechos reservados.</p>
            <a href="#">Terminos y condiciones</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
