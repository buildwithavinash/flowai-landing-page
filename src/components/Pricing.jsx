const Pricing = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">

        <h2 className="text-2xl sm:text-3xl font-bold mb-12">Simple Pricing</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          <div className="border p-8 rounded-xl">
            <h3 className="font-bold text-xl">Free</h3>
            <p className="text-3xl my-4">$0</p>
            <button className="border px-6 py-2 rounded-lg">Get Started</button>
          </div>

          <div className="border p-8 rounded-xl bg-white shadow-md">
            <h3 className="font-bold text-xl">Pro</h3>
            <p className="text-3xl my-4">$19</p>
            <button className="bg-slate-900 text-white px-6 py-2 rounded-lg">
              Start Trial
            </button>
          </div>

           <div className="border p-8 rounded-xl">
            <h3 className="font-bold text-xl">Business</h3>
            <p className="text-3xl my-4">$49</p>
            <button className="border px-6 py-2 rounded-lg">
              Contact
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Pricing;
