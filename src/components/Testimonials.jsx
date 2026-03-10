
const Testimonials = () => {
  return (
    <section className="py-16 bg-white lg:py-24">
        <div className="max-w-6xl mx-auto px-4"> 
            <div className="text-center">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-2">Loved by creators and teams worldwide</h2>
                <p className="text-sm md:text-base text-slate-600">See how professionals are using FlowAI to scale their content production.</p>
            </div>

            <div className="grid grid-cols-1 gap-4 mt-8 lg:grid-cols-3">
                <div className="border border-slate-400 px-2 py-1 rounded-xl">
                    <h3 className="text-lg md:text-xl font-semibold mb-1">Sarah Mitchell</h3>
                    <p className="text-sm text-slate-600">Content Strategist</p>
                    <p className="text-base md:text-lg mt-2">"FlowAI has completely transformed how I create content. What used to take hours now takes minutes."</p>
                </div>

                <div className="border border-slate-400 px-2 py-1 rounded-xl">
                    <h3 className="text-lg md:text-xl font-semibold mb-1">James Carter</h3>
                    <p className="text-sm text-slate-600">Startup Founder</p>
                    <p className="text-base md:text-lg mt-2">"We use FlowAI for blog posts, ads, and emails. It feels like having a full content team."</p>
                </div>

                <div className="border border-slate-400 px-2 py-1 rounded-xl">
                    <h3 className="text-lg md:text-xl font-semibold mb-1">Emily Rodriguez</h3>
                    <p className="text-sm text-slate-600">Freelance Copywriter</p>
                    <p className="text-base md:text-lg mt-2">"The templates and AI suggestions are incredibly helpful. My productivity has easily doubled."</p>
                </div>
            </div>
        </div>
        </section>
  )
}

export default Testimonials