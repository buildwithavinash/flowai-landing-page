const Hero = () => {
  return (
    <section className="min-h-[65vh] flex items-center py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-1">
        <div className="inline-block mb-2 border border-slate-400 px-3 py-1.5 rounded-full text-xs text-slate-800 sm:px-4 sm:py-2">
          ✨ AI Powered Content Creation
        </div>

        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-3xl mx-auto mb-2">
          Create High-Converting Content in Seconds <br />with AI
        </h1>

        <p className="text-base md:text-lg text-slate-600 max-w-xl mx-auto">
          FlowAI helps creators, marketers, and businesses generate blog posts,
          ads, emails, and social media content instantly using advanced AI.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4 w-2/3 mx-auto">
          <button className="bg-slate-900 text-white px-4 py-3 rounded-xl w-full sm:w-auto">
            Start Writing Free
          </button>
          <button className="border border-slate-400 px-4 py-3 rounded-xl w-full sm:w-auto">
            Watch Demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
