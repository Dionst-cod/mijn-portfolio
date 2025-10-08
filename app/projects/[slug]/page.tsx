import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { projects } from "@/data/projects";
import Link from "next/link";
import Image from "next/image";

type Props = { params: { slug: string } };

export function generateMetadata({ params }: Props): Metadata {
  const p = projects.find((x) => x.slug === params.slug);
  if (!p) return { title: "Project niet gevonden" };
  return {
    title: `${p.title} — Project`,
    description: p.summary,
  };
}

export default function ProjectPage({ params }: Props) {
  const p = projects.find((x) => x.slug === params.slug);
  if (!p) return notFound();

  return (
    <main className="min-h-screen bg-[#0b0e1a] text-white">
      <section className="mx-auto max-w-3xl px-4 py-16">
        <Link
          href="/#projects"
          aria-label="Terug naar projecten"
          className="text-sm text-white/70 hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-400/60 focus:ring-offset-2 focus:ring-offset-[#0b0e1a]"
        >
          ← Terug naar projecten
        </Link>

        <h1 className="mt-4 text-3xl font-semibold">{p.title}</h1>
        <p className="mt-3 text-white/70">{p.summary}</p>

        {p.image && (
          <div className="relative mt-6 w-full aspect-[16/10]">
            <Image
              src={p.image} // voorbeeld: /projects/portfolio-site/cover.jpg in /public
              alt={p.title}
              fill
              className="rounded-2xl border border-white/10 object-cover"
              sizes="(min-width: 1024px) 768px, 100vw"
              priority={false}
            />
          </div>
        )}

        <div className="mt-6 flex flex-wrap gap-2">
          {p.tech?.map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-6 flex gap-3">
          {p.url && (
            <a
              className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-white/90"
              href={p.url}
              target="_blank"
              rel="noreferrer"
            >
              Live demo
            </a>
          )}
          {p.repo && (
            <a
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm hover:bg-white/10"
              href={p.repo}
              target="_blank"
              rel="noreferrer"
            >
              Code op GitHub
            </a>
          )}
        </div>

        <div className="mt-10 max-w-2xl leading-relaxed space-y-6">
          <section className="space-y-3">
            <h2 className="text-xl font-semibold tracking-tight">Doel</h2>
            <p>
              Als student softwareontwikkeling wilde ik een professioneel portfolio maken om mijn
              vaardigheden in front-end development te tonen. Mijn doel was om een site te bouwen
              die modern oogt, snel laadt en makkelijk uit te breiden is, zodat ik hiermee mijn
              eerste baan als front-end developer kan vinden.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold tracking-tight">Rol &amp; tools</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <strong>Rol:</strong> Student softwareontwikkeling, zelfstandig ontwikkeld
              </li>
              <li>
                <strong>Stack:</strong> Next.js (App Router), TypeScript, Tailwind CSS, Framer
                Motion
              </li>
              <li>
                <strong>Hosting:</strong> Vercel (gratis hosting + automatische deploys)
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold tracking-tight">Aanpak</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                Next.js gekozen om praktijkervaring op te doen met een veelgevraagde moderne
                framework.
              </li>
              <li>Tailwind CSS gebruikt voor consistente en responsive styling.</li>
              <li>Framer Motion toegepast voor subtiele micro-interacties.</li>
              <li>
                Projectgegevens dynamisch in <code>data/projects.ts</code> met publicatiedatum.
              </li>
              <li>Deploy via GitHub → Vercel (CI/CD).</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold tracking-tight">Resultaat</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Online portfolio, deelbaar met recruiters.</li>
              <li>Volledig responsief design.</li>
              <li>Goede performance en toegankelijkheid.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold tracking-tight">Learnings</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Project van A tot Z opgezet met moderne tools.</li>
              <li>Meer inzicht in responsief design, a11y en performance.</li>
              <li>Klaar om te leren binnen een professioneel team.</li>
            </ul>
          </section>
        </div>
      </section>
    </main>
  );
}
