// Application data
const portfolioData = {
  "personalInfo": {
    "name": "Alex Rodriguez",
    "title": "Senior QA Automation Engineer",
    "experience": "5.5+ Years",
    "location": "San Francisco, CA",
    "email": "alex.rodriguez@email.com",
    "phone": "+1 (555) 123-4567",
    "summary": "Experienced QA Automation Engineer with 5.5+ years of expertise in designing and implementing comprehensive test automation frameworks. Specialized in web and mobile application testing using industry-leading tools and practices."
  },
  "skills": [
    {"name": "Java", "level": 90, "category": "Programming"},
    {"name": "Python", "level": 85, "category": "Programming"},
    {"name": "JavaScript", "level": 80, "category": "Programming"},
    {"name": "Selenium WebDriver", "level": 95, "category": "Automation"},
    {"name": "Appium", "level": 85, "category": "Automation"},
    {"name": "TestNG", "level": 90, "category": "Testing Framework"},
    {"name": "JUnit", "level": 88, "category": "Testing Framework"},
    {"name": "Rest Assured", "level": 92, "category": "API Testing"},
    {"name": "Postman", "level": 90, "category": "API Testing"},
    {"name": "Jenkins", "level": 85, "category": "CI/CD"},
    {"name": "Git", "level": 88, "category": "Version Control"},
    {"name": "JIRA", "level": 90, "category": "Project Management"},
    {"name": "Docker", "level": 75, "category": "DevOps"},
    {"name": "AWS", "level": 70, "category": "Cloud"}
  ],
  "experience": [
    {
      "company": "TechCorp Solutions",
      "position": "Senior QA Automation Engineer",
      "duration": "2022 - Present",
      "achievements": [
        "Led automation strategy for 3 major product releases",
        "Reduced manual testing effort by 60% through comprehensive automation",
        "Implemented CI/CD integration with 95% test success rate",
        "Mentored 4 junior QA engineers in automation best practices"
      ]
    },
    {
      "company": "Digital Innovations Inc",
      "position": "QA Automation Engineer",
      "duration": "2020 - 2022",
      "achievements": [
        "Developed mobile automation framework using Appium",
        "Created API testing suite with 500+ automated test cases",
        "Improved test execution time by 40% through parallel execution",
        "Collaborated with DevOps team to optimize testing pipeline"
      ]
    },
    {
      "company": "StartupTech Labs",
      "position": "Junior QA Automation Engineer",
      "duration": "2019 - 2020",
      "achievements": [
        "Built web automation framework from scratch using Selenium",
        "Automated regression testing for e-commerce platform",
        "Implemented data-driven testing approach",
        "Achieved 85% test coverage for critical user journeys"
      ]
    }
  ],
  "projects": [
    {
      "name": "E-commerce Test Automation Framework",
      "description": "Comprehensive automation framework for large-scale e-commerce platform testing",
      "technologies": ["Java", "Selenium", "TestNG", "Maven", "Jenkins"],
      "highlights": [
        "500+ automated test cases covering critical user journeys",
        "Parallel execution reducing test time by 60%",
        "Integration with CI/CD pipeline for continuous testing",
        "Detailed reporting with screenshots and logs"
      ]
    },
    {
      "name": "Mobile App Automation Suite",
      "description": "Cross-platform mobile testing framework for iOS and Android applications",
      "technologies": ["Appium", "Java", "JUnit", "Sauce Labs"],
      "highlights": [
        "Support for both native and hybrid mobile apps",
        "Cloud-based testing on 20+ device configurations",
        "Automated UI and functional testing scenarios",
        "Integration with bug tracking and test management tools"
      ]
    },
    {
      "name": "API Testing Framework",
      "description": "RESTful API testing framework with comprehensive validation and reporting",
      "technologies": ["Rest Assured", "Java", "TestNG", "JSON Schema"],
      "highlights": [
        "200+ API test cases with comprehensive validation",
        "Schema validation and response time monitoring",
        "Test data management and environment configuration",
        "Automated API documentation generation"
      ]
    }
  ],
  "translations": {
    "en": {
      "nav": {
        "home": "Home",
        "about": "About",
        "skills": "Skills",
        "experience": "Experience",
        "projects": "Projects",
        "contact": "Contact"
      },
      "hero": {
        "greeting": "Hello, I'm",
        "description": "Senior QA Automation Engineer with 5.5+ years of experience in designing and implementing comprehensive test automation solutions.",
        "cta": "View My Work",
        "downloadCV": "Download CV"
      },
      "about": {
        "title": "About Me",
        "description": "Passionate QA Automation Engineer with extensive experience in building robust testing frameworks and ensuring high-quality software delivery."
      },
      "skills": {
        "title": "Technical Skills",
        "description": "Proficient in various automation tools, programming languages, and testing methodologies."
      },
      "experience": {
        "title": "Professional Experience",
        "description": "5.5+ years of hands-on experience in QA automation across different industries and technologies."
      },
      "projects": {
        "title": "Featured Projects",
        "description": "Showcase of automation frameworks and testing solutions I've developed."
      },
      "contact": {
        "title": "Get In Touch",
        "description": "Let's discuss how I can contribute to your testing and quality assurance needs.",
        "form": {
          "name": "Your Name",
          "email": "Your Email",
          "message": "Your Message",
          "send": "Send Message"
        }
      }
    },
    "es": {
      "nav": {
        "home": "Inicio",
        "about": "Acerca de",
        "skills": "Habilidades",
        "experience": "Experiencia",
        "projects": "Proyectos",
        "contact": "Contacto"
      },
      "hero": {
        "greeting": "Hola, soy",
        "description": "Ingeniero Senior de Automatización QA con más de 5.5 años de experiencia en el diseño e implementación de soluciones integrales de automatización de pruebas.",
        "cta": "Ver Mi Trabajo",
        "downloadCV": "Descargar CV"
      },
      "about": {
        "title": "Acerca de Mí",
        "description": "Ingeniero de Automatización QA apasionado con amplia experiencia en la construcción de marcos de prueba robustos y garantizando la entrega de software de alta calidad."
      },
      "skills": {
        "title": "Habilidades Técnicas",
        "description": "Competente en varias herramientas de automatización, lenguajes de programación y metodologías de prueba."
      },
      "experience": {
        "title": "Experiencia Profesional",
        "description": "Más de 5.5 años de experiencia práctica en automatización QA en diferentes industrias y tecnologías."
      },
      "projects": {
        "title": "Proyectos Destacados",
        "description": "Muestra de marcos de automatización y soluciones de prueba que he desarrollado."
      },
      "contact": {
        "title": "Ponte en Contacto",
        "description": "Hablemos sobre cómo puedo contribuir a tus necesidades de pruebas y garantía de calidad.",
        "form": {
          "name": "Tu Nombre",
          "email": "Tu Email",
          "message": "Tu Mensaje",
          "send": "Enviar Mensaje"
        }
      }
    }
  }
};

// Global variables
let currentLanguage = 'en';
let currentTheme = 'light';

// Initialize application when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    console.log('Portfolio app initializing...');
    
    // Initialize all features
    initializeTheme();
    initializeLanguage();
    initializeNavigation();
    initializeTimezone();
    populateSkills();
    populateExperience();
    populateProjects();
    initializeAnimations();
    initializeContactForm();
    
    // Set up event listeners
    setupEventListeners();
    
    console.log('Portfolio app initialized successfully');
});

// Set up all event listeners
function setupEventListeners() {
    const themeToggle = document.getElementById('theme-toggle');
    const languageSelector = document.getElementById('language-selector');
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    // Theme toggle
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
        console.log('Theme toggle listener added');
    }
    
    // Language selector
    if (languageSelector) {
        languageSelector.addEventListener('change', changeLanguage);
        console.log('Language selector listener added');
    }
    
    // Mobile navigation toggle
    if (navToggle) {
        navToggle.addEventListener('click', toggleNavMenu);
        console.log('Nav toggle listener added');
    }
    
    // Close mobile menu when clicking on nav links
    document.querySelectorAll('.nav__link').forEach(link => {
        link.addEventListener('click', (e) => {
            if (navMenu && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
            }
        });
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerHeight = document.querySelector('.header')?.offsetHeight || 80;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Keyboard navigation support
    document.addEventListener('keydown', handleKeyboardNavigation);
}

// Theme management
function initializeTheme() {
    try {
        const savedTheme = localStorage.getItem('portfolio-theme') || 'light';
        currentTheme = savedTheme;
        applyTheme(currentTheme);
        updateThemeToggle();
        console.log(`Theme initialized: ${currentTheme}`);
    } catch (error) {
        console.error('Error initializing theme:', error);
        currentTheme = 'light';
        applyTheme('light');
    }
}

function toggleTheme() {
    console.log('Theme toggle clicked');
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    applyTheme(currentTheme);
    
    try {
        localStorage.setItem('portfolio-theme', currentTheme);
    } catch (error) {
        console.error('Error saving theme to localStorage:', error);
    }
    
    updateThemeToggle();
    console.log(`Theme switched to: ${currentTheme}`);
}

function applyTheme(theme) {
    document.documentElement.setAttribute('data-color-scheme', theme);
    document.body.className = theme === 'dark' ? 'dark-theme' : 'light-theme';
}

function updateThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        const icon = themeToggle.querySelector('.theme-toggle__icon');
        if (icon) {
            icon.textContent = currentTheme === 'light' ? '🌙' : '☀️';
            icon.style.transform = 'rotate(360deg)';
            setTimeout(() => {
                icon.style.transform = 'rotate(0deg)';
            }, 300);
        }
    }
}

// Language management
function initializeLanguage() {
    try {
        const savedLanguage = localStorage.getItem('portfolio-language') || 'en';
        currentLanguage = savedLanguage;
        const languageSelector = document.getElementById('language-selector');
        if (languageSelector) {
            languageSelector.value = currentLanguage;
        }
        updateLanguage();
        console.log(`Language initialized: ${currentLanguage}`);
    } catch (error) {
        console.error('Error initializing language:', error);
        currentLanguage = 'en';
    }
}

function changeLanguage(event) {
    console.log('Language change triggered');
    currentLanguage = event.target.value;
    
    try {
        localStorage.setItem('portfolio-language', currentLanguage);
    } catch (error) {
        console.error('Error saving language to localStorage:', error);
    }
    
    updateLanguage();
    console.log(`Language changed to: ${currentLanguage}`);
}

function updateLanguage() {
    const translations = portfolioData.translations[currentLanguage];
    if (!translations) {
        console.error(`No translations found for language: ${currentLanguage}`);
        return;
    }
    
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        const translation = getNestedTranslation(translations, key);
        if (translation) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translation;
            } else {
                element.textContent = translation;
            }
        }
    });
    
    // Update HTML lang attribute
    document.documentElement.lang = currentLanguage;
}

function getNestedTranslation(obj, path) {
    return path.split('.').reduce((current, key) => current && current[key], obj);
}

// Navigation
function initializeNavigation() {
    // Highlight active section on scroll
    window.addEventListener('scroll', debounce(() => {
        const sections = document.querySelectorAll('section[id]');
        const scrollPosition = window.scrollY + 150;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`a[href="#${sectionId}"]`);
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                document.querySelectorAll('.nav__link').forEach(link => {
                    link.classList.remove('active');
                });
                if (navLink) {
                    navLink.classList.add('active');
                }
            }
        });
    }, 100));
    
    console.log('Navigation initialized');
}

function toggleNavMenu() {
    console.log('Nav menu toggle clicked');
    const navMenu = document.getElementById('nav-menu');
    const navToggle = document.getElementById('nav-toggle');
    
    if (navMenu) {
        navMenu.classList.toggle('active');
        
        // Animate hamburger menu
        if (navToggle) {
            const hamburger = navToggle.querySelector('.nav__hamburger');
            if (hamburger) {
                hamburger.style.transform = navMenu.classList.contains('active') ? 'rotate(45deg)' : 'rotate(0deg)';
            }
        }
        
        console.log('Nav menu toggled:', navMenu.classList.contains('active') ? 'open' : 'closed');
    }
}

// Timezone functionality
function initializeTimezone() {
    updateTimezone();
    // Update every minute
    setInterval(updateTimezone, 60000);
    console.log('Timezone display initialized');
}

function updateTimezone() {
    const timezoneDisplay = document.getElementById('timezone-display');
    if (!timezoneDisplay) return;
    
    try {
        const now = new Date();
        const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        const timeString = now.toLocaleTimeString(currentLanguage === 'es' ? 'es-ES' : 'en-US', {
            timeZone: timezone,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
        
        const label = currentLanguage === 'es' ? 'Hora actual en' : 'Current time in';
        timezoneDisplay.textContent = `${label} ${timezone}: ${timeString}`;
    } catch (error) {
        console.error('Error updating timezone:', error);
        timezoneDisplay.textContent = 'Timezone unavailable';
    }
}

// Populate skills
function populateSkills() {
    const skillsGrid = document.getElementById('skills-grid');
    if (!skillsGrid) return;
    
    const skillsByCategory = portfolioData.skills.reduce((acc, skill) => {
        if (!acc[skill.category]) {
            acc[skill.category] = [];
        }
        acc[skill.category].push(skill);
        return acc;
    }, {});
    
    skillsGrid.innerHTML = '';
    
    Object.entries(skillsByCategory).forEach(([category, skills]) => {
        const categoryElement = document.createElement('div');
        categoryElement.className = 'skill-category';
        
        const categoryTitle = document.createElement('h3');
        categoryTitle.textContent = category;
        categoryElement.appendChild(categoryTitle);
        
        skills.forEach(skill => {
            const skillItem = document.createElement('div');
            skillItem.className = 'skill-item';
            
            skillItem.innerHTML = `
                <div class="skill-header">
                    <span class="skill-name">${skill.name}</span>
                    <span class="skill-level">${skill.level}%</span>
                </div>
                <div class="skill-bar">
                    <div class="skill-progress" data-level="${skill.level}" style="width: 0%"></div>
                </div>
            `;
            
            categoryElement.appendChild(skillItem);
        });
        
        skillsGrid.appendChild(categoryElement);
    });
    
    // Animate skill bars on scroll
    animateSkillBars();
    console.log('Skills populated');
}

function animateSkillBars() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBars = entry.target.querySelectorAll('.skill-progress');
                progressBars.forEach(bar => {
                    const level = bar.getAttribute('data-level');
                    setTimeout(() => {
                        bar.style.width = `${level}%`;
                    }, 200);
                });
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.skill-category').forEach(category => {
        observer.observe(category);
    });
}

// Populate experience
function populateExperience() {
    const timeline = document.getElementById('experience-timeline');
    if (!timeline) return;
    
    timeline.innerHTML = '';
    
    portfolioData.experience.forEach((exp, index) => {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item';
        
        timelineItem.innerHTML = `
            <div class="timeline-content">
                <div class="timeline-header">
                    <h3 class="timeline-company">${exp.company}</h3>
                    <h4 class="timeline-position">${exp.position}</h4>
                    <p class="timeline-duration">${exp.duration}</p>
                </div>
                <ul class="timeline-achievements">
                    ${exp.achievements.map(achievement => `<li>${achievement}</li>`).join('')}
                </ul>
            </div>
        `;
        
        timeline.appendChild(timelineItem);
    });
    
    console.log('Experience populated');
}

// Populate projects
function populateProjects() {
    const projectsGrid = document.getElementById('projects-grid');
    if (!projectsGrid) return;
    
    projectsGrid.innerHTML = '';
    
    portfolioData.projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        
        projectCard.innerHTML = `
            <div class="project-header">
                <h3 class="project-name">${project.name}</h3>
                <p class="project-description">${project.description}</p>
            </div>
            <div class="project-body">
                <div class="project-technologies">
                    ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
                <ul class="project-highlights">
                    ${project.highlights.map(highlight => `<li>${highlight}</li>`).join('')}
                </ul>
            </div>
        `;
        
        projectsGrid.appendChild(projectCard);
    });
    
    console.log('Projects populated');
}

// Initialize animations
function initializeAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    // Observe elements for animation
    document.querySelectorAll('.timeline-item, .project-card, .skill-category, .info-card').forEach(el => {
        observer.observe(el);
    });
    
    console.log('Animations initialized');
}

// Contact form
function initializeContactForm() {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactSubmit);
        console.log('Contact form initialized');
    }
}

function handleContactSubmit(event) {
    event.preventDefault();
    console.log('Contact form submitted');
    
    const name = document.getElementById('name')?.value || '';
    const email = document.getElementById('email')?.value || '';
    const message = document.getElementById('message')?.value || '';
    
    // Simple validation
    if (!name.trim() || !email.trim() || !message.trim()) {
        showNotification('Please fill in all fields', 'error');
        return;
    }
    
    if (!isValidEmail(email)) {
        showNotification('Please enter a valid email address', 'error');
        return;
    }
    
    // Simulate form submission
    const submitButton = event.target.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    
    submitButton.textContent = 'Sending...';
    submitButton.disabled = true;
    
    setTimeout(() => {
        showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
        event.target.reset();
        submitButton.textContent = originalText;
        submitButton.disabled = false;
    }, 2000);
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showNotification(message, type = 'info') {
    console.log(`Showing notification: ${message} (${type})`);
    
    const notification = document.createElement('div');
    notification.className = `notification notification--${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--color-surface);
        color: var(--color-text);
        padding: 16px 24px;
        border-radius: 8px;
        border-left: 4px solid var(--color-${type === 'error' ? 'error' : 'success'});
        box-shadow: var(--shadow-lg);
        z-index: 10000;
        animation: slideInFromRight 0.3s ease-out;
        max-width: 300px;
        font-size: 14px;
        line-height: 1.4;
    `;
    
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutToRight 0.3s ease-in forwards';
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 5000);
}

// Keyboard navigation support
function handleKeyboardNavigation(event) {
    const activeElement = document.activeElement;
    
    // Toggle mobile menu with Enter key when nav toggle is focused
    if (event.key === 'Enter' && activeElement && activeElement.id === 'nav-toggle') {
        toggleNavMenu();
    }
    
    // Toggle theme with Enter key when theme toggle is focused
    if (event.key === 'Enter' && activeElement && activeElement.id === 'theme-toggle') {
        toggleTheme();
    }
}

// Performance optimization: Debounce function
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

// Add notification animations to CSS dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInFromRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutToRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    .notification {
        pointer-events: auto;
        cursor: pointer;
    }
`;
document.head.appendChild(style);