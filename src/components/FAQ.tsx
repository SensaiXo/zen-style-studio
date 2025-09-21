import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'What can I expect from my first wellness session?',
      answer: 'Your first session begins with a comprehensive consultation to understand your wellness goals and current challenges. We\'ll create a personalized plan that may include guided meditation, breathing exercises, and holistic healing techniques tailored to your needs.'
    },
    {
      question: 'Do I need any prior experience with meditation or wellness practices?',
      answer: 'Not at all! Our programs are designed to welcome everyone, from complete beginners to experienced practitioners. We provide gentle guidance and support to help you develop your practice at your own pace.'
    },
    {
      question: 'How long does it typically take to see results?',
      answer: 'While some people experience immediate benefits like reduced stress and improved mood, lasting transformation typically occurs over 4-8 weeks of consistent practice. Everyone\'s journey is unique, and we support you every step of the way.'
    },
    {
      question: 'What makes your approach different from other wellness centers?',
      answer: 'We combine ancient wisdom with modern techniques, offering a holistic approach that addresses mind, body, and spirit. Our experienced practitioners provide personalized attention in a serene, supportive environment designed to foster deep healing and growth.'
    },
    {
      question: 'Can I participate in online sessions, or do I need to visit in person?',
      answer: 'We offer both in-person and virtual sessions to accommodate your preferences and schedule. Our online platform provides the same quality guidance and community connection as our physical space, ensuring you can access support wherever you are.'
    },
    {
      question: 'What should I bring to my sessions?',
      answer: 'Simply bring yourself and an open mind! We provide all necessary materials including meditation cushions, yoga mats, and any props needed for your session. Comfortable clothing and a water bottle are recommended.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Find answers to common questions about our wellness services, 
            programs, and what you can expect on your journey with us.
          </p>
        </div>

        {/* FAQ Container */}
        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="mb-4 bg-card border border-primary/30 rounded-2xl overflow-hidden shadow-zen-soft hover:shadow-zen transition-all duration-300 hover:border-primary/50"
              data-aos="fade-up"
              data-aos-delay={index * 50}
            >
              {/* Question */}
              <button
                className="w-full p-6 text-left flex items-center justify-between hover:bg-primary/5 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary/20"
                onClick={() => toggleFAQ(index)}
                aria-expanded={activeIndex === index}
              >
                <h3 className="text-lg font-semibold text-foreground pr-4">
                  {faq.question}
                </h3>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full bg-gradient-zen flex items-center justify-center text-white transition-transform duration-300 ${
                  activeIndex === index ? 'rotate-45' : ''
                }`}>
                  {activeIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                </div>
              </button>

              {/* Answer */}
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  activeIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 pt-0 border-t border-primary/20">
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12" data-aos="fade-up">
          <p className="text-muted-foreground mb-6">
            Still have questions? We're here to help.
          </p>
          <a href="#contact" className="btn-zen">
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;