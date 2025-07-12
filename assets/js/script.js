// Project data
const projects = [
    {
        id: 1,
        title: "Childfund Kenya ",
        description: "Spearheaded the website redesign with a strong focus on modern design principles, responsive development, and the integration of advanced analytics for improved user insights.",
        image: "/assets/img/childfund_kenya.jpg",
        technologies: ["Wordpress", "Pods","ACF", "SQL", "JS", "PHP"],
        category: "Design | Development | Analytics",
        duration: "6 months",
        team: "4 developers",
        liveUrl: "https://childfundkenya.org/",
        // githubUrl: "#",
        // stats: { users: "50K+", performance: "98%", satisfaction: "4.9/5" }
    },
    {
        id: 2,
        title: "Kimisitu DT Sacco ",
        description: "Engineered backend architecture improvements, implemented advanced analytics tools, and integrated key external platforms to enhance data flow and system interoperability.",
        image: "/home/kremlin/Music/lab/portfolio/assets/img/kimisitu_sacco.jpg",
        technologies: ["Wordpress", "Pods","ACF", "SQL", "JS", "PHP"],
        category: "Backend Development | Analytics | Integration",
        duration: "7 months",
        team: "4 developers",
        liveUrl: "https://www.kimisitusacco.or.ke/",
        // githubUrl: "#",
        // stats: { downloads: "100K+", rating: "4.8/5", transactions: "$2M+" }
    },
    {
        id: 3,
        title: "Mhasibu DT Sacco Limited ",
        description: "Spearheaded the website redesign with a strong focus on modern design principles, responsive development, and the integration of advanced analytics for improved user insights.",
        image: "/home/kremlin/Music/lab/portfolio/assets/img/mhasibu_sacco.jpg",
        technologies: ["Wordpress", "Integration", "SQL", "JS", "PHP"],
        category: "Design | Development | Analytics",
        duration: "7 months",
        team: "4 developers",
        liveUrl: "https://www.mhasibusacco.com/",
        // githubUrl: "#",
        // stats: { revenue: "$500K+", conversion: "12.5%", products: "10K+" }
    },
    {
        id: 4,
        title: "H YOUNG & CO (E.A) LTD ",
        description: "Spearheaded the website redesign with a strong focus on modern design principles, responsive development, and the integration of advanced analytics for improved user insights.",
        image: "/home/kremlin/Music/lab/portfolio/assets/img/hyoung.jpg",
        technologies: ["Wordpress", "Integration", "SQL", "JS", "PHP"],
        category: "Design | Development | Analytics",
        duration: "7 months",
        team: "3 developers",
        liveUrl: "https://hyoung.com/",
        // githubUrl: "#",
        // stats: { patients: "25K+", consultations: "100K+", uptime: "99.9%" }
    },
    {
        id: 5,
        title: "Karen Roses ",
        description: "Spearheaded the website redesign with a strong focus on modern design principles, responsive development, and the integration of advanced analytics for improved user insights.",
        image: "/home/kremlin/Music/lab/portfolio/assets/img/karen_roses.jpg",
        technologies: ["Wordpress", "Integration", "SQL", "JS", "PHP"],
        category: "Design | Development | Analytics",
        duration: "7 months",
        team: "3 developers",
        liveUrl: "https://www.karenroses.com/",
        // githubUrl: "#",
        // stats: { students: "75K+", courses: "500+", completion: "89%" }
    },
    {
        id: 6,
        title: "Centon Kenya ",
        description: "Executed a full website redesign encompassing clean, user-centric design, scalable development, and seamless integration with internal tools and external systems.",
        image: "/home/kremlin/Music/lab/portfolio/assets/img/centon_kenya.jpg",
        technologies: ["Wordpress", "Integration", "SQL", "JS", "PHP"],
        category: "Design | Development | Integration",
        duration: "7 months",
        team: "3 developers",
        liveUrl: "https://www.centon.co.ke/",
        // githubUrl: "#",
        // stats: { bookings: "30K+", destinations: "200+", satisfaction: "4.7/5" }
    },
        {
        id: 7,
        title: "Brandstaun Consulting ",
        description: "Led the end-to-end redesign of the enterprise website, including UI/UX design, full-stack development, third-party system integration, and ongoing support to ensure performance and reliability.",
        image: "/home/kremlin/Music/lab/portfolio/assets/img/brandstaun.jpg",
        technologies: ["Wordpress", "Integration", "SQL", "JS", "PHP"],
        category: "Design | Development | Integration | Analytics | Suppport",
        duration: "2 months",
        team: "3 developers",
        liveUrl: "#",
        // githubUrl: "#",
        // stats: { bookings: "30K+", destinations: "200+", satisfaction: "4.7/5" }
    },
        {
        id: 8,
        title: "Adventist University of Africa",
        description: "Delivered a complete website overhaul from design to deployment, focusing on a refined user interface and responsive front-end development for optimal performance.",
        image: "/home/kremlin/Music/lab/portfolio/assets/img/aua.jpg",
        technologies: ["Wordpress", "Integration", "SQL", "JS", "PHP"],
        category: "Design | Development",
        duration: "7 months",
        team: "3 developers",
        liveUrl: "https://www.aua.ac.ke/",
        // githubUrl: "#",
        // stats: { bookings: "30K+", destinations: "200+", satisfaction: "4.7/5" }
    },
        {
        id: 9,
        title: "Orchidoholics",
        description: "Reimagined the website with a focus on intuitive design and robust development, including eCommerce capabilities to streamline digital transactions and user engagement.",
        image: "/home/kremlin/Music/lab/portfolio/assets/img/orchids.jpg",
        technologies: ["Wordpress", "Integration", "SQL", "JS", "PHP"],
        category: "Design | Development | Ecommerce",
        duration: "7 months",
        team: "3 developers",
        liveUrl: "https://www.orchidoholics.com/",
        // githubUrl: "#",
        // stats: { bookings: "30K+", destinations: "200+", satisfaction: "4.7/5" }
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
                <a href="${project.liveUrl}" target="_blank">
                    <button class="project-btn">
                        <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="m18 13 6-6-6-6"/>
                            <path d="m6 7 6 6-6 6"/>
                            <path d="m6 7 6-6 6 6"/>
                        </svg>
                         Live
                    </button>
                    </a>

                </div>
            </div>
            <div class="project-content">
                <div class="project-header">
                    <div class="project-category">${project.category}</div>
                  
                </div>
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-technologies">
                    ${project.technologies.slice(0, 5).map(tech => 
                        `<span class="tech-badge">${tech}</span>`
                    ).join('')}
                    ${project.technologies.length > 5 ? 
                        `<span class="tech-badge">+${project.technologies.length - 5}</span>` : ''
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
