// app/contact/page.tsx
export default function Contact() {
  return (
    <form
      action="/api/contact"
      method="POST"
      className="max-w-xl mx-auto mt-12 bg-white p-8 rounded-xl shadow space-y-4"
    >
      <h2 className="text-xl font-semibold">Contact Ziidi</h2>

      <input name="name" required
        placeholder="Your Name"
        className="w-full border p-3 rounded" />

      <input name="email" type="email" required
        placeholder="Email Address"
        className="w-full border p-3 rounded" />

      <textarea name="message" required
        placeholder="Your message"
        className="w-full border p-3 rounded h-32" />

      <button className="w-full bg-indigo-700 text-white py-3 rounded">
        Send Message
      </button>
    </form>
  );
}
