const features = [
  {
    title: "AI Content Generator",
    desc: "Generate blogs, ads and emails instantly."
  },
  {
    title: "SEO Optimization",
    desc: "Improve ranking with AI suggestions."
  },
  {
    title: "50+ Templates",
    desc: "Use ready templates for different needs."
  },
  {
    title: "Instant Editing",
    desc: "Rewrite or summarize content instantly."
  },
  {
    title: "Team Collaboration",
    desc: "Work together with your team."
  },
  {
    title: "Export Anywhere",
    desc: "Send content to Notion, Docs or WordPress."
  }
]

const Features = () => {

    return (
            <section className="py-24 bg-slate-100">

                <div className="max-w-6xl mx-auto px-6">

                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold">
                            Powerful AI tools to create better content faster
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {features.map((f, i)=> (
                            <div key={i} className="border border-slate-600 p-6 rounded-xl hover:shadow-md transition">

                                <h3 className="font-semibold text-lg mb-2">{f.title}</h3>

                                <p className="text-slate-700">
                                    {f.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

            </section>
    )
}

export default Features