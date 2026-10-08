import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Compass, Sparkles, Navigation } from 'lucide-react';

export function IslandTooltip({ hoveredIsland }) {
  if (!hoveredIsland) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 10, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 10, scale: 0.9 }}
        transition={{ duration: 0.18 }}
        className="fixed top-20 left-1/2 -translate-x-1/2 z-40 pointer-events-none"
      >
        <div className="glass-card px-4 py-2.5 rounded-2xl border border-[#F06543]/40 shadow-2xl flex items-center gap-3 bg-[#0B2545]/90 backdrop-blur-xl">
          <div
            className="w-3 h-3 rounded-full animate-ping"
            style={{ backgroundColor: '#F06543' }}
          />
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-bold text-white tracking-wide">
                {hoveredIsland.name}
              </span>
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#F06543]/20 text-[#FF6B4A] font-medium">
                {hoveredIsland.category}
              </span>
            </div>
            <p className="text-[11px] text-[#cbd5e1] font-medium">
              {hoveredIsland.subtitle}
            </p>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
