import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Facebook, Twitter, Linkedin, Share2 } from 'lucide-react';

// DATOS ESTÁTICOS (Copiados aquí para no depender de mockData)
const blogPosts = [
  {
    id: '1',
    title: 'The Ultimate Guide to Marbella Luxury Real Estate',
    date: 'October 15, 2023',
    category: 'Real Estate',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800',
    excerpt: 'Discover the most exclusive neighborhoods and what makes Marbella the jewel of the Costa del Sol.',
    content: [
      "Marbella has long been synonymous with luxury, attracting discerning buyers from around the globe. From the Golden Mile to La Zagaleta, the region offers a diverse range of exclusive properties.",
      "In this guide, we explore the key areas that define the Marbella real estate market. Whether you are looking for a beachfront villa or a secluded hillside estate, understanding the nuances of each neighborhood is essential.",
      "The Golden Mile remains the most prestigious address, home to iconic hotels like the Marbella Club and Puente Romano. Here, properties are not just homes; they are pieces of history.",
      "For those seeking absolute privacy, La Zagaleta offers a gated community experience unparalleled in Europe. With its own golf courses, equestrian center, and helipad, it is a sanctuary for the elite."
    ]
  },
  {
    id: '2',
    title: 'Interior Design Trends for 2024',
    date: 'November 2, 2023',
    category: 'Design',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800',
    excerpt: 'From sustainable materials to bold colors, explore the trends shaping luxury interiors this coming year.',
    content: [
      "As we approach 2024, interior design is shifting towards a blend of sustainability and bold expression. Natural materials like stone, wood, and clay are taking center stage, grounding luxury spaces in earthiness.",
      "Color palettes are warming up, moving away from the stark grays of the past decade. Terracotta, olive green, and deep blues are becoming the new neutrals, adding depth and character to living spaces.",
      "In luxury villas, the line between indoor and outdoor living continues to blur. Floor-to-ceiling windows and continuous flooring materials create seamless transitions, expanding the living area into the landscape."
    ]
  },
  {
    id: '3',
    title: 'Living the Mediterranean Lifestyle',
    date: 'November 20, 2023',
    category: 'Lifestyle',
    image: 'https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&q=80&w=800',
    excerpt: 'Experience the perfect balance of relaxation and sophistication that only the Mediterranean coast can offer.',
    content: [
      "The Mediterranean lifestyle is more than just a diet or a location; it is a philosophy of living. It emphasizes the importance of time, connection, and enjoying the simple pleasures of life.",
      "In Marbella, this lifestyle is elevated by the perfect climate. With over 300 days of sunshine a year, outdoor activities are a daily reality. From morning swims in the sea to late dinners under the stars, life here is lived in the open air.",
      "Community is at the heart of this lifestyle. Whether it's gathering with friends at a chiringuito or enjoying a family lunch on the terrace, social connections are nurtured and cherished."
    ]
  }
];

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
