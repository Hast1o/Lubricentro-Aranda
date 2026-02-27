import React, { useState } from "react";
import {
  MapPin,
  MessageCircle,
  Instagram,
  Facebook,
  Clock,
  ChevronDown,
  Droplet,
  Wind,
  Wrench,
  Package,
  Star,
  Phone,
  Mail,
  CreditCard,
  Banknote,
  Landmark,
  Menu, // Agregado para el menú móvil
  X     // Agregado para cerrar el menú móvil
} from "lucide-react";
import logo from "./assets/logo.png";
import nosotros from "./assets/Nosotros.jpg";

function App() {
  // Estado para los paneles de servicios
  const [openPanels, setOpenPanels] = useState({
    aceite: false,
    aire: false,
    mecanica: false
  });

  // Estado para el menú móvil
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const togglePanel = (panel) => {
    setOpenPanels((prev) => ({ ...prev, [panel]: !prev[panel] }));
  };

  const numeroWhatsApp = "56942600232";
  const mensajeWhatsApp =
    "Hola! Vengo desde la página web, necesito hacer una consulta.";
  const linkWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(
    mensajeWhatsApp
  )}`;
  
  // URL real para redirigir a Google Maps
  const mapUrl = "https://www.google.com/maps/search/?api=1&query=Santa+Fe+1256,+Curicó,+Chile";

  return (
    <div className="min-h-screen bg-lubri-dark text-white font-sans">
      {/* NAVEGACIÓN */}
      <nav className="sticky top-0 z-50 bg-black/95 backdrop-blur-md border-b border-gray-800 shadow-xl relative">
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo */}
          <div className="w-40 md:w-48 py-1">
            <img
              src={logo}
              alt="Logo Lubricentro Aranda"
              className="w-full h-auto object-contain drop-shadow-[0_0_10px_rgba(234,179,8,0.5)] hover:drop-shadow-[0_0_15px_rgba(234,179,8,0.8)] transition duration-300"
            />
          </div>

          {/* Menú Desktop */}
          <div className="hidden md:flex gap-8 text-sm font-bold uppercase tracking-wide">
            <a href="#quienes-somos" className="hover:text-lubri-gold transition duration-300">Quiénes Somos</a>
            <a href="#servicios" className="hover:text-lubri-gold transition duration-300">Servicios</a>
            <a href="#como-llegar" className="hover:text-lubri-gold transition duration-300">Cómo Llegar</a>
            <a href="#contacto" className="hover:text-lubri-gold transition duration-300">Contacto</a>
          </div>

          <div className="flex items-center gap-4">
            {/* Botón WhatsApp */}
            <a
              href={linkWhatsApp}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-500 text-white px-5 py-2.5 rounded-full flex items-center gap-2 font-bold transition transform hover:scale-105 shadow-lg shadow-green-900/50"
            >
              <MessageCircle size={20} />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>

            {/* Botón Menú Hamburguesa (Solo Móvil) */}
            <button 
              className="md:hidden text-gray-300 hover:text-white focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>

        {/* Menú Desplegable Móvil */}
        <div className={`md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-b border-gray-800 transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? "max-h-80 py-6 opacity-100" : "max-h-0 py-0 opacity-0"}`}>
          <div className="flex flex-col items-center gap-6 text-sm font-bold uppercase tracking-wide">
            <a href="#quienes-somos" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-lubri-gold transition duration-300">Quiénes Somos</a>
            <a href="#servicios" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-lubri-gold transition duration-300">Servicios</a>
            <a href="#como-llegar" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-lubri-gold transition duration-300">Cómo Llegar</a>
            <a href="#contacto" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-lubri-gold transition duration-300">Contacto</a>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <header className="relative py-32 px-4 text-center flex flex-col items-center justify-center min-h-[75vh] bg-gradient-to-b from-gray-900 via-gray-900 to-black overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-lubri-blue/10 rounded-full blur-[100px] pointer-events-none"></div>
        <h2 className="relative text-5xl md:text-7xl lg:text-8xl font-black mb-6 uppercase tracking-tight leading-tight drop-shadow-2xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-lubri-blue">El mejor cuidado</span> <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-lubri-gold drop-shadow-lg">para tu motor</span>
        </h2>
        <p className="relative text-gray-300 text-xl md:text-2xl max-w-3xl mx-auto mb-12 font-medium drop-shadow-md">
          Servicio de mantenimiento automotriz profesional, rápido y de confianza.
          <span className="block mt-2 text-white font-bold">La vida de tu auto está en las mejores manos.</span>
        </p>
        <a href="#servicios" className="relative bg-lubri-gold text-black px-10 py-4 rounded-full font-black text-lg hover:bg-yellow-400 transition transform hover:scale-105 shadow-[0_0_30px_rgba(234,179,8,0.3)]">
          Ver Nuestros Servicios
        </a>
        <div className="absolute bottom-8 animate-bounce text-gray-500">
          <ChevronDown size={36} />
        </div>
      </header>

      {/* QUIÉNES SOMOS */}
      <section id="quienes-somos" className="py-24 px-4 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2">
            <h3 className="text-3xl md:text-4xl font-black text-lubri-blue mb-6 uppercase tracking-wider">Quiénes Somos</h3>
            <div className="w-20 h-1 bg-lubri-gold mb-8"></div>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              En <strong className="text-white">Lubricentro Aranda</strong>, somos especialistas en el mantenimiento preventivo de tu vehículo. Con años de experiencia en el rubro automotriz, nos dedicamos a entregar un servicio honesto, rápido y con insumos de primera calidad.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Entendemos que tu auto es fundamental para tu día a día, por eso trabajamos con las mejores marcas de aceites y filtros del mercado para garantizar el máximo rendimiento y vida útil de tu motor.
            </p>
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
              <div className="flex flex-col gap-4 text-lubri-gold font-bold text-lg">
                <div className="flex items-center gap-3">
                  <Clock size={28} className="text-lubri-blue" />
                  <span>Lunes a Viernes: 09:00 - 19:00 hrs</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-7"></div> 
                  <span>Sábados: 09:00 - 14:00 hrs</span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 bg-gray-800 rounded-2xl aspect-square md:aspect-auto md:h-[500px] flex items-center justify-center border-4 border-gray-800 overflow-hidden shadow-2xl">
            <img src={nosotros} alt="Nosotros" className="w-full h-full object-cover hover:scale-105 transition duration-700" />
          </div>
        </div>
      </section>

      {/* NUESTROS SERVICIOS */}
      <section id="servicios" className="py-24 px-4 bg-gray-900 border-y border-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-black text-lubri-gold mb-4 uppercase tracking-wider">
              Nuestros Servicios
            </h3>
            <div className="w-24 h-1 bg-lubri-blue mx-auto mb-6"></div>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Ofrecemos soluciones integrales para mantener tu vehículo en
              perfectas condiciones y listo para la ruta.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8 items-start">
            
            {/* 1. Cambio de Aceite y Filtros */}
            <div 
              onClick={() => togglePanel('aceite')}
              className="bg-black p-6 rounded-2xl border border-gray-800 cursor-pointer transition-all duration-300 hover:border-blue-500 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] flex flex-col"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-4">
                  <Droplet className="text-lubri-blue" size={36} />
                  <h4 className="text-xl font-bold text-white uppercase tracking-wide">
                    Cambio de Aceite<br/>y Filtros
                  </h4>
                </div>
                <ChevronDown className={`text-gray-400 transition-transform duration-300 ${openPanels.aceite ? 'rotate-180 text-lubri-blue' : ''}`} />
              </div>
              
              <div className={`overflow-hidden transition-all duration-500 ${openPanels.aceite ? 'max-h-[500px] opacity-100 mt-6' : 'max-h-0 opacity-0'}`}>
                <ul className="text-gray-300 space-y-3 pl-2">
                  <li className="flex items-center gap-3"><div className="w-2 h-2 bg-lubri-blue rounded-full"></div> Filtro de aire</li>
                  <li className="flex items-center gap-3"><div className="w-2 h-2 bg-lubri-blue rounded-full"></div> Filtro de aceite</li>
                  <li className="flex items-center gap-3"><div className="w-2 h-2 bg-lubri-blue rounded-full"></div> Filtro de petróleo</li>
                  <li className="flex items-center gap-3"><div className="w-2 h-2 bg-lubri-blue rounded-full"></div> Filtro de cabina (polen)</li>
                  <li className="flex items-center gap-3"><div className="w-2 h-2 bg-lubri-blue rounded-full"></div> Filtro decantador</li>
                </ul>
              </div>
            </div>

            {/* 2. Aire Acondicionado */}
            <div 
              onClick={() => togglePanel('aire')}
              className="bg-black p-6 rounded-2xl border border-gray-800 cursor-pointer transition-all duration-300 hover:border-blue-500 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] flex flex-col"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-4">
                  <Wind className="text-lubri-blue" size={36} />
                  <h4 className="text-xl font-bold text-white uppercase tracking-wide">
                    Aire<br/>Acondicionado
                  </h4>
                </div>
                <ChevronDown className={`text-gray-400 transition-transform duration-300 ${openPanels.aire ? 'rotate-180 text-lubri-blue' : ''}`} />
              </div>
              
              <div className={`overflow-hidden transition-all duration-500 ${openPanels.aire ? 'max-h-[500px] opacity-100 mt-6' : 'max-h-0 opacity-0'}`}>
                <ul className="text-gray-300 space-y-3 pl-2">
                  <li className="flex items-center gap-3"><div className="w-2 h-2 bg-lubri-blue rounded-full"></div> Carga A/C</li>
                  <li className="flex items-center gap-3"><div className="w-2 h-2 bg-lubri-blue rounded-full"></div> Recarga A/C</li>
                  <li className="flex items-center gap-3"><div className="w-2 h-2 bg-lubri-blue rounded-full"></div> Diagnóstico</li>
                </ul>
              </div>
            </div>

            {/* 3. Mecánica */}
            <div 
              onClick={() => togglePanel('mecanica')}
              className="bg-black p-6 rounded-2xl border border-gray-800 cursor-pointer transition-all duration-300 hover:border-blue-500 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] flex flex-col"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-4">
                  <Wrench className="text-lubri-blue" size={36} />
                  <h4 className="text-xl font-bold text-white uppercase tracking-wide">
                    Mecánica<br/>General
                  </h4>
                </div>
                <ChevronDown className={`text-gray-400 transition-transform duration-300 ${openPanels.mecanica ? 'rotate-180 text-lubri-blue' : ''}`} />
              </div>
              
              <div className={`overflow-hidden transition-all duration-500 ${openPanels.mecanica ? 'max-h-[600px] opacity-100 mt-6' : 'max-h-0 opacity-0'}`}>
                <ul className="text-gray-300 space-y-3 pl-2">
                  <li className="flex items-center gap-3"><div className="w-2 h-2 bg-lubri-blue rounded-full"></div> Mantención de frenos</li>
                  <li className="flex items-center gap-3"><div className="w-2 h-2 bg-lubri-blue rounded-full"></div> Cambio de pastillas</li>
                  <li className="flex items-center gap-3"><div className="w-2 h-2 bg-lubri-blue rounded-full"></div> Cambio de discos</li>
                  <li className="flex items-center gap-3"><div className="w-2 h-2 bg-lubri-blue rounded-full"></div> Cambio axial y extremo</li>
                  <li className="flex items-center gap-3"><div className="w-2 h-2 bg-lubri-blue rounded-full"></div> Cambio bujías</li>
                  <li className="flex items-center gap-3"><div className="w-2 h-2 bg-lubri-blue rounded-full"></div> Cambio amortiguadores</li>
                  <li className="flex items-center gap-3"><div className="w-2 h-2 bg-lubri-blue rounded-full"></div> Cambio bieleta</li>
                  <li className="flex items-center gap-3"><div className="w-2 h-2 bg-lubri-blue rounded-full"></div> Cambio kit embrague</li>
                  <li className="flex items-center gap-3"><div className="w-2 h-2 bg-lubri-blue rounded-full"></div> Consulta por otros servicios</li>
                </ul>
              </div>
            </div>
            
          </div>

          {/* Fila Inferior: Punto Mercado Libre */}
          <div className="bg-yellow-400/10 p-8 md:p-10 rounded-2xl border border-yellow-400/30 transition-all duration-300 hover:border-yellow-400 hover:shadow-[0_0_25px_rgba(234,179,8,0.5)] relative overflow-hidden flex flex-col md:flex-row items-start md:items-center gap-8">
            <div className="absolute top-0 right-0 bg-yellow-400 text-black text-xs font-bold px-4 py-1.5 rounded-bl-lg">
              OFICIAL
            </div>
            <Package className="text-yellow-400 shrink-0" size={64} />
            <div>
              <h4 className="text-2xl md:text-3xl font-bold text-white mb-3 uppercase tracking-wide">
                Punto Mercado Libre
              </h4>
              <p className="text-gray-300 text-lg mb-4">
                Envía, retira y devuelve tus paquetes de forma rápida y segura.
              </p>
              
              <div className="flex items-start gap-4 text-yellow-400 font-bold bg-black/40 inline-flex px-5 py-3 rounded-xl border border-yellow-400/20">
                <Clock size={28} className="mt-1 shrink-0" />
                <div className="flex flex-col gap-1">
                  <span className="text-lg">Lunes a Viernes: 09:30 a 18:00 hrs.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CÓMO LLEGAR */}
      <section id="como-llegar" className="py-24 px-4 bg-black">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-black text-lubri-blue mb-6 uppercase tracking-wider">Cómo Llegar</h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
            Estamos ubicados en un punto estratégico para tu comodidad. Haz clic en el botón para abrir la ruta directamente en tu aplicación de mapas.
          </p>

          <div className="bg-gray-900/80 border border-gray-800 rounded-2xl p-6 max-w-md mx-auto mb-10 shadow-lg flex items-center justify-center gap-4 hover:border-lubri-blue transition duration-300 group">
            <div className="bg-blue-500/10 p-4 rounded-full group-hover:bg-blue-500/20 transition">
              <MapPin className="text-lubri-blue" size={28} />
            </div>
            <div className="text-left">
              <h4 className="text-white font-bold text-lg mb-1">Nuestra Dirección</h4>
              <p className="text-gray-400 text-lg">Calle Santa Fe #1256, Curicó</p>
            </div>
          </div>

          <a href={mapUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-lubri-blue text-black px-10 py-4 rounded-full font-black text-lg hover:bg-blue-400 transition transform hover:scale-105 mb-12 shadow-[0_0_20px_rgba(96,165,250,0.3)]">
            <MapPin size={26} /> Abrir en Google Maps
          </a>

          <div className="w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden border-4 border-gray-800 shadow-2xl">
            {/* IFRAME ACTUALIZADO CON LA UBICACIÓN REAL */}
            <iframe 
              src="https://maps.google.com/maps?q=Santa%20Fe%201256,%20Curic%C3%B3,%20Chile&t=&z=16&ie=UTF8&iwloc=&output=embed"
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* RESEÑAS / TESTIMONIOS */}
      <section id="resenas" className="py-24 px-4 bg-gray-900 border-b border-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-black text-lubri-gold mb-4 uppercase tracking-wider">Lo que dicen nuestros clientes</h3>
          <div className="w-24 h-1 bg-lubri-blue mx-auto mb-12"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 text-left">
            <div className="bg-black p-8 rounded-2xl border border-gray-800 shadow-lg hover:border-lubri-blue transition duration-300">
              <div className="flex items-center gap-1 mb-4 text-yellow-400">
                <Star fill="currentColor" size={18} /><Star fill="currentColor" size={18} /><Star fill="currentColor" size={18} /><Star fill="currentColor" size={18} /><Star fill="currentColor" size={18} />
              </div>
              <p className="text-gray-300 mb-6 italic line-clamp-4">"Excelente atención, un trabajo de calidad por donde se mire 1000% recomendados además es atendido por sus propios dueños que más confianza que esa necesitan? no se van a arrepentir"</p>
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-10 h-10 bg-lubri-blue text-black font-bold flex items-center justify-center rounded-full">NC</div>
                <div>
                  <h5 className="text-white font-bold">Nicolás Cabrera</h5>
                  <span className="text-gray-500 text-xs">Via Google Maps</span>
                </div>
              </div>
            </div>

            <div className="bg-black p-8 rounded-2xl border border-gray-800 shadow-lg hover:border-lubri-gold transition duration-300">
              <div className="flex items-center gap-1 mb-4 text-yellow-400">
                <Star fill="currentColor" size={18} /><Star fill="currentColor" size={18} /><Star fill="currentColor" size={18} /><Star fill="currentColor" size={18} /><Star fill="currentColor" size={18} />
              </div>
              <p className="text-gray-300 mb-6 italic line-clamp-4">"Si buscan una empresa que les solucione algún problema es su vehículo esta es sin duda la mejor opción. Lubricentro Aranda es la que me ha devuelto la confianza definitivamente. Ya no sabía dónde acudir hasta que por fin encontré los mejores profesionales. Trato cercano, atencion personalizada y buena calidad. ¿Que más se puede pedir? Muy profesionales, son el claro ejemplo de que todo es posible si se quiere. ¡Gracias chicos!"</p>
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-10 h-10 bg-lubri-gold text-black font-bold flex items-center justify-center rounded-full">JC</div>
                <div>
                  <h5 className="text-white font-bold">Jorge Coffin Núñez</h5>
                  <span className="text-gray-500 text-xs">Vía Google Maps</span>
                </div>
              </div>
            </div>

            <div className="bg-black p-8 rounded-2xl border border-gray-800 shadow-lg hover:border-lubri-blue transition duration-300">
              <div className="flex items-center gap-1 mb-4 text-yellow-400">
                <Star fill="currentColor" size={18} /><Star fill="currentColor" size={18} /><Star fill="currentColor" size={18} /><Star fill="currentColor" size={18} /><Star fill="currentColor" size={18} />
              </div>
              <p className="text-gray-300 mb-6 italic line-clamp-4">"Excelentes profesionales... Me mantienen el auto en impecables condiciones, desde que me hacen la mantención no he tenido problemas."</p>
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-10 h-10 bg-gray-700 text-white font-bold flex items-center justify-center rounded-full">AG</div>
                <div>
                  <h5 className="text-white font-bold">Arcangela Giovanetti Figueroa</h5>
                  <span className="text-gray-500 text-xs">Vía Google Maps</span>
                </div>
              </div>
            </div>
          </div>

          <a href={mapUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border-2 border-gray-600 text-gray-300 px-8 py-3 rounded-full font-bold hover:border-white hover:text-white transition duration-300">
            Ver todas las reseñas en Google
          </a>
        </div>
      </section>

      {/* CONTACTO Y REDES */}
      <section id="contacto" className="py-24 px-4 max-w-6xl mx-auto text-center">
        <h3 className="text-3xl md:text-4xl font-black text-white mb-6 uppercase tracking-wider">Contáctanos</h3>
        <p className="text-gray-400 mb-12 text-lg max-w-2xl mx-auto">
          ¿Tienes dudas sobre qué aceite usa tu auto o quieres agendar una visita? Escríbenos o llámanos directamente.
        </p>

        {/* Cajas de contacto */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {/* Tarjeta 1: Teléfono */}
          <div className="bg-gray-900/50 p-8 rounded-2xl border border-gray-800 hover:border-lubri-blue transition duration-300 flex flex-col items-center gap-4 group shadow-lg">
            <div className="bg-blue-500/10 p-4 rounded-full group-hover:bg-blue-500/20 transition">
              <Phone className="text-lubri-blue" size={32} />
            </div>
            <div>
              <h4 className="text-white font-bold text-xl mb-1">Llámanos</h4>
              <p className="text-gray-400 text-lg">+56 9 4260 0232</p>
            </div>
          </div>

          {/* Tarjeta 2: Correo */}
          <div className="bg-gray-900/50 p-8 rounded-2xl border border-gray-800 hover:border-lubri-gold transition duration-300 flex flex-col items-center gap-4 group shadow-lg">
            <div className="bg-yellow-500/10 p-4 rounded-full group-hover:bg-yellow-500/20 transition">
              <Mail className="text-lubri-gold" size={32} />
            </div>
            <div>
              <h4 className="text-white font-bold text-xl mb-1">Escríbenos</h4>
              <p className="text-gray-400 text-lg">lubricentro.aranda@gmail.com</p>
            </div>
          </div>

          {/* Tarjeta 3: Medios de Pago */}
          <div className="bg-gray-900/50 p-8 rounded-2xl border border-gray-800 hover:border-green-400 transition duration-300 flex flex-col items-center gap-4 group shadow-lg">
            <div className="bg-green-500/10 p-4 rounded-full group-hover:bg-green-500/20 transition">
              <CreditCard className="text-green-400" size={32} />
            </div>
            <div>
              <h4 className="text-white font-bold text-xl mb-3">Medios de Pago</h4>
              <div className="flex flex-col gap-2 text-gray-400 text-base">
                <div className="flex items-center justify-center gap-2"><Banknote size={18} className="text-green-500"/> Efectivo</div>
                <div className="flex items-center justify-center gap-2"><CreditCard size={18} className="text-blue-400"/> Tarjetas</div>
                <div className="flex items-center justify-center gap-2"><Landmark size={18} className="text-yellow-400"/> Transferencia</div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-20">
          <a href={linkWhatsApp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-green-600 text-white px-10 py-5 rounded-2xl font-black text-xl hover:bg-green-500 transition transform hover:scale-105 w-full sm:w-auto justify-center shadow-[0_0_30px_rgba(22,163,74,0.3)]">
            <MessageCircle size={32} /> Hablar por WhatsApp
          </a>
        </div>

        <div className="border-t border-gray-800 pt-16">
          <h4 className="text-2xl font-black text-lubri-gold mb-8 uppercase tracking-widest">Síguenos</h4>
          <div className="flex justify-center gap-6">
            <a href="https://www.instagram.com/lubricentroaranda/" target="_blank" rel="noopener noreferrer" className="bg-gray-900 p-5 rounded-full text-gray-400 hover:text-white hover:bg-pink-600 transition duration-300 transform hover:-translate-y-2 shadow-lg">
              <Instagram size={36} />
            </a>
            <a href="https://www.facebook.com/lubricentro.aranda.2025/" target="_blank" rel="noopener noreferrer" className="bg-gray-900 p-5 rounded-full text-gray-400 hover:text-white hover:bg-blue-600 transition duration-300 transform hover:-translate-y-2 shadow-lg">
              <Facebook size={36} />
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black py-10 border-t border-gray-900 text-center text-gray-500 text-sm">
        <div className="max-w-6xl mx-auto px-4 flex flex-col items-center gap-2">
          <p>© {new Date().getFullYear()} Lubricentro Aranda. Todos los derechos reservados.</p>
          <p className="text-gray-600">Curicó, Chile</p>
        </div>
      </footer>
    </div>
  );
}

export default App;