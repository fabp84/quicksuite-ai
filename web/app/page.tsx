export default function Page() {
  return (
    <main className="container mx-auto py-16 px-4">
      <section className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4">Build AI-powered micro SaaS tools</h1>
        <p className="text-lg text-gray-600 mb-6">Automate your business with QuickSuite AI’s suite of micro‑services like background removal and form parsing.</p>
        <div className="flex justify-center space-x-4">
          <a href="/pricing" className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700">Get Started</a>
          <a href="/docs" className="border border-blue-600 text-blue-600 px-6 py-3 rounded-md hover:bg-blue-50">API Docs</a>
        </div>
      </section>
      <section className="grid md:grid-cols-3 gap-8">
        <div className="p-6 border rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-2">QuickBG Remover</h3>
          <p className="text-gray-600">Remove backgrounds from images with our high‑quality AI API.</p>
        </div>
        <div className="p-6 border rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-2">QuickDoc AI</h3>
          <p className="text-gray-600">Extract structured data from documents and convert to JSON or CSV.</p>
        </div>
        <div className="p-6 border rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-2">Payments & Subscriptions</h3>
          <p className="text-gray-600">Simple Stripe-powered checkout with monthly and yearly plans.</p>
        </div>
      </section>
    </main>
  );
}
