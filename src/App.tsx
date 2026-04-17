/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ArrowRight, Brain, Zap, Trophy, HelpCircle } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-[#00FF00] font-sans selection:bg-black selection:text-white">
      {/* Marquee effect header */}
      <div className="bg-black py-4 overflow-hidden whitespace-nowrap border-b-4 border-black">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="flex gap-8 items-center"
        >
          {Array.from({ length: 15 }).map((_, i) => (
            <span key={i} className="text-[#00FF00] font-black text-2xl uppercase tracking-wider flex items-center gap-2">
              <Zap size={24} fill="currentColor" /> TE LA CREÍSTE • CAÍSTE • TE LA CREÍSTE •
            </span>
          ))}
        </motion.div>
      </div>

      <main className="container mx-auto px-4 py-12 md:py-24 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Side: Content */}
        <div className="flex flex-col gap-8 order-2 lg:order-1">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-black font-black text-2xl mb-2 flex items-center gap-2">
              <span className="bg-black text-[#00FF00] px-2 py-1 rotate-[-2deg]">69</span>
              ERROR 404: INTELIGENCIA NO ENCONTRADA
            </h2>
            <h1 className="text-6xl md:text-9xl font-black text-black leading-none uppercase tracking-tighter">
              TE LA<br />
              <span className="bg-black text-[#00FF00] px-4 -ml-4 inline-block transform rotate-[2deg]">CREÍSTE</span>
            </h1>
          </motion.div>

          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-2xl md:text-3xl font-bold text-black max-w-xl leading-snug"
          >
            No hay ningún quiz aquí. Solo estás tú, mirando a este gorila. ¿Qué se siente?
          </motion.p>

          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
            className="flex flex-wrap gap-4"
          >
            <button className="group relative bg-black text-[#00FF00] px-12 py-6 text-3xl font-black uppercase flex items-center gap-4 hover:translate-x-2 hover:-translate-y-2 transition-transform shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-0 active:translate-y-0">
              CERRAR PESTAÑA
              <ArrowRight className="group-hover:translate-x-2 transition-transform" size={40} strokeWidth={4} />
            </button>
            <button className="bg-white border-4 border-black text-black px-12 py-6 text-2xl font-black uppercase hover:bg-black hover:text-white transition-colors shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-0 active:translate-y-0 translate-x-1 -translate-y-1">
              LLORAR
            </button>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-12 pt-12 border-t-4 border-black/20">
            <div className="flex flex-col gap-2">
              <HelpCircle className="text-black" size={48} />
              <span className="font-black text-lg uppercase">0 Preguntas</span>
            </div>
            <div className="flex flex-col gap-2">
              <Zap className="text-black" size={48} />
              <span className="font-black text-lg uppercase">100% Humillación</span>
            </div>
            <div className="flex flex-col gap-2">
              <Trophy className="text-black" size={48} />
              <span className="font-black text-lg uppercase">Trofeo de participación</span>
            </div>
          </div>
        </div>

        {/* Right Side: Meme Visual */}
        <div className="order-1 lg:order-2">
          <motion.div 
            initial={{ rotate: 10, scale: 0.5, opacity: 0 }}
            animate={{ rotate: -2, scale: 1, opacity: 1 }}
            transition={{ type: "spring", damping: 10, stiffness: 60 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-black rotate-[3deg] -z-10"></div>
            <div className="border-8 border-black shadow-[20px_20px_0px_0px_rgba(0,0,0,1)] overflow-hidden bg-white">
              <img 
                src="https://static.boredpanda.com/blog/wp-content/uploads/2015/07/gorilla-middle-finger-bob-pitchford-bristol-zoo-1.jpg" 
                alt="Gorila trolleando" 
                className="w-full grayscale contrast-125 brightness-90 hover:grayscale-0 transition-all duration-700 aspect-[3/4] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="bg-black p-4">
                <p className="text-[#00FF00] font-black text-center text-xl md:text-2xl tracking-tight italic animate-pulse">
                  QUIZ? Te la creíste p**ro jajajajajaj
                </p>
              </div>
            </div>
            
            {/* Playful Floating Badge */}
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute -top-12 -right-12 bg-white border-4 border-black p-6 rounded-full shadow-xl flex flex-col items-center justify-center transform rotate-12"
            >
              <Brain size={48} className="text-black" fill="currentColor" />
              <span className="font-black text-black text-xl uppercase">SÚPER GENIO</span>
            </motion.div>
          </motion.div>
        </div>
      </main>

      {/* Footer Decoration */}
      <footer className="mt-24 bg-black text-white p-8 border-t-4 border-white">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-3xl font-black italic tracking-tighter">
            EL TROLLEADOR 9000
          </div>
          <div className="flex gap-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="w-8 h-8 bg-[#00FF00] border-2 border-white"></div>
            ))}
          </div>
          <p className="font-mono text-sm opacity-50 uppercase">
            © 2026 - NO BRAINERS ONLY - JAJAJA
          </p>
        </div>
      </footer>
    </div>
  );
}