// Hostel Management System - Main JavaScript File

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

// Initialize Application
function initializeApp() {
    // Load dynamic content
    loadRooms();
    loadFacilities();
    
    // Setup event listeners
    setupNavigationEvents();
    setupModalEvents();
    setupFormEvents();
    setupScrollEvents();
    setupAnimations();
}

// ============================================
// NAVIGATION EVENTS
// ============================================
function setupNavigationEvents() {
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Mobile menu toggle
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
    
    // Smooth scroll for nav links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
                navMenu.classList.remove('active');
            }
        });
    });
    
    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        const navbar = document.getElementById('navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// ============================================
// MODAL EVENTS
// ============================================
function setupModalEvents() {
    const loginBtn = document.getElementById('loginBtn');
    const adminBtn = document.getElementById('adminBtn');
    const loginModal = document.getElementById('loginModal');
    const adminModal = document.getElementById('adminModal');
    const closeModal = document.getElementById('closeModal');
    const closeAdminModal = document.getElementById('closeAdminModal');
    
    // Open student login modal
    loginBtn.addEventListener('click', () => {
        loginModal.classList.add('active');
    });
    
    // Open admin login modal
    adminBtn.addEventListener('click', () => {
        adminModal.classList.add('active');
    });
    
    // Close modals
    closeModal.addEventListener('click', () => {
        loginModal.classList.remove('active');
    });
    
    closeAdminModal.addEventListener('click', () => {
        adminModal.classList.remove('active');
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === loginModal) {
            loginModal.classList.remove('active');
        }
        if (e.target === adminModal) {
            adminModal.classList.remove('active');
        }
    });
}

// ============================================
// FORM EVENTS
// ============================================
function setupFormEvents() {
    const loginForm = document.getElementById('loginForm');
    const adminLoginForm = document.getElementById('adminLoginForm');
    const contactForm = document.getElementById('contactForm');
    const applyBtn = document.getElementById('applyBtn');
    
    // Student login
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const rollNum = loginForm.querySelector('input[type="text"]').value;
        const password = loginForm.querySelector('input[type="password"]').value;
        
        // Simulate login
        alert(`Login attempted for roll number: ${rollNum}`);
        // In real app, validate against database
        document.getElementById('loginModal').classList.remove('active');
    });
    
    // Admin login
    adminLoginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const adminId = adminLoginForm.querySelector('input[type="text"]').value;
        const password = adminLoginForm.querySelector('input[type="password"]').value;
        
        // Simulate admin login
        if (adminId === 'admin' && password === 'admin123') {
            alert('Admin login successful!');
            // Redirect to admin dashboard
            window.location.href = 'admin-dashboard.html';
        } else {
            alert('Invalid credentials!');
        }
        document.getElementById('adminModal').classList.remove('active');
    });
    
    // Contact form
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    });
    
    // Apply button
    applyBtn.addEventListener('click', () => {
        alert('Redirecting to application form...');
        // In real app, redirect to application page
    });
}

// ============================================
// SCROLL EVENTS
// ============================================
function setupScrollEvents() {
    const scrollTopBtn = document.getElementById('scrollTop');
    
    // Show/hide scroll to top button
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    });
    
    // Scroll to top
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ============================================
// ANIMATIONS
// ============================================
function setupAnimations() {
    // Animate stat numbers
    animateStatNumbers();
    
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements
    document.querySelectorAll('.info-card, .room-card, .facility-card, .hostel-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
}

// Animate stat numbers
function animateStatNumbers() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    statNumbers.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-target'));
        const duration = 2000; // 2 seconds
        const increment = target / (duration / 16); // 60fps
        let current = 0;
        
        const updateNumber = () => {
            current += increment;
            if (current < target) {
                stat.textContent = Math.floor(current);
                requestAnimationFrame(updateNumber);
            } else {
                stat.textContent = target;
            }
        };
        
        // Start animation when hero section is visible
        setTimeout(updateNumber, 500);
    });
}

// ============================================
// LOAD ROOMS DATA
// ============================================
function loadRooms() {
    const roomsGrid = document.getElementById('roomsGrid');
    
    roomsData.forEach(room => {
        const roomCard = createRoomCard(room);
        roomsGrid.appendChild(roomCard);
    });
}

function createRoomCard(room) {
    const card = document.createElement('div');
    card.className = 'room-card';
    
    const availabilityStatus = room.available > 0 ? 'Available' : 'Full';
    const statusColor = room.available > 0 ? '#27ae60' : '#e74c3c';
    
    card.innerHTML = `
        <div class="room-image">${room.icon}</div>
        <div class="room-details">
            <h3>${room.name}</h3>
            <span class="room-type">${room.type} Occupancy</span>
            <div class="room-features">
                ${room.features.map(feature => `<div class="room-feature">${feature}</div>`).join('')}
            </div>
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
                <span style="font-weight: 600;">Capacity: ${room.capacity}</span>
                <span style="color: ${statusColor}; font-weight: 600;">${availabilityStatus}: ${room.available}/${room.total}</span>
            </div>
            <button class="btn-book" onclick="bookRoom(${room.id})">Book Now</button>
        </div>
    `;
    
    return card;
}

// Book room function
function bookRoom(roomId) {
    const room = roomsData.find(r => r.id === roomId);
    if (room && room.available > 0) {
        alert(`Booking ${room.name}. Redirecting to booking form...`);
        // In real app, redirect to booking page with room details
    } else {
        alert('Sorry, this room type is currently full.');
    }
}

// ============================================
// LOAD FACILITIES DATA
// ============================================
function loadFacilities() {
    const facilitiesGrid = document.getElementById('facilitiesGrid');
    
    facilitiesData.forEach(facility => {
        const facilityCard = createFacilityCard(facility);
        facilitiesGrid.appendChild(facilityCard);
    });
}

function createFacilityCard(facility) {
    const card = document.createElement('div');
    card.className = 'facility-card';
    
    card.innerHTML = `
        <div class="facility-icon">${facility.icon}</div>
        <h3>${facility.title}</h3>
        <p>${facility.description}</p>
    `;
    
    return card;
}

// ============================================
// VIEW HOSTEL DETAILS
// ============================================
function viewHostelDetails(type) {
    const hostel = hostelInfo[type];
    const message = `
        ${type === 'boys' ? 'Boys' : 'Girls'} Hostel Details:
        
        Warden: ${hostel.hostName}
        Address: ${hostel.address}
        Contact: ${hostel.contactNum}
        Capacity: ${hostel.capacity} students
        Current Occupancy: ${hostel.currentOccupancy}
        
        Facilities:
        ${hostel.facilities.map(f => '• ' + f).join('\n')}
    `;
    
    alert(message);
    // In real app, show modal or redirect to details page
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

// Format date
function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

// Calculate days remaining
function calculateDaysRemaining(departureDate) {
    const today = new Date();
    const departure = new Date(departureDate);
    const diffTime = departure - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
}

// Validate email
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Validate phone number
function isValidPhone(phone) {
    const phoneRegex = /^[\+]?[(]?[0-9]{1,3}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,4}[-\s\.]?[0-9]{1,9}$/;
    return phoneRegex.test(phone);
}

// Show notification
function showNotification(message, type = 'success') {
    // Create notification element
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        padding: 1rem 2rem;
        background: ${type === 'success' ? '#27ae60' : '#e74c3c'};
        color: white;
        border-radius: 8px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        z-index: 3000;
        animation: slideIn 0.3s ease;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// ============================================
// SEARCH FUNCTIONALITY (for future use)
// ============================================
function searchRooms(query) {
    const filteredRooms = roomsData.filter(room => 
        room.name.toLowerCase().includes(query.toLowerCase()) ||
        room.type.toLowerCase().includes(query.toLowerCase())
    );
    
    // Update rooms grid with filtered results
    const roomsGrid = document.getElementById('roomsGrid');
    roomsGrid.innerHTML = '';
    
    filteredRooms.forEach(room => {
        const roomCard = createRoomCard(room);
        roomsGrid.appendChild(roomCard);
    });
}

// ============================================
// CONSOLE LOG FOR DEBUGGING
// ============================================
console.log('Hostel Management System Initialized');
console.log('Available Rooms:', roomsData.length);
console.log('Facilities:', facilitiesData.length);
console.log('System Ready!');