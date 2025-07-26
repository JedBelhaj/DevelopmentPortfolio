// Portfolio Configuration
const portfolioData = {
    // Array of project links - Add your website URLs here
    projects: [
        {
            title: "Creating UI Section for the Home Page Using TailwindCSS",
            description: "Developed responsive UI sections for NextGen Coding using TailwindCSS with modern design and cross-device compatibility.",
            url: "https://tubular-marigold-cc0618.netlify.app/src/pricing_page.html",
            thumbnail: "https://tubular-marigold-cc0618.netlify.app/src/pricing_page.html",
            technologies: ["HTML", "CSS", "TailwindCSS", "JS"],
            icon: "fas fa-shopping-cart"
        },
        {
            title: "Replicating a Bootstrap Website to help students learn Bootstrap",
            description: "Created an educational website with step-by-step tutorials to help students learn Bootstrap framework effectively.",
            url: "https://keen-faun-8e84a0.netlify.app",
            thumbnail: "https://keen-faun-8e84a0.netlify.app",
            technologies: ["HTML", "CSS", "Bootstrap", "JS"],
            icon: "fas fa-tasks"
        },
        {
            title: "Replicating a Website to help people learn TailwindCSS",
            description: "Developed a tutorial website with step-by-step guides to teach TailwindCSS fundamentals through practical examples.",
            url: "https://subtle-boba-394905.netlify.app",
            thumbnail: "https://subtle-boba-394905.netlify.app",
            technologies: ["HTML", "CSS", "TailwindCSS", "JS"],
            icon: "fas fa-cloud-sun"
        },
        {
            title: "Multi-language website for a Transit & Import/export Company",
            description: "Built a comprehensive multi-language website for a transit company using Bootstrap, featuring customs clearance and logistics services.",
            url: "https://warm-monstera-11c463.netlify.app/",
            thumbnail: "https://warm-monstera-11c463.netlify.app/",
            technologies: ["HTML", "CSS", "Bootstrap", "JS"],
            icon: "fas fa-palette"
        },
        {
            title: "Product Showcase Website for Client",
            description: "A modern product showcase website featuring responsive design and interactive elements to highlight client's products effectively.",
            url: "https://wondrous-treacle-059bd7.netlify.app/",
            thumbnail: "https://wondrous-treacle-059bd7.netlify.app/",
            technologies: ["HTML", "JQuery", "TailwindCSS"],
            icon: "fas fa-blog"
        },
        {
            title: "Product Showcase Website For Client",
            description: "A captivating showcase website for a date selling company featuring elegant design and smooth user experience.",
            url: "https://lighthearted-beijinho-d61311.netlify.app/",
            thumbnail: "https://lighthearted-beijinho-d61311.netlify.app/",
            technologies: ["HTML", "JQuery", "TailwindCSS"],
            icon: "fas fa-home"
        },
        {
            title: "CaseBattle - Full Stack Gaming Platform",
            description: "A real-time case opening battle platform built with React and TailwindCSS frontend, Express.js backend, and Socket.IO for live multiplayer gameplay.",
            url: "https://casebattle.netlify.app/",
            thumbnail: "https://casebattle.netlify.app/",
            technologies: ["React", "TailwindCSS", "Express.js", "Socket.IO", "Node.js"],
            icon: "fas fa-gamepad"
        }
    ]
};

// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const projectsGrid = document.getElementById('projects-grid');
const modal = document.getElementById('project-modal');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const modalIframe = document.getElementById('project-iframe');
const modalLink = document.getElementById('modal-link');
const closeModal = document.querySelector('.close');

// Initialize the portfolio
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    generateProjects();
    initializeModal();
    initializeAnimations();
    initializeContactForm();
});

// Navigation functionality
function initializeNavigation() {
    // Mobile menu toggle
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Change navbar background on scroll
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    });
}

// Generate project cards from the projects array
function generateProjects() {
    projectsGrid.innerHTML = '';
    
    portfolioData.projects.forEach((project, index) => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.style.animationDelay = `${index * 0.1}s`;
        
        projectCard.innerHTML = `
            <div class="project-image" style="background-image: linear-gradient(rgba(102, 126, 234, 0.3), rgba(118, 75, 162, 0.3)), url('https://mini.s-shot.ru/1024x768/JPEG/1024/Z100/?${encodeURIComponent(project.thumbnail)}')">
                <div class="project-overlay">
                    <span class="view-text">Click to View</span>
                </div>
            </div>
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tech">
                    ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
            </div>
        `;
        
        // Add click event to open modal
        projectCard.addEventListener('click', () => {
            openProjectModal(project);
        });
        
        projectsGrid.appendChild(projectCard);
    });
    
    // Add animation class to trigger entrance animations
    setTimeout(() => {
        document.querySelectorAll('.project-card').forEach(card => {
            card.style.animation = 'slideInUp 0.6s ease forwards';
        });
    }, 100);
}

// Modal functionality
function initializeModal() {
    // Close modal when clicking the X
    closeModal.addEventListener('click', closeProjectModal);
    
    // Close modal when clicking outside of it
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeProjectModal();
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeProjectModal();
        }
    });
}

function openProjectModal(project) {
    modalTitle.textContent = project.title;
    modalDescription.textContent = project.description;
    modalIframe.src = project.url;
    modalLink.href = project.url;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
    modal.style.display = 'none';
    modalIframe.src = '';
    document.body.style.overflow = 'auto';
}

// Scroll animations
function initializeAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'slideInUp 0.6s ease forwards';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.skill-item, .stat-item, .contact-item');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        observer.observe(el);
    });
    
    // Counter animation for stats
    const statNumbers = document.querySelectorAll('.stat-number');
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                statsObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    statNumbers.forEach(stat => {
        statsObserver.observe(stat);
    });
}

function animateCounter(element) {
    const text = element.textContent;
    const number = parseInt(text.replace(/\D/g, ''));
    const suffix = text.replace(/\d/g, '');
    const duration = 2000;
    const increment = number / (duration / 16);
    let current = 0;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= number) {
            current = number;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current) + suffix;
    }, 16);
}

// Contact form functionality
function initializeContactForm() {
    const contactForm = document.querySelector('.contact-form');
    
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');
        
        // Here you would typically send the data to your server
        // For now, we'll just show a success message
        showNotification('Thank you for your message! I\'ll get back to you soon.', 'success');
        
        // Reset form
        contactForm.reset();
    });
}

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#4CAF50' : '#2196F3'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 5px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 3000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Animate out and remove
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 4000);
}

// Typing animation for hero text
function initializeTypingAnimation() {
    const typingText = document.querySelector('.typing-text');
    const texts = ['Web Developer', 'UI/UX Designer', 'Frontend Expert', 'Problem Solver'];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    function typeText() {
        const currentText = texts[textIndex];
        
        if (isDeleting) {
            typingText.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingText.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
        }
        
        let typeSpeed = isDeleting ? 50 : 100;
        
        if (!isDeleting && charIndex === currentText.length) {
            typeSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            typeSpeed = 500;
        }
        
        setTimeout(typeText, typeSpeed);
    }
    
    // Start typing animation
    setTimeout(typeText, 1000);
}

// Initialize typing animation when page loads
document.addEventListener('DOMContentLoaded', initializeTypingAnimation);

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroShape = document.querySelector('.hero-shape');
    const scrollIndicator = document.querySelector('.scroll-indicator');
    
    if (heroShape) {
        heroShape.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
    
    if (scrollIndicator) {
        scrollIndicator.style.opacity = Math.max(0, 1 - scrolled / 300);
    }
});

// Add CSS for slideInUp animation
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);
