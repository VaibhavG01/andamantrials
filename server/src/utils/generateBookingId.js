/**
 * Generate unique public booking numbers formatted as:
 * AND-2026-XXXXXX (or service specific AND-ACT-2026-XXXXXX)
 */
export const generateBookingId = (type = 'ACTIVITY') => {
  const year = new Date().getFullYear();
  const randomSuffix = Math.floor(100000 + Math.random() * 900000);

  if (type === 'ACTIVITY') {
    return `AND-${year}-${randomSuffix}`;
  }

  const prefixMap = {
    FERRY: 'AND-FRY',
    CRUISE: 'AND-CRS',
    STAY: 'AND-STY',
    ACTIVITY: 'AND-ACT',
    PACKAGE: 'AND-PKG',
  };

  const prefix = prefixMap[type] || 'AND';
  return `${prefix}-${year}-${randomSuffix}`;
};
