import { useState } from "react";
import { motion } from "framer-motion";
import { artists } from "@/data/artists";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      await fetch("https://formspree.io/f/mbdabbql", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      setSubmitted(true);
      form.reset();
    } catch {
      alert("Something went wrong. Please try again or email us directly.");
    }
  };

  return (
    <>
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4 max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="section-heading mb-6"
          >
            Contact
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-center text-muted-foreground mb-16"
          >
            Fill out the form below to book your appointment or ask a question.
          </motion.p>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-16"
            >
              <h2 className="text-2xl font-bold tracking-[0.15em] uppercase mb-4">Thank You!</h2>
              <p className="text-muted-foreground">We'll get back to you as soon as possible.</p>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs tracking-[0.15em] uppercase font-medium mb-2">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    required
                    className="w-full bg-card border border-border px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs tracking-[0.15em] uppercase font-medium mb-2">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    required
                    className="w-full bg-card border border-border px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs tracking-[0.15em] uppercase font-medium mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full bg-card border border-border px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs tracking-[0.15em] uppercase font-medium mb-2">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  className="w-full bg-card border border-border px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs tracking-[0.15em] uppercase font-medium mb-2">Preferred Artist</label>
                <select
                  name="artist"
                  className="w-full bg-card border border-border px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary transition-colors"
                >
                  <option value="">No Preference</option>
                  {artists.map((a) => (
                    <option key={a.slug} value={a.name}>
                      {a.name}{a.isGuest ? " (Guest)" : ""}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-xs tracking-[0.15em] uppercase font-medium mb-2">Tattoo Description</label>
                <textarea
                  name="description"
                  rows={5}
                  required
                  placeholder="Tell us about the tattoo you'd like — size, placement, style, and any reference images."
                  className="w-full bg-card border border-border px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                />
              </div>
              <div className="text-center pt-4">
                <button type="submit" className="cta-button">
                  Submit Booking Request
                </button>
              </div>
            </motion.form>
          )}
        </div>
      </section>

      {/* Map */}
      <section className="pb-0">
        <div className="w-full h-[400px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2603.123!2d-123.0695!3d49.2715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548671854e0ee703%3A0x7fbc48cb507cb03c!2s1395+Commercial+Dr%2C+Vancouver%2C+BC+V5L+3X5%2C+Canada!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Unity Tattoo Location"
          />
        </div>
      </section>
    </>
  );
};

export default Contact;
