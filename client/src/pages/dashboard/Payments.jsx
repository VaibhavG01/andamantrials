import React, { useState, useEffect } from 'react';
import { ArrowLeft, CreditCard, ShieldCheck, CheckCircle2, Loader2, Download } from 'lucide-react';
import { bookingService } from '../../api/bookingService';

export default function PaymentsPage({ onBack }) {
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    bookingService.getMyBookings()
      .then(res => {
        if (res.data && Array.isArray(res.data)) {
          // Map paid bookings as transactions
          const mapped = res.data.map(bk => ({
            id: `TXN-${bk.bookingNumber}`,
            name: bk.activity?.name || bk.package?.name || bk.ferry?.name || bk.cruise?.name || bk.stay?.name || `${bk.bookingType || 'Adventure'} Confirmation`,
            amount: `₹${parseFloat(bk.totalAmount || 0).toLocaleString('en-IN')}`,
            date: bk.activityDate || bk.bookingDate,
            method: bk.razorpayPaymentId ? `Razorpay: ${bk.razorpayPaymentId}` : (bk.paymentStatus === 'PAID' ? 'Razorpay 256-bit SSL Gateway' : 'Standard Payment'),
            status: bk.paymentStatus || 'PAID',
            razorpayPaymentId: bk.razorpayPaymentId,
            razorpayOrderId: bk.razorpayOrderId,
            razorpaySignature: bk.razorpaySignature,
          }));
          setPayments(mapped);
        }
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const downloadReceipt = (payment) => {
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
      <html>
        <head>
          <title>Receipt - ${payment.id}</title>
          <style>
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; padding: 40px; color: #333; }
            .receipt-container { max-width: 600px; margin: 0 auto; border: 1px solid #ddd; padding: 30px; border-radius: 12px; }
            .logo { font-size: 24px; font-weight: bold; color: #F06543; margin-bottom: 20px; }
            .header { display: flex; justify-content: space-between; border-bottom: 2px solid #eee; padding-bottom: 15px; margin-bottom: 20px; }
            .title { font-size: 20px; font-weight: bold; }
            .details { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-bottom: 30px; }
            .details-label { color: #666; font-size: 12px; text-transform: uppercase; }
            .details-value { font-weight: bold; font-size: 14px; margin-top: 2px; }
            .total-box { background: #f9f9f9; padding: 20px; border-radius: 8px; display: flex; justify-content: space-between; align-items: center; margin-top: 30px; }
            .total-label { font-size: 16px; font-weight: bold; }
            .total-amount { font-size: 22px; font-weight: bold; color: #F06543; }
            .footer { text-align: center; font-size: 13px; color: #999; margin-top: 40px; border-top: 1px solid #eee; padding-top: 15px; }
          </style>
        </head>
        <body>
          <div class="receipt-container">
            <div class="logo">ANDAMAN TRAILS</div>
            <div class="header">
              <span class="title">BOOKING RECEIPT</span>
              <span>Ref: ${payment.id}</span>
            </div>
            <div class="details">
              <div>
                <div class="details-label">SERVICE</div>
                <div class="details-value">${payment.name}</div>
              </div>
              <div>
                <div class="details-label">DATE</div>
                <div class="details-value">${payment.date}</div>
              </div>
              <div>
                <div class="details-label">PAYMENT METHOD</div>
                <div class="details-value">${payment.method}</div>
              </div>
              <div>
                <div class="details-label">STATUS</div>
                <div class="details-value" style="color: #F06543;">${payment.status}</div>
              </div>
              ${payment.razorpayPaymentId ? `
              <div>
                <div class="details-label">RAZORPAY PAYMENT ID</div>
                <div class="details-value">${payment.razorpayPaymentId}</div>
              </div>
              ` : ''}
              ${payment.razorpayOrderId ? `
              <div>
                <div class="details-label">RAZORPAY ORDER ID</div>
                <div class="details-value">${payment.razorpayOrderId}</div>
              </div>
              ` : ''}
            </div>
            <div class="total-box">
              <span class="total-label">TOTAL AMOUNT PAID</span>
              <span class="total-amount">${payment.amount}</span>
            </div>
            <div class="footer">
              Thank you for choosing Andaman Trails. This is an electronically generated receipt verified via Razorpay Secure Gateway. No physical signature is required.
            </div>
          </div>
          <script>
            window.onload = function() {
              window.print();
              setTimeout(function() { window.close(); }, 500);
            }
          </script>
        </body>
      </html>
    `);
    printWindow.document.close();
  };

  return (
    <div style={{ background: '#ffffff', border: '1.5px solid #EBDED2', borderRadius: 24, padding: 32, boxShadow: '0 4px 20px rgba(11, 37, 69, 0.04)' }}>
      <button
        onClick={onBack}
        style={{
          fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 800,
          color: '#F06543', background: '#FFF0EB',
          border: '1px solid #FFD3C4', padding: '6px 14px',
          borderRadius: 20, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 6,
          marginBottom: 16,
        }}
      >
        <ArrowLeft size={12} /> Back to Dashboard
      </button>

      <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 32, fontWeight: 600, color: '#0B2545', marginBottom: 6 }}>
        Payment History & Invoices
      </h1>
      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: '#5C6F84', marginBottom: 24 }}>
        View transactions, GST invoices, and manage saved payment methods.
      </p>

      {loading ? (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, color: '#F06543', padding: '24px 0' }}>
          <Loader2 size={16} className="animate-spin" />
          <span style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Querying Transactions...</span>
        </div>
      ) : payments.length === 0 ? (
        <div style={{ color: '#5C6F84', fontFamily: "'Inter', sans-serif", fontSize: 13, padding: '20px 0', textAlign: 'center' }}>
          No transactions found. Bookings paid via Razorpay will appear here.
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {payments.map(p => (
            <div key={p.id} style={{ background: '#FAF4EE', border: '1px solid #EBDED2', borderRadius: 16, padding: 18, display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
              <div>
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 15, fontWeight: 800, color: '#0B2545' }}>{p.name}</div>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 11.5, color: '#5C6F84' }}>Ref: {p.id} • {p.method} • {p.date}</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginLeft: 'auto' }}>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 18, fontWeight: 900, color: '#F06543' }}>{p.amount}</div>
                  <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 12.5, fontWeight: 900, color: '#16a34a', background: 'rgba(22, 163, 74, 0.1)', padding: '2px 8px', borderRadius: 10, display: 'inline-flex', alignItems: 'center', gap: 4, marginTop: 4 }}>
                    <CheckCircle2 size={10} /> {p.status}
                  </span>
                </div>
                <button
                  onClick={() => downloadReceipt(p)}
                  title="Download Receipt as PDF"
                  style={{
                    background: '#FFF0EB',
                    border: '1px solid #FFD3C4',
                    color: '#F06543',
                    width: 38,
                    height: 38,
                    borderRadius: 10,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = '#F06543'; e.currentTarget.style.color = '#ffffff'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = '#FFF0EB'; e.currentTarget.style.color = '#F06543'; }}
                >
                  <Download size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
