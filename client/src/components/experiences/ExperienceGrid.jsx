// src/components/experiences/ExperienceGrid.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Responsive Experience Grid Component — masonry feel layout across desktop/mobile.

import ExperienceCard from './ExperienceCard';

export default function ExperienceGrid({ experiences, onSelectExperience }) {
  if (!experiences || experiences.length === 0) {
    return (
      <div style={{ textAlign: 'center', padding: '40px 0', color: '#64748b', fontFamily: "'Space Grotesk', sans-serif", fontSize: 14 }}>
        No experiences found in this category.
      </div>
    );
  }

  return (
    <div
      style={{
        maxWidth: 1280,
        margin: '0 auto 64px',
        padding: '0 20px',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
        gap: 24,
      }}
    >
      {experiences.map((exp) => (
        <ExperienceCard key={exp.id} experience={exp} onSelect={onSelectExperience} />
      ))}
    </div>
  );
}
