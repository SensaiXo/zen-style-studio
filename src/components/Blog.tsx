import { Calendar, User, ArrowRight } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      title: 'The Art of Mindful Living',
      excerpt: 'Discover how to bring mindfulness into every aspect of your daily routine for a more peaceful existence.',
      date: 'March 15, 2024',
      author: 'Sarah Chen',
      category: 'Mindfulness',
      readTime: '5 min read'
    },
    {
      title: 'Healing Through Nature Connection',
      excerpt: 'Explore the profound healing benefits of spending time in nature and practical ways to connect with the earth.',
      date: 'March 10, 2024',
      author: 'Michael Torres',
      category: 'Nature Therapy',
      readTime: '7 min read'
    },
    {
      title: 'Building Emotional Resilience',
      excerpt: 'Learn powerful techniques to develop emotional strength and navigate life\'s challenges with grace.',
      date: 'March 5, 2024',
      author: 'Emma Johnson',
      category: 'Wellness',
      readTime: '6 min read'
    }
  ];

  return (
    <section id="blog" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Wisdom & Insights
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our latest thoughts on wellness, mindfulness, and personal growth 
            to support your journey toward inner peace.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="bg-card rounded-3xl overflow-hidden shadow-zen-soft transition-all duration-300 hover:-translate-y-1 group card-glow"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Featured Image Placeholder */}
              <div className="h-48 bg-gradient-zen relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/10"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-16 h-16 bg-white/30 rounded-full flex items-center justify-center">
                    <div className="w-8 h-8 bg-white/50 rounded-full"></div>
                  </div>
                </div>
                
                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-black px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Meta info */}
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User size={14} />
                    <span>{post.author}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {post.excerpt}
                </p>

                {/* Read more */}
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{post.readTime}</span>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary/80 transition-colors duration-300 group-hover:gap-3"
                  >
                    Read More
                    <ArrowRight size={16} className="transition-transform duration-300" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12" data-aos="fade-up">
          <a href="#" className="btn-zen-outline">
            View All Articles
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;