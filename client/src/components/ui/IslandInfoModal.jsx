import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Award, ArrowRight, Mountain, Navigation, Compass } from 'lucide-react';

export function IslandInfoModal({ island, onClose, onResetView }) {
  if (!island) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, x: 40, scale: 0.95 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        exit={{ opacity: 0, x: 40, scale: 0.95 }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="fixed top-20 right-4 md:right-8 bottom-24 z-40 w-full max-w-md pointer-events-auto"
      >
        <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-6 h-full overflow-y-auto flex flex-col justify-between border border-slate-200 shadow-2xl relative">
          
          {/* Header Controls */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF0EB] border border-[#F06543]/30 text-[#F06543] text-xs font-bold">
                <Compass className="w-3.5 h-3.5 text-[#F06543]" />
                <span>{island.category}</span>
              </div>
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-700 hover:text-slate-900 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Island Title & Subtitle */}
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#0B2545] tracking-tight mb-1">
              {island.name}
            </h2>
            <p className="text-sm text-[#F06543] font-bold mb-4">
              {island.subtitle}
            </p>

            {/* Description */}
            <p className="text-xs md:text-sm text-slate-700 leading-relaxed mb-6 bg-[#FAF4EE] p-4 rounded-2xl border border-[#EBDED2] font-normal">
              {island.description}
            </p>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 gap-2.5 mb-6">
              <div className="bg-[#FAF4EE] border border-[#EBDED2] p-3.5 rounded-2xl">
                <span className="text-[10px] uppercase font-bold text-slate-500 block mb-1">Elevation</span>
                <span className="text-xs font-extrabold text-[#0B2545] flex items-center gap-1">
                  <Mountain className="w-3.5 h-3.5 text-[#F06543]" />
                  {island.stats.elevation}
                </span>
              </div>
              <div className="bg-[#FAF4EE] border border-[#EBDED2] p-3.5 rounded-2xl">
                <span className="text-[10px] uppercase font-bold text-slate-500 block mb-1">From Port Blair</span>
                <span className="text-xs font-extrabold text-[#0B2545] flex items-center gap-1">
                  <Navigation className="w-3.5 h-3.5 text-[#F06543]" />
                  {island.stats.distanceFromPortBlair}
                </span>
              </div>
              <div className="bg-[#FAF4EE] border border-[#EBDED2] p-3.5 rounded-2xl">
                <span className="text-[10px] uppercase font-bold text-slate-500 block mb-1">Recommended Stay</span>
                <span className="text-xs font-extrabold text-[#0B2545]">
                  {island.stats.idealStay}
                </span>
              </div>
              <div className="bg-[#FAF4EE] border border-[#EBDED2] p-3.5 rounded-2xl">
                <span className="text-[10px] uppercase font-bold text-slate-500 block mb-1">Top Experience</span>
                <span className="text-[11px] font-bold text-[#0B2545] truncate block">
                  {island.stats.bestActivity}
                </span>
              </div>
            </div>

            {/* Key Travel Highlights */}
            <div className="mb-6">
              <h3 className="text-xs font-bold text-[#0B2545] uppercase tracking-wider mb-3 flex items-center gap-1.5">
                <Award className="w-4 h-4 text-[#F06543]" />
                Must-Visit Highlights
              </h3>
              <div className="space-y-2">
                {island.highlights.map((highlight, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 text-xs text-slate-800 font-medium bg-[#FAF4EE] px-3.5 py-2.5 rounded-xl border border-[#EBDED2]"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#F06543] shrink-0" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-4 border-t border-[#EBDED2] flex gap-2.5">
            <button
              onClick={onResetView}
              className="flex-1 py-3 px-4 rounded-xl text-xs font-bold bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-300 transition-colors"
            >
              Reset View
            </button>
            <button
              onClick={onClose}
              className="flex-1 py-3 px-4 rounded-xl text-xs font-bold bg-gradient-to-r from-[#FF6B4A] to-[#F06543] hover:opacity-95 text-white shadow-lg shadow-orange-500/25 transition-all flex items-center justify-center gap-1.5"
            >
              <span>Explore Map</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </motion.div>
    </AnimatePresence>
  );
}
