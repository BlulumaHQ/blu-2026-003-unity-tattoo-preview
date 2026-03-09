export interface Artist {
  name: string;
  slug: string;
  specialty: string;
  bio: string;
  image: string;
  gallery: string[];
  isGuest?: boolean;
}

export const artists: Artist[] = [
  {
    name: "Heather Drew",
    slug: "heather-drew",
    specialty: "Fine line & illustrative",
    bio: "Heather brings a refined, illustrative approach to every piece. Her attention to detail and dedication to craft make her one of Unity Tattoo's most sought-after artists.",
    image: "/images/tattoo-work-1.jpg",
    gallery: ["/images/tattoo-work-1.jpg", "/images/tattoo-work-5.jpg", "/images/tattoo-work-7.jpg", "/images/tattoo-work-3.jpg"],
  },
  {
    name: "Paige McGrath",
    slug: "paige-mcgrath",
    specialty: "Blackwork & dotwork",
    bio: "Paige specializes in bold blackwork and intricate dotwork designs. Her unique style blends traditional techniques with modern aesthetics.",
    image: "/images/tattoo-work-2.jpg",
    gallery: ["/images/tattoo-work-2.jpg", "/images/tattoo-work-6.jpg", "/images/tattoo-work-4.jpg", "/images/tattoo-work-8.jpg"],
  },
  {
    name: "Bronson Ramos",
    slug: "bronson-ramos",
    specialty: "Traditional & neo-traditional",
    bio: "Bronson's work is rooted in traditional tattoo art with a neo-traditional twist. Bold lines, vibrant energy, and timeless composition define his portfolio.",
    image: "/images/tattoo-work-3.jpg",
    gallery: ["/images/tattoo-work-3.jpg", "/images/tattoo-work-1.jpg", "/images/tattoo-work-7.jpg", "/images/tattoo-work-5.jpg"],
  },
  {
    name: "Jesse Kvarnstrom",
    slug: "jesse-kvarnstrom",
    specialty: "Realism & portrait",
    bio: "Jesse's hyperrealistic tattoos capture incredible detail. Specializing in portraits and realism, his work speaks to a deep understanding of light, shadow, and form.",
    image: "/images/tattoo-work-4.jpg",
    gallery: ["/images/tattoo-work-4.jpg", "/images/tattoo-work-2.jpg", "/images/tattoo-work-8.jpg", "/images/tattoo-work-6.jpg"],
  },
  {
    name: "Soodie Yang",
    slug: "soodie-yang",
    specialty: "Watercolor & illustrative",
    bio: "Soodie's watercolor tattoos are vibrant and expressive. Her illustrative style brings a painterly quality to skin art that is truly unique.",
    image: "/images/tattoo-work-5.jpg",
    gallery: ["/images/tattoo-work-5.jpg", "/images/tattoo-work-3.jpg", "/images/tattoo-work-1.jpg", "/images/tattoo-work-7.jpg"],
  },
  {
    name: "Brianne Throne",
    slug: "brianne-throne",
    specialty: "Floral & ornamental",
    bio: "Brianne's elegant floral and ornamental designs celebrate femininity and natural beauty. Each piece is carefully composed to flow with the body's natural contours.",
    image: "/images/tattoo-work-6.jpg",
    gallery: ["/images/tattoo-work-6.jpg", "/images/tattoo-work-4.jpg", "/images/tattoo-work-2.jpg", "/images/tattoo-work-8.jpg"],
  },
  {
    name: "Atisha Rainey",
    slug: "atisha-rainey",
    specialty: "Geometric & minimalist",
    bio: "Atisha's geometric and minimalist tattoos are precise and clean. Her work demonstrates mastery of line work and an eye for balanced, harmonious design.",
    image: "/images/tattoo-work-7.jpg",
    gallery: ["/images/tattoo-work-7.jpg", "/images/tattoo-work-5.jpg", "/images/tattoo-work-3.jpg", "/images/tattoo-work-1.jpg"],
  },
  {
    name: "Jay Skeletons",
    slug: "jay-skeletons",
    specialty: "Black & gray realism",
    bio: "Jay brings incredible depth to black and gray realism. As a guest artist at Unity Tattoo, his limited availability makes each session a special experience.",
    image: "/images/tattoo-work-8.jpg",
    gallery: ["/images/tattoo-work-8.jpg", "/images/tattoo-work-6.jpg", "/images/tattoo-work-4.jpg", "/images/tattoo-work-2.jpg"],
    isGuest: true,
  },
];
