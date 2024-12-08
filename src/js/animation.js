document.addEventListener("DOMContentLoaded", () => {
  
  gsap.registerPlugin(ScrollTrigger);

  
  gsap.from(".hero-section h1", {
      opacity: 0,
      y: -50,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
          trigger: ".hero-section",
          start: "top 80%",
          toggleActions: "play none none reverse",
      }
  });

  gsap.from(".hero-section p", {
      opacity: 0,
      y: 20,
      duration: 1,
      delay: 0.3,
      ease: "power2.out",
      scrollTrigger: {
          trigger: ".hero-section",
          start: "top 80%",
          toggleActions: "play none none reverse",
      }
  });

  gsap.from(".hero-section button", {
      opacity: 0,
      scale: 0.8,
      duration: 0.8,
      delay: 0.5,
      ease: "back.out(1.7)",
      scrollTrigger: {
          trigger: ".hero-section",
          start: "top 80%",
          toggleActions: "play none none reverse",
      }
  });

  gsap.from(".services-section h2", {
    opacity: 0,
    y: -30,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".services-section",
        start: "top 80%",
        toggleActions: "play none none reverse",
    }
});


gsap.from(".services-section p", {
    opacity: 0,
    y: 30,
    duration: 1,
    delay: 0.5,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".services-section",
        start: "top 80%",
        toggleActions: "play none none reverse",
    }
});

  
  gsap.from(".about-section h2", {
      opacity: 0,
      y: -30,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
          trigger: ".about-section",
          start: "top 80%",
          toggleActions: "play none none reverse",
      }
  });

  gsap.from(".about-section p", {
      opacity: 0,
      x: -50,
      duration: 1,
      delay: 0.3,
      ease: "power2.out",
      scrollTrigger: {
          trigger: ".about-section",
          start: "top 80%",
          toggleActions: "play none none reverse",
      }
  });

  gsap.from(".about-section button", {
      opacity: 0,
      scale: 0.8,
      duration: 0.8,
      delay: 0.5,
      ease: "back.out(1.7)",
      scrollTrigger: {
          trigger: ".about-section",
          start: "top 80%",
          toggleActions: "play none none reverse",
      }
  });

  
  const serviceItems = document.querySelectorAll(".service-item");
  serviceItems.forEach(item => {
      gsap.from(item, {
          opacity: 0,
          y: 50,
          duration: 0.8,
          stagger: 0.3,
          scrollTrigger: {
              trigger: item,
              start: "top 90%",
              toggleActions: "play none none reverse",
          }
      });
  });

  
  gsap.from(".payment-section h2", {
      opacity: 0,
      y: -30,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
          trigger: ".payment-section",
          start: "top 80%",
          toggleActions: "play none none reverse",
      }
  });

  const paymentPlans = document.querySelectorAll(".payment-plan");
  paymentPlans.forEach(plan => {
      gsap.from(plan, {
          opacity: 0,
          y: 50,
          duration: 0.8,
          stagger: 0.3,
          scrollTrigger: {
              trigger: plan,
              start: "top 90%",
              toggleActions: "play none none reverse",
          }
      });
  });

  gsap.from(".about-section img", {
    opacity: 0,
    scale: 0.5,
    y: -20,
    duration: 1,
    ease: "back.out(1.7)",
    scrollTrigger: {
        trigger: ".about-section",
        start: "top 80%",
        toggleActions: "play none none reverse",
    }
});
gsap.from(".hero-section img", {
    opacity: 0,
    scale: 0.5,
    y: -20,
    duration: 1,
    ease: "back.out(1.7)",
    scrollTrigger: {
        trigger: ".about-section",
        start: "top 80%",
        toggleActions: "play none none reverse",
    }
});

  
  gsap.from(".bg-green-200 h2", {
      opacity: 0,
      y: -30,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
          trigger: ".bg-green-200",
          start: "top 80%",
          toggleActions: "play none none reverse",
      }
  });

  gsap.from(".bg-green-200 img", {
      opacity: 0,
      scale: 0.8,
      duration: 1,
      delay: 0.3,
      ease: "back.out(1.7)",
      scrollTrigger: {
          trigger: ".bg-green-200",
          start: "top 80%",
          toggleActions: "play none none reverse",
      }
  });

  gsap.from(".bg-green-200 p", {
      opacity: 0,
      y: 20,
      duration: 1,
      delay: 0.5,
      ease: "power2.out",
      scrollTrigger: {
          trigger: ".bg-green-200",
          start: "top 80%",
          toggleActions: "play none none reverse",
      }
  });

  
  serviceItems.forEach(item => {
      
      item.addEventListener("mouseenter", () => {
          gsap.to(item, {
              scale: 1.05,          
              boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)", 
              duration: 0.3,        
              ease: "power2.out"    
          });
      });

     
      item.addEventListener("mouseleave", () => {
          gsap.to(item, {
              scale: 1,            
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", 
              duration: 0.3,       
              ease: "power2.out"    
          });
      });
  });
});
