const Cta = () => {
  return (
    <section className="py-16 bg-slate-100 lg:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-semibold mb-4">
            Start creating content 10x faster today
          </h2>
          <p className="text-sm md:text-base lg:text-xl text-slate-600">
            Join thousands of creators and teams using FlowAI to generate better
            content in seconds.
          </p>
        </div>

        <div className="flex flex-col gap-4 mt-4 items-center justify-center *:cursor-pointer *:transition-all *:duration-200">
          <button className="bg-slate-900 text-white px-4 py-2 rounded-xl sm:w-auto hover:bg-slate-700">
            Start Writing for Free
          </button>
          <button className="border border-slate-400 px-4 py-2 rounded-xl sm:w-auto hover:bg-slate-800 hover:text-slate-100">
            Book a Demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default Cta;
