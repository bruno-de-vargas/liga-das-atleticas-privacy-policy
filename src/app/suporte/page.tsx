import Image from "next/image";
import Redondo from "../../../public/Redondo.png";
import LigaLogo from "../../../public/LigaLogo.png";
export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black">
      <div className="relative w-full h-40 md:h-70 lg:h-40 flex justify-center overflow-hidden text-center text-white">
        <Image
          src={Redondo}
          alt="Header Curvo"
          fill
          className="object-top"
          priority
        />
        <div className="flex flex-col p-7 absolute items-center gap-2.5 w-full">
          <Image src={LigaLogo} alt="Logo" className="w-10 md:w-12 lg:w-14" />
          <span className="md:text-md lg:text-xl font-bold">
            Liga Das Atléticas
          </span>
        </div>
      </div>
      <main className="max-w-2xl mx-auto px-6 py-12 flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center  items-center">
          <h1 className="text-2xl md:text-4xl font-bold">Suporte</h1>
          <p className="text-center mt-4 w-[250pt] md:w-[100pt] lg:w-[350pt]">
            Se você tiver dúvidas, sugestões ou encontrar algum problema no
            aplicativo, entre em contato conosco pelo e-mail:
          </p>
          <a href="mailto:suporte@seusite.com?subject=Ajuda%20com%20o%20app&body=Olá,%20preciso%20de%20ajuda%20com...">
            <div className="text-white cursor-pointer p-2 px-8 mt-10 bg-black rounded-md text-sm">
              Entrar em contato
            </div>
          </a>
        </div>
      </main>
    </div>
  );
}
