// app/page.tsx
import { counties } from "@/lib/counties";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      <header className="bg-indigo-700 text-white py-8">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl font-bold">Ziidi</h1>
          <p className="text-sm opacity-90">
            Digital Credit Access for Kenyans
          </p>
        </div>
      </header>

      <section className="max-w-3xl mx-auto mt-10 bg-white p-8 rounded-xl shadow">
        <h2 className="text-xl font-semibold mb-2">
          Loan Application
        </h2>

        <p className="text-sm text-gray-600 mb-6">
          Qualified applications are processed within
          <strong> 48–72 hours</strong>.
        </p>

        <form action="/api/apply" method="POST" className="space-y-4">
          <input name="fullName" required
            placeholder="Full Name"
            className="w-full border p-3 rounded" />

          <input name="phone" required
            placeholder="Phone Number"
            className="w-full border p-3 rounded" />

          <input name="nationalId" required
            placeholder="National ID Number"
            className="w-full border p-3 rounded" />

          <select name="county" required
            className="w-full border p-3 rounded">
            <option value="">Select County</option>
            {counties.map(c => (
              <option key={c}>{c}</option>
            ))}
          </select>

          <input name="amount"
            placeholder="Requested Amount (KES)"
            className="w-full border p-3 rounded" />

          <button className="w-full bg-indigo-700 text-white py-3 rounded font-medium">
            Submit Application
          </button>
        </form>
      </section>
    </main>
  );
}
