const Hero = () => {
  return (
    <section className="min-h-[85vh] flex items-center">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <div className="inline-block mt-3 border border-slate-400 px-3 py-1.5 rounded-full text-xs text-slate-800 sm:px-4 sm:py-2  ">
          ✨ AI Powered Content Creation
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-3xl mx-auto">
          Create High-Converting Content in Seconds with AI
        </h1>

        <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto">
          FlowAI helps creators, marketers, and businesses generate blog posts,
          ads, emails, and social media content instantly using advanced AI.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
          <button className="bg-slate-900 text-white px-6 py-3 rounded-xl w-full sm:w-auto">
            Start Writing Free
          </button>
          <button className="border border-slate-400 px-6 py-3 rounded-xl w-full sm:w-auto">
            Watch Demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
