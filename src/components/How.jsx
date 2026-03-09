
const How = () => {
  return (
    <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
            <div className="text-center">
            <h2 className="text-3xl">Create powerful content in <span className="text-indigo-600 font-bold">3</span> simple steps</h2>
            <p className="text-slate-600 mb-4">From idea to published content in less than a minute.</p>
            </div>

            <div className="grid grid-cols-1 gap-4">

                <div className="border px-2 py-1 rounded-lg border-slate-500">
                    <h3>Choose a Template</h3>
                    <p className="text-slate-700">Select from dozens of professionally designed templates for blog posts, ads, emails, and social media.</p>
                </div>

                 <div className="border px-2 py-1 rounded-lg border-slate-500">
                    <h3>Describe Your Idea</h3>
                    <p className="text-slate-700">Enter a topic, keywords, or a short description. FlowAI understands your intent and generates tailored content.</p>
                </div>

                 <div className="border px-2 py-1 rounded-lg border-slate-500">
                    <h3>Edit & Publish</h3>
                    <p className="text-slate-700">Refine the generated content and export it instantly to your favorite tools like Notion, Google Docs, or WordPress.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default How