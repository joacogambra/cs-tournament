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
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Image
                src="/images/navbar-logo.png"
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
                  <a href="https://www.faceit.com/es/championship/cb96be22-8671-43f8-96bc-02a18187c8e8/Copa%2520Movistar%2520Fibra" target="_blank">Participar</a>
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
            src="/images/haro-gb.png"
            alt="Esports Tournament Gaming Setup"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">Copa Movistar Fibra</h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
            ¡Competí en el Torneo de 9z Globant y Movistar de CS2 y competí por cinco Nubia Neo 3 y una moto de Hero!
          </p>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-gray-900 transition-colors text-lg px-8 py-4 bg-transparent"
          >
            <a href="https://www.faceit.com/es/championship/cb96be22-8671-43f8-96bc-02a18187c8e8/Copa%2520Movistar%2520Fibra" target="_blank">Quiero jugar</a>
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative h-screen flex items-center justify-center bg-gray-800 overflow-hidden">
        {/* Background Image - Left Side */}
        <div className="absolute left-0 top-0 w-1/2 h-full">
          <Image src="/images/about-bg.jpg" alt="CS2 Tournament Player" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-800/50 to-gray-800" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Acerca del torneo</h2>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
            El torneo reúne a jugadores de todo el país para competir en CS2, con clasificatorias abiertas y una final
            presencial inolvidable. Organizado por 9z Team, Globant y Movistar Fibra.
          </p>
        </div>
      </section>

      {/* Tournament Phases Section */}
      <section id="phases" className="relative h-screen flex items-center justify-center bg-gray-900 overflow-hidden">
        {/* Background Image - Right Side */}
        <div className="absolute right-0 top-0 w-1/2 h-full">
          <Image src="/images/phases-bg.jpg" alt="CS2 Tournament Competition" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-gray-900/50 to-gray-900" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Fases del torneo</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800/90 backdrop-blur-sm p-8 rounded-lg text-center border border-gray-700">
              <h3 className="text-2xl font-bold mb-4 text-blue-400">Open Qualy</h3>
              <p className="text-gray-300">
                Clasificatorias abiertas para todos los jugadores los días 23 y 24 de Agosto
              </p>
            </div>
            <div className="bg-gray-800/90 backdrop-blur-sm p-8 rounded-lg text-center border border-gray-700">
              <h3 className="text-2xl font-bold mb-4 text-green-400">Closed Qualy</h3>
              <p className="text-gray-300">
                Los mejores equipos de la fase anterior compiten por un lugar en la gran final presencial los días 30 y 31 de Agosto
              </p>
            </div>
            <div className="bg-gray-800/90 backdrop-blur-sm p-8 rounded-lg text-center border border-gray-700">
              <h3 className="text-2xl font-bold mb-4 text-yellow-400">Final Presencial</h3>
              <p className="text-gray-300">
                La gran final el día 4 de Septiembre donde los mejores equipos se enfrentan cara a cara por los premios principales.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Prizes Section */}
      <section id="prizes" className="relative min-h-screen flex items-center justify-center bg-gray-800 overflow-hidden">
        {/* Background Image - Left Side */}
        <div className="absolute left-0 top-0 w-1/2 h-full">
          <Image src="/images/prizes-bg.jpg" alt="CS2 Tournament Teams" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-800/50 to-gray-800" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Premios</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-900/90 backdrop-blur-sm p-8 rounded-lg text-center border border-gray-600">
              <div className="mb-6">
                <Image
                  src="/images/neo3.png"
                  alt="Duki Concert Tickets"
                  width={200}
                  height={200}
                  className="mx-auto rounded-lg"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-green-400">Nubia Neo 3</h3>
              <p className="text-gray-300">
                5 celulares Nubia Neo 3
              </p>
            </div>
            <div className="bg-gray-900/90 backdrop-blur-sm p-8 rounded-lg text-center border border-gray-600">
              <div className="mb-6">
                <Image
                  src="/images/hunk.png"
                  alt="Gaming Monitor"
                  width={200}
                  height={200}
                  className="mx-auto rounded-lg"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-yellow-400">Moto Hero</h3>
              <p className="text-gray-300">
                Una HUNK 160R STEALTH 45
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section id="faqs" className="relative h-screen flex items-center justify-center bg-gray-900 overflow-hidden">
        {/* Background Image - Right Side */}
        <div className="absolute right-0 top-0 w-1/2 h-full">
          <Image src="/images/faqs-bg.jpg" alt="CS2 Professional Gaming" fill className="object-cover" />
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
                Pueden participar todos los jugadores NO profesionales mayores de 18 años residentes en Argentina. Se requiere tener una
                cuenta de Faceit y CS2 instalado.
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
                Las fases clasificatorias (Open y Closed Qualy) son completamente online. Solo la gran final se juega de
                manera presencial en Buenos Aires.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-3"
              className="border-gray-700 bg-gray-800/90 backdrop-blur-sm rounded-lg mb-4 px-6"
            >
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-blue-400">
                ¿Cómo me inscribo?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300 text-base">
                La inscripción se realiza a través de FACEIT. Necesitás formar un equipo de 5
                jugadores y completar el formulario de registro con los datos de todos los integrantes.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-4"
              className="border-gray-700 bg-gray-800/90 backdrop-blur-sm rounded-lg mb-4 px-6"
            >
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-blue-400">
                ¿Qué necesito para jugar?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300 text-base">
                Necesitás CS2 y Faceit instalado, una conexión estable a internet, micrófono para comunicarte con tu equipo y
                estar disponible en los horarios de las partidas programadas.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-5"
              className="border-gray-700 bg-gray-800/90 backdrop-blur-sm rounded-lg mb-4 px-6"
            >
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-blue-400">
                ¿Cuántos jugadores por equipo?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300 text-base">
                Cada equipo debe estar compuesto por exactamente 5 jugadores titulares. Se permite tener hasta 3
                suplentes registrados por equipo.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-6"
              className="border-gray-700 bg-gray-800/90 backdrop-blur-sm rounded-lg mb-4 px-6"
            >
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-blue-400">
                ¿Me puedo anotar solo?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300 text-base">
                Podes buscar compañeros o un team incompleto desde FACEIT o en el chat <a href="https://discord.gg/UbtP3taKbh">de Discord de 9z</a>.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-6">Sponsors Oficiales</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 items-center justify-items-center">
            <a href="www.movistar.com.ar" target="_blank" rel="noopener noreferrer">
            <Image
              src="/images/movistar-footer-logo.png"
              alt="Movistar Logo"
              width={900}
              height={120}
              className="h-20 w-auto opacity-80 hover:opacity-100 transition-opacity"
            />
            </a>
            <Image
              src="/images/globant-logo.png"
              alt="Globant Logo"
              width={200}
              height={80}
              className="h-16 w-auto opacity-80 hover:opacity-100 transition-opacity"
            />
            <a href="https://www.nubia.com/ar/products/smartphones/nubia/nubia-neo-3-5g.html" target="_blank" rel="noopener noreferrer">
            <Image
              src="/images/nubia.png"
              alt="9z Team Logo"
              width={120}
              height={80}
              className="h-12 w-auto opacity-80 hover:opacity-100 transition-opacity col-span-2 md:col-span-1"
            />
            </a>
          </div>
          <div className="text-center mt-8 pt-8 border-t border-gray-800">
            <p className="text-gray-400">© 2025 Copa Movistar Fibra. Todos los derechos reservados.</p>
            <a href="https://discord.gg/UbtP3taKbh">Terminos y condiciones</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
