// ============================================================
//  CONTENT CONFIG — edit this file to update your portfolio
//  All sections of the site are driven from here.
// ============================================================

export const profile = {
  name: 'Saumay Khandelwal',
  title: 'Senior Software Engineer',
  company: 'Google',
  email: 'khandelwalsaumay@gmail.com',
  github: 'https://github.com/Saumay',
  linkedin: 'https://linkedin.com/in/saumay-khandelwal1997',
  location: 'Mountain View, CA',

  // Short bio shown in the About section
  bio: "I build things that scale — and occasionally break in interesting ways. Currently at Google Nest, I work on infrastructure for virtual devices and use LLMs to make integration testing dramatically less painful. Previously at Uber and Upstox, I've helped systems go from scrappy side-projects to serving millions of users.",

  // Typewriter phrases that cycle in the hero section
  taglines: [
    'Building things at scale ⚡',
    'LLM-powered testing framework author 🤖',
    '2nd in Asia @ Mars Rover Challenge 🚀',
    'Go-karter in disguise 🏎️',
    'Star gazer, physics nerd 🔭',
    'Distributed systems enthusiast 🛠️',
  ],
};

// Numbers shown as stats in the hero section
export const stats = [
  { label: 'Dev hours saved',            value: '10,000+', icon: '⚡' },
  { label: 'Marketing budget protected', value: '$300K+',  icon: '💰' },
  { label: 'User growth at Upstox',      value: '2000%+',  icon: '🚀' },
  { label: 'World rank @ ERC\'18',        value: '18th',    icon: '🏆' },
];

// Work experience — newest first
export const experience = [
  {
    company: 'Google',
    team: 'Nest',
    role: 'SWE-III',
    period: 'Nov 2023 – Present',
    logo: 'G',
    color: '#4285F4',
    highlights: [
      'Developing and maintaining infrastructure for creating on-demand virtual devices.',
      'Built a framework for comprehensive integration testing using LLM-generated contracts — eliminates the need to spin up dependent services in hermetic environments, improving test success rate to 90% and saving 10,000+ dev hours.',
    ],
  },
  {
    company: 'Uber',
    team: 'Growth and Marketing Platform',
    role: 'SDE-2',
    period: 'Nov 2022 – Nov 2023',
    logo: 'U',
    color: '#09091A',
    highlights: [
      'Developed multi-tenant subscription, notification, and anomaly detection systems to catch bad ad-ingestion data — protecting $300K+ of performance marketing budget annually.',
      'Created insightful scheduled dashboards for marketers and stakeholders.',
    ],
  },
  {
    company: 'Upstox',
    team: 'Customer Acquisition & Platform',
    role: 'Senior Software Engineer',
    period: 'April 2021 – Nov 2022',
    logo: 'U',
    color: '#5E4AE3',
    highlights: [
      'Automated Demat account creation from 3 days → a few hours by bypassing costly proprietary software and automating manual workflows — saving $50K+ yearly.',
      'Helped scale from 40K to 1M+ active users (2000%+ growth) by redesigning profile, onboarding, and notification services.',
      'Built the backend for the Upstox onboarding flow in collaboration with government institutions, following rigid timelines and SEBI mandates.',
      'Wrote multi-tenant Java libraries for config-manager, circuit breaker, and persistence.',
    ],
  },
  {
    company: 'Sabre',
    team: 'PNR Reservations',
    role: 'Contributor → Associate SWE → Intern',
    period: 'Jan 2019 – April 2021',
    logo: 'S',
    color: '#C0392B',
    highlights: [
      'Offloaded code from mainframe by developing critical PNR service components (Frequent Flyer, Display, Commit) from scratch using microservice architecture deployable to GCP.',
      'Replaced MQ with Kafka for efficient streaming and log aggregation.',
      'Implemented Single Sign-On using LDAP authentication.',
    ],
  },
];

// Personal projects
export const projects = [
  {
    title: "European Rover Challenge '18",
    role: 'Programming Lead',
    period: 'Dec 2017 – Sept 2018',
    description:
      'Led a CS team of 7 to build a Mars rover. Developed in-house object detection & avoidance using ML and statistics, a robotic arm simulator, and a remote controller. Secured 2nd rank in Asia and 18th globally among 65 international teams.',
    tags: ['Machine Learning', 'Robotics', 'Python', 'C++', 'Computer Vision'],
    emoji: '🤖',
    link: null, // add a URL if you have one
  },
  {
    title: 'Sabrina: Navigation Assistant for the Blind',
    role: 'Tech Lead',
    period: 'Jan 2019 – Feb 2019',
    description:
      'A voice-enabled portable device for navigation using camera and ultrasonic sensor inputs, with real-time object detection powered by ML — designed to give independence to visually impaired users.',
    tags: ['IoT', 'Machine Learning', 'Python', 'Computer Vision', 'Raspberry Pi'],
    emoji: '👁️',
    link: null,
  },
];

// Skills grouped by category
export const skills = {
  languages: ['Java', 'Go', 'Python'],
  systems: [
    'Distributed Systems',
    'Multi-tenant SaaS',
    'Microservices',
    'Spring Boot / Spring Cloud',
    'SQL / NoSQL Databases',
    'Kafka',
    'Google Cloud Platform',
  ],
  ai: [
    'AI Agents',
    'LLM Fine-tuning',
    'Prompt Engineering',
    'LLM-powered Testing',
  ],
};

// Education
export const education = [
  {
    institution: 'VIT University, Vellore',
    degree: 'Bachelor of Technology',
    period: '2015 – 2019',
    detail: 'CGPA: 9.35',
  },
  {
    institution: "St. Paul's School, Mathura",
    degree: 'Higher Secondary (CBSE)',
    period: '2015',
    detail: '94%',
  },
];

// Awards & recognition
export const awards = [
  'Second runner-up at Upstox Hackathon 2022',
  "2nd rank in Asia at ERC'18 — 18th globally among 65 international teams",
  'Winner of Sabre Hackathon and Sabre Demo Day',
];

// Hobbies shown in the About section
export const hobbies = [
  { name: 'Reading',      emoji: '📚' },
  { name: 'Go Karting',   emoji: '🏎️' },
  { name: 'Quizzing',     emoji: '🧠' },
  { name: 'Star Gazing',  emoji: '🔭' },
  { name: 'Physics',      emoji: '⚛️' },
];
