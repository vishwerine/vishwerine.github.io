// PersonalLandingPage.tsx
import React from "react";

type Publication = {
  year: string;
  title: string;
  venue: string;
  role: string;
  codeUrl?: string;
  paperUrl?: string;
};

type Project = {
  title: string;
  organisation: string;
  timeframe: string;
  description: string;
  tags: string[];
  impact?: string;
  codeUrl?: string;
};

type BlogPost = {
  title: string;
  teaser: string;
  plannedDate?: string;
  status: "Draft" | "Planned";
};

const publications: Publication[] = [
  {
    year: "2023",
    title:
      "Food safety news events classification via a hierarchical transformer model",
    venue: "Heliyon 9(7)",
    role: "Co-author",
    paperUrl: "#", // TODO: add actual link
    codeUrl: "#", // TODO: add GitHub / code repo
  },
  {
    year: "2023",
    title:
      "An entropy-based method with a new benchmark dataset for Chinese textual affective structure analysis",
    venue: "Entropy 25(5)",
    role: "Co-author",
    paperUrl: "#",
    codeUrl: "#",
  },
  {
    year: "2023",
    title:
      "TRIMOON: Two-round inconsistency-based multi-modal fusion network for fake news detection",
    venue: "Information Fusion 93",
    role: "Co-author",
    paperUrl: "#",
    codeUrl: "#",
  },
  {
    year: "2022",
    title:
      "Detecting personal medication intake in Twitter via domain attention-based RNN with multi-level features",
    venue: "Computational Intelligence and Neuroscience",
    role: "Co-author",
    paperUrl: "#",
    codeUrl: "#",
  },
  {
    year: "2020",
    title:
      "Variational recurrent sequence-to-sequence retrieval for stepwise illustration",
    venue: "ECIR 2020",
    role: "First author",
    paperUrl: "#",
    codeUrl: "#",
  },
  {
    year: "2018",
    title: "Neural caption generation for news images",
    venue: "LREC 2018",
    role: "First author",
    paperUrl: "#",
    codeUrl: "#",
  },
  {
    year: "2020",
    title: "Neural Models for Stepwise Text Illustration",
    venue: "PhD Thesis, University of Warwick",
    role: "Thesis",
    paperUrl: "#",
    codeUrl: "#",
  },
];

const industryProjects: Project[] = [
  {
    title: "AI and Visual Analytics for Healthcare",
    organisation: "Apnea Tech Ltd / VUIT / Keele University",
    timeframe: "2020 – Present",
    description:
      "Lead researcher designing and deploying deep learning systems for visual analytics and AI-driven diagnostics in healthcare and MedTech.",
    tags: ["Healthcare AI", "Visual Analytics", "Deep Learning", "MedTech"],
    impact:
      "Contributed to real-world AI deployments and recognition via the 'Breaking the Mould' award (Health & Wellbeing).",
    codeUrl: "#", // TODO
  },
  {
    title: "AI for MedTech Innovation",
    organisation: "ERDF Business Bridge Programme",
    timeframe: "2022 – 2023",
    description:
      "Delivered AI and visual analytics solutions for SMEs, transitioning research outputs to commercial adoption.",
    tags: ["Industry Collaboration", "SME", "Computer Vision", "Deployment"],
    impact: "Supported innovation and technology transfer for healthcare SMEs.",
  },
  {
    title: "Deep Learning Advisor – Lowe Risor Pod Ltd",
    organisation: "Lowe Risor Pod Ltd",
    timeframe: "Mar 2022 – Jun 2022",
    description:
      "Provided technical consulting on deep learning applications to support product innovation.",
    tags: ["Consulting", "Deep Learning", "Prototyping"],
  },
  {
    title: "Handwritten Text Detection for Medical Records",
    organisation: "Folding Space, Birmingham",
    timeframe: "Feb 2016 – May 2016",
    description:
      "Developed unsupervised learning techniques and preprocessing pipelines to detect handwritten text in large-scale medical document collections.",
    tags: ["Unsupervised Learning", "Document AI", "Healthcare"],
    impact: "Achieved >85% detection accuracy on 1000+ medical documents.",
  },
];

const researchBlogPlan: BlogPost[] = [
  {
    title: "Designing Production-Ready NLP Systems with Transformers and LLMs",
    teaser:
      "Practical patterns and pitfalls from deploying transformer-based NLP models in real-world settings.",
    plannedDate: "Q1 2026",
    status: "Planned",
  },
  {
    title: "From Prototype to Product: Translating Research into MedTech AI Solutions",
    teaser:
      "Lessons learned from industry collaborations in healthcare and MedTech, focusing on robustness and regulatory constraints.",
    plannedDate: "Q2 2026",
    status: "Planned",
  },
  {
    title: "Multimodal Fake News Detection: Beyond Benchmarks",
    teaser:
      "A deep dive into multimodal architectures (including TRIMOON) and how to adapt them for production pipelines.",
    plannedDate: "Q3 2026",
    status: "Draft",
  },
];

const skills = {
  ml: [
    "NLP (NER, Text Classification, Sentiment Analysis)",
    "Transformers & LLMs",
    "Sequence-to-Sequence Models",
    "Multimodal Learning (Text–Image)",
    "Computer Vision",
    "Representation Learning (VAE, GAN)",
  ],
  tools: [
    "Python",
    "PyTorch",
    "TensorFlow",
    "Keras",
    "scikit-learn",
    "Hugging Face Transformers",
    "spaCy / NLTK",
    "Pandas / NumPy",
    "Matplotlib / Plotly",
  ],
  engineering: [
    "REST APIs (Django / Flask)",
    "Jupyter & Experiment Tracking",
    "Git / Linux / Bash",
    "Data Visualization Dashboards",
    "Continuous Improvement in Teaching & Curriculum Design",
  ],
};

const teachingHighlights = [
  "Module Lead: CSC20021 Web Technologies (Keele University)",
  "Design and delivery of Data Science, Machine Learning, and Applied AI modules (UG/PG)",
  "Industry-facing Data Science Apprenticeship Programme",
  "Advanced NLP and Deep Learning for postgraduates",
];

const PersonalLandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Top gradient background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
      <div className="absolute inset-x-0 top-0 -z-10 h-64 bg-gradient-to-b from-emerald-500/15 via-transparent to-transparent blur-3xl" />

      <header className="border-b border-slate-800/70 backdrop-blur sticky top-0 z-20">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-2xl border border-emerald-400/40 bg-slate-900 flex items-center justify-center text-sm font-semibold">
              VB
            </div>
            <div>
              <h1 className="text-lg font-semibold tracking-tight">
                Dr. Vishwash Batra
              </h1>
              <p className="text-xs text-slate-400">
                Lecturer in Computer Science · NLP & Applied AI · London, UK
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 text-xs sm:text-sm">
            <a
              href="mailto:vishwash.iitrpr@gmail.com"
              className="rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1 hover:border-emerald-400 hover:text-emerald-200 transition"
            >
              Contact
            </a>
            <a
              href="https://orcid.org/0000-0001-9049-5542"
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-block rounded-full border border-slate-700 px-3 py-1 text-slate-300 hover:border-emerald-400 hover:text-emerald-200 transition"
            >
              ORCID
            </a>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-8 space-y-10">
        {/* Hero + quick stats */}
        <section className="grid gap-6 md:grid-cols-[minmax(0,2fr),minmax(0,1.3fr)] items-start">
          <div className="space-y-4">
            <p className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-200">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Open to AI / ML Engineer · Applied Scientist · Industry-Facing Lecturer roles
            </p>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
              Building industry-ready AI systems at the intersection of{" "}
              <span className="text-emerald-300">
                NLP, multimodal learning, and healthcare
              </span>
              .
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Research-active Lecturer with 5+ years&apos; experience in university teaching,
              applied AI research, and SME collaboration. I specialise in
              transformer-based NLP, multimodal fake news detection, and
              healthcare AI, with a focus on taking models beyond prototypes and
              into production-ready systems.
            </p>
            <div className="flex flex-wrap gap-2 text-xs">
              <span className="rounded-full bg-slate-800/80 px-3 py-1 border border-slate-700">
                9+ peer-reviewed publications
              </span>
              <span className="rounded-full bg-slate-800/80 px-3 py-1 border border-slate-700">
                FHEA · Higher Education Academy Fellow
              </span>
              <span className="rounded-full bg-slate-800/80 px-3 py-1 border border-slate-700">
                Breaking the Mould Award 2023 (Health & Wellbeing)
              </span>
            </div>
          </div>

          {/* Quick summary card */}
          <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-4 sm:p-5 shadow-lg shadow-emerald-500/5">
            <h3 className="text-sm font-semibold text-slate-100 mb-3">
              Snapshot
            </h3>
            <dl className="space-y-3 text-xs text-slate-300">
              <div className="flex justify-between">
                <dt className="text-slate-400">Current role</dt>
                <dd className="text-right">
                  Lecturer, Keele University
                  <br />
                  School of Computer Science & Mathematics
                </dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-slate-400">Research</dt>
                <dd className="text-right">
                  NLP · LLMs · Multimodal Learning ·
                  <br />
                  Healthcare & Business AI
                </dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-slate-400">Location</dt>
                <dd className="text-right">London, UK (ILR)</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-slate-400">Preferred collaboration</dt>
                <dd className="text-right">
                  Applied AI projects · Industry partnerships ·
                  <br />
                  Translational research
                </dd>
              </div>
            </dl>
          </div>
        </section>

        {/* Main dashboard layout */}
        <section className="grid gap-8 lg:grid-cols-[minmax(0,2fr),minmax(0,1.2fr)] items-start">
          {/* Left column: Blog + Projects */}
          <div className="space-y-8">
            {/* Research Blog Dashboard */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold tracking-tight">
                  Research Blog & Insights
                </h3>
                <span className="text-xs text-slate-400">
                  Long-form articles on applied NLP & AI (coming soon)
                </span>
              </div>
              <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-4 sm:p-5 space-y-4">
                {researchBlogPlan.map((post, idx) => (
                  <article
                    key={post.title}
                    className={`flex flex-col gap-2 rounded-2xl border border-slate-800/70 bg-slate-900/80 px-3 py-3 sm:px-4 sm:py-3.5 ${
                      idx === 0 ? "ring-1 ring-emerald-500/30" : ""
                    }`}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <h4 className="text-sm font-semibold">{post.title}</h4>
                      <span
                        className={`text-[10px] uppercase tracking-wide rounded-full border px-2 py-0.5 ${
                          post.status === "Draft"
                            ? "border-emerald-400/60 text-emerald-200"
                            : "border-slate-600 text-slate-300"
                        }`}
                      >
                        {post.status}
                      </span>
                    </div>
                    <p className="text-xs text-slate-300">{post.teaser}</p>
                    {post.plannedDate && (
                      <p className="text-[11px] text-slate-400">
                        Planned: {post.plannedDate}
                      </p>
                    )}
                  </article>
                ))}
                <p className="text-[11px] text-slate-400 pt-1">
                  Subscribe via RSS / Email (coming soon) to be notified when
                  posts go live.
                </p>
              </div>
            </div>

            {/* Industry & Research Projects */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold tracking-tight">
                  Selected Industry & Research Projects
                </h3>
                <span className="text-xs text-slate-400">
                  Bridging research, teaching, and real-world impact
                </span>
              </div>
              <div className="space-y-4">
                {industryProjects.map((project) => (
                  <article
                    key={project.title}
                    className="rounded-3xl border border-slate-800 bg-slate-900/80 p-4 sm:p-5 hover:border-emerald-400/40 transition"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <h4 className="text-sm sm:text-base font-semibold">
                          {project.title}
                        </h4>
                        <p className="text-xs text-slate-400">
                          {project.organisation} · {project.timeframe}
                        </p>
                      </div>
                      {project.codeUrl && project.codeUrl !== "#" && (
                        <a
                          href={project.codeUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="text-[11px] rounded-full border border-emerald-500/50 px-3 py-1 text-emerald-200 hover:bg-emerald-500/10"
                        >
                          View project code
                        </a>
                      )}
                    </div>
                    <p className="mt-3 text-xs sm:text-sm text-slate-200">
                      {project.description}
                    </p>
                    {project.impact && (
                      <p className="mt-2 text-[11px] text-emerald-200">
                        Impact: {project.impact}
                      </p>
                    )}
                    <div className="mt-3 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] rounded-full bg-slate-900/80 px-2.5 py-1 border border-slate-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>

          {/* Right column: Publications, Skills, Teaching */}
          <div className="space-y-8">
            {/* Publications */}
            <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-4 sm:p-5">
              <h3 className="text-lg font-semibold tracking-tight mb-2">
                Publications & Research Outputs
              </h3>
              <p className="text-xs text-slate-400 mb-3">
                Full list available via ORCID. This is a curated subset focused
                on applied NLP, multimodal learning, and healthcare AI.
              </p>
              <div className="space-y-3 max-h-80 overflow-y-auto pr-1">
                {publications.map((pub) => (
                  <div
                    key={pub.title}
                    className="rounded-2xl border border-slate-800 bg-slate-950/60 px-3 py-2 text-xs"
                  >
                    <div className="flex justify-between gap-2">
                      <span className="text-[11px] text-slate-400">
                        {pub.year}
                      </span>
                      <span className="text-[11px] text-slate-400">
                        {pub.role}
                      </span>
                    </div>
                    <p className="mt-1 font-medium text-slate-100">
                      {pub.title}
                    </p>
                    <p className="text-[11px] text-slate-400">{pub.venue}</p>
                    <div className="mt-1 flex flex-wrap gap-2">
                      {pub.paperUrl && pub.paperUrl !== "#" && (
                        <a
                          href={pub.paperUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="text-[11px] underline underline-offset-2 text-slate-300 hover:text-emerald-200"
                        >
                          Paper
                        </a>
                      )}
                      {pub.codeUrl && pub.codeUrl !== "#" && (
                        <a
                          href={pub.codeUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="text-[11px] underline underline-offset-2 text-emerald-200"
                        >
                          Code / Repo
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-4 sm:p-5 space-y-3">
              <h3 className="text-lg font-semibold tracking-tight">
                Technical Focus
              </h3>
              <div className="grid gap-3 text-xs sm:text-[13px]">
                <div>
                  <h4 className="font-semibold text-slate-100 mb-1">
                    Machine Learning & AI
                  </h4>
                  <ul className="list-disc list-inside text-slate-300 space-y-1">
                    {skills.ml.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-100 mb-1">
                    Frameworks & Libraries
                  </h4>
                  <p className="text-slate-300">
                    {skills.tools.join(" · ")}
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-100 mb-1">
                    Engineering & Delivery
                  </h4>
                  <p className="text-slate-300">
                    {skills.engineering.join(" · ")}
                  </p>
                </div>
              </div>
            </div>

            {/* Teaching & Academic Leadership */}
            <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-4 sm:p-5 space-y-3">
              <h3 className="text-lg font-semibold tracking-tight">
                Teaching & Academic Leadership
              </h3>
              <p className="text-xs text-slate-300">
                I design and deliver research-led curricula that prepare
                students and apprentices to work effectively with modern AI
                stacks in industry.
              </p>
              <ul className="list-disc list-inside text-xs text-slate-300 space-y-1">
                {teachingHighlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="text-[11px] text-slate-400">
                Fellow of the Higher Education Academy (FHEA), demonstrating
                sustained excellence in teaching and learning support.
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-slate-800 pt-4 mt-4 pb-6 text-[11px] text-slate-500 flex flex-wrap items-center justify-between gap-2">
          <span>
            © {new Date().getFullYear()} · Dr. Vishwash Batra · NLP & Applied AI
          </span>
          <span>
            Built with React & Tailwind CSS · Industry-focused academic profile
          </span>
        </footer>
      </main>
    </div>
  );
};

export default PersonalLandingPage;
