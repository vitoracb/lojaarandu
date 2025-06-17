import React from 'react';

function Hero({ onNavigate }: { onNavigate: (page: 'home' | 'about' | 'products' | 'exchange-policy' | 'privacy-policy' | 'terms-of-use' | 'contact') => void }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&fit=crop"
          alt="Ambiente decorado com elegância"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-serif font-medium mb-8 leading-tight">
          Transforme seu espaço com
          <span className="block text-sand-200">sabedoria e beleza</span>
        </h1>
        
        <p className="text-xl md:text-2xl font-light mb-12 leading-relaxed opacity-90">
          Descubra produtos únicos que trazem harmonia e personalidade para sua casa
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            className="bg-olive-600 hover:bg-olive-700 text-white px-8 py-4 text-lg font-medium transition-all duration-300 hover:scale-105"
            onClick={() => onNavigate('products')}
          >
            Explorar Produtos
          </button>
          <button
            className="border-2 border-white text-white hover:bg-white hover:text-olive-700 px-8 py-4 text-lg font-medium transition-all duration-300"
            onClick={() => onNavigate('about')}
          >
            Conheça Nossa História
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}

export default Hero;