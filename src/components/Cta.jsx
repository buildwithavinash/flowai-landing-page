const Cta = () => {
  return (
    <section className="py-16 bg-slate-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center">
          <h2 className="font-bold text-3xl">
            Start creating content 10x faster today{" "}
          </h2>
          <p className="text-slate-600">
            Join thousands of creators and teams using FlowAI to generate better
            content in seconds.
          </p>
        </div>

        <div className="flex flex-col gap-4 mt-4 items-center justify-center">
          <button className="bg-slate-900 text-white px-4 py-2 rounded-xl sm:w-auto">
            Start Writing for Free
          </button>
          <button className="border border-slate-400 px-4 py-2 rounded-xl sm:w-auto">
            Book a Demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default Cta;
