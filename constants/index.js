export const linkConfig = [
  {
    name: 'Home',
    description: 'Home page.',
    href: '/',
  },
  {
    name: 'List',
    description: 'A list of restaurants.',
    href: '/list',
  },
  {
    name: 'Detail',
    description: 'A specific restaurant.',
    href: '/detail',
  },
  {
    name: 'Web',
    description: 'The requested web view comp.',
    href: '/web',
  },
];

export const summaryConfig = [
  {
    name: 'Get a JSON feed',
    description:
      'Leveraged Next.js api routes and created an "/api/restaurants" route that fetches the JSON at the provided URL',
  },
  {
    name: 'Responsive Design',
    description:
      'The problem statement left a lot to the imagination so I took liberties in order to create a somewhat coherent experience.  The most awkward was the "translate the comps into a two-column layout", which looks a bit odd for the web view, but, I followed instructions.',
  },
  {
    name: 'Translate iOS Comp',
    description:
      "Wasn't exactly sure how to handle this one in relation to the previous requirement, so, again, some  liberties were taken.  Please see demo video.",
  },

  {
    name: 'Map View',
    description:
      'Mapbox has been implemented in a couple locations.  See demo video for specifics. ',
  },
  {
    name: 'Browser Support',
    description: 'I have chosen OSX Chrome as that is my default dev environnement. ',
  },
];
