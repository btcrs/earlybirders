export type NavItem = {
  href: string;
  label: string;
};

export type MissionImage = {
  src: string;
  alt: string;
  caption: string;
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

export type Program = {
  title: string;
  description: string;
  points: string[];
};

export type EventItem = {
  slug: string;
  title: string;
  /** Human-readable date, e.g. "April 13, 2026". Keep in sync with dateISO. */
  date: string;
  /** Machine-readable date (YYYY-MM-DD) used to sort events and tell upcoming from past. */
  dateISO: string;
  time: string;
  location: string;
  excerpt: string;
  details: string;
  audience: string;
};

/** End-of-day Date for an event, in local time. */
export function eventEndDate(event: EventItem): Date {
  return new Date(`${event.dateISO}T23:59:59`);
}

export function isPastEvent(event: EventItem, now = new Date()): boolean {
  return eventEndDate(event) < now;
}

/** Events that have not happened yet, soonest first. */
export function upcomingEvents(now = new Date()): EventItem[] {
  return events
    .filter((event) => !isPastEvent(event, now))
    .sort((a, b) => a.dateISO.localeCompare(b.dateISO));
}

/** Events that have already happened, most recent first. */
export function pastEvents(now = new Date()): EventItem[] {
  return events
    .filter((event) => isPastEvent(event, now))
    .sort((a, b) => b.dateISO.localeCompare(a.dateISO));
}

export type Book = {
  title: string;
  author: string;
  description: string;
  category: "Identification" | "Science & Nature" | "Art & Humor";
  imageUrl: string;
};

export const site = {
  name: "Early Birders Birding Club",
  shortName: "EBBC",
  email: "hello@earlybirders.org",
  address: "Wilmington, North Carolina",
  mission:
    "We help young people discover birds, conservation, and confidence outdoors through access to optics, community bird feeders, and guided local programs.",
};

export const navItems: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/programs", label: "Programs" },
  { href: "/events", label: "Events" },
  { href: "/library", label: "Library" },
  { href: "/get-involved", label: "Get Involved" },
  { href: "/contact", label: "Contact" },
];

export const missionImages: MissionImage[] = [
  {
    src: "/feeders.jpg",
    alt: "Wooden birdhouses and a hanging feeder mounted on trees in a forest",
    caption: "Creating habitat connectivity through public feeder projects.",
  },
  {
    src: "/binoculars.jpg",
    alt: "Young person looking through binoculars at a bird",
    caption: "Empowering youth through birding and field observation.",
  },
  {
    src: "/gulls.jpg",
    alt: "A flock of terns in flight over the water",
    caption: "Coastal birds are often easiest to learn in the places they gather.",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "My daughter borrowed her first pair of binoculars from EBBC and now she points out birds on every family walk.",
    name: "Lauren M.",
    role: "Wilmington Parent",
  },
  {
    quote:
      "As a teacher, I have watched students become more curious and confident after each birding field day.",
    name: "Mr. Reaves",
    role: "Middle School Science Teacher",
  },
  {
    quote:
      "Volunteering here feels meaningful. You can see exactly where donated gear goes and who it helps.",
    name: "Nina T.",
    role: "Community Volunteer Mentor",
  },
];

export const programs: Program[] = [
  {
    title: "Youth Birding Walks",
    description:
      "Guided beginner-friendly walks for ages 8-17 at parks, beaches, and greenways.",
    points: [
      "Monthly walks with local bird guides",
      "Bird ID basics and field journaling",
      "Loaner binoculars available every session",
    ],
  },
  {
    title: "School Partnerships",
    description:
      "Hands-on support for schools through classroom visits, club coaching, and field trips.",
    points: [
      "Curriculum-aligned outdoor lessons",
      "Teacher toolkits and birding resources",
      "Custom events for public and charter schools",
    ],
  },
  {
    title: "Bird Feeder Installation Program",
    description:
      "We help public spaces build and maintain feeder stations that support habitat learning.",
    points: [
      "Site assessments and installation guidance",
      "Native-plant and feeder best practices",
      "Youth stewardship teams for maintenance",
    ],
  },
  {
    title: "Optics Library",
    description:
      "A local lending library where kids can borrow binoculars, scopes, and field guides.",
    points: [
      "Free check-out for participating youth",
      "Refurbished optics from local donations",
      "Orientation on safe use and care",
    ],
  },
];

export const events: EventItem[] = [
  {
    slug: "sunrise-shorebirds-wrightsville",
    title: "Sunrise Shorebirds Walk",
    date: "April 13, 2026",
    dateISO: "2026-04-13",
    time: "7:00 AM - 9:00 AM",
    location: "Wrightsville Beach Loop",
    excerpt:
      "Learn to identify terns, plovers, and pelicans during a guided youth-friendly walk.",
    details:
      "We meet near the public access and rotate through shoreline and marsh viewpoints. Volunteers provide beginner optics tips and field guide support.",
    audience: "Families, youth ages 8+, beginner birders",
  },
  {
    slug: "raptors-and-river-trails",
    title: "Raptors and River Trails",
    date: "April 27, 2026",
    dateISO: "2026-04-27",
    time: "8:30 AM - 11:00 AM",
    location: "Carolina Beach State Park",
    excerpt:
      "A trail-based bird walk focused on raptors, migration, and habitat conservation.",
    details:
      "This event includes guided spotting scopes at overlook points and a youth habitat stewardship activity after the walk.",
    audience: "Middle and high school students, mentors, educators",
  },
  {
    slug: "feeders-for-neighborhood-parks",
    title: "Feeders for Neighborhood Parks",
    date: "May 4, 2026",
    dateISO: "2026-05-04",
    time: "10:00 AM - 12:30 PM",
    location: "Greenfield Lake Area, Wilmington",
    excerpt:
      "Join our volunteer team to install and label new feeder stations in public space.",
    details:
      "Participants help assemble feeder kits, review ethical feeding practices, and learn simple monitoring methods for youth bird clubs.",
    audience: "Volunteers, partners, and families",
  },
];

export const books: Book[] = [
  {
    title: "The Birds That Audubon Missed",
    author: "Kenn Kaufman",
    category: "Science & Nature",
    description: "A fascinating look at the species that escaped the notice of the legendary John James Audubon.",
    imageUrl: "https://covers.openlibrary.org/b/isbn/9781668007594-L.jpg",
  },
  {
    title: "Field Guide to Dumb Birds of North America",
    author: "Matt Kracht",
    category: "Art & Humor",
    description: "A hilarious and relatable guide for anyone who has ever been frustrated by the birds in their backyard.",
    imageUrl: "https://covers.openlibrary.org/b/isbn/9781452174037-L.jpg",
  },
  {
    title: "Bird Talk",
    author: "Rita Gray",
    category: "Science & Nature",
    description: "An engaging introduction to the various ways birds communicate through sound and behavior.",
    imageUrl: "https://covers.openlibrary.org/b/isbn/9780688141745-L.jpg",
  },
  {
    title: "Laws Guide To Drawing Birds",
    author: "John Muir Laws",
    category: "Art & Humor",
    description: "A comprehensive tutorial on how to capture the beauty and character of birds through sketching.",
    imageUrl: "https://covers.openlibrary.org/b/isbn/9781597141956-L.jpg",
  },
  {
    title: "The Backyard Bird Chronicles",
    author: "Amy Tan",
    category: "Science & Nature",
    description: "Renowned author Amy Tan shares her personal journey of discovering the joy of birding in her own backyard.",
    imageUrl: "https://covers.openlibrary.org/b/isbn/9780593536131-L.jpg",
  },
  {
    title: "Sibley Birds East",
    author: "David Allen Sibley",
    category: "Identification",
    description: "The essential field guide for identifying birds in the eastern half of North America.",
    imageUrl: "https://covers.openlibrary.org/b/isbn/9780307957917-L.jpg",
  },
  {
    title: "Sibley Trees",
    author: "David Allen Sibley",
    category: "Identification",
    description: "A comprehensive guide to the trees of North America, featuring Sibley's iconic illustrations.",
    imageUrl: "https://covers.openlibrary.org/b/isbn/9780375415197-L.jpg",
  },
  {
    title: "What It's Like to Be a Bird",
    author: "David Allen Sibley",
    category: "Science & Nature",
    description: "An illuminating look into the daily lives, behaviors, and extraordinary abilities of birds.",
    imageUrl: "https://covers.openlibrary.org/b/isbn/9780307957894-L.jpg",
  },
];
