import { useEffect } from 'react';

export const useAOS = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('aos-animate');
          
          // Add staggered delay for elements with data-aos-delay
          const delay = entry.target.getAttribute('data-aos-delay');
          if (delay) {
            (entry.target as HTMLElement).style.transitionDelay = delay + 'ms';
          }
        }
      });
    }, observerOptions);

    // Observe all elements with data-aos attribute
    const animatedElements = document.querySelectorAll('[data-aos]');
    animatedElements.forEach((el) => observer.observe(el));

    // Cleanup
    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, []);
};

export default useAOS;