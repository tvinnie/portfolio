// Project data
const projects = [
    {
        id: 1,
        title: "TechCorp Enterprise Platform",
        description: "Complete redesign of enterprise dashboard with advanced analytics and user management systems.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
        technologies: ["React", "TypeScript", "Tailwind CSS", "D3.js", "Node.js"],
        category: "Enterprise Software",
        year: "2024",
        duration: "6 months",
        team: "5 developers",
        liveUrl: "#",
        githubUrl: "#",
        stats: { users: "50K+", performance: "98%", satisfaction: "4.9/5" }
    },
    {
        id: 2,
        title: "FinanceFlow Mobile App",
        description: "Revolutionary fintech mobile application with AI-powered investment recommendations and real-time market analysis.",
        image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
        technologies: ["React Native", "Redux", "Firebase", "Python", "TensorFlow"],
        category: "FinTech Mobile",
        year: "2024",
        duration: "8 months",
        team: "8 developers",
        liveUrl: "#",
        githubUrl: "#",
        stats: { downloads: "100K+", rating: "4.8/5", transactions: "$2M+" }
    },
    {
        id: 3,
        title: "EcoMarket E-commerce",
        description: "Sustainable e-commerce platform with carbon footprint tracking and eco-friendly product recommendations.",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
        technologies: ["Next.js", "Shopify", "Stripe", "MongoDB", "Docker"],
        category: "E-commerce",
        year: "2023",
        duration: "4 months",
        team: "6 developers",
        liveUrl: "#",
        githubUrl: "#",
        stats: { revenue: "$500K+", conversion: "12.5%", products: "10K+" }
    },
    {
        id: 4,
        title: "MedCare Healthcare Portal",
        description: "HIPAA-compliant healthcare management system with telemedicine capabilities and patient data analytics.",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop",
        technologies: ["Vue.js", "Laravel", "MySQL", "WebRTC", "AWS"],
        category: "Healthcare",
        year: "2023",
        duration: "10 months",
        team: "12 developers",
        liveUrl: "#",
        githubUrl: "#",
        stats: { patients: "25K+", consultations: "100K+", uptime: "99.9%" }
    },
    {
        id: 5,
        title: "EduLearn Learning Platform",
        description: "Interactive online learning platform with AI-powered personalized learning paths and real-time collaboration tools.",
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
        technologies: ["Angular", "Express.js", "PostgreSQL", "Socket.io", "OpenAI"],
        category: "EdTech",
        year: "2023",
        duration: "7 months",
        team: "9 developers",
        liveUrl: "#",
        githubUrl: "#",
        stats: { students: "75K+", courses: "500+", completion: "89%" }
    },
    {
        id: 6,
        title: "TravelVibe Booking Platform",
        description: "Modern travel booking platform with immersive VR previews and AI-powered trip recommendations.",
        image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop",
        technologies: ["React", "Three.js", "Express", "MongoDB", "Stripe"],
        category: "Travel & Tourism",
        year: "2022",
        duration: "5 months",
        team: "7 developers",
        liveUrl: "#",
        githubUrl: "#",
        stats: { bookings: "30K+", destinations: "200+", satisfaction: "4.7/5" }
    }
];

// DOM elements
let activeProject = 0;
let isVisible = false;

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    initializeAnimations();
    renderProjects();
    animateSkills();
    setupScrollAnimations();
});

// Initialize entrance animations
function initializeAnimations() {
    setTimeout(() => {
        isVisible = true;
        const heroContent = document.querySelector('.hero-content');
        if (heroContent) {
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }
    }, 100);
}

// Render projects dynamically
function renderProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    if (!projectsGrid) return;

    projectsGrid.innerHTML = projects.map((project, index) => `
        <div class="project-card ${index === activeProject ? 'active' : ''}" 
             onclick="setActiveProject(${index})" 
             data-project-id="${project.id}">
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}" loading="lazy">
                <div class="project-overlay">
                    <button class="project-btn">
                        <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="m18 13 6-6-6-6"/>
                            <path d="m6 7 6 6-6 6"/>
                            <path d="m6 7 6-6 6 6"/>
                        </svg>
                        Live
                    </button>
                    <button class="project-btn">
                        <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="m22 13.29-3.33-10a1.42 1.42 0 0 0-1.32-1 1.42 1.42 0 0 0-1.32 1l-3.33 10a2 2 0 0 0 1.9 2.7h5.4a2 2 0 0 0 1.9-2.7z"/>
                            <path d="m6.89 6.89 1.4-1.4"/>
                            <path d="M2.89 13.89l1.4-1.4"/>
                            <path d="m6.89 17.11-1.4 1.4"/>
                            <path d="M2.89 10.11l1.4 1.4"/>
                        </svg>
                        Code
                    </button>
                </div>
            </div>
            <div class="project-content">
                <div class="project-header">
                    <div class="project-category">${project.category}</div>
                    <div class="project-year">${project.year}</div>
                </div>
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-technologies">
                    ${project.technologies.slice(0, 3).map(tech => 
                        `<span class="tech-badge">${tech}</span>`
                    ).join('')}
                    ${project.technologies.length > 3 ? 
                        `<span class="tech-badge">+${project.technologies.length - 3}</span>` : ''
                    }
                </div>

            </div>
        </div>
    `).join('');
}

// Set active project
function setActiveProject(index) {
    activeProject = index;
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, i) => {
        if (i === index) {
            card.classList.add('active');
        } else {
            card.classList.remove('active');
        }
    });
}

// Animate skill bars
function animateSkills() {
    const skills = document.querySelectorAll('.skill');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skill = entry.target;
                const level = skill.dataset.level;
                const progressBar = skill.querySelector('.skill-progress');
                
                setTimeout(() => {
                    progressBar.style.width = `${level}%`;
                }, 200);
                
                observer.unobserve(skill);
            }
        });
    }, {
        threshold: 0.5
    });
    
    skills.forEach(skill => {
        observer.observe(skill);
    });
}

// Setup scroll animations
function setupScrollAnimations() {
    const elements = document.querySelectorAll('.about-section, .projects-section, .achievements-section, .contact-section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    elements.forEach(element => {
        observer.observe(element);
    });
}

// Smooth scrolling for navigation
document.addEventListener('click', function(e) {
    if (e.target.matches('a[href^="#"]')) {
        e.preventDefault();
        const target = document.querySelector(e.target.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
});

// Add scroll-based header background
// window.addEventListener('scroll', function() {
//     const scrolled = window.pageYOffset;
//     const heroSection = document.querySelector('.hero-section');
    
//     if (heroSection) {
//         const parallax = scrolled * 0.5;
//         heroSection.style.transform = `translateY(${parallax}px)`;
//     }
// });

// Add loading states for images
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        
        img.addEventListener('error', function() {
            this.style.display = 'none';
        });
    });
});

// Mobile menu functionality (if needed for responsive design)
function toggleMobileMenu() {
    const mobileMenu = document.querySelector('.mobile-menu');
    if (mobileMenu) {
        mobileMenu.classList.toggle('active');
    }
}

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

const debouncedScroll = debounce(() => {
    // Handle scroll events here if needed
}, 16); // ~60fps

window.addEventListener('scroll', debouncedScroll);
