import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  // Lock background scrolling
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [menuOpen]);

  return (
    <nav className="border-b border-slate-200 bg-white mt-1 relative">

      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between sm:px-6 py-4">

        <h1 className="font-semibold flex-1 text-xl sm:text-2xl">
          FlowAi
        </h1>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8 text-sm text-slate-800">
          <li className="cursor-pointer">Features</li>
          <li className="cursor-pointer">How It works</li>
          <li className="cursor-pointer">Pricing</li>
          <li className="cursor-pointer">Testimonials</li>
          <li className="cursor-pointer">FAQ</li>
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden md:flex flex-1 justify-end items-center gap-3 sm:gap-4">
          <button className="text-sm border border-transparent font-medium px-4 py-2 hover:border-slate-500 rounded-2xl">
            Get Started
          </button>

          <button className="bg-slate-900 text-white px-4 py-2 rounded-lg text-sm hover:bg-slate-700">
            Login
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(true)}
        >
          <Menu size={28} />
        </button>

      </div>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Side Drawer */}
      <div
        className={`fixed top-0 right-0 h-screen w-72 bg-white shadow-xl flex flex-col justify-between p-6 transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >

        {/* Top Section */}
        <div>

          <div className="flex justify-between items-center mb-10">
            <h2 className="font-semibold text-lg">Menu</h2>

            <button onClick={() => setMenuOpen(false)}>
              <X size={26}/>
            </button>
          </div>

          <ul className="flex flex-col gap-6 text-slate-800">

            <li onClick={() => setMenuOpen(false)}>Features</li>
            <li onClick={() => setMenuOpen(false)}>How It Works</li>
            <li onClick={() => setMenuOpen(false)}>Pricing</li>
            <li onClick={() => setMenuOpen(false)}>Testimonials</li>
            <li onClick={() => setMenuOpen(false)}>FAQ</li>

          </ul>

        </div>

        {/* Bottom Buttons */}
        <div className="flex flex-col gap-4">

          <button className="border border-slate-300 py-2 rounded-lg">
            Get Started
          </button>

          <button className="bg-slate-900 text-white py-2 rounded-lg">
            Login
          </button>

        </div>

      </div>

    </nav>
  );
};

export default Navbar;