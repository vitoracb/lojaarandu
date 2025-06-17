import React from 'react';
import { Shield, Eye, Lock, Users } from 'lucide-react';

function PrivacyPolicy() {
  return (
    <section className="py-24 bg-gradient-to-b from-sand-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="bg-olive-100 p-4 rounded-full">
              <Shield className="w-12 h-12 text-olive-600" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif text-olive-700 mb-6">
            Política de Privacidade
          </h1>
          <div className="w-24 h-0.5 bg-olive-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 font-light">
            Última atualização: Janeiro de 2025
          </p>
        </div>

        {/* Quick Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-sand-200 text-center">
            <Lock className="w-8 h-8 text-olive-600 mx-auto mb-3" />
            <h3 className="font-serif text-olive-700 mb-2">Dados Protegidos</h3>
            <p className="text-gray-600 text-sm">Criptografia e segurança</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-sand-200 text-center">
            <Eye className="w-8 h-8 text-olive-600 mx-auto mb-3" />
            <h3 className="font-serif text-olive-700 mb-2">Transparência</h3>
            <p className="text-gray-600 text-sm">Uso claro dos dados</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-sand-200 text-center">
            <Users className="w-8 h-8 text-olive-600 mx-auto mb-3" />
            <h3 className="font-serif text-olive-700 mb-2">Seus Direitos</h3>
            <p className="text-gray-600 text-sm">Controle total</p>
          </div>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <div className="bg-white p-8 rounded-lg shadow-sm border border-sand-200 mb-8">
            <h2 className="text-2xl font-serif text-olive-700 mb-4">Informações que Coletamos</h2>
            <div className="text-gray-700 font-light leading-relaxed space-y-4">
              <p><strong>Dados pessoais fornecidos por você:</strong></p>
              <ul className="ml-4 space-y-1">
                <li>• Nome completo</li>
                <li>• E-mail</li>
                <li>• Telefone</li>
                <li>• Endereço de entrega</li>
                <li>• CPF (para emissão de nota fiscal)</li>
              </ul>
              
              <p><strong>Dados coletados automaticamente:</strong></p>
              <ul className="ml-4 space-y-1">
                <li>• Informações de navegação</li>
                <li>• Endereço IP</li>
                <li>• Tipo de dispositivo e navegador</li>
                <li>• Páginas visitadas</li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm border border-sand-200 mb-8">
            <h2 className="text-2xl font-serif text-olive-700 mb-4">Como Utilizamos seus Dados</h2>
            <ul className="text-gray-700 font-light leading-relaxed space-y-2">
              <li>• Processar e entregar seus pedidos</li>
              <li>• Enviar comunicações sobre seu pedido</li>
              <li>• Melhorar nossos produtos e serviços</li>
              <li>• Enviar ofertas e novidades (com seu consentimento)</li>
              <li>• Cumprir obrigações legais e fiscais</li>
              <li>• Prevenir fraudes e garantir segurança</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm border border-sand-200 mb-8">
            <h2 className="text-2xl font-serif text-olive-700 mb-4">Compartilhamento de Dados</h2>
            <div className="text-gray-700 font-light leading-relaxed space-y-4">
              <p>Seus dados pessoais podem ser compartilhados apenas nas seguintes situações:</p>
              <ul className="ml-4 space-y-2">
                <li>• <strong>Prestadores de serviço:</strong> Transportadoras, processadores de pagamento e outros parceiros essenciais para o funcionamento do negócio</li>
                <li>• <strong>Obrigações legais:</strong> Quando exigido por lei ou autoridades competentes</li>
                <li>• <strong>Proteção de direitos:</strong> Para proteger nossos direitos, propriedade ou segurança</li>
              </ul>
              <p><strong>Nunca vendemos seus dados pessoais para terceiros.</strong></p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm border border-sand-200 mb-8">
            <h2 className="text-2xl font-serif text-olive-700 mb-4">Cookies e Tecnologias Similares</h2>
            <div className="text-gray-700 font-light leading-relaxed space-y-3">
              <p>Utilizamos cookies para:</p>
              <ul className="ml-4 space-y-1">
                <li>• Manter você logado em sua conta</li>
                <li>• Lembrar suas preferências</li>
                <li>• Analisar o tráfego do site</li>
                <li>• Personalizar sua experiência</li>
              </ul>
              <p>Você pode gerenciar cookies através das configurações do seu navegador.</p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm border border-sand-200 mb-8">
            <h2 className="text-2xl font-serif text-olive-700 mb-4">Seus Direitos</h2>
            <div className="text-gray-700 font-light leading-relaxed">
              <p className="mb-3">Conforme a Lei Geral de Proteção de Dados (LGPD), você tem direito a:</p>
              <ul className="space-y-2">
                <li>• <strong>Acesso:</strong> Saber quais dados temos sobre você</li>
                <li>• <strong>Correção:</strong> Atualizar dados incorretos</li>
                <li>• <strong>Exclusão:</strong> Solicitar remoção de seus dados</li>
                <li>• <strong>Portabilidade:</strong> Receber seus dados em formato estruturado</li>
                <li>• <strong>Oposição:</strong> Opor-se ao tratamento de seus dados</li>
                <li>• <strong>Revogação:</strong> Retirar consentimento a qualquer momento</li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm border border-sand-200 mb-8">
            <h2 className="text-2xl font-serif text-olive-700 mb-4">Segurança dos Dados</h2>
            <p className="text-gray-700 font-light leading-relaxed">
              Implementamos medidas técnicas e organizacionais adequadas para proteger seus dados pessoais contra acesso não autorizado, alteração, divulgação ou destruição. Utilizamos criptografia, firewalls e outras tecnologias de segurança para manter seus dados seguros.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm border border-sand-200 mb-8">
            <h2 className="text-2xl font-serif text-olive-700 mb-4">Retenção de Dados</h2>
            <p className="text-gray-700 font-light leading-relaxed">
              Mantemos seus dados pessoais apenas pelo tempo necessário para cumprir as finalidades descritas nesta política, ou conforme exigido por lei. Dados de transações são mantidos conforme legislação fiscal aplicável.
            </p>
          </div>

          <div className="bg-olive-50 p-6 rounded-lg border border-olive-200">
            <h3 className="text-xl font-serif text-olive-700 mb-3">Contato</h3>
            <p className="text-gray-700 font-light mb-3">
              Para exercer seus direitos ou esclarecer dúvidas sobre esta política, entre em contato:
            </p>
            <ul className="text-gray-700 font-light space-y-1">
              <li>• E-mail: privacidade@arandu.com.br</li>
              <li>• WhatsApp: (71) 99999-9999</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PrivacyPolicy;