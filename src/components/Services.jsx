export default function Services() {
    return (
      <section id="services" className="py-16 px-6 bg-zinc-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent">
            Our Services
          </h2>
  
          <div className="grid md:grid-cols-2 gap-10">
            {/* Functional Safety Support */}
            <div className="p-6 rounded-xl bg-zinc-900/50 hover:bg-zinc-800/80 shadow-lg transition-all hover:scale-105">
              <h3 className="text-2xl font-semibold mb-4 text-blue-400">
                Functional Safety Support
              </h3>
              <p className="text-gray-300 mb-4">
                End-to-End functional safety support tailored for OEMs, Tier-1s, and startups.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-400">
                <li>Item Definition</li>
                <li>Hazard Analysis and Risk Assessment (HARA)</li>
                <li>Functional Safety Concept (FSC)</li>
                <li>Impact Analysis</li>
                <li>System Design Safety & Software Safety Development</li>
                <li>Failure Modes and Effects Analysis (FMEA & FMEA-MSR)</li>
                <li>Fault Tree Analysis (FTA)</li>
                <li>Dependent Failure Analysis (DFA)</li>
                <li>Safety Case development</li>
              </ul>
            </div>
  
            {/* Cloud Development */}
            <div className="p-6 rounded-xl bg-zinc-900/50 hover:bg-zinc-800/80 shadow-lg transition-all hover:scale-105">
              <h3 className="text-2xl font-semibold mb-4 text-pink-400">
                Cloud Development Solutions
              </h3>
              <p className="text-gray-300 mb-4">
                Providing expert software development using Microsoft technologies for over 13 years.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-400">
                <li>Azure Development Expertise</li>
                <li>DevOps Implementation Services</li>
                <li>Continuous Learning Commitment</li>
                <li>Certified Experts</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
  