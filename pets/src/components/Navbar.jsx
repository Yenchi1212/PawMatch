export default function Navbar() {
  const links = [
    "Home",
    "Our Pets",
    "Adoption Stories",
    "Events",
    "About",
    "Contact Us",
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50">

      <div className="mx-auto max-w-7xl px-6 h-20 flex items-center justify-between text-white text-base md:text-lg">
          
        {/* Logo */}
        <div className="font-extrabold tracking-wide text-lg md:text-2xl">
          <span className="text-lime-500">PETS</span>
          <span className="text-slate-700">HELP</span>
        </div>

        {/* Nav links */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-600 font-medium md:text-base md:gap-10">
          {links.map((link) => (
            <a
              key={link}
              href="#"
              className="hover:text-slate-900 transition"
            >
              {link}
            </a>
          ))}
        </nav>

        <button className="rounded-full border border-lime-400 px-4 py-1.5 text-sm font-semibold text-white hover:bg-lime-400/20 transition md:px-6 md:py-2 md:text-base">
          Login
        </button>

      </div>
    </header>
  );
}
