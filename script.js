/**
 * Jeverly Shane B. Capote - Curriculum Vitae Interactive Engine
 * Handles theme switching, print optimizations, scrollspy, interactive project modal,
 * animated skill progress bars, and clipboard feedback.
 */

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initScrollSpy();
    initSkillBars();
    initProjectFilter();
    initProjectModal();
    initCopyButtons();
    initMobileNav();
});

/* ==========================================
   1. Theme Toggle (Dark / Light Mode)
   ========================================== */
function initTheme() {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const themeText = document.getElementById('theme-text');
    
    // Check saved preference or system preference
    const savedTheme = localStorage.getItem('cv-theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = savedTheme || (prefersDark ? 'dark' : 'dark'); // Default to sleek dark mode
    
    applyTheme(initialTheme);

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            applyTheme(newTheme);
            localStorage.setItem('cv-theme', newTheme);
        });
    }

    function applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        if (themeIcon && themeText) {
            if (theme === 'dark') {
                themeIcon.innerHTML = `<path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />`;
                themeText.textContent = 'Light Mode';
            } else {
                themeIcon.innerHTML = `<path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />`;
                themeText.textContent = 'Dark Mode';
            }
        }
    }
}

/* ==========================================
   2. ScrollSpy & Smooth Nav Highlighting
   ========================================== */
function initScrollSpy() {
    const sections = document.querySelectorAll('section[id], header[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', () => {
        let currentSectionId = '';
        const scrollPosition = window.scrollY + 140;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
            }
        });
    });
}

/* ==========================================
   3. Animated Skill Progress Bars
   ========================================== */
function initSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress-bar');
    if (!skillBars.length) return;

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                const percent = bar.getAttribute('data-percent') || '0';
                bar.style.width = percent + '%';
                obs.unobserve(bar);
            }
        });
    }, { threshold: 0.2 });

    skillBars.forEach(bar => observer.observe(bar));
}

/* ==========================================
   4. Project Category Filter
   ========================================== */
function initProjectFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    if (!filterButtons.length) return;

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const category = btn.getAttribute('data-filter');

            projectCards.forEach(card => {
                const cardCat = card.getAttribute('data-category');
                if (category === 'all' || cardCat.includes(category)) {
                    card.style.display = 'flex';
                    card.style.opacity = '0';
                    setTimeout(() => {
                        card.style.opacity = '1';
                    }, 50);
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

/* ==========================================
   5. Interactive Project & Image Modal
   ========================================== */
function initProjectModal() {
    const modal = document.getElementById('preview-modal');
    const modalImg = document.getElementById('modal-img');
    const modalTitle = document.getElementById('modal-title');
    const modalDesc = document.getElementById('modal-desc');
    const modalClose = document.getElementById('modal-close');
    const modalBackdrop = document.getElementById('modal-backdrop');

    if (!modal) return;

    const previewTriggers = document.querySelectorAll('[data-preview-img]');
    previewTriggers.forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            e.preventDefault();
            const imgSrc = trigger.getAttribute('data-preview-img');
            const title = trigger.getAttribute('data-preview-title') || 'Project Preview';
            const desc = trigger.getAttribute('data-preview-desc') || '';

            modalImg.src = imgSrc;
            modalTitle.textContent = title;
            modalDesc.textContent = desc;

            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });

    const closeModal = () => {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    };

    if (modalClose) modalClose.addEventListener('click', closeModal);
    if (modalBackdrop) modalBackdrop.addEventListener('click', closeModal);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
}

/* ==========================================
   6. Click-to-Copy with Sleek Toast Feedback
   ========================================== */
function initCopyButtons() {
    const copyTriggers = document.querySelectorAll('[data-copy-text]');
    const toast = document.getElementById('toast');

    if (!copyTriggers.length || !toast) return;

    copyTriggers.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const textToCopy = btn.getAttribute('data-copy-text');
            const label = btn.getAttribute('data-copy-label') || 'Information';

            navigator.clipboard.writeText(textToCopy).then(() => {
                showToast(`✓ Copied ${label} to clipboard!`);
            }).catch(() => {
                showToast(`Copied: ${textToCopy}`);
            });
        });
    });

    function showToast(message) {
        toast.textContent = message;
        toast.classList.add('show');
        clearTimeout(toast.timeoutId);
        toast.timeoutId = setTimeout(() => {
            toast.classList.remove('show');
        }, 2800);
    }
}

/* ==========================================
   7. Mobile Navigation Toggle
   ========================================== */
function initMobileNav() {
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-nav-menu');
    const mobileLinks = document.querySelectorAll('.mobile-nav-link');

    if (!mobileBtn || !mobileMenu) return;

    mobileBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        mobileBtn.classList.toggle('open');
    });

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            mobileBtn.classList.remove('open');
        });
    });
}
