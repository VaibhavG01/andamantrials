import React, { useState } from 'react';
import {
  ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip,
  PieChart, Pie, Cell, Legend
} from 'recharts';

export function RevenueChartCard({ title = 'REVENUE OVERVIEW', data, onPeriodChange }) {
  const [period, setPeriod] = useState('30d');

  const defaultData = [
    { date: '11 Aug', revenue: 45000 },
    { date: '12 Aug', revenue: 62000 },
    { date: '13 Aug', revenue: 58000 },
    { date: '14 Aug', revenue: 78000 },
    { date: '15 Aug', revenue: 95000 },
    { date: '16 Aug', revenue: 110000 },
    { date: '17 Aug', revenue: 135000 },
  ];

  const chartData = data && data.length > 0 ? data : defaultData;

  const handleToggle = (p) => {
    setPeriod(p);
    if (onPeriodChange) onPeriodChange(p);
  };

  return (
    <div style={{
      background: '#ffffff',
      backdropFilter: 'blur(16px)',
      border: '1px solid #e2e8f0',
      borderRadius: 24,
      padding: '24px',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.35)',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20, flexWrap: 'wrap', gap: 12 }}>
        <div>
          <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 800, color: '#F06543', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
            ANALYTICS & METRICS
          </div>
          <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 18, fontWeight: 800, color: '#0B2545', margin: '2px 0 0' }}>
            {title}
          </h3>
        </div>

        <div style={{ display: 'flex', gap: 4, background: '#f8fafc', padding: 4, borderRadius: 16, border: '1px solid #e2e8f0' }}>
          {['7d', '30d', '3m', '6m', '1y'].map((p) => (
            <button
              key={p}
              onClick={() => handleToggle(p)}
              style={{
                background: period === p ? '#F06543' : 'transparent',
                color: period === p ? '#ffffff' : '#9cb3bd',
                border: 'none',
                padding: '4px 12px',
                borderRadius: 12,
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 11,
                fontWeight: 800,
                cursor: 'pointer',
                textTransform: 'uppercase',
              }}
            >
              {p}
            </button>
          ))}
        </div>
      </div>

      <div style={{ width: '100%', height: 280 }}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="revenueGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#F06543" stopOpacity={0.4} />
                <stop offset="95%" stopColor="#F06543" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="date" stroke="#527588" fontSize={11} tickLine={false} />
            <YAxis stroke="#527588" fontSize={11} tickLine={false} tickFormatter={(v) => `₹${(v / 1000).toFixed(0)}k`} />
            <Tooltip
              contentStyle={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: 12, color: '#334155', fontSize: 12 }}
              formatter={(value) => [`₹${Number(value).toLocaleString('en-IN')}`, 'Revenue']}
            />
            <Area type="monotone" dataKey="revenue" stroke="#F06543" strokeWidth={3} fillOpacity={1} fill="url(#revenueGrad)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export function BookingDonutChartCard({ title = 'BOOKING OVERVIEW', data }) {
  const defaultData = [
    { name: 'Ferry', value: 580, color: '#F06543' },
    { name: 'Stay', value: 340, color: '#F06543' },
    { name: 'Cruise', value: 210, color: '#ffab00' },
  ];

  const chartData = data && data.length > 0 ? data : defaultData;
  const total = chartData.reduce((acc, curr) => acc + curr.value, 0);

  return (
    <div style={{
      background: '#ffffff',
      backdropFilter: 'blur(16px)',
      border: '1px solid #e2e8f0',
      borderRadius: 24,
      padding: '24px',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.35)',
    }}>
      <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 800, color: '#F06543', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
        BREAKDOWN BY CATEGORY
      </div>
      <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 18, fontWeight: 800, color: '#0B2545', margin: '2px 0 16px' }}>
        {title}
      </h3>

      <div style={{ width: '100%', height: 220, position: 'relative' }}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie data={chartData} innerRadius={60} outerRadius={85} paddingAngle={4} dataKey="value">
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip contentStyle={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: 12, color: '#334155', fontSize: 12 }} />
          </PieChart>
        </ResponsiveContainer>

        <div style={{
          position: 'absolute', top: '44%', left: '50%', transform: 'translate(-50%, -50%)',
          textAlign: 'center', pointerEvents: 'none'
        }}>
          <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 22, fontWeight: 900, color: '#334155' }}>
            {total}
          </div>
          <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 12.5, color: '#627d8a', textTransform: 'uppercase' }}>
            TOTAL
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', gap: 16, marginTop: 10 }}>
        {chartData.map((item) => (
          <div key={item.name} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12 }}>
            <span style={{ width: 10, height: 10, borderRadius: '50%', background: item.color }} />
            <span style={{ color: '#64748b' }}>{item.name}:</span>
            <span style={{ color: '#0B2545', fontWeight: 700 }}>{total > 0 ? ((item.value / total) * 100).toFixed(0) : 0}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}
