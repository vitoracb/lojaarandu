import React from 'react';
import { Leaf, Heart, Home } from 'lucide-react';

function About() {
  return (
    <section className="py-24 bg-gradient-to-b from-sand-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="bg-olive-100 p-4 rounded-full">
              <Leaf className="w-12 h-12 text-olive-600" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif text-olive-700 mb-6">
            Sobre a Arandu
          </h1>
          <div className="w-24 h-0.5 bg-olive-400 mx-auto"></div>
        </div>

        {/* Main Content */}
        <div className="prose prose-lg max-w-none text-center mb-16">
          <p className="text-xl text-gray-700 font-light leading-relaxed mb-8">
            A Arandu nasceu da paixão por espaços que contam histórias. Arandu significa sabedoria — e acreditamos que cada detalhe na decoração pode transmitir calma, estilo e personalidade. Nossos produtos são cuidadosamente selecionados para inspirar beleza e harmonia nos ambientes que você ama.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center group">
            <div className="bg-olive-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-olive-200 transition-colors">
              <Heart className="w-8 h-8 text-olive-600" />
            </div>
            <h3 className="text-xl font-serif text-olive-700 mb-3">Paixão</h3>
            <p className="text-gray-600 font-light">
              Cada produto é escolhido com amor e cuidado, pensando na sua história e no seu lar.
            </p>
          </div>

          <div className="text-center group">
            <div className="bg-olive-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-olive-200 transition-colors">
              <Leaf className="w-8 h-8 text-olive-600" />
            </div>
            <h3 className="text-xl font-serif text-olive-700 mb-3">Sabedoria</h3>
            <p className="text-gray-600 font-light">
              Inspirados pela palavra indígena Arandu, buscamos trazer equilíbrio e harmonia.
            </p>
          </div>

          <div className="text-center group">
            <div className="bg-olive-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-olive-200 transition-colors">
              <Home className="w-8 h-8 text-olive-600" />
            </div>
            <h3 className="text-xl font-serif text-olive-700 mb-3">Aconchego</h3>
            <p className="text-gray-600 font-light">
              Criamos ambientes que abraçam, que fazem você se sentir verdadeiramente em casa.
            </p>
          </div>
        </div>

        {/* Image */}
        <div className="relative overflow-hidden rounded-lg mb-16">
          <img
            src="https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop"
            alt="Ambiente aconchegante"
            className="w-full h-64 md:h-80 object-cover"
          />
          <div className="absolute inset-0 bg-olive-600/10"></div>
        </div>

        {/* Quote */}
        <blockquote className="text-center">
          <p className="text-2xl md:text-3xl font-serif text-olive-700 italic mb-6">
            "Cada casa tem sua própria alma. Nosso papel é ajudar você a descobrir e expressar a sua."
          </p>
          <cite className="text-lg text-gray-600 font-light">— Equipe Arandu</cite>
        </blockquote>
      </div>
    </section>
  );
}

export default About;