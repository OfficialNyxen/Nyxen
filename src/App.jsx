import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"

export default function App() {

  const [loading, setLoading] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false)
    }, 2200)

    return () => clearTimeout(timer)

  }, [])

  const { scrollYProgress } = useScroll()

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  })

  if (loading) {
    return (
      <div className="h-screen bg-black flex items-center justify-center overflow-hidden">

        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="text-5xl md:text-8xl font-black tracking-[-0.08em] text-white"
        >

          NYXEN

        </motion.h1>

      </div>
    )
  }

  return (
    <main className="min-h-screen bg-[#050505] text-white overflow-hidden relative">

      {/* scroll progress */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[2px] bg-white origin-left z-[9999]"
      />

      {/* cinematic background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        <div className="absolute top-[-200px] left-[-100px] w-[600px] h-[600px] bg-white/[0.03] blur-3xl rounded-full"></div>

        <div className="absolute bottom-[-300px] right-[-200px] w-[700px] h-[700px] bg-white/[0.02] blur-3xl rounded-full"></div>

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent_60%)]"></div>

      </div>

      {/* grain overlay */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-screen pointer-events-none">

        <div className="w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      </div>

      {/* navbar */}
      <nav className="fixed top-0 left-0 w-full flex justify-between items-center px-4 sm:px-8 md:px-16 py-6 md:py-8 z-50 backdrop-blur-md bg-black/10 border-b border-white/[0.03]">

        <a
          href="#hero"
          className="text-sm sm:text-xl font-black tracking-[0.4em]"
        >

          NYXEN

        </a>

        {/* desktop menu */}
        <div className="hidden md:flex gap-10 text-sm uppercase tracking-[0.2em] text-gray-400">

          <a
            href="#about"
            className="hover:text-white hover:tracking-[0.25em] transition-all duration-500"
          >
            About
          </a>

          <a
            href="#drops"
            className="hover:text-white hover:tracking-[0.25em] transition-all duration-500"
          >
            Drops
          </a>

          <a
            href="#contact"
            className="hover:text-white hover:tracking-[0.25em] transition-all duration-500"
          >
            Contact
          </a>

        </div>

        {/* mobile button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden z-[60]"
        >

          {menuOpen ? <X size={26} /> : <Menu size={26} />}

        </button>

      </nav>

      {/* mobile menu */}
      <AnimatePresence>

        {menuOpen && (

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-2xl z-40 flex flex-col items-center justify-center gap-10 text-3xl font-black uppercase tracking-[0.2em]"
          >

            <a
              href="#about"
              onClick={() => setMenuOpen(false)}
              className="hover:text-gray-400 transition"
            >
              About
            </a>

            <a
              href="#drops"
              onClick={() => setMenuOpen(false)}
              className="hover:text-gray-400 transition"
            >
              Drops
            </a>

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="hover:text-gray-400 transition"
            >
              Contact
            </a>

          </motion.div>

        )}

      </AnimatePresence>

      {/* hero */}
      <section
        id="hero"
        className="min-h-screen flex flex-col items-center justify-center px-6 text-center relative z-10 overflow-hidden"
      >

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{
            opacity: 1,
            y: [0, -10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >

          <motion.h1
            initial={{ opacity: 0, letterSpacing: "-0.5em" }}
            animate={{ opacity: 1, letterSpacing: "-0.08em" }}
            transition={{ duration: 2 }}
            className="text-6xl sm:text-7xl md:text-[10rem] font-black tracking-[-0.08em] leading-none"
          >

            NYXEN

          </motion.h1>

          <p className="mt-6 text-gray-400 text-xs sm:text-sm md:text-xl uppercase tracking-[0.35em]">

            Silence. Strength. Identity.

          </p>

          <motion.button
            whileHover={{
              scale: 1.08,
              boxShadow: "0 0 60px rgba(255,255,255,0.2)",
            }}
            whileTap={{ scale: 0.95 }}
            className="mt-12 px-8 md:px-10 py-4 rounded-full bg-white text-black font-semibold uppercase tracking-[0.2em] text-xs md:text-sm transition-all duration-500"
          >

            Enter Experience

          </motion.button>

          <div className="mt-20 flex justify-center gap-6 md:gap-12 text-gray-500 text-[10px] sm:text-xs md:text-sm uppercase tracking-[0.3em]">

            <span>Silence</span>
            <span>Strength</span>
            <span>Identity</span>

          </div>

        </motion.div>

      </section>

      {/* about */}
      <motion.section
        id="about"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative z-10 px-6 sm:px-8 md:px-24 pb-32 md:pb-40"
      >

        <div className="max-w-5xl">

          <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-gray-500 mb-6">

            About NYXEN

          </p>

          <h2 className="text-3xl sm:text-4xl md:text-7xl font-black leading-tight tracking-tight max-w-4xl">

            More than clothing.
            <br />
            A visual identity built for the obsessed.

          </h2>

          <p className="mt-10 text-gray-400 text-base md:text-xl leading-relaxed max-w-3xl">

            NYXEN was created for people obsessed with growth, discipline and self-expression.
            Inspired by cinematic storytelling, modern luxury and minimalist streetwear culture,
            every piece is designed to feel timeless, elevated and emotionally powerful.

          </p>

        </div>

      </motion.section>

      {/* drops */}
      <motion.section
        id="drops"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative z-10 px-6 sm:px-8 md:px-24 pb-32 md:pb-40"
      >

        <div className="mb-16">

          <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-gray-500 mb-4">

            Featured Drop

          </p>

          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black leading-none tracking-tight max-w-4xl">

            Built For Silence.

          </h2>

        </div>

        <div className="grid md:grid-cols-2 gap-8">

          <motion.div
            whileHover={{
              rotateX: 4,
              rotateY: -4,
              scale: 1.02,
            }}
            transition={{ duration: 0.4 }}
            className="h-[500px] rounded-[2rem] overflow-hidden bg-white/5 border border-white/10 relative group"
          >

            <img
              src="https://images.unsplash.com/photo-1523398002811-999ca8dec234?q=80&w=1974&auto=format&fit=crop"
              className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
            />

            <div className="absolute inset-0 bg-black/40"></div>

            <div className="absolute bottom-8 sm:bottom-10 left-8 sm:left-10">

              <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-gray-300">

                NYXEN 001

              </p>

              <h3 className="text-3xl sm:text-4xl font-black mt-3">

                Shadow Collection

              </h3>

            </div>

          </motion.div>

          <div className="flex flex-col gap-8">

            <div className="h-[240px] rounded-[2rem] overflow-hidden bg-white/5 border border-white/10 relative group">

              <img
                src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1974&auto=format&fit=crop"
                className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
              />

              <div className="absolute inset-0 bg-black/30"></div>

            </div>

            <div className="h-[240px] rounded-[2rem] overflow-hidden bg-white/5 border border-white/10 relative group">

              <img
                src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1974&auto=format&fit=crop"
                className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
              />

              <div className="absolute inset-0 bg-black/30"></div>

            </div>

          </div>

        </div>

      </motion.section>

      {/* marquee */}
      <div className="overflow-hidden py-12 border-y border-white/5 relative z-10">

        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex gap-20 whitespace-nowrap text-2xl md:text-4xl font-black tracking-tight text-white/10 uppercase"
        >

          <span>SILENCE.</span>
          <span>STRENGTH.</span>
          <span>IDENTITY.</span>
          <span>NYXEN.</span>

          <span>SILENCE.</span>
          <span>STRENGTH.</span>
          <span>IDENTITY.</span>
          <span>NYXEN.</span>

        </motion.div>

      </div>

      {/* contact */}
      <footer
        id="contact"
        className="relative z-10 px-6 sm:px-8 md:px-24 py-24"
      >

        <div className="grid md:grid-cols-2 gap-16">

          <div>

            <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-gray-500 mb-6">

              Contact

            </p>

            <h2 className="text-4xl md:text-6xl font-black leading-tight">

              Join the silence.

            </h2>

            <p className="mt-8 text-gray-400 text-lg max-w-xl leading-relaxed">

              For collaborations, business inquiries or support,
              contact NYXEN through the channels below.

            </p>

          </div>

          <div className="flex flex-col gap-8">

            <div className="bg-white/[0.03] border border-white/5 rounded-[2rem] p-8 backdrop-blur-xl">

              <p className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-4">
                Support
              </p>

              <a
                href="mailto:support@nyxenwear.com"
                className="text-2xl font-black hover:text-gray-300 transition"
              >
                support@nyxenwear.com
              </a>

            </div>

            <div className="bg-white/[0.03] border border-white/5 rounded-[2rem] p-8 backdrop-blur-xl">

              <p className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-4">
                Collaborations
              </p>

              <a
                href="mailto:collabs@nyxenwear.com"
                className="text-2xl font-black hover:text-gray-300 transition"
              >
                collabs@nyxenwear.com
              </a>

            </div>

            <div className="flex gap-6 text-sm uppercase tracking-[0.2em] text-gray-500 mt-4">

              <a
                href="https://instagram.com/officialnyxen"
                target="_blank"
                className="hover:text-white hover:tracking-[0.25em] transition-all duration-500"
              >
                Instagram
              </a>

              <a
                href="https://tiktok.com/@officialnyxen"
                target="_blank"
                className="hover:text-white hover:tracking-[0.25em] transition-all duration-500"
              >
                TikTok
              </a>

            </div>

          </div>

        </div>

        <div className="border-t border-white/5 mt-20 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">

          <p className="text-xs sm:text-sm text-gray-500">

            © NYXEN 2026 — Built in silence.

          </p>

          <p className="text-xs uppercase tracking-[0.2em] text-gray-600">

            Haarlem · Netherlands

          </p>

        </div>

      </footer>

    </main>
  )
}