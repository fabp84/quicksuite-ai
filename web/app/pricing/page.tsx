'use client';

import { useState } from 'react';

export default function PricingPage() {
  const [loading, setLoading] = useState(false);

  async function handleCheckout(plan: string) {
    setLoading(true);
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/create-checkout-session/${plan}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: 'test@example.com' }),
    });
    const data = await res.json();
    if (data.url) {
      window.location.href = data.url;
    }
  }

  return (
    <div className="flex flex-col items-center p-10">
      <h1 className="text-3xl font-bold mb-6">Choose your plan</h1>
      <div className="flex gap-6">
        <div className="border rounded-2xl p-6 shadow">
          <h2 className="text-xl font-semibold">Monthly</h2>
          <p>$9.90 / month</p>
          <button onClick={() => handleCheckout('basic_monthly')} disabled={loading} className="bg-blue-600 text-white px-4 py-2 rounded mt-4">
            Subscribe
          </button>
        </div>
        <div className="border rounded-2xl p-6 shadow">
          <h2 className="text-xl font-semibold">Yearly</h2>
          <p>$99 / year</p>
          <button onClick={() => handleCheckout('basic_yearly')} disabled={loading} className="bg-blue-600 text-white px-4 py-2 rounded mt-4">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}
