// src/components/technology/TechnologyFlow.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Technology Data Pipeline Flow Diagram with Lucide Icons.

import React from 'react';
import { User, Code2, Box, Rocket, Database, Sparkles } from 'lucide-react';

function getFlowLucideIcon(iconType) {
  const props = { size: 18, color: '#F06543', strokeWidth: 2 };
  switch (iconType) {
    case 'user': return <User {...props} />;
    case 'react': return <Code2 {...props} />;
    case 'cube': return <Box {...props} />;
    case 'rocket': return <Rocket {...props} />;
    case 'database': return <Database {...props} />;
    case 'sparkles': return <Sparkles {...props} />;
    default: return <Sparkles {...props} />;
  }
}

const TechnologyFlow = () => {
  const steps = FLOW_STEPS || [
    { id: 'user', label: 'USER', iconType: 'user', desc: 'Traveler Request' },
    { id: 'react', label: 'REACT UI', iconType: 'react', desc: 'Interactive Interface' },
    { id: 'three', label: '3D EXPERIENCE', iconType: 'cube', desc: 'WebGL Island Scene' },
    { id: 'api', label: 'NODE.JS API', iconType: 'rocket', desc: 'Secure Middleware' },
    { id: 'db', label: 'MYSQL', iconType: 'database', desc: 'Travel Database' },
    { id: 'data', label: 'TRAVEL DATA', iconType: 'sparkles', desc: 'Realtime Itinerary' },
  ];

  return (
    <div className="w-full bg-[#ffffff] border border-[#e2e8f0] rounded-[20px] p-6 sm:p-8 shadow-[0_4px_20px_rgba(0,45,98,0.06)]">
      <div className="text-center mb-6">
        <span className="font-['Space_Grotesk'] text-xs font-bold tracking-[0.2em] text-[#F06543] uppercase">
          DATA PIPELINE FLOW
        </span>
        <h3 className="font-['Space_Grotesk'] text-lg sm:text-xl font-extrabold text-[#0B2545] mt-1">
          How Andaman Trails Delivers Real-Time Experiences
        </h3>
      </div>

      <style>
        {`
          .flow-container {
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-wrap: nowrap;
            gap: 8px;
            width: 100%;
            overflow-x: auto;
            padding-bottom: 8px;
          }

          .flow-node {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            background: #f8fafc;
            border: 1px solid #e2e8f0;
            border-radius: 14px;
            padding: 12px 14px;
            min-width: 130px;
            flex-shrink: 0;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            position: relative;
            box-shadow: 0 2px 8px rgba(0, 45, 98, 0.04);
          }

          .flow-node:hover {
            transform: translateY(-3px);
            border-color: #F06543;
            background: #ffffff;
            box-shadow: 0 8px 20px rgba(0, 45, 98, 0.08);
          }

          .node-icon {
            margin-bottom: 6px;
            width: 36px;
            height: 36px;
            border-radius: 10px;
            background: #FFF0EB;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid rgba(13, 148, 136, 0.25);
          }

          .node-label {
            font-family: 'Space Grotesk', sans-serif;
            font-weight: 800;
            font-size: 13px;
            letter-spacing: 0.05em;
            color: #0B2545;
            text-transform: uppercase;
          }

          .node-desc {
            font-family: 'Inter', sans-serif;
            font-weight: 400;
            font-size: 11px;
            color: #64748b;
            margin-top: 2px;
          }

          .flow-connector {
            display: flex;
            align-items: center;
            justify-content: center;
            flex: 1;
            min-width: 24px;
            position: relative;
          }

          .connector-line {
            width: 100%;
            height: 2px;
            background: #cbd5e1;
          }

          .connector-dot {
            position: absolute;
            width: 6px;
            height: 6px;
            border-radius: 50%;
            background: #F06543;
            box-shadow: 0 0 6px #F06543;
            animation: moveDot 2s linear infinite;
          }

          @keyframes moveDot {
            0% { left: 0%; opacity: 0; }
            15% { opacity: 1; }
            85% { opacity: 1; }
            100% { left: 100%; opacity: 0; }
          }

          @media (max-width: 768px) {
            .flow-container {
              flex-direction: column;
              align-items: stretch;
              gap: 12px;
            }

            .flow-node {
              width: 100%;
              flex-direction: row;
              text-align: left;
              gap: 12px;
              padding: 10px 14px;
            }

            .node-icon {
              margin-bottom: 0;
            }

            .flow-connector {
              height: 16px;
              width: 2px;
              margin: 0 auto;
            }

            .connector-line {
              width: 2px;
              height: 100%;
              background: repeating-linear-gradient(
                180deg,
                rgba(22, 217, 255, 0.6),
                rgba(22, 217, 255, 0.6) 4px,
                transparent 4px,
                transparent 8px
              );
            }

            .connector-dot {
              animation: moveDotVertical 2s linear infinite;
            }
          }

          @keyframes moveDotVertical {
            0% { top: 0; left: -2px; opacity: 0; }
            15% { opacity: 1; }
            85% { opacity: 1; }
            100% { top: 100%; left: -2px; opacity: 0; }
          }
        `}
      </style>

      <div className="flow-container">
        {steps.map((step, index) => (
          <React.Fragment key={step.id || index}>
            <div className="flow-node">
              <div className="node-icon">{getFlowLucideIcon(step.iconType)}</div>
              <div className="node-content">
                <span className="node-label">{step.label}</span>
                <span className="node-desc">{step.desc}</span>
              </div>
            </div>
            
            {index < steps.length - 1 && (
              <div className="flow-connector">
                <div className="connector-line"></div>
                <div className="connector-dot" style={{ animationDelay: `${index * 0.3}s` }}></div>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default TechnologyFlow;
