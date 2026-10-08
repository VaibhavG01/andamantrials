import React from 'react';
import { ShieldCheck, Clock, XCircle, CheckCircle2, RefreshCw } from 'lucide-react';

export default function StatusBadge({ status = 'CONFIRMED' }) {
  const upper = (status || '').toUpperCase();

  let bg = 'rgba(33, 230, 193, 0.15)';
  let border = 'rgba(33, 230, 193, 0.4)';
  let color = '#F06543';
  let Icon = ShieldCheck;

  switch (upper) {
    case 'CONFIRMED':
    case 'APPROVED':
    case 'ACTIVE':
    case 'ON TIME':
      bg = 'rgba(33, 230, 193, 0.15)';
      border = 'rgba(33, 230, 193, 0.4)';
      color = '#F06543';
      Icon = ShieldCheck;
      break;

    case 'PENDING':
    case 'NEW':
    case 'SCHEDULED':
    case 'IN_PROGRESS':
      bg = 'rgba(255, 171, 0, 0.15)';
      border = 'rgba(255, 171, 0, 0.4)';
      color = '#ffab00';
      Icon = Clock;
      break;

    case 'COMPLETED':
    case 'RESOLVED':
      bg = 'rgba(22, 217, 255, 0.15)';
      border = 'rgba(22, 217, 255, 0.4)';
      color = '#F06543';
      Icon = CheckCircle2;
      break;

    case 'CANCELLED':
    case 'REJECTED':
    case 'BLOCKED':
    case 'INACTIVE':
      bg = 'rgba(255, 79, 123, 0.15)';
      border = 'rgba(255, 79, 123, 0.4)';
      color = '#ff4f7b';
      Icon = XCircle;
      break;

    case 'REFUNDED':
      bg = 'rgba(156, 179, 189, 0.15)';
      border = 'rgba(156, 179, 189, 0.4)';
      color = '#9cb3bd';
      Icon = RefreshCw;
      break;

    default:
      break;
  }

  return (
    <span style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      padding: '4px 10px',
      borderRadius: 20,
      background: bg,
      border: `1px solid ${border}`,
      color: color,
      fontFamily: "'Space Grotesk', sans-serif",
      fontSize: 12.5,
      fontWeight: 800,
      letterSpacing: '0.04em',
      textTransform: 'uppercase',
      whiteSpace: 'nowrap',
    }}>
      <Icon size={12} />
      {upper}
    </span>
  );
}
