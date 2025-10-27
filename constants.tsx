
import type { NavLink, RoadmapItem, TokenDistribution, FAQItem, Article } from './types';

export const NAV_LINKS: NavLink[] = [
  { name: 'Home', path: '/' },
  { name: 'Wiki', path: '/wiki' },
  { name: 'Token', path: '/token' },
  { name: 'Community', path: '/community' },
  { name: 'FAQ', path: '/faq' },
];

export const SOCIAL_LINKS = {
  twitter: 'https://x.com/grokipedia',
  telegram: 'https://t.me/grokipedia',
  discord: 'https://discord.gg/grokipedia',
};

export const ROADMAP_DATA: RoadmapItem[] = [
  { quarter: 'Q4', year: '2025', description: 'Beta wiki launch, 100+ articles, and basic token page.' },
  { quarter: 'Q1', year: '2026', description: 'Community contribution program, badges, and basic contribution rewards.' },
  { quarter: 'Q2', year: '2026', description: 'Multi-language content support, advanced search, and a mobile PWA.' },
  { quarter: 'Q3', year: '2026', description: 'Governance experiments and content moderation tools.' },
  { quarter: 'Q4', year: '2026', description: 'Partnerships, Wiki API, and advanced badge economy.' },
];

export const TOKENOMICS_DATA: TokenDistribution[] = [
  { name: 'Community', value: 50, color: '#7DF9FF' },
  { name: 'Liquidity', value: 30, color: '#A855F7' },
  { name: 'Treasury', value: 10, color: '#F472B6' },
  { name: 'Marketing', value: 5, color: '#34D399' },
  { name: 'Development', value: 5, color: '#FBBF24' },
];

export const FAQ_DATA: FAQItem[] = [
  {
    question: 'What is Grokipedia?',
    answer: 'Grokipedia is a fun, community-written encyclopedia. It\'s a place where knowledge meets meme culture.',
  },
  {
    question: 'What is GROKI?',
    answer: 'GROKI is a BEP-20 meme token on the BNB Smart Chain, designed for fun and to incentivize community contributions.',
  },
  {
    question: 'How do I buy GROKI?',
    answer: 'You can buy GROKI on a decentralized exchange (DEX) like PancakeSwap. You\'ll need a crypto wallet (like MetaMask or Trust Wallet) and some BNB for the transaction.',
  },
  {
    question: 'Is this project officially affiliated with Elon Musk or Grok?',
    answer: 'No. Grokipedia is a fan-inspired concept and has no official connection with Elon Musk, xAI, or the Grok project.',
  },
  {
    question: 'Is this investment advice?',
    answer: 'Absolutely not. All content on this site is for educational and entertainment purposes only. GROKI is a meme token and should be treated as such.',
  },
];

export const SAMPLE_ARTICLE: Article = {
  title: 'Elon Musk Project: Grokipedia',
  summary: 'Grokipedia is a "grok"-inspired encyclopedia idea that aims to combine community-generated information with a fun meme culture. The following text is a community fan work; there is no official affiliation.',
  toc: [
    'Background',
    'Vision and Purpose',
    'Community Role',
    'Technology Approach',
    'Ecosystem with GROKI Token',
    'Discussions and Opinions',
    'References and Related Articles',
  ],
  sections: [
    {
      title: '1) Background',
      content: 'The concept of "grok" evokes rapid and intuitive access to information. Grokipedia aims to blend this spirit with community contributions to create an entertaining layer of knowledge.',
    },
    {
      title: '2) Vision and Purpose',
      content: 'To combine the reliability of classic encyclopedias with the viral power of memes: easy-to-read, quickly shareable, sourced content.',
    },
    {
      title: '3) Community Role',
      content: 'Ownership is fundamental at Grokipedia. Contributors write articles, add sources, and correct errors. Quality is maintained through voting and moderation.',
    },
    {
      title: '4) Technology Approach',
      content: 'Content versions are tracked, and the change history is transparent. Search and tagging are powerful; smooth navigation on mobile is a priority.',
    },
    {
      title: '5) Ecosystem with GROKI Token',
      content: 'GROKI is a meme token created on BSC. It can serve as an incentive for community activities, badges, contribution rewards, and governance experiments. (Note: Not investment advice.)',
    },
    {
      title: '6) Discussions and Opinions',
      content: 'How can the line between meme culture and informational seriousness be maintained? Transparent rules and a requirement for sources are recommended.',
    },
  ],
  references: [
    '"Community Encyclopedias"',
    '"Meme Economy"',
    '"Blockchain Incentive Models"',
  ],
  disclaimer: 'DISCLAIMER: This article explains the Grokipedia fan concept; it has no official connection with Elon Musk, Grok, or related entities.',
  lastUpdated: 'October 26, 2025',
  contributors: ['GrokiFan1', 'WikiWizard', 'MemeLord_BSC'],
};
