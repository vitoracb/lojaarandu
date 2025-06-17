import React from 'react';
import { RefreshCw, Clock, Package, Shield } from 'lucide-react';

function ExchangePolicy() {
  return (
    <section className="py-24 bg-gradient-to-b from-sand-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="bg-olive-100 p-4 rounded-full">
              <RefreshCw className="w-12 h-12 text-olive-600" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif text-olive-700 mb-6">
            Política de Trocas e Devoluções
          </h1>
          <div className="w-24 h-0.5 bg-olive-400 mx-auto"></div>
        </div>

        {/* Quick Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-sand-200 text-center">
            <Clock className="w-8 h-8 text-olive-600 mx-auto mb-3" />
            <h3 className="font-serif text-olive-700 mb-2">7 dias</h3>
            <p className="text-gray-600 text-sm">para trocas e devoluções</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-sand-200 text-center">
            <Package className="w-8 h-8 text-olive-600 mx-auto mb-3" />
            <h3 className="font-serif text-olive-700 mb-2">Embalagem original</h3>
            <p className="text-gray-600 text-sm">produto sem uso</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-sand-200 text-center">
            <Shield className="w-8 h-8 text-olive-600 mx-auto mb-3" />
            <h3 className="font-serif text-olive-700 mb-2">Garantia</h3>
            <p className="text-gray-600 text-sm">de qualidade</p>
          </div>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <div className="bg-white p-8 rounded-lg shadow-sm border border-sand-200 mb-8">
            <h2 className="text-2xl font-serif text-olive-700 mb-4">Prazo para Trocas e Devoluções</h2>
            <p className="text-gray-700 font-light leading-relaxed mb-4">
              Você tem até <strong>7 dias corridos</strong> a partir da data de recebimento do produto para solicitar troca ou devolução, conforme estabelecido pelo Código de Defesa do Consumidor.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm border border-sand-200 mb-8">
            <h2 className="text-2xl font-serif text-olive-700 mb-4">Condições para Troca ou Devolução</h2>
            <ul className="text-gray-700 font-light leading-relaxed space-y-2">
              <li>• Produto sem uso, em perfeito estado de conservação</li>
              <li>• Embalagem original preservada</li>
              <li>• Etiquetas e lacres intactos</li>
              <li>• Nota fiscal ou comprovante de compra</li>
              <li>• Produtos personalizados não são aceitos para troca/devolução</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm border border-sand-200 mb-8">
            <h2 className="text-2xl font-serif text-olive-700 mb-4">Como Solicitar</h2>
            <div className="text-gray-700 font-light leading-relaxed space-y-4">
              <p><strong>1. Entre em contato conosco:</strong></p>
              <ul className="ml-4 space-y-1">
                <li>• WhatsApp: (71) 99999-9999</li>
                <li>• E-mail: suporte@lojaarandu.com</li>
              </ul>
              
              <p><strong>2. Informe:</strong></p>
              <ul className="ml-4 space-y-1">
                <li>• Número do pedido</li>
                <li>• Motivo da troca/devolução</li>
                <li>• Fotos do produto (se aplicável)</li>
              </ul>

              <p><strong>3. Aguarde nossas instruções</strong> para envio do produto.</p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm border border-sand-200 mb-8">
            <h2 className="text-2xl font-serif text-olive-700 mb-4">Custos de Envio</h2>
            <div className="text-gray-700 font-light leading-relaxed space-y-3">
              <p><strong>Produto com defeito:</strong> Arandu arca com todos os custos de envio.</p>
              <p><strong>Desistência da compra:</strong> Cliente responsável pelo frete de devolução.</p>
              <p><strong>Troca por outro produto:</strong> Custos compartilhados conforme análise do caso.</p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm border border-sand-200 mb-8">
            <h2 className="text-2xl font-serif text-olive-700 mb-4">Reembolso</h2>
            <p className="text-gray-700 font-light leading-relaxed">
              O reembolso será processado em até <strong>10 dias úteis</strong> após recebermos e analisarmos o produto devolvido. O valor será estornado na mesma forma de pagamento utilizada na compra.
            </p>
          </div>

          <div className="bg-olive-50 p-6 rounded-lg border border-olive-200">
            <h3 className="text-xl font-serif text-olive-700 mb-3">Dúvidas?</h3>
            <p className="text-gray-700 font-light">
              Nossa equipe está sempre disponível para esclarecer qualquer questão sobre trocas e devoluções. Entre em contato conosco pelo WhatsApp ou e-mail.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExchangePolicy;