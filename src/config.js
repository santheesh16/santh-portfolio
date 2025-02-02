module.exports = {
  email: 'santheesh16@gmail.com',

  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/santheesh16',
    },
    {
      name: 'Notion',
      url: 'https://www.notion.so/Personal-Portfolio-73f09160f6c94e49bdf7fe59083556ad',
    },
    {
      name: 'Twitter',
      url: 'https://x.com/ASantheesh1',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/santheesh16',
    },
    {
      name: 'Codepen',
      url: 'https://codepen.io/Santheesh-A',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200, viewFactor = 0.25) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
