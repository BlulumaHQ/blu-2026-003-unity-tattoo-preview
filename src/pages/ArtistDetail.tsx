import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { artists } from "@/data/artists";

const ArtistDetail = () => {
  const { slug } = useParams();
  const artist = artists.find((a) => a.slug === slug);

  if (!artist) {
    return (
      <section className="py-32 text-center">
        <h1 className="section-heading mb-4">Artist Not Found</h1>
        <Link to="/artists" className="cta-button">Back to Artists</Link>
      </section>
    );
  }

  return (
    <>
      {/* Artist Header */}
      <section className="py-24 md:py-32 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold tracking-[0.2em] uppercase mb-8"
        >
          {artist.name}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-sm tracking-[0.2em] uppercase text-primary mb-4"
        >
          {artist.specialty}
          {artist.isGuest && " · Guest Artist"}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-muted-foreground max-w-xl mx-auto leading-relaxed mb-10 px-4"
        >
          {artist.bio}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          <Link to="/contact" className="cta-button">
            Book with {artist.name.split(" ")[0]}
          </Link>
        </motion.div>
      </section>

      {/* Gallery Grid */}
      <section className="pb-24 md:pb-32">
        <div className="container mx-auto px-0 md:px-4">
          <div className="gallery-grid">
            {artist.gallery.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="aspect-square overflow-hidden"
              >
                <img
                  src={img}
                  alt={`${artist.name} tattoo work ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ArtistDetail;
