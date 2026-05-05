// ============================================================
//  CONTENT CONFIG. Edit this file to update your portfolio
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
  bio: "Software engineer in the Bay Area. Curious by default. Happy when I'm building, learning, or watching a good race.",

  // Typewriter phrases that cycle in the hero section
  taglines: [
    'Building distributed systems @ Google ⚡',
    'LLM-powered integration testing 🤖',
    'Built an autonomous Mars rover (ERC \'18, 2nd in Asia) 🚀',
    'Go-karter in disguise 🏎️',
    'Star gazer, physics nerd 🔭',
    'Database-internals nerd 🛠️',
  ],
};

// Work experience, newest first
export const experience = [
  {
    company: 'Google',
    team: 'Nest',
    role: 'SWE-III',
    period: 'Nov 2023 – Present',
    logo: 'G',
    color: '#4285F4',
    note: 'Made the jump because this feels like the era of internal tools and AI-powered platforms, and I wanted to be building inside it.',
    highlights: [
      'Building and maintaining the infrastructure that spins up on-demand virtual devices for the Nest fleet.',
      'Designing an integration-testing framework powered by LLM-generated contracts. Replaces the need to launch dependent services in hermetic environments and turns flaky integration runs into something developers can actually trust.',
    ],
  },
  {
    company: 'Uber',
    team: 'Growth and Marketing Platform',
    role: 'SDE-2',
    period: 'Nov 2022 – Nov 2023',
    logo: 'U',
    color: '#09091A',
    note: 'Stepped into performance marketing, a domain entirely new to me. Got to learn the data side of ad-tech from the inside.',
    highlights: [
      'Built multi-tenant subscription, notification, and anomaly-detection systems on the ad-ingestion pipeline, catching bad data before it skewed performance-marketing decisions.',
      'Shipped scheduled dashboards giving marketers and stakeholders visibility into spend and ingestion health.',
    ],
  },
  {
    company: 'Upstox',
    team: 'Customer Acquisition & Platform',
    role: 'Senior Software Engineer',
    period: 'April 2021 – Nov 2022',
    logo: 'U',
    color: '#5E4AE3',
    note: 'Joined for the early-stage chaos. Front-row seat to a fintech scaling under heavy regulatory pressure. The most formative stretch of my career.',
    highlights: [
      'Led the effort to automate Demat account creation, replacing costly proprietary software and manual workflows with a same-day flow.',
      'Redesigned profile, onboarding, and notification services (and their databases) to absorb a phase of rapid user growth.',
      'Built the onboarding-flow backend in collaboration with government institutions, working to rigid SEBI timelines and compliance mandates.',
      'Authored multi-tenant Java libraries for config management, circuit breaking, and persistence. Used across product teams.',
    ],
  },
  {
    company: 'Sabre',
    team: 'PNR Reservations',
    role: 'Contributor → Associate SWE → Intern',
    period: 'Jan 2019 – April 2021',
    logo: 'S',
    color: '#C0392B',
    note: 'My first job out of college. Where I cut my teeth on cloud-native microservices, watching a mainframe-era stack get reborn on GCP.',
    highlights: [
      'Offloaded core PNR services (Frequent Flyer, Display, Commit) off the mainframe. Rewrote them from scratch as GCP-ready microservices.',
      'Replaced MQ with Kafka for streaming and log aggregation across reservation pipelines.',
      'Implemented Single Sign-On using LDAP authentication.',
      'Winner: Sabre Hackathon and Sabre Demo Day.',
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
      'Led a 7-engineer CS team to build an autonomous Mars rover. Designed an in-house object detection & avoidance stack (ML + statistics), a robotic-arm simulator, and a remote controller. Finished 2nd in Asia and 18th worldwide out of 65 teams competing in Poland.',
    tags: ['Machine Learning', 'Robotics', 'Python', 'C++', 'Computer Vision'],
    emoji: '🤖',
    link: null, // add a URL if you have one
  },
  {
    title: 'Sabrina: Navigation Assistant for the Blind',
    role: 'Tech Lead',
    period: 'Jan 2019 – Feb 2019',
    description:
      'Voice-enabled portable device that turns camera + ultrasonic-sensor inputs into real-time spoken navigation cues. Object detection runs on-device via ML, built to give visually impaired users independence on the move.',
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
  'European Rover Challenge 2018: 2nd in Asia, 18th worldwide (out of 65 teams)',
  'Second runner-up: Upstox Hackathon 2022',
  'Winner: Sabre Hackathon and Sabre Demo Day',
];
