import React from 'react';
import { Leaf, Instagram, Facebook, Pointer as Pinterest, Mail, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: 'home' | 'about' | 'products' | 'exchange-policy' | 'privacy-policy' | 'terms-of-use' | 'contact') => void;
}

function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-sand-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Leaf className="w-8 h-8 text-olive-600" />
              <span className="text-2xl font-serif font-medium text-olive-700">Arandu</span>
            </div>
            <p className="text-gray-600 font-light leading-relaxed mb-6 max-w-md">
              Transformamos espaços com sabedoria e beleza. Cada produto é cuidadosamente selecionado para trazer harmonia e personalidade ao seu lar.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-white p-3 rounded-full hover:bg-olive-100 transition-colors group"
              >
                <Instagram className="w-5 h-5 text-olive-600 group-hover:text-olive-700" />
              </a>
              <a
                href="#"
                className="bg-white p-3 rounded-full hover:bg-olive-100 transition-colors group"
              >
                <Pinterest className="w-5 h-5 text-olive-600 group-hover:text-olive-700" />
              </a>
              <a
                href="#"
                className="bg-white p-3 rounded-full hover:bg-olive-100 transition-colors group"
              >
                <Facebook className="w-5 h-5 text-olive-600 group-hover:text-olive-700" />
              </a>
            </div>
          </div>

          {/* Menu Links */}
          <div>
            <h3 className="text-lg font-serif text-olive-700 mb-4">Menu</h3>
            <ul className="space-y-3">
              {[
                { id: 'home', label: 'Início' },
                { id: 'products', label: 'Produtos' },
                { id: 'about', label: 'Sobre' },
                { id: 'contact', label: 'Contato' },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => onNavigate(item.id as any)}
                    className="text-gray-600 hover:text-olive-600 font-light transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Institutional Links */}
          <div>
            <h3 className="text-lg font-serif text-olive-700 mb-4">Institucional</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => onNavigate('exchange-policy')}
                  className="text-gray-600 hover:text-olive-600 font-light transition-colors"
                >
                  Política de Trocas
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('privacy-policy')}
                  className="text-gray-600 hover:text-olive-600 font-light transition-colors"
                >
                  Política de Privacidade
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('terms-of-use')}
                  className="text-gray-600 hover:text-olive-600 font-light transition-colors"
                >
                  Termos de Uso
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-sand-200 pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-olive-600" />
              <span className="text-gray-600 font-light">suporte@lojaarandu.com</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-olive-600" />
              <span className="text-gray-600 font-light">(71) 99999-9999</span>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-olive-600" />
              <span className="text-gray-600 font-light">Salvador, BA</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-sand-200 pt-8 text-center">
          <p className="text-gray-500 font-light">
            © 2025 Arandu. Todos os direitos reservados. Transforme seu espaço com sabedoria e beleza.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;