
const menuToggle = document.getElementById('mobile-menu');
const navMenu = document.getElementById('nav-menu');

if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show');
    });
}


const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function updateActiveLink() {
    let current = '';
    const scrollPos = window.scrollY + 150;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        const hrefAttr = link.getAttribute('href');
        if (hrefAttr && hrefAttr.startsWith('#')) {
            const href = hrefAttr.substring(1);
            if (href === current) {
                link.classList.add('active');
            }
        }
    });
}

window.addEventListener('scroll', updateActiveLink);
window.addEventListener('load', updateActiveLink);

const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const nameValue = document.getElementById('name').value;
     
        alert(`Thank you, ${nameValue}! Your message has been sent. We'll reply soon.`);
        contactForm.reset();
    });
}


const modal = document.getElementById('appointmentModal');
const appointBtn = document.getElementById('appointmentBtn');
const closeModal = document.querySelector('.close-modal');

if (appointBtn && modal) {
    appointBtn.addEventListener('click', (e) => {
        e.preventDefault();
        modal.style.display = 'flex';
    });
}

if (closeModal && modal) {
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });
}

window.addEventListener('click', (e) => {
    if (modal && e.target === modal) {
        modal.style.display = 'none';
    }
});

const modalForm = document.getElementById('modalAppointmentForm');
if (modalForm) {
    modalForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const modalName = document.getElementById('modalName').value;
   
        alert('Appointment requested for ${modalName}. We will contact you soon.');
        modal.style.display = 'none';
        modalForm.reset();
    });
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId === "#" || targetId === "") return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            e.preventDefault();
            targetElement.scrollIntoView({ behavior: 'smooth' });
            
            if (navMenu && navMenu.classList.contains('show')) {
                navMenu.classList.remove('show');
            }
        }
    });
});