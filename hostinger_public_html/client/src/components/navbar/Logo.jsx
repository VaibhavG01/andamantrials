// src/components/navbar/Logo.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Official Brand Logo Component — "ANDAMAN TRAILS: MEMORIES THAT LAST A LIFETIME"

import Link from '../ui/Link';

export default function Logo({ isScrolled, variant = 'full', className = '' }) {
  return (
    <Link
      to="/home"
      className={`inline-flex items-center gap-2 sm:gap-3.5 no-underline flex-shrink-0 outline-none cursor-pointer group select-none ${className}`}
      aria-label="Andaman Trails - Home"
    >
      {/* Official Logo Emblem Badge */}
      <div
        className="relative flex items-center justify-center flex-shrink-0 overflow-hidden rounded-xl sm:rounded-2xl bg-white p-0.5 sm:p-1.5 shadow-md transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl group-hover:border-teal-500"
        style={{
          width: 'clamp(36px, 4.5vw, 50px)',
          height: 'clamp(36px, 4.5vw, 50px)',
          border: isScrolled ? '1.5px solid #ebded2' : '1.5px solid rgba(240, 101, 67, 0.5)',
          boxShadow: isScrolled
            ? '0 4px 14px rgba(11, 37, 69, 0.08)'
            : '0 4px 20px rgba(0, 0, 0, 0.3), 0 0 16px rgba(240, 101, 67, 0.35)',
        }}
      >
        <img
          src="/logo.png"
          alt="Andaman Trails Official Logo"
          className="w-full h-full object-contain rounded-lg sm:rounded-xl"
          loading="eager"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
            if (e.currentTarget.nextSibling) {
              e.currentTarget.nextSibling.style.display = 'flex';
            }
          }}
        />
        {/* Vector Fallback */}
        <div
          style={{
            display: 'none',
            width: '100%',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 900,
            fontFamily: "'Space Grotesk', sans-serif",
            color: '#0b2545',
            fontSize: 16,
          }}
        >
          AT
        </div>
      </div>

      {/* Brand Typography */}
      {variant !== 'icon-only' && (
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-1 sm:gap-1.5 leading-none">
            <span
              className="text-[14px] sm:text-[17px] md:text-[20px] font-black tracking-[0.12em] sm:tracking-[0.14em] transition-colors duration-300"
              style={{
                fontFamily: "'Space Grotesk', 'Montserrat', sans-serif",
                color: isScrolled ? '#0b2545' : '#ffffff',
                textShadow: isScrolled ? 'none' : '0 2px 10px rgba(0,0,0,0.85)',
              }}
            >
              ANDAMAN
            </span>
            <span
              className="text-[14px] sm:text-[17px] md:text-[20px] font-black tracking-[0.14em] sm:tracking-[0.16em] transition-colors duration-300"
              style={{
                fontFamily: "'Space Grotesk', 'Montserrat', sans-serif",
                color: '#f06543',
                textShadow: isScrolled ? 'none' : '0 0 14px rgba(240,101,67,0.6)',
              }}
            >
              TRAILS
            </span>
          </div>

          <div
            className="hidden sm:block text-[9.5px] md:text-[11px] font-extrabold tracking-[0.2em] uppercase transition-colors duration-300 mt-1"
            style={{
              fontFamily: "'Inter', sans-serif",
              color: isScrolled ? '#5c6f84' : '#faf4ee',
              textShadow: isScrolled ? 'none' : '0 1px 4px rgba(0,0,0,0.7)',
            }}
          >
            DISCOVER • EXPLORE • EXPERIENCE
          </div>
        </div>
      )}
    </Link>
  );
}

