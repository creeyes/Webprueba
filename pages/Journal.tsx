import React from 'react';
import { Link } from 'react-router-dom';

// DATOS ESTÁTICOS (Movidos desde mockData para no depender del archivo externo)
const blogPosts = [
  {
    id: '1',
    title: 'The Ultimate Guide to Marbella Luxury Real Estate',
    date: 'October 15, 2023',
    category: 'Real Estate',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800',
    excerpt: 'Discover the most exclusive neighborhoods and what makes Marbella the jewel of the Costa del Sol.'
  },
  {
    id: '2',
    title: 'Interior Design Trends for 2024',
    date: 'November 2, 2023',
    category: 'Design',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800',
    excerpt: 'From sustainable materials to bold colors, explore the trends shaping luxury interiors this coming year.'
  },
  {
    id: '3',
    title: 'Living the Mediterranean Lifestyle',
    date: 'November 20, 2023',
    category: 'Lifestyle',
    image: 'https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&q=80&w=800',
    excerpt: 'Experience the perfect balance of relaxation and sophistication that only the Mediterranean coast can offer.'
  }
];

const Journal: React.FC = () => {
  return (
    <div className="bg-light pt-32 pb-24">
       <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
             <h1 className="font-serif text-5xl font-bold text-secondary mb-4">The Journal</h1>
             <p className="text-gray-500 tracking-widest uppercase text-sm">Insights into the Marbella Lifestyle</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
             {blogPosts.map(post => (
                <article key={post.id} className="bg-white text-left group shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col h-full">
                   <Link to={`/journal/${post.id}`} className="block overflow-hidden aspect-video relative">
                      <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                   </Link>
                   <div className="p-8 flex flex-col flex-grow">
                      <div className="flex items-center text-[10px] uppercase tracking-widest text-gray-400 mb-4 space-x-4">
                         <span>{post.date}</span>
                         <span className="text-primary">•</span>
                         <span>{post.category}</span>
                      </div>
                      <Link to={`/journal/${post.id}`}>
                         <h4 className="font-serif text-xl mb-4 group-hover:text-primary transition-colors text-secondary leading-tight">{post.title}</h4>
                      </Link>
                      <p className="text-sm text-gray-500 line-clamp-3 mb-6 flex-grow">{post.excerpt}</p>
                      <div className="mt-auto">
                        <Link to={`/journal/${post.id}`} className="text-[10px] uppercase tracking-[0.2em] font-bold border-b border-primary pb-1 text-primary hover:text-secondary hover:border-secondary transition-colors">
                            Continue Reading
                        </Link>
                      </div>
                   </div>
                </article>
             ))}
          </div>
       </div>
    </div>
  );
};

export default Journal;
