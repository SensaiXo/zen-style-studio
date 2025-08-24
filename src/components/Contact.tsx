import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
    
    // Show success notification (you could integrate with a toast system)
    alert('Thank you! Your message has been sent successfully.');
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Visit Our Studio',
      content: '123 Zen Garden Way\nPeaceful Valley, CA 90210'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Call Us',
      content: '+1 (555) 123-4567\nMon-Fri: 9AM-6PM'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email Us',
      content: 'hello@zenstudio.com\ninfo@zenstudio.com'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Studio Hours',
      content: 'Mon-Fri: 8AM-8PM\nSat-Sun: 9AM-6PM'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-muted to-zen-light/10">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-zen-dark mb-6">
            Connect With Us
          </h2>
          <p className="text-xl text-zen-gray max-w-3xl mx-auto">
            Ready to begin your wellness journey? We're here to guide and support you 
            every step of the way. Reach out to start your transformation today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6" data-aos="fade-right">
            <h3 className="text-2xl font-semibold text-zen-dark mb-8">
              Get In Touch
            </h3>
            
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-zen-soft hover:shadow-zen transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-gradient-zen rounded-xl flex items-center justify-center text-white flex-shrink-0">
                  {info.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-zen-dark mb-2">
                    {info.title}
                  </h4>
                  <p className="text-zen-gray whitespace-pre-line">
                    {info.content}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-3xl shadow-zen-soft" data-aos="fade-left">
            <h3 className="text-2xl font-semibold text-zen-dark mb-6">
              Send Us a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-zen-dark font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-zen-mint/30 rounded-xl focus:outline-none focus:border-primary transition-colors duration-300 bg-white"
                    placeholder="Enter your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-zen-dark font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-zen-mint/30 rounded-xl focus:outline-none focus:border-primary transition-colors duration-300 bg-white"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-zen-dark font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-zen-mint/30 rounded-xl focus:outline-none focus:border-primary transition-colors duration-300 bg-white"
                  placeholder="What can we help you with?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-zen-dark font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border-2 border-zen-mint/30 rounded-xl focus:outline-none focus:border-primary transition-colors duration-300 bg-white resize-none"
                  placeholder="Tell us about your wellness goals or ask any questions..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-zen flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="loading-spinner"></div>
                    Sending Message...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={18} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;