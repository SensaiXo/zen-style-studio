import { Brain, Heart, Leaf, Users, Star, Zap } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'Mindfulness Training',
      description: 'Learn to cultivate awareness and presence through guided meditation and mindfulness practices.'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Emotional Wellness',
      description: 'Develop emotional resilience and healthy coping strategies for life\'s challenges.'
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: 'Nature Therapy',
      description: 'Connect with nature to restore balance and find peace in natural environments.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Group Sessions',
      description: 'Join like-minded individuals in supportive group wellness and meditation sessions.'
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: 'Personal Coaching',
      description: 'One-on-one guidance tailored to your unique wellness journey and goals.'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Energy Healing',
      description: 'Experience holistic energy work to restore balance and vitality to body and mind.'
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-zen-dark mb-6">
            Our Wellness Services
          </h2>
          <p className="text-xl text-zen-gray max-w-3xl mx-auto">
            Discover a range of holistic services designed to nurture your mind, 
            body, and spirit on your journey to inner peace and well-being.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-3xl shadow-zen-soft border border-zen-mint/20 transition-all duration-300 hover:shadow-zen hover:-translate-y-2 relative overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Gradient overlay on hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-zen scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-zen rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="text-2xl font-semibold text-zen-dark mb-4 group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-zen-gray leading-relaxed">
                {service.description}
              </p>

              {/* Hover effect circle */}
              <div className="absolute -bottom-8 -right-8 w-16 h-16 bg-gradient-zen rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;