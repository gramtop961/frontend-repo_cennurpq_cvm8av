import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section id="contact" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-blue-600 to-cyan-500 p-10 sm:p-12">
          <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-white/10 blur-2xl" />
          <div className="absolute -left-8 -bottom-8 h-48 w-48 rounded-full bg-white/10 blur-2xl" />

          <div className="relative">
            <h3 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">Have a brief? Let’s build something playful.</h3>
            <p className="mt-2 text-slate-50/90 max-w-2xl">Tell us about your goals and we’ll come back with a plan, timeline, and a fixed price.</p>

            <form className="mt-6 grid gap-3 sm:grid-cols-2">
              <input type="text" placeholder="Your name" className="rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-white/40" />
              <input type="email" placeholder="Email" className="rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-white/40" />
              <input type="text" placeholder="Company / Project" className="sm:col-span-2 rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-white/40" />
              <button type="button" className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 font-medium text-slate-900 hover:bg-white/90">
                Send brief <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
