import React from 'react';
import { Plus, Minus, RotateCcw, Play, Pause, MousePointer, Move, Focus } from 'lucide-react';
import { motion } from 'framer-motion';

export function FloatingControls({
  onZoomIn,
  onZoomOut,
  onResetView,
  isAutoRotate,
  onToggleAutoRotate,
  selectedIsland
}) {
  return (
    <>
      {/* Floating Action Bar (Right Side) */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="fixed right-4 bottom-24 md:right-6 md:bottom-8 z-30 flex flex-col gap-2.5"
      >
        <div className="bg-white/95 backdrop-blur-md p-2 rounded-2xl flex flex-col gap-2 shadow-xl border border-slate-200">
          {/* Zoom In (+) */}
          <button
            onClick={onZoomIn}
            className="w-10 h-10 rounded-xl bg-slate-50 hover:bg-[#0B2545] text-[#0B2545] hover:text-white border border-slate-200 hover:border-[#0B2545] flex items-center justify-center transition-all shadow-sm"
            title="Zoom In"
          >
            <Plus className="w-5 h-5" />
          </button>

          {/* Zoom Out (-) */}
          <button
            onClick={onZoomOut}
            className="w-10 h-10 rounded-xl bg-slate-50 hover:bg-[#0B2545] text-[#0B2545] hover:text-white border border-slate-200 hover:border-[#0B2545] flex items-center justify-center transition-all shadow-sm"
            title="Zoom Out"
          >
            <Minus className="w-5 h-5" />
          </button>

          <div className="h-px bg-slate-200 my-0.5" />

          {/* Reset View (↻) */}
          <button
            onClick={onResetView}
            className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all shadow-sm border ${
              selectedIsland
                ? 'bg-teal-600 text-white border-teal-600 shadow-teal-500/30'
                : 'bg-slate-50 hover:bg-[#0B2545] text-[#0B2545] hover:text-white border-slate-200 hover:border-[#0B2545]'
            }`}
            title="Reset 3D Camera View"
          >
            <RotateCcw className="w-4 h-4" />
          </button>

          {/* Auto Rotate Toggle (▶ / ⏸) */}
          <button
            onClick={onToggleAutoRotate}
            className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all shadow-sm border ${
              isAutoRotate
                ? 'bg-[#0B2545] text-white border-[#0B2545]'
                : 'bg-slate-50 hover:bg-slate-100 text-slate-600 hover:text-slate-900 border-slate-200'
            }`}
            title={isAutoRotate ? 'Pause Idle Auto-Rotation' : 'Enable Idle Auto-Rotation'}
          >
            {isAutoRotate ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </button>
        </div>
      </motion.div>

      {/* Instruction Badge (Bottom Center - Desktop Only) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="hidden md:flex fixed bottom-6 left-1/2 -translate-x-1/2 z-30 pointer-events-none"
      >
        <div className="bg-white/95 backdrop-blur-md px-5 py-2.5 rounded-full flex items-center gap-3.5 border border-slate-200 shadow-xl">
          <div className="flex items-center gap-1.5 text-xs text-[#0B2545] font-bold">
            <Move className="w-3.5 h-3.5 text-teal-600" />
            <span>Drag to rotate</span>
          </div>
          <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
          <div className="flex items-center gap-1.5 text-xs text-slate-700 font-bold">
            <MousePointer className="w-3.5 h-3.5 text-teal-600" />
            <span>Scroll to zoom</span>
          </div>
          <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
          <div className="flex items-center gap-1.5 text-xs text-teal-800 font-bold">
            <Focus className="w-3.5 h-3.5 text-teal-600" />
            <span>Click island to focus</span>
          </div>
        </div>
      </motion.div>
    </>
  );
}
