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
    title: 'KVizzing: Trivia Archive & Visualizer',
    role: 'Solo project',
    period: '2026',
    description:
      'Full-stack pipeline that extracts, enriches, and visualises trivia questions from a WhatsApp quiz community. Pydantic-typed schema, multi-stage extraction (regex + LLM), web visualizer over a searchable structured archive.',
    tags: ['Python', 'Pydantic', 'LLMs', 'Data Pipeline'],
    emoji: '🧠',
    link: 'https://github.com/Saumay/kvizzing_questions_visualizer',
  },
  {
    title: 'F1 Insights',
    role: 'Solo project',
    period: '2025',
    description:
      'Python tooling for analysing Formula 1 race data via the FastF1 API. NumPy + matplotlib + SciPy under the hood. Built to scratch a personal F1 itch.',
    tags: ['Python', 'FastF1', 'NumPy', 'Data Analysis'],
    emoji: '🏎️',
    link: 'https://github.com/Saumay/f1-insights',
  },
  {
    title: "European Rover Challenge '18",
    role: 'Programming Lead',
    period: 'Dec 2017 – Sept 2018',
    description:
      'Led a 7-engineer CS team to build an autonomous Mars rover. Designed an in-house object detection & avoidance stack (ML + statistics), a robotic-arm simulator, and a remote controller. Finished 2nd in Asia and 18th worldwide out of 65 teams competing in Poland.',
    tags: ['Machine Learning', 'Robotics', 'Python', 'C++', 'Computer Vision'],
    emoji: '🤖',
    link: null,
  },
  {
    title: 'Videos Retrieval Service',
    role: 'Solo project',
    period: '2021',
    description:
      'Spring Boot API that fetches the latest YouTube videos for a given tag or search query, returned in reverse-chronological paginated form. Built to learn modular Spring + REST patterns end to end.',
    tags: ['Java', 'Spring Boot', 'YouTube API', 'REST'],
    emoji: '📺',
    link: 'https://github.com/Saumay/videos-retrieval-service',
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

// Open-source contributions (merged PRs)
export const openSource = [
  {
    repo: 'jax-ml/jax',
    blurb: 'Composable transformations of Python+NumPy programs (Google).',
    url: 'https://github.com/jax-ml/jax',
    contributions: [
      { title: 'Add jax.scipy.linalg.leslie',    url: 'https://github.com/jax-ml/jax/pull/37335', date: '2026-05-01' },
      { title: 'Add jax.scipy.linalg.dft',       url: 'https://github.com/jax-ml/jax/pull/37149', date: '2026-04-24' },
      { title: 'Add jax.scipy.linalg.hadamard',  url: 'https://github.com/jax-ml/jax/pull/37043', date: '2026-04-21' },
      { title: 'Add jax.scipy.linalg.circulant', url: 'https://github.com/jax-ml/jax/pull/37015', date: '2026-04-21' },
    ],
  },
  {
    repo: 'keras-team/keras',
    blurb: 'Deep Learning for humans.',
    url: 'https://github.com/keras-team/keras',
    contributions: [
      { title: 'Accept plain callables as constraint in Variable setter', url: 'https://github.com/keras-team/keras/pull/22730', date: '2026-04-20' },
      { title: 'Validate registered_name in deserialize_keras_object',    url: 'https://github.com/keras-team/keras/pull/22729', date: '2026-04-19' },
      { title: 'Validate input_dim and output_dim in Embedding',          url: 'https://github.com/keras-team/keras/pull/22718', date: '2026-04-19' },
    ],
  },
  {
    repo: 'keras-team/keras-io',
    blurb: 'Keras documentation, hosted at keras.io.',
    url: 'https://github.com/keras-team/keras-io',
    contributions: [
      { title: 'Fix object_detection_keras_cv redirect target', url: 'https://github.com/keras-team/keras-io/pull/2352', date: '2026-04-21' },
    ],
  },
];

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
