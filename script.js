// Dropdown functionality
const dropdownToggle = document.getElementById('profile-dropdown-toggle');
const dropdown = document.getElementById('profile-dropdown');
const notificationToggle = document.getElementById('notification-toggle');
const notificationDropdown = document.getElementById('notification-dropdown');

dropdownToggle.addEventListener('click', function (e) {
    e.stopPropagation();
    dropdown.classList.toggle('active');
    // Close notification dropdown if open
    notificationDropdown.classList.remove('active');
});

notificationToggle.addEventListener('click', function (e) {
    e.stopPropagation();
    notificationDropdown.classList.toggle('active');
    // Close profile dropdown if open
    dropdown.classList.remove('active');
});

// Close dropdowns when clicking outside
document.addEventListener('click', function (event) {
    if (!dropdownToggle.contains(event.target) && !dropdown.contains(event.target)) {
        dropdown.classList.remove('active');
    }
    if (!notificationToggle.contains(event.target) && !notificationDropdown.contains(event.target)) {
        notificationDropdown.classList.remove('active');
    }
});

// Mobile menu toggle
const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuToggle.addEventListener('click', function () {
    mobileMenu.classList.toggle('hidden');
});

// Add subtle parallax effect to navbar on scroll
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.glass-navbar');
    if (window.scrollY > 10) {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            navbar.style.background = 'rgba(15, 23, 42, 0.95)';
        }
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.8)';
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            navbar.style.background = 'rgba(15, 23, 42, 0.8)';
        }
    }
});