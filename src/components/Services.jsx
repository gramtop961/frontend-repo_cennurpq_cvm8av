import { motion } from 'framer-motion';
import { PenTool, Code2, Layout, Camera, ArrowUpRight } from 'lucide-react';

const services = [
  {
    icon: PenTool,
    title: 'Brand Identity',
    desc: 'Strategy, naming, visual systems, and tone of voice that make you memorable.',
  },
  {
    icon: Layout,
    title: 'Product Design',
    desc: 'Playful, modern interfaces backed by user research and iterative testing.',
  },
  {
    icon: Code2,
    title: 'Web Engineering',
    desc: 'Production-grade React frontends and FAST APIs with performance baked in.',
  },
  {
    icon: Camera,
    title: 'Content & Motion',
    desc: 'Art direction, 3D, and micro-animations that bring brands to life.',
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_20%_20%,rgba(56,189,248,0.08),transparent_40%),radial-gradient(600px_circle_at_80%_10%,rgba(59,130,246,0.08),transparent_40%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">Services</h2>
          <p className="mt-3 text-slate-300/90">A cross‑disciplinary team that partners from idea to launch.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4 }}
              className="group rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition-colors"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-tr from-blue-500 to-cyan-400 text-white shadow-lg shadow-blue-500/30">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-white font-medium">{title}</h3>
              <p className="mt-2 text-sm text-slate-300/90">{desc}</p>
              <button className="mt-4 inline-flex items-center gap-1 text-sm text-cyan-300/90 group-hover:text-cyan-200">
                Learn more <ArrowUpRight className="h-4 w-4" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
