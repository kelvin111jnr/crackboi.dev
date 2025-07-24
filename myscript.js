// Mobile menu toggle
      const menuBtn = document.getElementById("menuBtn");
      const navLinks = document.getElementById("navLinks");

      menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        menuBtn.classList.toggle("active");
      });

      // Close mobile menu when clicking on a link
      document.querySelectorAll(".nav-links a").forEach((link) => {
        link.addEventListener("click", () => {
          navLinks.classList.remove("active");
          menuBtn.classList.remove("active");
        });
      });

      // Smooth scrolling for navigation links
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
          e.preventDefault();

          const targetId = this.getAttribute("href");
          const targetElement = document.querySelector(targetId);

          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: "smooth",
          });
        });
      });

      // Animation on scroll
      const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          }
        });
      }, observerOptions);

      // Observe elements with the 'animate' class
      document.querySelectorAll(".animate").forEach((el) => {
        observer.observe(el);
      });

      // Hero text animation
      const heroText = document.querySelector(".hero-text");
      const words = document.querySelectorAll(".word");
      const paragraph = document.querySelector(".hero-text p");
      const buttons = document.querySelector(".cta-buttons");

      // Function to animate words one by one
      function animateWords() {
        words.forEach((word, index) => {
          setTimeout(() => {
            word.style.animation = "slideUp 0.8s ease forwards";
            word.style.opacity = "1";
          }, index * 300); // 300ms delay between each word
        });

        // Animate paragraph after words
        setTimeout(() => {
          paragraph.style.animation = "fadeIn 1s ease forwards";
          paragraph.style.opacity = "1";
        }, words.length * 300);

        // Animate buttons after paragraph
        setTimeout(() => {
          buttons.style.animation = "fadeIn 1s ease forwards";
          buttons.style.opacity = "1";
        }, words.length * 300 + 500);
      }

      // Start animation when page loads
      window.addEventListener("load", animateWords);

      // Gradient color change for hero section
      const hero = document.querySelector(".hero");
      const hexagon = document.querySelector(".hexagon");
      const colors = [
        "linear-gradient(135deg, #4f46e5, #8b5cf6)",
        "linear-gradient(135deg, #10b981, #3b82f6)",
        "linear-gradient(135deg, #f59e0b, #ef4444)",
        "linear-gradient(135deg, #8b5cf6, #ec4899)",
        "linear-gradient(135deg, #14b8a6, #0ea5e9)",
        "linear-gradient(135deg, #a855f7, #ec4899)",
        "linear-gradient(135deg, #06b6d4, #0ea5e9)",
        "linear-gradient(135deg, #8b5cf6, #4f46e5)",
      ];

      let currentColorIndex = 0;

      function changeGradient() {
        currentColorIndex = (currentColorIndex + 1) % colors.length;
        hexagon.style.background = colors[currentColorIndex];
      }

      // Change gradient every 1 second
      setInterval(changeGradient, 1000);
   
 
