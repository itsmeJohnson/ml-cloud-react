import { useRef } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "your_service_id",
        "your_template_id",
        form.current,
        "your_public_key"
      )
      .then(() => alert("Message sent successfully!"))
      .catch(() => alert("Failed to send message."));
  };

  return (
    <section id="contact" className="py-16 px-4 sm:px-6 bg-zinc-950">
      <div className="max-w-4xl mx-auto flex flex-col space-y-8">

        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent">
          Let&apos;s Talk
        </h2>
        <p className="text-center text-gray-300 text-sm sm:text-base">
          Reach out for inquiries about our Azure development and DevOps services.
        </p>

        {/* Contact Form */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="bg-zinc-900/50 backdrop-blur-md p-6 sm:p-8 rounded-2xl shadow-lg flex flex-col space-y-4"
        >
          <input
            type="text"
            name="user_name"
            placeholder="Enter your first name"
            className="w-full p-3 rounded-lg bg-zinc-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 outline-none"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Enter your email address*"
            required
            className="w-full p-3 rounded-lg bg-zinc-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 outline-none"
          />
          <textarea
            name="message"
            placeholder="Type your message here*"
            required
            rows="5"
            className="w-full p-3 rounded-lg bg-zinc-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 outline-none"
          />
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-600 to-pink-600 text-white font-semibold hover:opacity-90 transition"
          >
            Submit your inquiry now
          </button>
        </form>

        {/* Contact Info */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-gray-300 text-sm sm:text-base">
          <p>
            <span className="font-semibold text-blue-400">Email:</span>{" "}
            marketing@mlclouddesignlabs.com
          </p>
          <p>
            <span className="font-semibold text-pink-400">Phone:</span>{" "}
            +1-416-731-1485
          </p>
        </div>

      </div>
    </section>
  );
}
