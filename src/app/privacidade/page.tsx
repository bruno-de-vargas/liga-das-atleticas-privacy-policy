"use client";
import Image from "next/image";
import Redondo from "../../../public/Redondo.png";
import LigaLogo from "../../../public/LigaLogo.png";
export default function Home() {

  return (
    <div className="min-h-screen bg-white text-black">
      <div className="relative w-full h-52 md:h-70 lg:h-66 flex justify-center overflow-hidden text-center text-white">
        <Image
          src={Redondo}
          alt="Header Curvo"
          fill
          className="object-top"
          priority
        />
        <div className="flex flex-row p-7 absolute items-center gap-2.5 w-full">
          <Image src={LigaLogo} alt="Logo" className="w-10 md:w-12 lg:w-14" />
          <span className="md:text-md lg:text-xl font-bold">
            Liga Das Atléticas
          </span>
        </div>
        <div className="mt-5 h-full w-full flex flex-col justify-center items-center z-10">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
            Política de Privacidade
          </h1>
          <span className="mt-2 text-md md:text-xl lg:text-2xl">
            Atualizado em 26/08/2025
          </span>
        </div>
      </div>
      <main className="max-w-2xl mx-auto px-6 py-12 flex flex-col justify-center items-center">
        <div>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4">
            1.Informações que coletamos
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-800">
            <li>
              <span className="font-semibold">Informações de Conta:</span> Nome,
              e-mail, foto de perfil.
            </li>
            <li>
              <span className="font-semibold">Dados de Uso:</span> Informações
              sobre como você usa o aplicativo.
            </li>
            <li>
              <span className="font-semibold">Informações de Dispositivo:</span>{" "}
              Tipo de dispositivo, sistema operacional, etc.
            </li>
          </ul>
          <h2 className="text-xl md:text-2xl mb-4 lg:text-3xl font-bold mt-4">
            2.Como usamos suas informações
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-800">
            <li>Para fornecer e manter o serviço.</li>
            <li>
              Para melhorar nossos serviços e personalizar sua experiência.
            </li>
            <li>Para segurança e prevenção de fraudes.</li>
          </ul>
          <h2 className="text-xl md:text-2xl mb-4 lg:text-3xl font-bold mt-4">
            3.Compartilhamento de informações
          </h2>

          <ul className="list-disc list-inside space-y-2 text-gray-800">
            <p>
              Não compartilhamos suas informações pessoais com terceiros,
              exceto:
            </p>
            <li>Para cumprir obrigações legais.</li>
            <li>Para provedores de serviço essenciais (ex: Firebase).</li>
          </ul>
          <h2 className="text-xl md:text-2xl mb-4 lg:text-3xl font-bold mt-4">
            4.Armazenamento e Segurança
          </h2>
          <p>
            Suas informações são armazenadas de forma segura usando serviços
            confiáveis como Firebase. Aplicamos medidas técnicas para proteger
            seus dados.
          </p>
          <h2 className="text-xl md:text-2xl mb-4 lg:text-3xl font-bold mt-4">
            5.Direitos do Titular dos Dados (LGPD)
          </h2>
          <p>
            Como titular dos dados, você possui os seguintes direitos, que podem
            ser exercidos a qualquer momento, mediante solicitação formal: Você
            tem controle sobre seus dados. A qualquer momento, você pode
            acessar, corrigir ou pedir a exclusão.
          </p>
          <h2 className="text-xl md:text-2xl mb-4 lg:text-3xl font-bold mt-4">
            6.Alterações nesta política
          </h2>
          <p>
            Podemos atualizar esta Política de Privacidade periodicamente.
            Notificaremos sobre mudanças relevantes no aplicativo.
          </p>
        </div>
      </main>
    </div>
  );
}
