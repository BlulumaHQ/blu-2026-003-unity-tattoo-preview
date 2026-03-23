import { Link } from "react-router-dom";
import { Calendar } from "lucide-react";

const StickyBookingCTA = () => {
  return (
    <>
      {/* Desktop - Right side vertical */}
      <div className="hidden md:flex fixed right-0 top-1/2 -translate-y-1/2 z-40">
        <Link
          to="/contact"
          className="flex items-center gap-2 px-4 py-3 text-xs tracking-[0.15em] uppercase font-medium text-white hover:opacity-90 transition-colors shadow-lg"
          style={{ writingMode: 'vertical-rl', textOrientation: 'mixed', backgroundColor: '#407879' }}
        >
          <Calendar size={14} />
          Book Now
        </Link>
      </div>

      {/* Mobile - Floating bottom right */}
      <div className="md:hidden fixed bottom-6 right-6 z-40">
        <Link
          to="/contact"
          className="flex items-center gap-2 px-5 py-3 text-xs tracking-[0.15em] uppercase font-medium text-white rounded-full shadow-xl hover:opacity-90 transition-colors"
          style={{ backgroundColor: '#407879' }}
        >
          <Calendar size={14} />
          Book Now
        </Link>
      </div>
    </>
  );
};

export default StickyBookingCTA;
