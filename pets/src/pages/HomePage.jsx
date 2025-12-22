import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import PetCarousel from "../components/PetCarousel";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <PetCarousel />
    </div>
  );
}
