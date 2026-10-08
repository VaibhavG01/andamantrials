import React, { useState, useEffect } from 'react';
import { Compass, Volume2, VolumeX, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export function HeaderNav({ islands, selectedIsland, onSelectIsland, onResetView }) {
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [audioContext, setAudioContext] = useState(null);
  const [gainNode, setGainNode] = useState(null);

  // Web Audio Synthesized Ocean Ambience
  const toggleAudio = () => {
    if (!audioContext) {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      
      const bufferSize = ctx.sampleRate * 3;
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
      }

      const noise = ctx.createBufferSource();
      noise.buffer = buffer;
      noise.loop = true;

      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(350, ctx.currentTime);

      const gNode = ctx.createGain();
      gNode.gain.setValueAtTime(0.08, ctx.currentTime);

      noise.connect(filter);
      filter.connect(gNode);
      gNode.connect(ctx.destination);
      noise.start();

      setAudioContext(ctx);
      setGainNode(gNode);
      setIsAudioPlaying(true);
    } else {
      if (isAudioPlaying) {
        audioContext.suspend();
        setIsAudioPlaying(false);
      } else {
        audioContext.resume();
        setIsAudioPlaying(true);
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-4 py-3 md:px-8 md:py-4 flex items-center justify-between pointer-events-none">
      {/* Brand Title Logo */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="pointer-events-auto flex items-center gap-3 bg-white/95 backdrop-blur-md border border-[#EBDED2] px-4 py-2.5 rounded-2xl shadow-lg"
      >
        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#FF6B4A] to-[#F06543] flex items-center justify-center shadow-md">
          <Compass className="w-5 h-5 text-white animate-spin-slow" />
        </div>
        <div>
          <h1 className="text-sm md:text-base font-extrabold tracking-wider text-[#0B2545] uppercase">
            Andaman Islands
          </h1>
          <div className="flex items-center gap-1.5 text-[10px] md:text-xs text-[#F06543] font-bold">
            <Sparkles className="w-3 h-3 text-[#F06543]" />
            <span>Interactive 3D Experience</span>
          </div>
        </div>
      </motion.div>

      {/* Fast Island Selector Chips (Desktop) */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="hidden lg:flex items-center gap-1.5 bg-white/95 backdrop-blur-md border border-[#EBDED2] px-3 py-1.5 rounded-2xl pointer-events-auto max-w-xl overflow-x-auto shadow-lg"
      >
        <button
          onClick={onResetView}
          className={`px-3 py-1 rounded-xl text-xs font-bold transition-all ${
            !selectedIsland
              ? 'bg-[#0B2545] text-white shadow-md'
              : 'text-slate-700 hover:text-[#0B2545] hover:bg-slate-100'
          }`}
        >
          All Islands
        </button>
        {islands.map((island) => {
          const isSelected = selectedIsland?.id === island.id;
          return (
            <button
              key={island.id}
              onClick={() => onSelectIsland(island)}
              className={`px-2.5 py-1 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                isSelected
                  ? 'bg-gradient-to-r from-[#FF6B4A] to-[#F06543] text-white shadow-md'
                  : 'text-slate-700 hover:text-[#0B2545] hover:bg-[#FFF0EB]'
              }`}
            >
              <span
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: isSelected ? '#ffffff' : '#F06543' }}
              />
              {island.name}
            </button>
          );
        })}
      </motion.div>

      {/* Audio Ambient Sound Toggle Button */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="pointer-events-auto"
      >
        <button
          onClick={toggleAudio}
          className={`flex items-center gap-2 px-3.5 py-2 rounded-2xl text-xs font-bold bg-white/95 backdrop-blur-md border border-[#EBDED2] shadow-md transition-all ${
            isAudioPlaying
              ? 'text-[#F06543] border-[#F06543] bg-[#FFF0EB] shadow-orange-500/20'
              : 'text-slate-700 hover:text-[#0B2545] hover:bg-slate-50'
          }`}
          title="Toggle Tropical Ocean Ambience"
        >
          {isAudioPlaying ? (
            <>
              <Volume2 className="w-4 h-4 text-[#F06543] animate-pulse" />
              <span className="hidden md:inline font-bold">Ocean Waves</span>
            </>
          ) : (
            <>
              <VolumeX className="w-4 h-4 text-slate-500" />
              <span className="hidden md:inline">Sound Off</span>
            </>
          )}
        </button>
      </motion.div>
    </header>
  );
}
