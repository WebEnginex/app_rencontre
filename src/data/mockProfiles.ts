
export interface Profile {
  id: string;
  name: string;
  age: number;
  location: string;
  bio: string;
  interests: string[];
  images: string[];
  distance: number;
}

export const mockProfiles: Profile[] = [
  {
    id: "1",
    name: "Sophie",
    age: 28,
    location: "Paris",
    bio: "Passionnée d'art et de voyages. J'adore découvrir de nouveaux cafés et explorer la ville à vélo.",
    interests: ["Art", "Voyages", "Café", "Cyclisme"],
    images: [
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop"
    ],
    distance: 3
  },
  {
    id: "2",
    name: "Antoine",
    age: 31,
    location: "Lyon",
    bio: "Photographe et amateur de bons vins. Toujours à la recherche de nouvelles perspectives et saveurs.",
    interests: ["Photographie", "Vin", "Cuisine", "Randonnée"],
    images: [
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1887&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop"
    ],
    distance: 8
  },
  {
    id: "3",
    name: "Camille",
    age: 26,
    location: "Bordeaux",
    bio: "Designer d'intérieur avec une passion pour la musique live et les marchés vintage.",
    interests: ["Design", "Concerts", "Vintage", "Lecture"],
    images: [
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1887&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1887&auto=format&fit=crop"
    ],
    distance: 5
  },
  {
    id: "4",
    name: "Thomas",
    age: 29,
    location: "Marseille",
    bio: "Ingénieur le jour, musicien la nuit. J'aime autant coder que composer.",
    interests: ["Musique", "Technologie", "Plage", "Cinéma"],
    images: [
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1887&auto=format&fit=crop"
    ],
    distance: 12
  },
  {
    id: "5",
    name: "Emma",
    age: 27,
    location: "Toulouse",
    bio: "Vétérinaire qui adore la randonnée et la pâtisserie. Je cherche quelqu'un pour partager des aventures.",
    interests: ["Animaux", "Nature", "Pâtisserie", "Voyages"],
    images: [
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=1770&auto=format&fit=crop"
    ],
    distance: 7
  },
  {
    id: "6",
    name: "Lucas",
    age: 30,
    location: "Nice",
    bio: "Chef avec une passion pour le surf et les marchés locaux. Toujours en quête de nouvelles saveurs et vagues.",
    interests: ["Cuisine", "Surf", "Marchés", "Sports"],
    images: [
      "https://images.unsplash.com/photo-1504257432389-52343af06ae3?q=80&w=1887&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1488161628813-04466f872be2?q=80&w=1964&auto=format&fit=crop"
    ],
    distance: 15
  },
  {
    id: "7",
    name: "Elise",
    age: 25,
    location: "Strasbourg",
    bio: "Professeure de danse contemporaine et amatrice de photographie urbaine. J'aime les discussions qui durent toute la nuit.",
    interests: ["Danse", "Photographie", "Art urbain", "Voyages"],
    images: [
      "https://images.unsplash.com/photo-1548142813-c348350df52b?q=80&w=1935&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?q=80&w=1795&auto=format&fit=crop"
    ],
    distance: 9
  },
  {
    id: "8",
    name: "Maxime",
    age: 32,
    location: "Lille",
    bio: "Architecte passionné par l'urbanisme durable. Grand amateur de café et de jazz. Je recherche quelqu'un pour partager mes passions.",
    interests: ["Architecture", "Jazz", "Écologie", "Café"],
    images: [
      "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=2048&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=2070&auto=format&fit=crop"
    ],
    distance: 6
  },
  {
    id: "9",
    name: "Chloé",
    age: 27,
    location: "Montpellier",
    bio: "Biologiste marine, je passe mon temps entre la mer et les livres. Passionnée par la protection des océans et les voyages.",
    interests: ["Plongée", "Écologie", "Littérature", "Voyages"],
    images: [
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=2071&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1506956191951-7a88da4435e5?q=80&w=1974&auto=format&fit=crop"
    ],
    distance: 11
  },
  {
    id: "10",
    name: "Hugo",
    age: 29,
    location: "Nantes",
    bio: "Développeur web et guitariste à mes heures perdues. Fan de concerts indie et de festivals. Je suis à la recherche de nouvelles expériences.",
    interests: ["Musique", "Technologie", "Festivals", "Bières artisanales"],
    images: [
      "https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=2071&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?q=80&w=2070&auto=format&fit=crop"
    ],
    distance: 4
  }
];

export const matches: Profile[] = [
  {
    id: "11",
    name: "Julie",
    age: 25,
    location: "Lille",
    bio: "Professeur de yoga et amatrice de thé. J'adore les conversations profondes et les rires sincères.",
    interests: ["Yoga", "Thé", "Littérature", "Voyages"],
    images: [
      "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?q=80&w=1889&auto=format&fit=crop"
    ],
    distance: 20
  },
  {
    id: "12",
    name: "Léa",
    age: 29,
    location: "Nantes",
    bio: "Architecte avec une passion pour la danse et les expositions d'art. Je cherche quelqu'un qui partage mes intérêts.",
    interests: ["Architecture", "Danse", "Art", "Photographie"],
    images: [
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1964&auto=format&fit=crop"
    ],
    distance: 10
  }
];
