
import React from 'react';
import GlassCard from '../components/GlassCard';
import { SAMPLE_ARTICLE } from '../constants';
import type { Article } from '../types';

const ArticleView: React.FC<{ article: Article }> = ({ article }) => {
  return (
    <GlassCard className="!p-6 md:!p-10">
      <header className="border-b border-white/20 pb-6 mb-6">
        <h1 className="text-4xl md:text-5xl font-bold font-grotesk text-brand-cyan">{article.title}</h1>
        <p className="mt-4 text-lg text-brand-secondary-text">{article.summary}</p>
      </header>
      
      <div className="mb-8 p-4 border border-brand-purple/50 rounded-lg bg-brand-purple/10">
        <h3 className="font-bold text-xl mb-2">Contents</h3>
        <ul className="list-decimal list-inside space-y-1">
          {article.toc.map(item => (
            <li key={item}><a href={`#${item.replace(/\s+/g, '-')}`} className="hover:underline text-brand-cyan/80 hover:text-brand-cyan">{item}</a></li>
          ))}
        </ul>
      </div>

      <article className="prose prose-invert prose-lg max-w-none prose-h2:font-grotesk prose-h2:text-brand-purple prose-a:text-brand-cyan">
        {article.sections.map(section => (
          <section key={section.title} id={section.title.replace(/\s+/g, '-')}>
            <h2>{section.title}</h2>
            <p>{section.content}</p>
          </section>
        ))}
        
        <section>
          <h2 id={article.toc[article.toc.length - 1].replace(/\s+/g, '-')}>7) References and Related Articles</h2>
          <ul className="list-disc list-inside">
            {article.references.map(ref => <li key={ref}>{ref}</li>)}
          </ul>
        </section>
      </article>

      <footer className="mt-10 pt-6 border-t border-white/20 text-sm text-brand-secondary-text">
        <p className="italic font-bold mb-4">{article.disclaimer}</p>
        <p>Last updated: {article.lastUpdated}</p>
        <p>Contributors: {article.contributors.join(', ')}</p>
      </footer>
    </GlassCard>
  );
};

const WikiSidebar: React.FC = () => {
  const popularArticles = ['Meme Economy', 'BNB Smart Chain', 'Community Governance', 'Grok', 'Decentralized Science (DeSci)'];
  return (
    <aside>
      <GlassCard>
        <h3 className="text-2xl font-bold mb-4 font-grotesk">Wiki Navigation</h3>
        <button className="w-full bg-brand-purple text-white font-bold py-2 px-4 rounded-lg mb-6 hover:bg-opacity-80 transition-colors">
          Random Article
        </button>
        <h4 className="text-xl font-semibold mb-3">Popular Articles</h4>
        <ul className="space-y-2">
          {popularArticles.map(title => (
            <li key={title}><a href="#" className="hover:text-brand-cyan transition-colors">{title}</a></li>
          ))}
        </ul>
      </GlassCard>
    </aside>
  );
};

const WikiPage: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="grid lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3">
          <ArticleView article={SAMPLE_ARTICLE} />
        </div>
        <div className="lg:col-span-1">
          <WikiSidebar />
        </div>
      </div>
    </div>
  );
};

export default WikiPage;
