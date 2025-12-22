import { useMemo, useState } from "react";

export default function PetCarousel() {
  const pets = useMemo(
    () => [
      {
        name: "Buddy",
        image: "/images/dog1.jpg",
        breed: "Shiba Inu",
        age: "2 years",
      },
      {
        name: "Mittens",
        image: "/images/cat1.jpg",
        breed: "Tabby Cat",
        age: "1 year",
      },
      {
        name: "Charlie",
        image: "/images/dog2.jpg",
        breed: "shepherd mix",
        age: "3 years",
      },
      {
        name: "Luna",
        image: "/images/cat2.jpg",
        breed: "Kitten",
        age: "1 month",
      },
    ],
    []
  );

  const [active, setActive] = useState(1);

  const prev = () => setActive((a) => (a - 1 + pets.length) % pets.length);
  const next = () => setActive((a) => (a + 1) % pets.length);

  return (
    <section className="bg-white py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-xl sm:text-2xl font-semibold text-slate-700">
          Cats and Dogs Available for Adoption
        </h2>
        <p className="mt-2 text-center text-xs sm:text-sm text-slate-500">
          Click on the pet&apos;s picture to view more details and adoption information.
        </p>

        <div className="mt-10 flex items-center justify-center gap-10">
          {/* Left arrow */}
          <button
            onClick={prev}
            className="text-3xl sm:text-4xl text-slate-400 hover:text-slate-700 transition px-10"
            aria-label="Previous"
          >
            ‹
          </button>

          {/* Circles */}
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10 md:gap-16">
            {pets.map((p, i) => {
              const isActive = i === active;

              return (
                <button key={p.name} onClick={() => setActive(i)} className="group">
                  <div
                    className={[
                      "relative h-36 w-36 rounded-full overflow-hidden",
                      "ring-4 transition",
                      isActive ? "ring-lime-400" : "ring-slate-200",
                    ].join(" ")}
                  >
                    <img
                      src={p.image}
                      alt={p.name}
                      className={[
                        "h-full w-full object-cover transition",
                        isActive ? "opacity-35" : "opacity-100 group-hover:opacity-90",
                      ].join(" ")}
                    />

                    {/* Active overlay text */}
                    {isActive && (
                      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-3">
                        <div className="text-lg font-semibold text-slate-800">{p.name}</div>
                        <div className="text-xs text-slate-700">{p.breed}</div>
                        <div className="text-xs text-slate-600">{p.age}</div>
                      </div>
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right arrow */}
          <button
            onClick={next}
            className="text-4xl text-slate-400 hover:text-slate-700 transition"
            aria-label="Next"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
