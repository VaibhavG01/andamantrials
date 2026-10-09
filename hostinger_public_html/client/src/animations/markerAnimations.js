// src/animations/markerAnimations.js
// ─────────────────────────────────────────────────────────────────────────────

import { gsap } from 'gsap';

/** Stagger-reveal all island markers on load. */
export function revealMarkers(markerRefs) {
  if (!markerRefs?.length) return;
  gsap.fromTo(
    markerRefs.map(r => r.current).filter(Boolean),
    { opacity: 0, y: 20 },
    {
      opacity: 1, y: 0,
      duration: 0.7,
      stagger: 0.12,
      ease: 'power2.out',
      delay: 4.2,
    }
  );
}

/** Hover enter on a marker element. */
export function markerHoverIn(el) {
  if (!el) return;
  gsap.to(el, { scale: 1.15, duration: 0.35, ease: 'power2.out' });
}

/** Hover leave on a marker element. */
export function markerHoverOut(el) {
  if (!el) return;
  gsap.to(el, { scale: 1.0, duration: 0.35, ease: 'power2.out' });
}

/** Open destination panel. */
export function openPanel(panelEl) {
  if (!panelEl) return;
  gsap.fromTo(panelEl,
    { opacity: 0, y: 30, scale: 0.97 },
    { opacity: 1, y: 0, scale: 1, duration: 0.55, ease: 'power3.out' }
  );
}

/** Close destination panel. */
export function closePanel(panelEl, onComplete) {
  if (!panelEl) return;
  gsap.to(panelEl, {
    opacity: 0, y: 20, scale: 0.97,
    duration: 0.35, ease: 'power2.in',
    onComplete,
  });
}

/** Hero text stagger reveal. */
export function revealHeroText(refs) {
  const { eyebrow, line1, line2, line3, sub, cta1, cta2 } = refs;
  const tl = gsap.timeline({ delay: 3.8 });
  if (eyebrow?.current) tl.fromTo(eyebrow.current,  { opacity:0, y:16 }, { opacity:1, y:0, duration:0.6, ease:'power2.out' });
  if (line1?.current)   tl.fromTo(line1.current,    { opacity:0, y:30 }, { opacity:1, y:0, duration:0.7, ease:'power3.out' }, '-=0.3');
  if (line2?.current)   tl.fromTo(line2.current,    { opacity:0, y:30 }, { opacity:1, y:0, duration:0.7, ease:'power3.out' }, '-=0.4');
  if (line3?.current)   tl.fromTo(line3.current,    { opacity:0, y:30 }, { opacity:1, y:0, duration:0.7, ease:'power3.out' }, '-=0.4');
  if (sub?.current)     tl.fromTo(sub.current,      { opacity:0, y:16 }, { opacity:1, y:0, duration:0.6, ease:'power2.out' }, '-=0.2');
  if (cta1?.current)    tl.fromTo(cta1.current,     { opacity:0, x:-14 }, { opacity:1, x:0, duration:0.5, ease:'power2.out' }, '-=0.1');
  if (cta2?.current)    tl.fromTo(cta2.current,     { opacity:0, x:-10 }, { opacity:1, x:0, duration:0.5, ease:'power2.out' }, '-=0.3');
  return tl;
}

/** Nav reveal. */
export function revealNav(navEl) {
  if (!navEl) return;
  gsap.fromTo(navEl,
    { opacity: 0, y: -20 },
    { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out', delay: 3.6 }
  );
}
