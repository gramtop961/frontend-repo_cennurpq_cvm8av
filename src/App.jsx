import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Work from './components/Work';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      {/* background accents */}
      <div className="pointer-events-none fixed inset-0 -z-0">
        <div className="absolute inset-0 bg-[radial-gradient(800px_400px_at_20%_-10%,rgba(56,189,248,0.12),transparent_60%),radial-gradient(700px_400px_at_100%_20%,rgba(59,130,246,0.12),transparent_50%)]" />
      </div>

      <Navbar />
      <main>
        <Hero />
        <Services />
        <Work />
        <CTA />
      </main>

      <footer className="relative border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-400">© {new Date().getFullYear()} Flux Studio. All rights reserved.</p>
            <div className="text-sm text-slate-400">Made with care • Playful by default</div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
