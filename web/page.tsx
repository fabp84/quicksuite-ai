export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-4">Welcome to QuickSuite AI</h1>
      <nav className="space-x-4">
        <a href="/pricing" className="text-blue-500 underline">Pricing</a>
        <a href="/docs" className="text-blue-500 underline">Docs</a>
        <a href="/about" className="text-blue-500 underline">About</a>
      </nav>
    </main>
  );
}
