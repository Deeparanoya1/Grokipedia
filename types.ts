
export interface NavLink {
  name: string;
  path: string;
}

export interface RoadmapItem {
  quarter: string;
  year: string;
  description: string;
}

export interface TokenDistribution {
  name: string;
  value: number;
  color: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Article {
  title: string;
  summary: string;
  toc: string[];
  sections: ArticleSection[];
  references: string[];
  disclaimer: string;
  lastUpdated: string;
  contributors: string[];
}

export interface ArticleSection {
  title: string;
  content: string;
}
