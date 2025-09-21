import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import { Link } from 'react-router-dom';
import { Calendar, User, Tag } from 'lucide-react';

const blogPosts = [
  {
    slug: 'sample-post',
    title: 'Der ultimative Guide für eine starke Web-Präsenz',
    excerpt: 'Erfahren Sie, wie Sie eine umfassende digitale Strategie entwickeln, die über eine einfache Website hinausgeht und Ihre Marke online etabliert.',
    author: 'Jane Doe',
    date: '22. September 2025',
    tags: ['Web-Präsenz', 'Digital-Strategie', 'Marketing'],
    imageUrl: '/placeholder.svg'
  },
  // Add more blog posts here
];

const Blog = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Unser <span className="text-primary">Blog</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
              Einblicke, Tipps und Neuigkeiten aus der Welt des Webdesigns, SEO und der digitalen Präsenz.
            </p>
          </div>
        </div>
      </section>
      
      {/* Blog Grid */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <div key={post.slug} className="group bg-background rounded-3xl overflow-hidden card-glow">
                <Link to={`/blog/${post.slug}`}>
                  <img src={post.imageUrl} alt={post.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                </Link>
                <div className="p-6">
                  <div className="flex items-center text-sm text-muted-foreground mb-4">
                    <div className="flex items-center mr-4">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-2" />
                      <span>{post.author}</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                    <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>
                  <p className="text-muted-foreground mb-6">{post.excerpt}</p>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map(tag => (
                      <span key={tag} className="bg-primary/10 text-primary text-xs font-medium px-2.5 py-1 rounded-full">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Blog;