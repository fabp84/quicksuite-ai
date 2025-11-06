export default function About() {
  return (
    <main className="container py-12">
      <h1 className="text-4xl font-bold mb-4">About QuickSuite AI</h1>
      <p className="text-lg mb-8">QuickSuite AI builds AI-powered tools to automate your workflows and enhance productivity.</p>
      <section className="grid md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
          <p className="text-muted-foreground">To provide freelancers and businesses with accessible micro-SaaS tools powered by cutting-edge AI.</p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-2">Our Values</h2>
          <ul className="list-disc pl-5 text-muted-foreground">
            <li>Innovation and quality</li>
            <li>User-centric design</li>
            <li>Reliability and scalability</li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-2">Get in Touch</h2>
          <p className="text-muted-foreground">We'd love to hear from you! Email us at contact@quicksuite.ai.</p>
        </div>
      </section>
    </main>
  );
}
