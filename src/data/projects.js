/**
 * Project data — Kaladari Teja Swaneeth's portfolio.
 * Source: GitHub https://github.com/T4x-Dev
 * To add a project: add a new object below.
 * To update: find by id and edit fields.
 */

export const projects = [
  {
    id: 'techphilo',
    title: 'TechPhilo',
    description:
      'A future-ready learning platform built around AI, technology, creativity, and practical learning. Designed to make technical education more accessible, structured, and engaging for modern learners.',
    category: 'fullstack',
    categoryLabel: 'Full Stack · EdTech',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Node.js'],
    githubUrl: 'https://github.com/T4x-Dev/Techphilo-web-dev',
    liveUrl: 'https://techphilo.onrender.com/',
    featured: true,
    status: 'Live',
    gradient: 'from-cyan-500 to-blue-600',
  },
  {
    id: 'agrimoksh',
    title: 'AgriMoksh',
    description:
      'An AgriTech platform designed to support farmers with intelligent tools, crop guidance, and data-driven insights. Built to bridge the gap between modern technology and agricultural communities.',
    category: 'fullstack',
    categoryLabel: 'Full Stack · AgriTech',
    technologies: ['Python', 'Web Development', 'AI/ML'],
    githubUrl: null,
    liveUrl: null,
    featured: false,
    status: 'Completed',
    gradient: 'from-green-500 to-emerald-600',
  },
  {
    id: 'spam-shield',
    title: 'Spam Shield',
    description:
      'An intelligent spam detection system that classifies messages as spam or legitimate using machine learning. Applies NLP techniques to analyze patterns in text and protect users from unwanted communications.',
    category: 'ml',
    categoryLabel: 'AI · Machine Learning · NLP',
    technologies: ['Python', 'Scikit-learn', 'NLP', 'Pandas', 'NumPy'],
    githubUrl: 'https://github.com/T4x-Dev/SPAM-SHIELD---spam-Detection',
    liveUrl: null,
    featured: false,
    status: 'Completed',
    gradient: 'from-purple-500 to-pink-600',
  },
  {
    id: 'taxi-fare',
    title: 'Taxi Fare Prediction',
    description:
      'A machine learning model predicting taxi fares using Linear Regression. Built to master the complete ML workflow — data collection, cleaning, model training, evaluation, and version control with Git.',
    category: 'ml',
    categoryLabel: 'Machine Learning · Python',
    technologies: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib'],
    githubUrl: 'https://github.com/T4x-Dev/TAXI-FARE-PREDICTION-USING-LINEAR-REGRESSION-',
    liveUrl: null,
    featured: false,
    status: 'Completed',
    gradient: 'from-amber-500 to-orange-600',
  },
  {
    id: 'twitterlite',
    title: 'TwitterLite',
    description:
      'A lightweight Twitter-inspired social platform built with Python and Django. Demonstrates full-stack development patterns including user authentication, data modeling, and dynamic UI.',
    category: 'fullstack',
    categoryLabel: 'Full Stack · Web',
    technologies: ['Python', 'Django', 'HTML', 'CSS', 'SQLite'],
    githubUrl: 'https://github.com/T4x-Dev/Twitterlite-Using-Python-Django',
    liveUrl: null,
    featured: false,
    status: 'Completed',
    gradient: 'from-blue-500 to-indigo-600',
  },
  {
    id: 'tfisipatpr',
    title: 'TFISIPATPR',
    description:
      'A Python-based project exploring practical problem-solving through structured data workflows, automation, and applied programming techniques. A learning-focused technical exercise.',
    category: 'ml',
    categoryLabel: 'Python · Data',
    technologies: ['Python'],
    githubUrl: 'https://github.com/T4x-Dev/TFISIPATPR',
    liveUrl: null,
    featured: false,
    status: 'Completed',
    gradient: 'from-slate-500 to-slate-600',
  },
];

export const categories = [
  { id: 'all', label: 'All' },
  { id: 'ml', label: 'AI / ML' },
  { id: 'fullstack', label: 'Full Stack' },
];
