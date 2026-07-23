
export const heroSectionImage:string = "/assets/humEmeraldsBannerNew.png" 
export const aboutStats: {
  iconUrl: string;
  stat: string;
  subtext: string;
  colour: "--gold-colour" | "--dark-blue";
}[] = [
  {
    iconUrl: "/icons/clock.svg",
    stat: "21+",
    subtext: "Years & Counting",
    colour: "--gold-colour",
  },
  {
    iconUrl: "/icons/ticks.svg",
    stat: "15 Lacs+",
    subtext: "Sq. Ft Delivered",
    colour: "--dark-blue",
  },
  {
    iconUrl: "/icons/ongoing.svg",
    stat: "8 Lacs+",
    subtext: "Sq. Ft Ongoing",
    colour: "--gold-colour",
  },
  {
    iconUrl: "/icons/smiley.svg",
    stat: "2000+",
    subtext: "Happy Families",
    colour: "--dark-blue",
  },
];

export const connectivityItems : {
    iconUrl: string;
    title: string;
    distance: string;
}[] = [
  {
    iconUrl: "/icons/metro.svg",
    title: "Hum developers Kandivali west metro station",
    distance: "5 mins away",
  },
  {
    iconUrl: "/icons/schools.svg",
    title: "Reputed Schools & Colleges",
    distance: "5 mins away",
  },
  {
    iconUrl: "/icons/linkRoad.svg",
    title: "Link Road",
    distance: "5 mins away",
  },
  {
    iconUrl: "/icons/hospital.svg",
    title: "Hospital",
    distance: "5 mins away",
  },
  {
    iconUrl: "/icons/mandir.svg",
    title: "Bus Stop",
    distance: "1 min away",
  },
  {
    iconUrl: "/icons/market.svg",
    title: "McDonald's | Burger King | Subway",
    distance: "5 mins away",
  },
];

export const amenitiesItems :{ imageUrl: string; title: string }[] = [
  {
    imageUrl: "/assets/galaxyImages/terraceOpenGym.jpg",
    title: "Open Gym",
  },
  {
    imageUrl: "/assets/galaxyImages/terraceYogaArea.jpg",
    title: "Yoga Area",
  },
  {
    imageUrl: "/assets/galaxyImages/terraceKidsPlayArea.jpg",
    title: "Kids Play Area",
  },
  {
    imageUrl: "/assets/galaxyImages/terraceOpenTheatre.jpg",
    title: "Open Theatre",
  },
  {
    imageUrl: "/assets/galaxyImages/terraceSeatingArea.jpg",
    title: "Seating Area",
  },
  {
    imageUrl: "/assets/galaxyImages/terraceMultipurposeTurf.jpg",
    title: "Multipurpose Turf",
  },
  {
    imageUrl: "/assets/galaxyImages/starGazing.jpg",
    title: "Star Gazing",
  },
  {
    imageUrl: "/assets/galaxyImages/terraceCloseupNight.jpg",
    title: "TerraceCloseup Night",
  },
];

export const galleryImages : { src: string; alt: string }[] = [
  {
    src: "/assets/galaxyImages/terraceOpenGym.jpg",
    alt: "Terrace open gym at HUM Galaxy Heights",
  },
  {
    src: "/assets/galaxyImages/terraceYogaArea.jpg",
    alt: "Terrace yoga area at HUM Galaxy Heights",
  },
  {
    src: "/assets/galaxyImages/terraceKidsPlayArea.jpg",
    alt: "Terrace kids play area at HUM Galaxy Heights",
  },
  {
    src: "/assets/galaxyImages/terraceOpenTheatre.jpg",
    alt: "Terrace open theatre at HUM Galaxy Heights",
  },
  {
    src: "/assets/galaxyImages/terraceSeatingArea.jpg",
    alt: "Terrace seating area at HUM Galaxy Heights",
  },
  {
    src: "/assets/galaxyImages/terraceMultipurposeTurf.jpg",
    alt: "Terrace multipurpose turf at HUM Galaxy Heights",
  },
  {
    src: "/assets/galaxyImages/starGazing.jpg",
    alt: "Star gazing deck at HUM Galaxy Heights",
  },
  {
    src: "/assets/galaxyImages/terraceCloseupNight.jpg",
    alt: "Terrace closeup at night at HUM Galaxy Heights",
  },
];

export const floorPlanCards :{ id: number; title: string; projectName: string, imageUrl: string }[] = [
  {
    id: 1,
    title: "5th to 8th floor plan",
    projectName: "HUM Galaxy Heights",
    imageUrl: "/assets/floorPlan2.jpeg",
  },
  {
    id: 2,
    title: "9th to 19th floor plan",
    projectName: "HUM Galaxy Heights",
    imageUrl: "/assets/floorPlan10.jpeg",
  },
];

export const priceCards :{ title: string; area: string }[] = [
  {
    title: "2 BHK",
    area: "668 | 715 | 815 SQ.FT",
  },
  {
    title: "3 BHK",
    area: "980 | 1005 | 1056 SQ.FT",
  },
];

export const faqItems: { id: number; title: string; content: string }[] = [
  {
    id: 1,
    title: "What makes HUM Galaxy Heights stand out in Kandivali West?",
    content:
      "HUM Galaxy Heights by HUM Developers is designed as a boutique high rise with limited residences, offering a more private, elevated living experience in one of Kandivali West's most well connected pockets.",
  },
  {
    id: 2,
    title: "What types of homes are available at HUM Galaxy Heights?",
    content:
      "HUM Developers offers intelligently planned 2 and 3 BHK residences at HUM Galaxy Heights, with layouts focused on maximum usable space, natural light, and everyday functionality.",
  },
  {
    id: 3,
    title: "What kind of lifestyle amenities can residents expect?",
    content:
      "HUM Galaxy Heights brings together rooftop leisure and everyday wellness with amenities like a stargazing deck, fitness center, jogging track, yoga area, reflexology path, and curated seating spaces, along with essentials like high speed elevators and advanced security.",
  },
  {
    id: 4,
    title: "How well connected is HUM Galaxy Heights?",
    content:
      "HUM Galaxy Heights is strategically located near metro stations, reputed schools, hospitals, and key road networks, ensuring seamless access to daily essentials and the rest of Mumbai.",
  },
  {
    id: 5,
    title: "Is HUM Galaxy Heights a good choice for long term living and investment?",
    content:
      "With its prime Kandivali West location, efficient planning, and the credibility of HUM Developers, HUM Galaxy Heights offers a strong balance of lifestyle comfort and long term value appreciation.",
  },
];
