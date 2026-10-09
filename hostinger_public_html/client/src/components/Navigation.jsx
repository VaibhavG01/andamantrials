// src/components/Navigation.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Backward-compatibility wrapper exporting the new Luxury Navbar master component.

import Navbar from './navbar/Navbar';

export default function Navigation(props) {
  return <Navbar {...props} />;
}
