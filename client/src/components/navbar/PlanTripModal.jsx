import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { X } from 'lucide-react';
import PlanYourHolidayForm from '../forms/PlanYourHolidayForm';

export default function PlanTripModal({ isOpen, onClose }) {
  const modalRef = useRef(null);
  const backdropRef = useRef(null);

  useEffect(() => {
    if (!modalRef.current || !backdropRef.current) return;
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      gsap.to(backdropRef.current, { opacity: 1, duration: 0.3, ease: 'power2.out' });
      gsap.fromTo(
        modalRef.current,
        { opacity: 0, y: 30, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.35, ease: 'power3.out', delay: 0.05 }
      );
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  const handleClose = () => {
    if (!modalRef.current || !backdropRef.current) return;
    gsap.to(modalRef.current, { opacity: 0, y: 20, scale: 0.96, duration: 0.2, ease: 'power2.in' });
    gsap.to(backdropRef.current, {
      opacity: 0,
      duration: 0.25,
      ease: 'power2.in',
      onComplete: () => {
        onClose();
      },
    });
  };

  if (!isOpen) return null;

  return (
    <div
      ref={backdropRef}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        background: 'rgba(11, 37, 69, 0.78)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px 16px',
        opacity: 0,
      }}
      onClick={(e) => e.target === backdropRef.current && handleClose()}
    >
      <div
        ref={modalRef}
        style={{
          background: '#ffffff',
          borderRadius: 24,
          maxWidth: 820,
          width: '100%',
          maxHeight: '92vh',
          overflowY: 'auto',
          position: 'relative',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.35)',
          border: '1.5px solid #EBDED2',
        }}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          style={{
            position: 'absolute',
            top: 18,
            right: 18,
            width: 36,
            height: 36,
            borderRadius: '50%',
            background: '#FAF4EE',
            border: '1px solid #EBDED2',
            color: '#0B2545',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10,
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#FFF0EB';
            e.currentTarget.style.color = '#F06543';
            e.currentTarget.style.borderColor = '#FFD3C4';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = '#FAF4EE';
            e.currentTarget.style.color = '#0B2545';
            e.currentTarget.style.borderColor = '#EBDED2';
          }}
          aria-label="Close Plan Holiday Modal"
        >
          <X size={18} />
        </button>

        <PlanYourHolidayForm isModal={true} />
      </div>
    </div>
  );
}
