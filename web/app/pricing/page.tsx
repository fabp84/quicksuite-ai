'use client';

import { useState } from 'react';

export default function PricingPage() {
  const [loading, setLoading] = useState(false);

  async function handleCheckout(plan: string) {
    setLoading(true);
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/create-checkout-session`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ priceId: plan }),
    });
    const data = await res.json();
    if (data.url) {
      window.location.href = data.url;
    }
    setLoading(false);
  }

  return (
    <main className="container mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">Choose your plan</h1>
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div className="border rounded-xl p-6 shadow-sm flex flex-col items-start">
          <h2 className="text-2xl font-semibold mb-2">Monthly</h2>
          <p className="text-gray-600 mb-4">$9.90 / month</p>
          <ul className="mb-6 space-y-2 text-gray-600">
            <li>• 1,000 background removals</li>
            <li>• Access to QuickDoc AI</li>
            <li>• Email support</li>
          </ul>
          <button onClick={() => handleCheckout('price_monthly')} className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700" disabled={loading}>
            {loading ? 'Processing...' : 'Subscribe'}
          </button>
        </div>
        <div className="border rounded-xl p-6 shadow-sm flex flex-col items-start">
          <h2 className="text-2xl font-semibold mb-2">Yearly</h2>
          <p className="text-gray-600 mb-4">$99 / year</p>
          <ul className="mb-6 space-y-2 text-gray-600">
            <li>• Unlimited background removals</li>
            <li>• Access to all APIs</li>
            <li>• Priority support</li>
          </ul>
          <button onClick={() => handleCheckout('price_yearly')} className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700" disabled={loading}>
            {loading ? 'Processing...' : 'Subscribe'}
          </button>
        </div>
      </div>
    </main>
  );
}
