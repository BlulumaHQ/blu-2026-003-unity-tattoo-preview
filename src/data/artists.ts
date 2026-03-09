export interface Artist {
  name: string;
  slug: string;
  specialty: string;
  bio: string;
  image: string;
  gallery: string[];
  isGuest?: boolean;
  instagram?: string;
  email?: string;
}

export const artists: Artist[] = [
  {
    name: "Heather Drew",
    slug: "heather-drew",
    specialty: "Fine line & illustrative",
    bio: "Heather brings a refined, illustrative approach to every piece. Her attention to detail and dedication to craft make her one of Unity Tattoo's most sought-after artists.",
    image: "/images/artist-heather.webp",
    gallery: ["/images/artist-heather.webp"],
  },
  {
    name: "Paige McGrath",
    slug: "paige-mcgrath",
    specialty: "Blackwork & dotwork",
    bio: "Paige specializes in bold blackwork and intricate dotwork designs. Her unique style blends traditional techniques with modern aesthetics.",
    image: "/images/artist-paige.webp",
    gallery: ["/images/artist-paige.webp"],
  },
  {
    name: "Bronson Ramos",
    slug: "bronson-ramos",
    specialty: "Traditional & neo-traditional",
    bio: "Bronson's work is rooted in traditional tattoo art with a neo-traditional twist. Bold lines, vibrant energy, and timeless composition define his portfolio.",
    image: "/images/artist-bronson.webp",
    gallery: ["/images/artist-bronson.webp"],
  },
  {
    name: "Jesse Kvarnstrom",
    slug: "jesse-kvarnstrom",
    specialty: "Realism & portrait",
    bio: "Jesse's hyperrealistic tattoos capture incredible detail. Specializing in portraits and realism, his work speaks to a deep understanding of light, shadow, and form.",
    image: "/images/artist-jesse.webp",
    gallery: ["/images/artist-jesse.webp"],
  },
  {
    name: "Soodie Yang",
    slug: "soodie-yang",
    specialty: "Watercolor & illustrative",
    bio: "Soodie's watercolor tattoos are vibrant and expressive. Her illustrative style brings a painterly quality to skin art that is truly unique.",
    image: "/images/artist-soodie.webp",
    gallery: ["/images/artist-soodie.webp"],
  },
  {
    name: "Brianne Throne",
    slug: "brianne-throne",
    specialty: "Neo-traditional & illustrative",
    bio: "Brianne's elegant designs celebrate bold color and rich illustration. Each piece is carefully composed with masterful detail and dynamic composition.",
    image: "/images/artist-brianne.webp",
    gallery: ["/images/artist-brianne.webp"],
  },
  {
    name: "Atisha Rainey",
    slug: "atisha-rainey",
    specialty: "Neo-traditional & color",
    bio: "Atisha's neo-traditional work features bold colors and striking compositions. Her artistic vision brings a fresh perspective to classic tattooing styles.",
    image: "/images/artist-atisha.webp",
    gallery: ["/images/artist-atisha.webp"],
  },
  {
    name: "Jay Skeletons",
    slug: "jay-skeletons",
    specialty: "Neo-Japanese & black and grey",
    bio: "Jay has been tattooing professionally for 5 years, constantly pushing boundaries through different forms of art. With experience tattooing across Canada and in Japan, he brings a global perspective to the craft. His true passion lies in bold neo-Japanese color and dark, black and grey illustrative pieces.",
    image: "/images/artist-jay.webp",
    gallery: ["/images/artist-jay.webp"],
    isGuest: true,
    instagram: "https://www.instagram.com/skeletonsforsale/",
    email: "skeletonsforsale@gmail.com",
  },
];
