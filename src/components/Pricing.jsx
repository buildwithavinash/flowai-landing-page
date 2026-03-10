const Pricing = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">

        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-12">Simple Pricing</h2>

        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          <div className="border border-slate-400 p-8 rounded-xl flex flex-col">
            <h3 className="font-semibold text-xl lg:text-3xl mb-4">Starter</h3>
            <p className="lg:text-4xl">$0<span className="text-base text-slate-600">/month</span></p>
            <p className="text-slate-700 mt-1 text-center">Perfect for individuals trying out FlowAI.</p>
            <ul className="flex flex-col items-start gap-2 my-8">
              <li>5 AI content generations per day</li>
              <li>Basic writing templates</li>
              <li>Blog & social media generator</li>
              <li>Standard response speed</li>
              <li>Community support</li>
            </ul>
            <button className="border px-6 py-2 rounded-lg mt-auto hover:bg-slate-800 hover:text-slate-50 cursor-pointer transition-all duration-200">Get Started</button>
          </div>

          <div className="border border-slate-600 p-8 rounded-xl bg-white shadow-md flex flex-col relative">
            <h3 className="font-semibold text-xl lg:text-3xl mb-4">Pro</h3>
            <p className="absolute right-4 top-4 bg-sky-700 text-slate-100 px-2 py-1 rounded-full text-sm">Most Popular</p>
            <p className="lg:text-4xl">$19<span className="text-base text-slate-600">/month</span></p>
            <p className="text-slate-700 mt-1 text-center leading-tight">Best for creators and freelancers producing content regularly.</p>
            <ul className="flex flex-col items-start gap-2 my-8 *:flex *:justify-start">
              <li>Unlimited AI content generation</li>
              <li>50+ advanced templates</li>
              <li>SEO optimization suggestions</li>
              <li>Faster AI responses</li>
              <li>Content rewriting & summarization</li>
              <li>Export to Notion & Google Docs</li>
              <li>Priority support</li>
            </ul>
            <button className="bg-slate-900 text-white px-6 py-2 rounded-lg mt-auto cursor-pointer hover:bg-slate-600 transition-all duration-200">
              Start Free Trial
            </button>
          </div>

           <div className="border border-slate-400 p-8 rounded-xl flex flex-col">
            <h3 className="font-semibold text-xl lg:text-3xl mb-4">Business</h3>
            <p className="lg:text-4xl">$49<span className="text-base text-slate-600">/month</span></p>
            <p className="text-slate-700 mt-1 text-center">For teams and businesses scaling their content operations.</p>
            <ul className="flex flex-col items-start gap-2 my-8">
              <li>Everything in Pro</li>
              <li>Team collaboration tools</li>
              <li>Shared content workspace</li>
              <li>API access</li>
              <li>Advanced analytics dashboard</li>
              <li>Custom integrations</li>
              <li>Dedicated support</li>
            </ul>
            <button className="border px-6 py-2 rounded-lg mt-auto hover:bg-slate-800 hover:text-slate-50 cursor-pointer transition-all duration-200">
              Contact Sales
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Pricing;
