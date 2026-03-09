
const Trusted = () => {
  const logos = ["Stripe", "Notion", "Shopify", "HubSpot", "Webflow", "Zapier"];
  return (
    <section className="py-16 bg-slate-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-slate-900 font-semibold text-center text-4xl mb-2">
          Trusted by creators and Startups worldwide
        </h2>

        <p className="text-slate-600 text-center mb-4 text-xl">
          More than 10,000 creators, marketers, and founders use FlowAI to
          generate high-converting content faster.
        </p>

<div className="logo__container overflow-hidden text-center">
    <div className="flex gap-12 logo__scroll text-center whitespace-nowrap w-max text-slate-600">
          {[...logos, ...logos, ...logos].map((logo, i) => (
            <p className="text-4xl" key={i}>{logo}</p>
          ))}
        </div>
</div>
        
      </div>
    </section>
  );
};

export default Trusted;
