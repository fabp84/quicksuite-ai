'use client';

export default function Cancel() {
  return (
    <main className="container">
      <h1 className="text-4xl font-bold mb-4">Payment Cancelled</h1>
      <p className="text-lg mb-8">Your subscription process was cancelled. If this was a mistake, please try subscribing again.</p>
      <a href="/pricing" className="btn-primary">Back to Pricing</a>
    </main>
  );
}
