import { Hero } from "@/components/sections/Hero";
import { Manifesto } from "@/components/sections/Manifesto";
import { Pacotes } from "@/components/sections/Pacotes";
import { Processo } from "@/components/sections/Processo";
import { Sobre } from "@/components/sections/Sobre";
import { FAQ } from "@/components/sections/FAQ";
import { Contato } from "@/components/sections/Contato";

export default function Home() {
  return (
    <>
      <Hero />
      <Manifesto />
      <Pacotes />
      <Processo />
      <Sobre />
      <FAQ />
      <Contato />
    </>
  );
}
