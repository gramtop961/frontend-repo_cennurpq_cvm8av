import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlay for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/30 to-slate-950/80" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 items-center gap-10 pt-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200/80">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-cyan-400"></span>
              Award-winning design agency
            </div>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white">
              We craft playful, modern brands and interfaces
            </h1>
            <p className="mt-5 text-lg text-slate-300/90">
              From concept to code, we blend strategy, design, and engineering to ship delightful digital products people love.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#contact" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 px-5 py-3 text-white font-medium shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all">
                Start a project
              </a>
              <a href="#work" className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-slate-200 hover:text-white">
                See our work
              </a>
            </div>
            <div className="mt-6 flex items-center gap-6 text-slate-300/80">
              <div>
                <div className="text-2xl font-semibold text-white">120+</div>
                <div className="text-sm">Projects shipped</div>
              </div>
              <div>
                <div className="text-2xl font-semibold text-white">25</div>
                <div className="text-sm">Happy partners</div>
              </div>
              <div>
                <div className="text-2xl font-semibold text-white">8</div>
                <div className="text-sm">Design awards</div>
              </div>
            </div>
          </motion.div>
          <div className="h-[40vh] lg:h-[60vh]" />
        </div>
      </div>
    </section>
  );
}
