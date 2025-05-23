import React from "react";
const Contact = () => (
  <section className="max-w-xl mx-auto p-6">
    <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
    <form action="https://formspree.io/f/xnndrkdr" method="POST" className="flex flex-col space-y-4">
      <input type="text" name="name" placeholder="Your Name" required className="border p-2 rounded" />
      <input type="email" name="email" placeholder="Your Email" required className="border p-2 rounded" />
      <textarea name="message" rows="5" placeholder="Your Message" required className="border p-2 rounded" />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Send</button>
    </form>
  </section>
);

export default Contact;
