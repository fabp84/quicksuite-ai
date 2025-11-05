export default function Pricing() {
  async function handleCheckout() {
    const res = await fetch("/create-checkout-session", { method: "POST" });
    const data = await res.json();
    if (data.url) {
      window.location.href = data.url;
    } else {
      alert("Error creating checkout session");
    }
  }

  return (
    <main className="container">
      <h1 className="text-4xl font-bold mb-4">Pricing</h1>
      <p className="text-lg mb-8">Choose the plan that suits your needs.</p>
      <div className="pricing-card">
        <h2 className="text-2xl font-semibold mb-2">Standard Plan</h2>
        <p className="mb-3">$9/month – Access to all micro-tools</p>
        <button onClick={handleCheckout} className="btn-primary">Subscribe</button>
      </div>
    </main>
  );
}
