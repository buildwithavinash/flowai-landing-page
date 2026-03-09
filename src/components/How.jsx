
const How = () => {
  return (
    <section className="py-16 bg-slate-100">
        <div className="max-w-6xl mx-auto px-4">
            <div className="text-center">
            <h2 className="text-2xl font-semibold mb-2">Create powerful content in <br /> <span className="text-slate-900 font-bold">3</span> simple steps</h2>
            <p className="text-slate-600 mb-4 text-sm">From idea to published content in less than a minute.</p>
            </div>

            <div className="grid grid-cols-1 gap-4 mt-8">

                <div className="border px-2 py-1 rounded-lg border-slate-500">
                    <h3 className="text-lg mb-1">Choose a Template</h3>
                    <p className="text-slate-700 text-sm">Select from dozens of professionally designed templates for blog posts, ads, emails, and social media.</p>
                </div>

                 <div className="border px-2 py-1 rounded-lg border-slate-500">
                    <h3 className="text-lg mb-1">Describe Your Idea</h3>
                    <p className="text-slate-700 text-sm">Enter a topic, keywords, or a short description. FlowAI understands your intent and generates tailored content.</p>
                </div>

                 <div className="border px-2 py-1 rounded-lg border-slate-500">
                    <h3 className="text-lg mb-1">Edit & Publish</h3>
                    <p className="text-slate-700 text-sm">Refine the generated content and export it instantly to your favorite tools like Notion, Google Docs, or WordPress.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default How