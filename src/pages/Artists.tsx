import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { artists } from "@/data/artists";

const Artists = () => {
  return (
    <>
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="section-heading mb-6"
          >
            Artists
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center text-muted-foreground mb-16 max-w-xl mx-auto"
          >
            Meet the talented team behind Unity Tattoo. Each artist brings their own unique style and expertise.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1">
            {artists.map((artist, index) => (
              <motion.div
                key={artist.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <Link to={`/artists/${artist.slug}`} className="artist-card block">
                  <div className="aspect-square">
                    <img
                      src={artist.image}
                      alt={artist.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="artist-card-overlay flex-col gap-2">
                    <span className="text-lg font-bold tracking-[0.15em] uppercase text-foreground">
                      {artist.name}
                    </span>
                    <span className="text-xs tracking-wider text-muted-foreground">
                      {artist.specialty}
                    </span>
                    {artist.isGuest && (
                      <span className="text-xs tracking-wider text-primary font-semibold">Guest Artist</span>
                    )}
                  </div>
                </Link>
                <div className="bg-card p-4 text-center">
                  <h3 className="text-sm font-bold tracking-[0.15em] uppercase mb-1">{artist.name}</h3>
                  <p className="text-xs text-muted-foreground tracking-wide">{artist.specialty}</p>
                  {artist.isGuest && (
                    <span className="text-[10px] text-primary tracking-widest uppercase font-semibold">(Guest)</span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Artists;
