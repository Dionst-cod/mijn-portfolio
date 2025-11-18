"use client";
import React from "react";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import Image from "next/image";

// ————————————————————————————————————————
// Single‑file demo portfolio
// Drop this into a Next.js page (app/page.tsx) or use as a starting point.
// Tailwind classes assume you've set up Tailwind in your project.
// ————————————————————————————————————————

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs backdrop-blur-md">
      {children}
    </span>
  );
}

function SectionHeading({ kicker, title, subtitle }: { kicker?: string; title: string; subtitle?: string }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {kicker && (
        <p className="mb-2 text-sm uppercase tracking-widest text-indigo-300/80">{kicker}</p>
      )}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white">{title}</h2>
      {subtitle && (
        <p className="mt-3 text-white/70">{subtitle}</p>
      )}
    </div>
  );
}

function Container({ id, children }: { id?: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}

function Nav() {
  const links = [
    { href: "#about", label: "Over mij" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Ervaring" },
    { href: "#projects", label: "Projecten" },
    { href: "#contact", label: "Contact" }
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#0b0e1a]/70 backdrop-blur-xl">
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-xl focus:bg-white focus:px-4 focus:py-2 focus:text-slate-900 focus:shadow"
      >
        Sla navigatie over en ga naar inhoud
      </a>

      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#home" className="group inline-flex items-center gap-2">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-500/20 ring-1 ring-inset ring-indigo-400/30">
            <svg viewBox="0 0 24 24" className="h-4 w-4 text-indigo-300" fill="currentColor" aria-hidden>
              <path d="M12 2l3.5 6.5L22 9l-5 4.9L18.5 21 12 17.8 5.5 21 7 13.9 2 9l6.5-.5L12 2z" />
            </svg>
          </span>
          <span className="text-sm font-semibold tracking-wide text-white">Dion Stolk</span>
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-white/70 transition hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-400/60 focus:ring-offset-2 focus:ring-offset-[#0b0e1a]"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-white/90 hover:bg-white/10
                     focus:outline-none focus:ring-2 focus:ring-indigo-400/60 focus:ring-offset-2 focus:ring-offset-[#0b0e1a]"
        >
          Neem contact op
        </a>
      </div>
    </header>
  );
}


function Hero() {
  const tech = ["Next.js", "TypeScript", "Tailwind CSS", "React", "Accessibility", "Testing"];
  return (
    <Container id="home">
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-900/40 via-slate-900/40 to-slate-950 p-8 shadow-2xl ring-1 ring-white/10">
          <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-indigo-500/20 blur-3xl" />
          <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />

          <div className="relative grid gap-8 md:grid-cols-2">
            <div>
              <div className="mb-4 flex items-center gap-2">
                <Badge>Beschikbaar voor werk</Badge>
                <Badge>Front‑end Developer</Badge>
              </div>
              <h1 className="text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-5xl">
                Student softwareontwikkeling — klaar voor mijn eerste front-end rol.
              </h1>
              <p className="mt-4 text-white/70">
                Ik bouw moderne, snelle UI’s met Next.js, TypeScript en Tailwind. 
                Ik ben leergierig, werk netjes (a11y & performance) en zoek een plek 
                waar ik kan groeien tot front-end developer.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href="#projects"
                  className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow hover:bg-white/90 
                             focus:outline-none focus:ring-2 focus:ring-indigo-400/60 focus:ring-offset-2 focus:ring-offset-[#0b0e1a]"
                >
                  Bekijk projecten
                </a>

                <a
                  href="mailto:stolkdion@gmail.com"  
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/90 hover:bg-white/10 
                             focus:outline-none focus:ring-2 focus:ring-indigo-400/60 focus:ring-offset-2 focus:ring-offset-[#0b0e1a]"
                >
                  Neem contact op
                </a>

                <a
                  href="/cv.pdf"                 
                  download="Dion-Stolk-CV.pdf"   
                  type="application/pdf"
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/90 hover:bg-white/10 
                             focus:outline-none focus:ring-2 focus:ring-indigo-400/60 focus:ring-offset-2 focus:ring-offset-[#0b0e1a]"
                >
                  Download CV
                </a>

              </div>
              <div className="mt-8 flex flex-wrap gap-2">
                {tech.map((t) => (
                  <Badge key={t}>{t}</Badge>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative aspect-square w-72 max-w-full">
                <div className="flex items-center justify-center">
                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="relative"
                  >
                    <div
                      className="pointer-events-none absolute -inset-2 rounded-[32px] bg-gradient-to-br
                                from-indigo-500/40 via-fuchsia-500/30 to-cyan-400/20 opacity-60 blur-xl"
                      aria-hidden="true"
                    />
                    <div className="relative overflow-hidden rounded-[28px] border border-white/15 bg-slate-950/60 shadow-2xl">
                      <div className="relative aspect-square w-72 max-w-full">
                        <Image
                          src="/me.png"
                          alt="Profielfoto van Dion Stolk"
                          fill
                          className="object-cover object-[50%_15%]"
                          priority
                        />
                      </div>
                      <div className="border-t border-white/10 bg-black/30 px-4 py-3 text-sm text-white/80 flex items-center justify-between">
                        <span className="font-semibold">Dion Stolk</span>
                        <span className="text-xs text-white/60">Front-end developer</span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </Container>
  );
}

function About() {
  return (
    <Container id="about">
      <SectionHeading
        kicker="Intro"
        title="Wie ik ben"
        subtitle="Student softwareontwikkeling met een sterke interesse in front-end."
      />

      {/* Gecentreerde, vettere tekst + compacte highlight-kaart eronder */}
      <div className="mx-auto mt-10 max-w-3xl text-center">
        <div className="space-y-5 leading-relaxed text-white/90 font-medium">
          <p>
            Ik ben <strong>student softwareontwikkeling</strong> met focus op front-end. Ik leer snel en werk
            graag met moderne tools zoals <strong>Next.js</strong>, <strong>TypeScript</strong> en{" "}
            <strong>Tailwind CSS</strong>. Mijn doel is om mijn eerste <strong>stage/entry-level</strong> rol te
            vinden waarin ik kan groeien als front-end developer.
          </p>
          <p>
            In dit portfolio laat ik projecten zien waar ik aan werk (of binnenkort publiceer). Ik besteed
            aandacht aan <strong>performance</strong>, <strong>toegankelijkheid (a11y)</strong> en nette,
            herbruikbare componenten.
          </p>
          <p className="text-white/80">
            Sta je open voor een gemotiveerde junior?{" "}
            <a className="underline" href="mailto:stolkdion@gmail.com">Mail me gerust</a> of{" "}
            <a className="underline" href="#contact">laat je gegevens achter</a>.
          </p>
        </div>

        {/* Highlights onder de tekst, gecentreerd */}
        <div className="mt-8 mx-auto max-w-md">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h3 className="text-sm font-semibold text-white">Over mij in het kort</h3>
            <ul className="mt-3 space-y-2 text-sm text-white/85">
              <li>🎓 Student softwareontwikkeling</li>
              <li>🧩 Front-end focus (React/Next.js)</li>
              <li>🎨 TypeScript & Tailwind</li>
              <li>⚙️ Interesse in a11y & performance</li>
              <li>📬 Beschikbaar voor stage/entry-level</li>
            </ul>
            <div className="mt-4 flex justify-center gap-2">
              <a
                href="#projects"
                className="rounded-xl bg-white px-3 py-2 text-xs font-semibold text-slate-900 hover:bg-white/90"
              >
                Bekijk projecten
              </a>
              <a
                href="#contact"
                className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/90 hover:bg-white/10"
              >
                Neem contact op
              </a>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

function Skills() {
  const groups = [
    {
      title: "Front-end basis",
      items: ["HTML", "CSS", "Javascript", "React", "Next.js", "TypeScript"]
    },
    {
      title: "Tools & Frameworks",
      items: ["Tailwind CSS", "Git", "VS Code", "Vercel",]
    },
    {
      title: "Persoonlijke skills",
      items: ["Leergierig", "Nauwkeurig", "Probleemoplossend", "Teamspeler"]
    }
  ];
  return (
    <Container id="skills">
      <SectionHeading kicker="Skills" title="Waar ik goed in ben" />
      <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {groups.map((g) => (
          <div key={g.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h3 className="text-sm font-semibold text-white">{g.title}</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {g.items.map((i) => (
                <Badge key={i}>{i}</Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}

function Experience() {
  const items = [
    {
      role: "Logistiek Medewerker",
      company: "Diverse bedrijven",
      period: "2019 – 2024",
      bullets: [
        "Verantwoordelijk voor ontvangst, opslag en verzending van goederen",
        "Werkte nauwkeurig en efficiënt binnen teamverband",
        "Leerde gestructureerd werken en prioriteiten stellen"
      ]
    },
    {
      role: "Student Softwareontwikkeling",
      company: "Hogeschool Rotterdam",
      period: "2024 – heden",
      bullets: [
        "Bezig met opleiding richting full stack development",
        "Oefent met React, Next.js en TypeScript",
        "Bouwt projecten om praktische ervaring op te doen"
      ]
    }
  ];

  return (
    <Container id="experience">
      <SectionHeading kicker="Ervaring" title="Waar ik gewerkt heb" />
      <div className="mt-8 space-y-4">
        {items.map((job, idx) => (
          <div key={idx} className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <div className="flex flex-col justify-between gap-2 sm:flex-row">
              <div>
                <h3 className="text-base font-semibold text-white">{job.role}</h3>
                <p className="text-sm text-white/70">{job.company}</p>
              </div>
              <p className="text-sm text-white/50">{job.period}</p>
            </div>
            <ul className="mt-3 list-inside list-disc text-white/80">
              {job.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Container>
  );
}

function ProjectSkeleton({ title }: { title: string }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
      <div
        className="absolute inset-0 bg-[linear-gradient(110deg,transparent,rgba(255,255,255,.06),transparent)] bg-[length:200%_100%] animate-[shimmer_2.5s_infinite]"
        aria-hidden="true"
      />
      <div className="aspect-[16/10]" />
      <div className="p-5">
        <div className="mb-2 flex items-center justify-between">
          <h4 className="text-base font-semibold text-white">{title}</h4>
          <span className="rounded-full border border-yellow-300/30 bg-yellow-300/10 px-2 py-1 text-[10px] uppercase tracking-wide text-yellow-200">
            Binnenkort
          </span>
        </div>
        <p className="text-sm text-white/70">
          Dit project verschijnt zodra het klaar is. Kom snel terug!
        </p>
      </div>
    </div>
  );
}

function Projects() {
  const isPublished = (date?: string) => {
    if (!date) return true;
    const now = new Date();
    const publish = new Date(date + "T00:00:00");
    return publish <= now;
  };

  const published = projects.filter(p => isPublished(p.publishAt));
  const upcoming = projects.filter(p => !isPublished(p.publishAt));

  return (
    <Container id="projects">
      <SectionHeading
        kicker="Portfolio"
        title="Projecten"
        subtitle={
          published.length === 0
            ? "De eerste cases worden binnenkort gepubliceerd. Hieronder alvast ruimtehouders."
            : "Een selectie van projecten. Meer komt eraan."
        }
      />

      {/* Gepubliceerde projecten */}
      {published.length > 0 && (
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {published.map(p => (
            <a
              key={p.slug}
              href={`/projects/${p.slug}`}           // interne detailpagina
              aria-label={`Open project: ${p.title}`} // duidelijk voor screenreaders
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5
                        transition-shadow focus:outline-none focus:ring-2 focus:ring-indigo-400/60
                        focus:ring-offset-2 focus:ring-offset-[#0b0e1a] hover:shadow-lg"
            >
              {p.image ? (
                <div className="relative aspect-[16/10]">
                  <Image
                    src={p.image}          // bv. /projects/portfolio-site/cover.jpg in /public
                    alt={p.title}
                    fill                   // vult de parent met aspect ratio
                    className="object-cover object-center"
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    priority={false}
                  />
                </div>
              ) : (
                <div className="aspect-[16/10]" />
              )}

  <div className="p-5">
    <div className="mb-2 flex items-center justify-between">
      <h4 className="text-base font-semibold text-white">{p.title}</h4>
      {p.repo && (
        <span className="rounded-full border border-white/10 bg-white/10 px-2 py-1 text-[10px] uppercase tracking-wide text-white/80">
          Code
        </span>
      )}
    </div>
    <p className="text-sm text-white/70">{p.summary}</p>
    <div className="mt-3 flex flex-wrap gap-2">
      {p.tech.map((t) => (
        <Badge key={t}>{t}</Badge>
      ))}
    </div>
  </div>
</a>

          ))}
        </div>
      )}

      {/* Nog niet gepubliceerde projecten als skeletons */}
      {upcoming.length > 0 && (
        <>
          {published.length > 0 && (
            <div className="mt-10 text-sm text-white/60">Binnenkort meer:</div>
          )}
          <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {upcoming.map(p => (
              <ProjectSkeleton key={p.slug} title={p.title} />
            ))}
          </div>
        </>
      )}
    </Container>
  );
}


function Contact() {
  return (
    <Container id="contact">
      <SectionHeading kicker="Contact" title="Samenwerken?" />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          alert("Bedankt! Ik neem snel contact met je op.");
        }}
        className="mx-auto mt-8 max-w-2xl rounded-2xl border border-white/10 bg-white/5 p-6"
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-1 block text-xs font-medium text-white/80">Naam</label>
            <input className="w-full rounded-xl border border-white/10 bg-[#0b0e1a] px-3 py-2 text-white outline-none ring-0 placeholder:text-white/30" placeholder="Jouw naam" required />
          </div>
          <div>
            <label className="mb-1 block text-xs font-medium text-white/80">E‑mail</label>
            <input type="email" className="w-full rounded-xl border border-white/10 bg-[#0b0e1a] px-3 py-2 text-white outline-none ring-0 placeholder:text-white/30" placeholder="you@example.com" required />
          </div>
        </div>
        <div className="mt-4">
          <label className="mb-1 block text-xs font-medium text-white/80">Bericht</label>
          <textarea rows={5} className="w-full rounded-xl border border-white/10 bg-[#0b0e1a] px-3 py-2 text-white outline-none placeholder:text-white/30" placeholder="Waar kan ik mee helpen?" />
        </div>
        <div className="mt-5 flex items-center justify-between">
          <p className="text-xs text-white/60">Of mail direct: <a className="underline" href="mailto:stolkdion@gmail.com">stolkdion@gmail.com</a></p>
          <button type="submit" className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow hover:bg-white/90">
            Verstuur
          </button>
        </div>
      </form>
    </Container>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 py-10 text-center text-xs text-white/60">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        © {new Date().getFullYear()} Dion Stolk — Gebouwd met Next.js & Tailwind.
      </div>
    </footer>
  );
}

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-[#0b0e1a] text-white">
      <style>{`
        @keyframes shimmer { 0%{background-position: 200% 0;} 100%{background-position: -200% 0;} }
      `}</style>
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
