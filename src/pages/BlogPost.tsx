import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import { Link } from 'react-router-dom';
import { Calendar, User, Tag } from 'lucide-react';

const BlogPost = () => {
  // This is a sample post. In a real application, you would fetch this data based on the slug.
  const post = {
    title: 'Der ultimative Guide für eine starke Web-Präsenz',
    author: 'Jane Doe',
    date: '22. September 2025',
    tags: ['Web-Präsenz', 'Digital-Strategie', 'Marketing'],
    imageUrl: '/placeholder.svg',
    content: `
      <p class="text-lg text-muted-foreground mb-8">In der heutigen digitalen Welt ist eine starke Web-Präsenz entscheidend für den Erfolg eines jeden Unternehmens. Es geht nicht mehr nur darum, eine Website zu haben. Es geht darum, eine kohärente und umfassende Online-Identität zu schaffen, die Ihre Zielgruppe anspricht und Ihre Marke stärkt.</p>
      
      <h2 class="text-3xl font-bold text-foreground mt-12 mb-6">Was ist eine Web-Präsenz?</h2>
      <p class="text-muted-foreground mb-6">Eine Web-Präsenz ist die kollektive Existenz Ihrer Marke im Internet. Sie umfasst Ihre Website, Ihre Social-Media-Profile, Ihre Einträge in Online-Verzeichnissen, Ihre Kundenbewertungen und vieles mehr. Eine starke Web-Präsenz bedeutet, dass Ihre Marke auf den Kanälen präsent ist, die Ihre Zielgruppe nutzt, und dass sie dort einen konsistenten und positiven Eindruck hinterlässt.</p>
      
      <blockquote class="border-l-4 border-primary pl-6 py-4 my-8 bg-card">
        <p class="text-xl italic text-foreground">"Ihre Marke ist nicht das, was Sie über sich selbst sagen, sondern das, was Google über Sie sagt." - Chris Anderson</p>
      </blockquote>
      
      <h2 class="text-3xl font-bold text-foreground mt-12 mb-6">Die Säulen einer starken Web-Präsenz</h2>
      <div class="space-y-6">
        <div>
          <h3 class="text-2xl font-semibold text-primary mb-3">1. Eine optimierte Website</h3>
          <p class="text-muted-foreground">Ihre Website ist das Herzstück Ihrer digitalen Präsenz. Sie muss nicht nur gut aussehen, sondern auch schnell, mobilfreundlich und für Suchmaschinen optimiert sein. Stellen Sie sicher, dass Ihre Website klare Handlungsaufforderungen (CTAs) enthält und den Besuchern einen echten Mehrwert bietet.</p>
        </div>
        <div>
          <h3 class="text-2xl font-semibold text-primary mb-3">2. Suchmaschinenoptimierung (SEO)</h3>
          <p class="text-muted-foreground">SEO ist der Prozess, Ihre Website so zu optimieren, dass sie in den Suchergebnissen von Google und anderen Suchmaschinen weit oben erscheint. Dies umfasst die Keyword-Recherche, die On-Page-Optimierung, den Aufbau von Backlinks und die technische SEO.</p>
        </div>
        <div>
          <h3 class="text-2xl font-semibold text-primary mb-3">3. Social Media Marketing</h3>
          <p class="text-muted-foreground">Wählen Sie die Social-Media-Plattformen, auf denen sich Ihre Zielgruppe aufhält, und erstellen Sie relevante und ansprechende Inhalte. Social Media ist ein hervorragendes Werkzeug, um mit Ihrer Community zu interagieren und Ihre Markenpersönlichkeit zu zeigen.</p>
        </div>
        <div>
          <h3 class="text-2xl font-semibold text-primary mb-3">4. Content-Marketing</h3>
          <p class="text-muted-foreground">Erstellen Sie wertvolle Inhalte wie Blogartikel, Videos, Infografiken oder Podcasts, die die Probleme Ihrer Zielgruppe lösen. Guter Content positioniert Sie als Experten in Ihrer Branche und zieht potenzielle Kunden an.</p>
        </div>
      </div>
      
      <div class="mt-12 p-8 bg-card rounded-3xl card-glow">
        <h3 class="text-2xl font-bold text-foreground mb-4">Fazit</h3>
        <p class="text-muted-foreground">Eine starke Web-Präsenz ist ein kontinuierlicher Prozess, keine einmalige Aufgabe. Indem Sie in diese Bereiche investieren, bauen Sie eine nachhaltige Online-Identität auf, die Ihr Unternehmen wachsen lässt. Beginnen Sie noch heute damit, Ihre digitale Präsenz zu stärken!</p>
      </div>
    `
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-32 pb-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Back to Blog link */}
            <div className="mb-8">
              <Link 
                to="/blog" 
                className="inline-flex items-center text-primary hover:text-primary-hover transition-colors duration-300"
              >
                <svg className="mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                </svg>
                Zurück zum Blog
              </Link>
            </div>

            {/* Post Header */}
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">{post.title}</h1>
            <div className="flex items-center text-muted-foreground text-sm mb-8">
              <div className="flex items-center mr-6">
                <Calendar className="w-4 h-4 mr-2" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                <span>{post.author}</span>
              </div>
            </div>
            
            {/* Post Image */}
            <img src={post.imageUrl} alt={post.title} className="w-full rounded-3xl mb-12" />
            
            {/* Post Content */}
            <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />

            {/* Tags */}
            <div className="mt-12 flex items-center flex-wrap gap-2">
              <Tag className="w-5 h-5 text-muted-foreground" />
              {post.tags.map(tag => (
                <span key={tag} className="bg-primary/10 text-primary text-sm font-medium px-3 py-1.5 rounded-full">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default BlogPost;