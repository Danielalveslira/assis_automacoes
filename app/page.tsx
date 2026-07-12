import HeroAutomacao from '@/components/HeroAutomacao';
import { VideoSection } from '@/components/VideoSection';
import ContatoAutomacao from '@/components/ContatoAutomacao';
import Depoimentos from "@/components/Depoimentos";

export default function Home() {
  return (
    <>
      <HeroAutomacao />
      <VideoSection />
      <Depoimentos />
      <ContatoAutomacao />
    </>
  );
}