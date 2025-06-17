import React, { useState } from 'react';
import { Mail, Phone, MapPin, MessageCircle, Clock, Send } from 'lucide-react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você implementaria o envio do formulário
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-24 bg-gradient-to-b from-sand-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="bg-olive-100 p-4 rounded-full">
              <MessageCircle className="w-12 h-12 text-olive-600" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif text-olive-700 mb-6">
            Entre em Contato
          </h1>
          <div className="w-24 h-0.5 bg-olive-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto">
            Estamos aqui para ajudar você a transformar seu espaço com sabedoria e beleza. Fale conosco!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-serif text-olive-700 mb-8">Informações de Contato</h2>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="bg-olive-100 p-3 rounded-full">
                  <Phone className="w-6 h-6 text-olive-600" />
                </div>
                <div>
                  <h3 className="font-serif text-olive-700 mb-1">Telefone</h3>
                  <p className="text-gray-600 font-light">(71) 99999-9999</p>
                  <p className="text-sm text-gray-500">WhatsApp disponível</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-olive-100 p-3 rounded-full">
                  <Mail className="w-6 h-6 text-olive-600" />
                </div>
                <div>
                  <h3 className="font-serif text-olive-700 mb-1">E-mail</h3>
                  <p className="text-gray-600 font-light">suporte@lojaarandu.com</p>
                  <p className="text-sm text-gray-500">Respondemos em até 24h</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-olive-100 p-3 rounded-full">
                  <MapPin className="w-6 h-6 text-olive-600" />
                </div>
                <div>
                  <h3 className="font-serif text-olive-700 mb-1">Localização</h3>
                  <p className="text-gray-600 font-light">Salvador, Bahia</p>
                  <p className="text-sm text-gray-500">Entregamos para todo o Brasil</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-olive-100 p-3 rounded-full">
                  <Clock className="w-6 h-6 text-olive-600" />
                </div>
                <div>
                  <h3 className="font-serif text-olive-700 mb-1">Horário de Atendimento</h3>
                  <p className="text-gray-600 font-light">Segunda a Sexta: 9h às 18h</p>
                  <p className="text-gray-600 font-light">Sábado: 9h às 14h</p>
                  <p className="text-sm text-gray-500">Exceto feriados</p>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <div className="bg-green-50 p-6 rounded-lg border border-green-200">
              <h3 className="text-lg font-serif text-green-800 mb-3 flex items-center">
                <MessageCircle className="w-5 h-5 mr-2" />
                Atendimento Rápido
              </h3>
              <p className="text-green-700 font-light mb-4">
                Para um atendimento mais ágil, entre em contato pelo WhatsApp. Nossa equipe está pronta para ajudar!
              </p>
              <button
                onClick={() => {
                  const phone = "5571999999999";
                  const message = "Olá! Gostaria de falar com a equipe da Arandu 🌿";
                  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
                }}
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 font-medium transition-colors flex items-center space-x-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Conversar no WhatsApp</span>
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-serif text-olive-700 mb-8">Envie uma Mensagem</h2>
            
            {isSubmitted ? (
              <div className="bg-olive-50 p-8 rounded-lg border border-olive-200 text-center">
                <div className="bg-olive-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="w-8 h-8 text-olive-600" />
                </div>
                <h3 className="text-xl font-serif text-olive-700 mb-2">Mensagem Enviada!</h3>
                <p className="text-gray-600 font-light">
                  Obrigada pelo contato. Responderemos em breve! ✨
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nome completo *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-sand-300 focus:outline-none focus:ring-2 focus:ring-olive-400 focus:border-transparent transition-colors"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-sand-300 focus:outline-none focus:ring-2 focus:ring-olive-400 focus:border-transparent transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Assunto *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-sand-300 focus:outline-none focus:ring-2 focus:ring-olive-400 focus:border-transparent transition-colors"
                  >
                    <option value="">Selecione um assunto</option>
                    <option value="produto">Dúvidas sobre produtos</option>
                    <option value="pedido">Status do pedido</option>
                    <option value="troca">Trocas e devoluções</option>
                    <option value="sugestao">Sugestões</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Mensagem *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    required
                    className="w-full px-4 py-3 border border-sand-300 focus:outline-none focus:ring-2 focus:ring-olive-400 focus:border-transparent transition-colors resize-none"
                    placeholder="Conte-nos como podemos ajudar..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-olive-600 hover:bg-olive-700 text-white px-8 py-4 text-lg font-medium transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Enviar Mensagem</span>
                </button>

                <p className="text-sm text-gray-500 text-center">
                  * Campos obrigatórios
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;