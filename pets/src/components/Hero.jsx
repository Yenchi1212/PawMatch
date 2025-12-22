import PetCarousel from "../components/PetCarousel";

export default function Hero() {
  return (
    <section
      className="relative min-h-[520px] sm:min-h-[640px] md:min-h-[760px] flex items-center "
      style={{
        backgroundImage:
          "url('/images/hero-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "50% center",
      }}
    >
      <div className="relative z-10 mx-auto max-w-0xl w-full pt-20">
        {/* Block stays on the LEFT */}
        <div className="max-w-xl text-right">
          {/* Title right-aligned */}
          <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight text-white drop-shadow">
            ADOPT ME
          </h1>

          {/* Underline stays visually aligned with text */}
          <div className="mt-4 h-1 w-[600px] max-w-full bg-lime-400 ml-auto" />

          {/* Paragraph right-aligned */}
          <p className="mt-6 text-white/90 text-lg leading-7 text-semibold drop-shadow">
            Mischievous, playful and I are looking for that special someone
            <br />
            to brighten their days
          </p>

          {/* Button aligned under text (right) */}
          <div className="mt-8 flex justify-end">
            <button className="rounded-full bg-lime-400 px-10 py-3 font-extrabold text-slate-900 hover:bg-lime-300 transition shadow">
              ADOPT TODAY
            </button>
          </div>
        </div>
      </div>

      


    </section>


    

  );
}
