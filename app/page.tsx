import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";

export default function Home() {
  return (
    <main className="min-h-screen px-6 py-4 md:px-24 md:py-8 box-border">
      <Header />
      <Hero />
    </main>
  );
}
