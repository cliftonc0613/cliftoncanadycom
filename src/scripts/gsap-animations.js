// GSAP animations for smooth entrance effects and interactions
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', function() {
  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        gsap.to(window, {duration: 1, scrollTo: target, ease: "power2.inOut"});
      }
    });
  });

  // Hero section entrance animation
  gsap.timeline()
    .from('.hero-title', {duration: 1, y: 50, opacity: 0, ease: "power2.out"})
    .from('.hero-subtitle', {duration: 1, y: 30, opacity: 0, ease: "power2.out"}, "-=0.5")
    .from('.hero-badges', {duration: 1, y: 20, opacity: 0, ease: "power2.out"}, "-=0.3")
    .from('.hero-cta', {duration: 1, y: 20, opacity: 0, ease: "power2.out"}, "-=0.2");

  // Section entrance animations
  gsap.utils.toArray('.section-content').forEach(section => {
    gsap.from(section, {
      duration: 1,
      y: 50,
      opacity: 0,
      ease: "power2.out",
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });
  });

  // Stagger animations for cards
  gsap.utils.toArray('.card-group').forEach(group => {
    gsap.from(group.children, {
      duration: 0.8,
      y: 30,
      opacity: 0,
      stagger: 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: group,
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    });
  });

  // Button hover animations
  document.querySelectorAll('.animated-button').forEach(button => {
    button.addEventListener('mouseenter', function() {
      gsap.to(this, {duration: 0.3, scale: 1.05, ease: "power2.out"});
    });
    
    button.addEventListener('mouseleave', function() {
      gsap.to(this, {duration: 0.3, scale: 1, ease: "power2.out"});
    });
  });
});