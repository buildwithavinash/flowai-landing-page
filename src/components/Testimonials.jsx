
const Testimonials = () => {
  return (
    <section className="py-16 bg-slate-100">
        <div className="max-w-6xl mx-auto px-4"> 
            <div className="text-center">
                <h2 className="text-2xl">Loved by creators and teams worldwide</h2>
                <p className="text-slate-600">See how professionals are using FlowAI to scale their content production.</p>
            </div>

            <div className="grid grid-cols-1 gap-4 mt-4">
                <div className="border border-slate-600 px-2 py-1 rounded-xl">
                    <h3 className="font-bold">Sarah Mitchell</h3>
                    <p className="text-slate-600">Content Strategist</p>
                    <p>"FlowAI has completely transformed how I create content. What used to take hours now takes minutes."</p>
                </div>

                <div className="border border-slate-600 px-2 py-1 rounded-xl">
                    <h3 className="font-bold">James Carter</h3>
                    <p className="text-slate-600">Startup Founder</p>
                    <p>"We use FlowAI for blog posts, ads, and emails. It feels like having a full content team."</p>
                </div>

                <div className="border border-slate-600 px-2 py-1 rounded-xl">
                    <h3 className="font-bold">Emily Rodriguez</h3>
                    <p className="text-slate-600">Freelance Copywriter</p>
                    <p>"The templates and AI suggestions are incredibly helpful. My productivity has easily doubled."</p>
                </div>
            </div>
        </div>
        </section>
  )
}

export default Testimonials