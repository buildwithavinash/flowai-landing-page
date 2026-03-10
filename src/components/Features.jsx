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
            <section className="py-16 bg-white lg:py-20">

                <div className="max-w-6xl mx-auto px-6">

                    <div className="text-center">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
                            Powerful AI tools to create better content faster
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mt-8">
                        {features.map((f, i)=> (
                            <div key={i} className="border border-slate-300 p-6 rounded-xl hover:shadow-md transition">

                                <h3 className="text-lg md:text-xl font-semibold mb-2">{f.title}</h3>

                                <p className="text-sm text-slate-600">
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