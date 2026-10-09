import React from 'react';

const TechnologyHighlight = () => {
  const scrollToHero = (e) => {
    e.preventDefault();
    const hero = document.getElementById('hero-section');
    if (hero) {
      hero.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      padding: '60px 20px'
    }}>
      <style>
        {`
          .tech-highlight-card {
            background: #ffffff;
            border: 1.5px solid #e2e8f0;
            border-radius: 20px;
            padding: 40px;
            max-width: 650px;
            text-align: center;
            box-shadow: 0 4px 20px rgba(0, 45, 98, 0.06);
            position: relative;
            overflow: hidden;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          
          .tech-highlight-card:hover {
             transform: translateY(-4px);
             box-shadow: 0 16px 36px rgba(0, 45, 98, 0.1);
             border-color: #F06543;
          }

          .tech-highlight-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 3px;
            background: linear-gradient(90deg, #0B2545, #F06543);
          }

          .tech-badge {
            display: inline-block;
            color: #F06543;
            font-family: 'Space Grotesk', sans-serif;
            font-size: 12px;
            font-weight: 800;
            letter-spacing: 2px;
            text-transform: uppercase;
            padding: 6px 14px;
            border: 1px solid rgba(13, 148, 136, 0.3);
            border-radius: 20px;
            margin-bottom: 20px;
            background: #FFF0EB;
          }

          .tech-title {
            color: #0B2545;
            font-family: 'Space Grotesk', sans-serif;
            font-size: 26px;
            font-weight: 800;
            margin-bottom: 16px;
            line-height: 1.3;
          }

          .tech-text {
            color: #475569;
            font-family: 'Inter', sans-serif;
            font-size: 14.5px;
            line-height: 1.6;
            margin-bottom: 30px;
          }

          .tech-cta {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            background: linear-gradient(135deg, #FF6B4A 0%, #F06543 100%);
            color: #ffffff;
            text-decoration: none;
            padding: 13px 30px;
            border-radius: 30px;
            font-family: 'Space Grotesk', sans-serif;
            font-weight: 800;
            font-size: 13px;
            letter-spacing: 1px;
            border: none;
            transition: all 0.3s ease;
            cursor: pointer;
            box-shadow: 0 4px 16px rgba(0, 45, 98, 0.25);
          }

          .tech-cta:hover {
            box-shadow: 0 8px 24px rgba(0, 45, 98, 0.35);
            transform: translateY(-2px);
          }
          
          @media (max-width: 768px) {
            .tech-highlight-card {
                padding: 30px 20px;
            }
            .tech-title {
                font-size: 22px;
            }
          }
        `}
      </style>

      <div className="tech-highlight-card">
        <div className="tech-badge">BUILT FOR THE NEXT GENERATION OF TRAVEL</div>
        <h3 className="tech-title">Where Travel Expertise Meets Digital Innovation</h3>
        <p className="tech-text">
          From interactive 3D destinations to smart trip planning, Andaman Trails combines travel expertise with modern digital experiences.
        </p>
        <button className="tech-cta" onClick={scrollToHero}>
          <span>EXPLORE THE EXPERIENCE</span>
          <span>→</span>
        </button>
      </div>
    </div>
  );
};

export default TechnologyHighlight;
