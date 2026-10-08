// client/src/components/ui/Link.jsx
import React from 'react';

export default function Link({ to, children, onClick, ...props }) {
  const handleClick = (e) => {
    // Let custom onClick run if provided
    if (onClick) {
      onClick(e);
    }

    // Ignore if default prevented or external link
    if (e.defaultPrevented) return;
    if (
      !to ||
      to.startsWith('http') ||
      to.startsWith('//') ||
      to.startsWith('mailto:') ||
      to.startsWith('tel:') ||
      e.metaKey ||
      e.ctrlKey ||
      e.shiftKey ||
      e.altKey
    ) {
      return;
    }

    e.preventDefault();
    window.history.pushState({}, '', to);
    window.dispatchEvent(new Event('popstate'));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <a href={to} onClick={handleClick} {...props}>
      {children}
    </a>
  );
}
