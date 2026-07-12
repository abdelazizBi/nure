"use client";

import { useMemo, useState } from "react";
import type { CSSProperties } from "react";
import Link from "next/link";
import { Button } from "@/components/Button";
import { NoteChips } from "@/components/NoteChips";
import { ProductVisual } from "@/components/ProductVisual";
import { SprayMist } from "@/components/PremiumMotion";
import { products, type Product } from "@/lib/data";

type Option = { label: string; scores: Record<string, number> };
type Question = { eyebrow: string; prompt: string; options: Option[] };

const questions: Question[] = [
  { eyebrow: "Mood", prompt: "What should your fragrance feel like?", options: [
    { label: "Clean and luminous", scores: { "white-oud": 4, "solar-musk": 2 } },
    { label: "Warm and sensual", scores: { "solar-musk": 3, "pearl-amber": 3 } },
    { label: "Soft and floral", scores: { "desert-bloom": 4, "saffron-veil": 1 } },
    { label: "Rich and mysterious", scores: { "noor-elixir": 4, "saffron-veil": 2 } },
  ]},
  { eyebrow: "Occasion", prompt: "When will you wear it most?", options: [
    { label: "Everyday ritual", scores: { "solar-musk": 4, "white-oud": 2 } },
    { label: "Evening presence", scores: { "noor-elixir": 4, "saffron-veil": 2 } },
    { label: "Work and calm focus", scores: { "white-oud": 4, "pearl-amber": 2 } },
    { label: "Special moments", scores: { "saffron-veil": 4, "noor-elixir": 2 } },
  ]},
  { eyebrow: "Scent direction", prompt: "Which note draws you in first?", options: [
    { label: "Oud", scores: { "white-oud": 4, "noor-elixir": 3 } },
    { label: "Musk", scores: { "solar-musk": 4, "white-oud": 2 } },
    { label: "Amber", scores: { "pearl-amber": 4, "noor-elixir": 2 } },
    { label: "Saffron", scores: { "saffron-veil": 4, "noor-elixir": 2 } },
    { label: "Rose", scores: { "desert-bloom": 4, "saffron-veil": 2 } },
  ]},
  { eyebrow: "Presence", prompt: "How should it enter the room?", options: [
    { label: "Soft and close", scores: { "white-oud": 3, "desert-bloom": 3 } },
    { label: "Noticeable but refined", scores: { "saffron-veil": 4, "white-oud": 2 } },
    { label: "Warm and lasting", scores: { "pearl-amber": 4, "solar-musk": 2 } },
    { label: "Deep and memorable", scores: { "noor-elixir": 5 } },
  ]},
  { eyebrow: "Texture", prompt: "What texture feels most like you?", options: [
    { label: "Pearl light", scores: { "white-oud": 4, "pearl-amber": 2 } },
    { label: "Golden warmth", scores: { "solar-musk": 4, "pearl-amber": 3 } },
    { label: "Desert air", scores: { "desert-bloom": 5 } },
    { label: "Smoked resin", scores: { "noor-elixir": 4, "saffron-veil": 2 } },
  ]},
];

function QuizProgress({ step }: { step: number }) {
  return (
    <div className="mb-8 sm:mb-10" role="progressbar" aria-label="Scent finder progress" aria-valuemin={1} aria-valuemax={questions.length} aria-valuenow={step + 1}>
      <div className="flex items-center justify-between text-[0.68rem] uppercase tracking-[0.25em] text-charcoal/42">
        <span>Ritual {String(step + 1).padStart(2, "0")}</span><span>{String(questions.length).padStart(2, "0")}</span>
      </div>
      <div className="mt-3 flex gap-2" aria-hidden="true">
        {questions.map((_, index) => <span key={index} className={`h-px flex-1 transition-all duration-700 ${index <= step ? "bg-champagne" : "bg-champagne/20"}`} />)}
      </div>
    </div>
  );
}

function QuizOption({ option, index, onSelect }: { option: Option; index: number; onSelect: () => void }) {
  return (
    <button type="button" onClick={onSelect} className="finder-option group w-full rounded-lg border border-champagne/20 bg-white/30 px-5 py-5 text-left shadow-pearl backdrop-blur-md transition duration-500 hover:-translate-y-1 hover:border-champagne/60 hover:bg-white/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-champagne" style={{ "--option-delay": `${index * 90}ms` } as CSSProperties}>
      <span className="flex items-center gap-4"><span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-champagne/30 text-[0.65rem] text-charcoal/42 transition group-hover:border-champagne group-hover:bg-champagne group-hover:text-white">{String.fromCharCode(65 + index)}</span><span className="editorial-title text-xl text-charcoal sm:text-2xl">{option.label}</span></span>
    </button>
  );
}

function FinderResult({ primary, alternatives, explanation, onRetake }: { primary: Product; alternatives: Product[]; explanation: string; onRetake: () => void }) {
  const notes = [primary.topNotes[0], primary.heartNotes[0], primary.baseNotes[0]];
  return (
    <div className="finder-result relative overflow-hidden rounded-[2rem] border border-white/70 bg-white/32 p-5 shadow-[0_34px_120px_rgba(91,67,37,0.16)] backdrop-blur-xl sm:p-10">
      <SprayMist active className="finder-result-mist" />
      <div className="grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="relative min-h-[390px] overflow-hidden rounded-2xl bg-[radial-gradient(circle_at_50%_40%,rgba(255,255,255,.8),transparent_15rem),radial-gradient(circle_at_50%_80%,rgba(200,169,106,.24),transparent_18rem)]">
          <ProductVisual name={primary.name} image={primary.image} size="spotlight" className="finder-bottle-reveal min-h-[390px]" />
        </div>
        <div className="relative">
          <p className="text-xs uppercase tracking-[0.32em] text-champagne">Your luminous signature</p>
          <h2 className="editorial-title mt-4 text-5xl leading-none text-charcoal sm:text-7xl">{primary.name}</h2>
          <p className="mt-4 text-xs uppercase leading-6 tracking-[0.18em] text-charcoal/58">{primary.scentFamily.join(" · ")} · {primary.concentration}</p>
          <p className="mt-6 text-lg leading-8 text-charcoal/68">{explanation}</p>
          <div className="mt-6"><p className="mb-3 text-xs uppercase tracking-[0.24em] text-champagne">The trail</p><NoteChips notes={notes} /></div>
          <p className="mt-6 text-sm leading-7 text-charcoal/58"><span className="text-charcoal">Mood:</span> {primary.mood}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row"><Button href={`/collection/${primary.slug}`}>Discover {primary.name}</Button><Button href="/collection" variant="secondary">Explore Collection</Button></div>
          <button type="button" onClick={onRetake} className="mt-5 text-xs uppercase tracking-[0.2em] text-charcoal/48 underline decoration-champagne/50 underline-offset-4 transition hover:text-charcoal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-champagne">Retake Finder</button>
        </div>
      </div>
      <div className="relative mt-10 border-t border-champagne/20 pt-8"><p className="text-xs uppercase tracking-[0.28em] text-champagne">Also in your light</p><div className="mt-5 grid gap-3 sm:grid-cols-2">{alternatives.map((product) => <Link key={product.slug} href={`/collection/${product.slug}`} className="group rounded-lg border border-champagne/18 bg-ivory/42 p-5 transition hover:border-champagne/48 hover:bg-white/64 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-champagne"><span className="text-xs uppercase tracking-[0.2em] text-charcoal/50">Alternative</span><h3 className="editorial-title mt-2 text-2xl text-charcoal">{product.name}</h3><p className="mt-2 text-sm leading-6 text-charcoal/64">{product.shortDescription}</p></Link>)}</div></div>
    </div>
  );
}

export function ScentFinder() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Option[]>([]);
  const complete = answers.length === questions.length;
  const ranked = useMemo(() => {
    const scores = Object.fromEntries(products.map((p) => [p.slug, 0]));
    answers.forEach((answer) => Object.entries(answer.scores).forEach(([slug, value]) => { scores[slug] += value; }));
    return [...products].sort((a, b) => scores[b.slug] - scores[a.slug] || products.indexOf(a) - products.indexOf(b));
  }, [answers]);
  const select = (option: Option) => { setAnswers((current) => [...current, option]); if (step < questions.length - 1) setStep((current) => current + 1); };
  const retake = () => { setAnswers([]); setStep(0); };
  if (complete) {
    const chosen = answers.map((answer) => answer.label.toLowerCase());
    const explanation = `${ranked[0].name} reflects your pull toward ${chosen[0]} energy, ${chosen[2]} notes, and a presence that feels ${chosen[3]}. It brings those instincts together in a ${ranked[0].mood.toLowerCase()} composition.`;
    return <FinderResult primary={ranked[0]} alternatives={ranked.slice(1, 3)} explanation={explanation} onRetake={retake} />;
  }
  const question = questions[step];
  return (
    <div className="finder-panel mx-auto max-w-4xl rounded-2xl border border-white/70 bg-white/28 p-5 shadow-[0_30px_100px_rgba(91,67,37,0.12)] backdrop-blur-xl sm:rounded-[2rem] sm:p-10 md:p-14">
      <QuizProgress step={step} />
      <div key={step} className="finder-question-enter">
        <p className="text-xs uppercase tracking-[0.3em] text-champagne">{question.eyebrow}</p>
        <h2 className="editorial-title mt-4 max-w-2xl text-4xl leading-tight text-charcoal sm:text-5xl">{question.prompt}</h2>
        <div className="mt-9 grid gap-3 sm:grid-cols-2">{question.options.map((option, index) => <QuizOption key={option.label} option={option} index={index} onSelect={() => select(option)} />)}</div>
      </div>
      {step > 0 ? <button type="button" onClick={() => { setAnswers((current) => current.slice(0, -1)); setStep((current) => current - 1); }} className="mt-8 min-h-11 rounded-full px-2 text-xs uppercase tracking-[0.2em] text-charcoal/58 transition hover:text-charcoal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-champagne">← Previous ritual</button> : null}
    </div>
  );
}
