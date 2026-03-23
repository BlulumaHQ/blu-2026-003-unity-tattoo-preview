import { Link } from "react-router-dom";
import { useMemo } from "react";
import { motion } from "framer-motion";
import { Star, CheckCircle, ArrowDown, MapPin, Clock, Users, Shield } from "lucide-react";
import { artists } from "@/data/artists";

const allRecentWorkImages = [
  "/images/portfolio/tattoo-snake-bg.webp",
  "/images/portfolio/tattoo-moon-woman.webp",
  "/images/portfolio/tattoo-frog-samurai.webp",
  "/images/portfolio/tattoo-eagle-snake.webp",
  "/images/portfolio/tattoo-robot-helmet.webp",
  "/images/portfolio/tattoo-strawberry-heart.webp",
  "/images/portfolio/tattoo-cat-portrait.webp",
  "/images/portfolio/tattoo-statue-realism.webp",
  "/images/portfolio/tattoo-dotwork-mandala.jpg",
  "/images/portfolio/tattoo-fineline-botanical.jpg",
  "/images/portfolio/tattoo-fineline-portrait.jpg",
  "/images/portfolio/tattoo-japanese-dragon.jpg",
  "/images/portfolio/tattoo-neo-trad-skull-rose.jpg",
  "/images/portfolio/tattoo-trad-eagle.jpg",
  "/images/portfolio/tattoo-watercolor-bird.jpg",
  "/images/portfolio/tattoo-wolf-realism.jpg",
];

function shuffleArray<T>(arr: T[]): T[] {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

const reviews = [
  {
    name: "Sarah M.",
    rating: 5,
    text: "Incredible experience! The artists at Unity Tattoo are so talented and professional. My piece turned out even better than I imagined.",
  },
  {
    name: "Jordan K.",
    rating: 5,
    text: "Best tattoo shop in Vancouver. The studio is clean, welcoming, and the artists really take the time to understand your vision.",
  },
  {
    name: "Alex R.",
    rating: 5,
    text: "Had an amazing session here. The attention to detail is unmatched. Highly recommend Unity Tattoo to anyone looking for quality work.",
  },
];

const benefits = [
  { icon: Users, title: "8 Specialized Artists", desc: "Each with their own unique style and expertise" },
  { icon: Shield, title: "Professional Studio", desc: "Clean, welcoming, professional environment" },
  { icon: MapPin, title: "Commercial Drive", desc: "Vancouver's iconic creative neighborhood" },
  { icon: Clock, title: "Dedicated Sessions", desc: "Artists take time to understand your vision" },
];

const Index = () => {
  const recentWorkImages = useMemo(() => shuffleArray(allRecentWorkImages).slice(0, 8), []);

  return (
    <>
      {/* ========== 1. HOOK — Full-screen hero ========== */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/shop-exterior.jpg')" }}
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xs md:text-sm tracking-[0.4em] uppercase text-white/50 mb-6"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Vancouver's Premier Tattoo Collective
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-6"
          >
            Unity Tattoo
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base md:text-lg text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            8 talented artists. One studio. Your vision, brought to life with precision and artistry.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link to="/contact" className="cta-button-bold">
              Book Your Appointment
            </Link>
            <a href="#artists" className="cta-button-light text-sm">
              Meet the Artists
            </a>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-white/30 text-xs tracking-[0.3em] uppercase" style={{ fontFamily: 'var(--font-body)' }}>
            Discover
          </span>
          <ArrowDown size={16} className="text-white/30 animate-bounce" />
        </motion.div>
      </section>

      {/* ========== 2. PROBLEM — Why this matters ========== */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            The Problem
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-heading mb-8"
          >
            Your Tattoo Deserves Better
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground leading-relaxed text-base md:text-lg"
          >
            Finding the right tattoo artist isn't easy. Generic studios, inconsistent quality, and artists who don't
            take the time to understand your vision — the result is a tattoo you settle for instead of one you love.
          </motion.p>
        </div>
      </section>

      {/* ========== 3. AGITATION — Emphasize the pain ========== */}
      <section className="py-20 md:py-28 funnel-dark-section">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-heading mb-8 text-white"
          >
            A Tattoo is Permanent.<br />
            <span style={{ color: 'hsl(var(--funnel-accent))' }}>Your Artist Shouldn't Be a Gamble.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/60 leading-relaxed text-base md:text-lg mb-10"
          >
            You deserve an artist who specializes in your style, works in a professional studio,
            and treats your idea with the care it deserves. Not a rushed session in a busy shop.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link to="/contact" className="cta-button-bold">
              Find Your Artist
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ========== 4. SOLUTION — Unity Tattoo ========== */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            The Solution
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-heading mb-8"
          >
            The Studio
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground leading-relaxed text-base md:text-lg mb-12"
          >
            Located on Vancouver's iconic Commercial Drive, Unity Tattoo is a collective of talented artists united
            by a shared passion for exceptional tattooing. Our studio provides a welcoming, professional environment
            where artistry meets precision.
          </motion.p>
          <Link to="/the-shop" className="cta-button">
            Explore the Shop
          </Link>
        </div>
      </section>

      {/* ========== 5. BENEFITS — Value breakdown ========== */}
      <section className="py-20 md:py-28 bg-muted">
        <div className="container mx-auto px-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6 text-center"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Why Unity Tattoo
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-heading mb-16"
          >
            Everything You Need in One Studio
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {benefits.map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-foreground text-background mb-5">
                  <b.icon size={22} />
                </div>
                <h3 className="font-serif text-lg mb-2">{b.title}</h3>
                <p className="text-sm text-muted-foreground">{b.desc}</p>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center mt-14"
          >
            <Link to="/contact" className="cta-button">
              Start Your Consultation
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ========== 6. TRUST — Testimonials ========== */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6 text-center"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Real Clients. Real Results.
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-heading mb-4"
          >
            What People Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-muted-foreground text-sm mb-12"
          >
            Reviews from Google
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {reviews.map((review, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-card border border-border rounded-sm p-8 text-center"
              >
                <div className="flex items-center justify-center gap-1 mb-4">
                  {Array.from({ length: review.rating }).map((_, j) => (
                    <Star key={j} size={16} className="fill-yellow-500 text-yellow-500" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">"{review.text}"</p>
                <p className="text-xs font-semibold tracking-wider uppercase" style={{ fontFamily: 'var(--font-body)' }}>
                  {review.name}
                </p>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link to="/contact" className="cta-button-bold">
              Join Our Happy Clients
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ========== 7. OFFER — Meet the Artists ========== */}
      <section id="artists" className="py-20 md:py-28 funnel-dark-section">
        <div className="container mx-auto px-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs tracking-[0.3em] uppercase mb-6 text-center"
            style={{ fontFamily: 'var(--font-body)', color: 'hsl(var(--funnel-accent))' }}
          >
            Choose Your Artist
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-heading mb-4 text-white"
          >
            Our Artists
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-center text-white/50 mb-14 max-w-xl mx-auto"
          >
            Meet the talented team behind Unity Tattoo. Each artist brings their own unique style and expertise.
          </motion.p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1">
            {artists.map((artist, index) => (
              <motion.div
                key={artist.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Link to={`/artists/${artist.slug}`} className="group relative block aspect-square overflow-hidden">
                  <img
                    src={artist.image}
                    alt={artist.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-serif text-xl md:text-2xl lg:text-3xl text-white text-center leading-tight px-4">
                      {artist.name}
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== 8. CTA — Primary action ========== */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-heading mb-6"
          >
            Ready to Get Inked?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground mb-8 text-base md:text-lg leading-relaxed"
          >
            Book your appointment today and let our talented artists bring your vision to life.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/contact" className="cta-button-bold">
              Book an Appointment
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-6 flex items-center justify-center gap-6 text-xs text-muted-foreground"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            <span className="flex items-center gap-1.5"><CheckCircle size={14} /> Free Consultation</span>
            <span className="flex items-center gap-1.5"><CheckCircle size={14} /> No Obligation</span>
          </motion.div>
        </div>
      </section>

      {/* ========== 9. REINFORCEMENT — Recent Work ========== */}
      <section className="py-20 md:py-28 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            See the Quality for Yourself
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-heading mb-14"
          >
            Recent Work
          </motion.h2>
          <div className="gallery-grid">
            {recentWorkImages.map((src, num) => (
              <motion.div
                key={num}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: num * 0.05 }}
                className="aspect-square overflow-hidden"
              >
                <img
                  src={src}
                  alt={`Recent tattoo work ${num + 1}`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== 10. FINAL CTA — Location + Last push ========== */}
      <section className="py-20 md:py-28 funnel-dark-section">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Map */}
            <div className="w-full h-[350px] md:h-[400px] rounded overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2603.123!2d-123.0695!3d49.2715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548671854e0ee703%3A0x7fbc48cb507cb03c!2s1395+Commercial+Dr%2C+Vancouver%2C+BC+V5L+3X5%2C+Canada!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Unity Tattoo Location"
              />
            </div>
            {/* Final CTA */}
            <div className="text-center lg:text-left">
              <p
                className="text-xs tracking-[0.3em] uppercase mb-6"
                style={{ fontFamily: 'var(--font-body)', color: 'hsl(var(--funnel-accent))' }}
              >
                Visit Us Today
              </p>
              <h2 className="section-heading lg:text-left text-white mb-6">
                Your Next Tattoo<br />Starts Here
              </h2>
              <p className="text-white/50 tracking-[0.1em] mb-3" style={{ fontFamily: 'var(--font-body)' }}>
                1395 Commercial Drive · Vancouver, BC Canada
              </p>
              <p className="text-white/50 tracking-[0.1em] mb-8" style={{ fontFamily: 'var(--font-body)' }}>
                604-423-3343 · unitytattoo@gmail.com
              </p>
              <Link to="/contact" className="cta-button-bold">
                Book Your Appointment Now
              </Link>
              <p className="mt-6 text-white/30 text-xs flex items-center gap-1.5 justify-center lg:justify-start" style={{ fontFamily: 'var(--font-body)' }}>
                <CheckCircle size={12} /> Walk-ins welcome · Consultations available
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
