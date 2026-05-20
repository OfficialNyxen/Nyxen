import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import logo from "./assets/logo.png"

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

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="flex flex-col items-center"
        >

          <img
            src={logo}
            alt="NYXEN"
            className="w-28 h-28 object-contain mb-8"
          />

          <h1 className="text-5xl md:text-8xl font-black tracking-[-0.08em] text-white">
            NYXEN
          </h1>

        </motion.div>

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
          className="flex items-center gap-3 group"
        >

          <img
            src={logo}
            alt="NYXEN"
            className="w-10 h-10 object-contain transition-all duration-500 group-hover:scale-110"
          />

          <h2 className="text-sm sm:text-xl font-black tracking-[0.35em] group-hover:tracking-[0.45em] transition-all duration-500">
            NYXEN
          </h2>

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

        {/* background logo */}
        <motion.img
          src={logo}
          alt="NYXEN"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.04 }}
          transition={{ duration: 2 }}
          className="absolute w-[500px] md:w-[800px] opacity-5 blur-[1px] pointer-events-none"
        />

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
          className="relative z-10"
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

            Wear The Future

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

      </motion.section>

      {/* footer */}
      <footer
        id="contact"
        className="relative z-10 px-6 sm:px-8 md:px-24 py-24 border-t border-white/5"
      >

        <div className="flex flex-col items-center text-center">

          <img
            src={logo}
            alt="NYXEN"
            className="w-24 h-24 object-contain mb-8 opacity-90"
          />

          <h2 className="text-5xl md:text-7xl font-black tracking-[-0.08em]">
            NYXEN
          </h2>

          <p className="mt-6 text-gray-500 uppercase tracking-[0.3em] text-sm">
            Wear The Future
          </p>

          <div className="flex gap-8 mt-12 text-sm uppercase tracking-[0.2em] text-gray-400">

            <a
              href="https://instagram.com/officialnyxen"
              target="_blank"
              className="hover:text-white transition-all duration-500"
            >
              Instagram
            </a>

            <a
              href="https://tiktok.com/@officialnyxen"
              target="_blank"
              className="hover:text-white transition-all duration-500"
            >
              TikTok
            </a>

          </div>

          <p className="mt-16 text-xs text-gray-600 uppercase tracking-[0.2em]">
            © NYXEN 2026 — Built In Silence
          </p>

        </div>

      </footer>

    </main>
  )
}