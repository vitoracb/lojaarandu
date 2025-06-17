import React from 'react';
import { FileText, Scale, AlertCircle, CheckCircle } from 'lucide-react';

function TermsOfUse() {
  return (
    <section className="py-24 bg-gradient-to-b from-sand-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="bg-olive-100 p-4 rounded-full">
              <FileText className="w-12 h-12 text-olive-600" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif text-olive-700 mb-6">
            Termos de Uso
          </h1>
          <div className="w-24 h-0.5 bg-olive-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 font-light">
            Última atualização: Janeiro de 2025
          </p>
        </div>

        {/* Quick Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-sand-200 text-center">
            <Scale className="w-8 h-8 text-olive-600 mx-auto mb-3" />
            <h3 className="font-serif text-olive-700 mb-2">Direitos e Deveres</h3>
            <p className="text-gray-600 text-sm">Uso responsável</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-sand-200 text-center">
            <CheckCircle className="w-8 h-8 text-olive-600 mx-auto mb-3" />
            <h3 className="font-serif text-olive-700 mb-2">Compras Seguras</h3>
            <p className="text-gray-600 text-sm">Transações protegidas</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-sand-200 text-center">
            <AlertCircle className="w-8 h-8 text-olive-600 mx-auto mb-3" />
            <h3 className="font-serif text-olive-700 mb-2">Responsabilidades</h3>
            <p className="text-gray-600 text-sm">Uso adequado</p>
          </div>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <div className="bg-white p-8 rounded-lg shadow-sm border border-sand-200 mb-8">
            <h2 className="text-2xl font-serif text-olive-700 mb-4">Aceitação dos Termos</h2>
            <p className="text-gray-700 font-light leading-relaxed">
              Ao acessar e utilizar o site da Arandu, você concorda em cumprir e estar vinculado a estes Termos de Uso. Se você não concordar com qualquer parte destes termos, não deve utilizar nosso site ou serviços.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm border border-sand-200 mb-8">
            <h2 className="text-2xl font-serif text-olive-700 mb-4">Uso do Site</h2>
            <div className="text-gray-700 font-light leading-relaxed space-y-4">
              <p><strong>Você pode:</strong></p>
              <ul className="ml-4 space-y-1">
                <li>• Navegar e visualizar produtos</li>
                <li>• Realizar compras</li>
                <li>• Criar uma conta de usuário</li>
                <li>• Entrar em contato conosco</li>
              </ul>
              
              <p><strong>Você não pode:</strong></p>
              <ul className="ml-4 space-y-1">
                <li>• Usar o site para fins ilegais</li>
                <li>• Tentar hackear ou comprometer a segurança</li>
                <li>• Reproduzir conteúdo sem autorização</li>
                <li>• Enviar spam ou conteúdo malicioso</li>
                <li>• Interferir no funcionamento do site</li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm border border-sand-200 mb-8">
            <h2 className="text-2xl font-serif text-olive-700 mb-4">Produtos e Preços</h2>
            <ul className="text-gray-700 font-light leading-relaxed space-y-2">
              <li>• Todos os preços estão em reais (R$) e incluem impostos</li>
              <li>• Preços podem ser alterados sem aviso prévio</li>
              <li>• Disponibilidade de produtos sujeita ao estoque</li>
              <li>• Imagens são meramente ilustrativas</li>
              <li>• Cores podem variar devido às configurações do monitor</li>
              <li>• Reservamo-nos o direito de cancelar pedidos em caso de erro de preço</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm border border-sand-200 mb-8">
            <h2 className="text-2xl font-serif text-olive-700 mb-4">Pedidos e Pagamentos</h2>
            <div className="text-gray-700 font-light leading-relaxed space-y-3">
              <p><strong>Processamento de Pedidos:</strong></p>
              <ul className="ml-4 space-y-1">
                <li>• Confirmação automática por e-mail</li>
                <li>• Análise de dados e aprovação do pagamento</li>
                <li>• Preparação e envio do produto</li>
              </ul>
              
              <p><strong>Formas de Pagamento:</strong></p>
              <ul className="ml-4 space-y-1">
                <li>• Cartão de crédito (Visa, Mastercard, Elo)</li>
                <li>• PIX</li>
                <li>• Boleto bancário</li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm border border-sand-200 mb-8">
            <h2 className="text-2xl font-serif text-olive-700 mb-4">Entrega</h2>
            <div className="text-gray-700 font-light leading-relaxed space-y-3">
              <p>• Prazo de entrega varia conforme localização e produto</p>
              <p>• Frete calculado no checkout</p>
              <p>• Entrega realizada por transportadoras parceiras</p>
              <p>• É necessário haver alguém no endereço para receber</p>
              <p>• Conferir produto no ato da entrega</p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm border border-sand-200 mb-8">
            <h2 className="text-2xl font-serif text-olive-700 mb-4">Propriedade Intelectual</h2>
            <p className="text-gray-700 font-light leading-relaxed">
              Todo o conteúdo do site, incluindo textos, imagens, logos, design e código, é propriedade da Arandu ou de seus licenciadores e está protegido por leis de direitos autorais e propriedade intelectual. É proibida a reprodução sem autorização expressa.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm border border-sand-200 mb-8">
            <h2 className="text-2xl font-serif text-olive-700 mb-4">Limitação de Responsabilidade</h2>
            <div className="text-gray-700 font-light leading-relaxed space-y-3">
              <p>A Arandu não se responsabiliza por:</p>
              <ul className="ml-4 space-y-1">
                <li>• Danos indiretos ou consequenciais</li>
                <li>• Interrupções no serviço por manutenção</li>
                <li>• Problemas técnicos fora de nosso controle</li>
                <li>• Uso inadequado dos produtos</li>
              </ul>
              <p>Nossa responsabilidade está limitada ao valor do produto adquirido.</p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm border border-sand-200 mb-8">
            <h2 className="text-2xl font-serif text-olive-700 mb-4">Alterações nos Termos</h2>
            <p className="text-gray-700 font-light leading-relaxed">
              Reservamo-nos o direito de modificar estes termos a qualquer momento. As alterações entrarão em vigor imediatamente após a publicação no site. É sua responsabilidade revisar periodicamente estes termos.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm border border-sand-200 mb-8">
            <h2 className="text-2xl font-serif text-olive-700 mb-4">Lei Aplicável</h2>
            <p className="text-gray-700 font-light leading-relaxed">
              Estes termos são regidos pelas leis brasileiras. Qualquer disputa será resolvida no foro da comarca de Salvador, Bahia, renunciando a qualquer outro, por mais privilegiado que seja.
            </p>
          </div>

          <div className="bg-olive-50 p-6 rounded-lg border border-olive-200">
            <h3 className="text-xl font-serif text-olive-700 mb-3">Dúvidas sobre os Termos?</h3>
            <p className="text-gray-700 font-light mb-3">
              Se você tiver alguma dúvida sobre estes Termos de Uso, entre em contato:
            </p>
            <ul className="text-gray-700 font-light space-y-1">
              <li>• E-mail: juridico@arandu.com.br</li>
              <li>• WhatsApp: (71) 99999-9999</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TermsOfUse;