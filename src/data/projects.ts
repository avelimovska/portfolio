import type { ImageMetadata } from 'astro';
import golerCover from '../assets/goler-shots/card.png';
import pngCover from '../assets/png-report/card.png';

// Each project gets a card on the home page and its own page at /work/<slug>.
// Add a new project here and create src/pages/work/<slug>.astro.
// Projects are shown as equal cards, two per row, in this order.

export type Project = {
  slug: string;
  title: string;
  summary: string;
  role: string;
  platforms: string;
  year: string;
  cover: ImageMetadata;
  // Alt text for the cover image on the card.
  coverAlt?: string;
  // Background behind the cover image, taken from the project's own palette.
  accent: string;
  accentInk: string;
};

export const projects: Project[] = [
  {
    slug: 'goler',
    title: 'Goler',
    summary:
      'Restaurant checks for travelers: reviews turned into a risk score and a verdict. App, website, venue dashboard and admin console.',
    role: 'Product Designer',
    platforms: 'iOS · Android · Web',
    year: '2026',
    cover: golerCover,
    coverAlt: 'Goler: the waiter character with a venue screen, the Risk and Quality scores and a NO-GO verdict',
    accent: '#BF0056',
    accentInk: '#161616',
  },
  {
    slug: 'png-report',
    title: 'Crime and violence in Papua New Guinea',
    summary:
      'Redesign of a World Bank paper on crime in Papua New Guinea: a 10-page report and a 3-page factsheet.',
    role: 'Information Designer',
    platforms: 'Print · Report and factsheet',
    year: '2026',
    cover: pngCover,
    coverAlt: 'Redesigned report cover with a map of crime hot spots, and the 2.3% spread',
    accent: '#FFD200',
    accentInk: '#161616',
  },
];
