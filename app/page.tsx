import { useEffect } from "react";
import Bentogrid from "./_components/Bento/Bentogrid";
import Hero from "./_components/Hero";
import AskAiModal from "./_components/OpenAi/AskAiModal";
import ProjectShowcase from "./_components/Projects/ProjectShowcase";

export default function Home() {
  return (
    <main className="flex flex-col gap-24">
      <Hero />
      <Bentogrid />
      <ProjectShowcase />
    </main>
  );
}
