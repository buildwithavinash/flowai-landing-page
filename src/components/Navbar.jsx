const Navbar = () => {
  return (
    <nav className="border-b border-slate-600 bg-white mt-1 pb-1">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between sm:px-6 py-4">
        <h1 className="font-bold text-xl sm:text-2xl">FlowAi</h1>

        <ul className="hidden md:flex gap-8 text-sm text-slate-800">
          <li>Features</li>
          <li>How It works</li>
          <li>Pricing</li>
          <li>Testimonials</li>
          <li>FAQ</li>
        </ul>

        <div className="flex items-center gap-3 sm:gap-4">
          <button className="text-sm font-medium">Get Started</button>

          <button className="bg-slate-900 text-white px-4 py-2 rounded-lg text-sm">
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
