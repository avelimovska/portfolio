// Everything on the home page comes from this file.
// Empty strings are hidden on the site, so fill them in when ready.

export const profile = {
  name: 'Anna Velimovska',
  role: 'Product Designer',
  // One line under the name: what she does, not adjectives.
  headline:
    'I design digital products end to end, from the first flow to the build in the App Store, and ship the front end myself with AI tools.',
  // The two sentences at the top of the home page. The second one is shown in grey.
  intro: "I'm Anna Velimovska, a product designer who takes products from the first flow to the App Store.",
  introMuted:
    'I work on mobile apps, web products and design systems, and ship the front end myself with AI tools.',
  currently: 'Founding Product Designer at Goler',
  location: 'Montevideo, Uruguay',
  timezone: 'UTC−3',
  availability: 'Open to remote roles',

  // Photo: put a square photo at src/assets/anna.jpg and set this to true.
  hasPhoto: false,

  links: {
    email: '', // e.g. 'anna@example.com'
    linkedin: '', // full URL
    behance: '', // full URL
    cv: '', // e.g. '/Anna-Velimovska-CV.pdf' (put the file in /public)
  },

  facts: [
    { label: 'Focus', value: 'Mobile apps, web products, design systems' },
    { label: 'Languages', value: 'English C1 · Russian, Ukrainian native · Spanish B1' },
    { label: 'Tools', value: 'Figma, Affinity, Illustrator, Claude, ChatGPT' },
    { label: 'Certificates', value: 'Google UX Design · GoIT UI/UX Design' },
  ],

  about: [
    'I joined Goler as its first designer and designed the traveler app, the website, the dashboard for venue owners and the admin console. The apps are live in the App Store and Google Play.',
    'My latest project is a redesign of a World Bank report on crime in Papua New Guinea: a print report and a factsheet.',
    'Before product design I worked as an illustrator: vector, characters, motion assets. I design in Figma and build parts of the front end myself with AI tools.',
  ],

  experience: [
    { period: '2026 — now', title: 'Founding Product Designer', org: 'Goler' },
  ],
};
