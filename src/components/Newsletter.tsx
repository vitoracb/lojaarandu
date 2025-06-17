import React, { useState } from 'react';
import { Mail, Gift } from 'lucide-react';

function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <section className="py-20 bg-olive-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center mb-6">
          <div className="bg-white/20 p-4 rounded-full">
            <Gift className="w-12 h-12 text-white" />
          </div>
        </div>

        <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">
          Receba ofertas e dicas de decoração exclusivas
        </h2>
        
        <p className="text-xl text-olive-100 font-light mb-8 max-w-2xl mx-auto">
          Seja a primeira a descobrir nossas novidades, promoções especiais e inspirações para transformar sua casa
        </p>

        {isSubscribed ? (
          <div className="bg-white/20 text-white p-6 rounded-lg max-w-md mx-auto">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <Mail className="w-6 h-6" />
              <span className="text-lg font-medium">Obrigada!</span>
            </div>
            <p className="text-olive-100">
              Você receberá nossas novidades em breve ✨
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Digite seu melhor e-mail"
                className="flex-1 px-6 py-4 text-lg bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-white/30"
                required
              />
              <button
                type="submit"
                className="bg-terracotta-600 hover:bg-terracotta-700 text-white px-8 py-4 text-lg font-medium transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
              >
                <Mail className="w-5 h-5" />
                <span>Inscrever</span>
              </button>
            </div>
            <p className="text-olive-200 text-sm mt-4">
              Prometemos não encher sua caixa de entrada. Apenas conteúdo valioso 💚
            </p>
          </form>
        )}
      </div>
    </section>
  );
}

export default Newsletter;