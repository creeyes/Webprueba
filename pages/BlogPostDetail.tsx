import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '../data/mockData';
import { Calendar, Tag, ArrowLeft, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';

const BlogPostDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find(p => p.id === id);

  if (!post) {
    return (
      <div className="pt-40 text-center pb-40 min-h-[60vh] flex flex-col items-center justify-center">
        <h2 className="text-3xl font-serif mb-4">Article Not Found</h2>
        <Link to="/journal" className="text-primary underline hover:text-secondary transition-colors">Return to Journal</Link>
      </div>
    );
  }

  return (
    <div className="bg-white pt-24 pb-24">
      {/* Hero Image */}
      <div className="w-full h-[50vh] relative overflow-hidden">
        <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 bg-gradient-to-t from-black/80 to-transparent">
            <div className="max-w-4xl mx-auto">
                <div className="flex items-center gap-4 text-white/90 text-xs font-bold uppercase tracking-widest mb-4">
                    <span className="bg-primary px-3 py-1 text-white">{post.category}</span>
                    <span>{post.date}</span>
                </div>
                <h1 className="text-white font-serif text-3xl md:text-5xl font-bold leading-tight shadow-sm max-w-3xl">
                    {post.title}
                </h1>
            </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Main Content */}
        <div className="lg:col-span-8">
            <div className="prose prose-lg prose-headings:font-serif prose-headings:text-secondary prose-p:text-gray-600 prose-a:text-primary max-w-none">
                <p className="lead text-xl text-gray-500 italic mb-8 border-l-4 border-primary pl-4">
                    {post.excerpt}
                </p>
                {post.content && post.content.map((paragraph, idx) => (
                    <p key={idx} className="mb-6 leading-relaxed">
                        {paragraph}
                    </p>
                ))}
                {!post.content && (
                    <p className="text-gray-400 italic">[Content placeholder: The full article content would appear here.]</p>
                )}
            </div>
            
            <div className="mt-12 pt-8 border-t border-gray-100 flex justify-between items-center">
                <Link to="/journal" className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-gray-500 hover:text-primary transition-colors">
                    <ArrowLeft size={16} /> Back to Journal
                </Link>
            </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-4 space-y-12">
            
            {/* Author/Share */}
            <div className="bg-gray-50 p-8 border border-gray-100">
                <h4 className="font-serif text-xl font-bold mb-6 text-secondary">Share this article</h4>
                <div className="flex gap-4">
                    <button className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white hover:border-primary transition-all">
                        <Facebook size={18} />
                    </button>
                    <button className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white hover:border-primary transition-all">
                        <Twitter size={18} />
                    </button>
                    <button className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white hover:border-primary transition-all">
                        <Linkedin size={18} />
                    </button>
                    <button className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white hover:border-primary transition-all">
                        <Share2 size={18} />
                    </button>
                </div>
            </div>

            {/* Recent Posts Mini */}
            <div>
                <h4 className="font-serif text-lg font-bold mb-6 text-secondary border-b border-gray-200 pb-2">Recent Stories</h4>
                <div className="space-y-6">
                    {blogPosts.filter(p => p.id !== post.id).slice(0, 2).map(recent => (
                        <Link key={recent.id} to={`/journal/${recent.id}`} className="group block">
                            <div className="aspect-[3/2] overflow-hidden mb-3">
                                <img src={recent.image} alt={recent.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                            </div>
                            <h5 className="font-serif text-base font-bold text-secondary group-hover:text-primary transition-colors line-clamp-2">{recent.title}</h5>
                            <span className="text-xs text-gray-400 uppercase tracking-wider mt-1 block">{recent.date}</span>
                        </Link>
                    ))}
                </div>
            </div>

        </div>
      </div>
    </div>
  );
};

export default BlogPostDetail;