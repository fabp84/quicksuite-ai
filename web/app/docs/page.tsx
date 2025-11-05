export default function Docs() {
  return (
    <main className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-6">QuickSuite API Documentation</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Remove Background</h2>
        <p className="mb-2">Send a POST request with an image file to the <code>/remove-bg</code> endpoint to remove the background from your image.</p>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto"><code>{`curl -X POST https://YOUR_BACKEND_DOMAIN/remove-bg \
  -F "file=@path/to/your/image.png" \
  --output result.png`}</code></pre>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Parse Form (QuickDoc AI)</h2>
        <p className="mb-2">Upload a PDF document to the <code>/parse-form</code> endpoint to extract key fields and return structured data (JSON or CSV).</p>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto"><code>{`curl -X POST https://YOUR_BACKEND_DOMAIN/parse-form \
  -F "file=@path/to/your/document.pdf" \
  -H "Accept: application/json"`}</code></pre>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Create Checkout Session</h2>
        <p className="mb-2">Initialize a Stripe Checkout session to subscribe to one of our plans. Pass a JSON body with the desired plan ID.</p>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto"><code>{`curl -X POST https://YOUR_BACKEND_DOMAIN/create-checkout-session \
  -H "Content-Type: application/json" \
  -d '{"priceId": "price_monthly"}'`}</code></pre>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Webhook</h2>
        <p className="mb-2">Configure your Stripe webhook to point to <code>/webhook</code> on your backend. We handle <code>checkout.session.completed</code> and <code>invoice.payment_succeeded</code> events to reconcile subscriptions.</p>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto"><code>{`https://YOUR_BACKEND_DOMAIN/webhook`}</code></pre>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Plans & Pricing</h2>
        <p className="mb-2">Our API offers monthly and yearly plans. See the <a href="/pricing" className="text-blue-500 underline">Pricing page</a> for details.</p>
      </section>
    </main>
  );
}
