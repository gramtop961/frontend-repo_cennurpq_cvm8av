import { motion } from 'framer-motion';

const works = [
  {
    title: 'Orbit Finance',
    desc: 'Fintech dashboard with real-time 3D data visualization.',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1974&auto=format&fit=crop',
  },
  {
    title: 'Nebula OS',
    desc: 'Playful landing page for a developer-first operating system.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop',
  },
  {
    title: 'Aurora Commerce',
    desc: 'Immersive retail experience with motion-driven UX.',
    image: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?q=80&w=1974&auto=format&fit=crop',
  },
];

export default function Work() {
  return (
    <section id="work" className="relative py-24">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">Selected work</h2>
          <p className="mt-3 text-slate-300/90">A few favorites from the last 12 months.</p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {works.map((w) => (
            <motion.article
              key={w.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4 }}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img src={w.image} alt={w.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <h3 className="text-white font-medium">{w.title}</h3>
                <p className="mt-1 text-sm text-slate-300/90">{w.desc}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
