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



document.querySelectorAll('.tab-button').forEach(button => {
    button.addEventListener('click', function () {
        // Remove active state from all tabs
        document.querySelectorAll('.tab-button').forEach(btn => {
            btn.classList.remove('border-purple-600', 'text-purple-600', 'dark:text-purple-400');
            btn.classList.add('border-transparent', 'text-gray-500', 'dark:text-gray-400');
        });

        // Add active state to clicked tab
        this.classList.remove('border-transparent', 'text-gray-500', 'dark:text-gray-400');
        this.classList.add('border-purple-600', 'text-purple-600', 'dark:text-purple-400');
    });
});

// Bookmark toggle
document.querySelectorAll('button .fa-bookmark').forEach(icon => {
    icon.addEventListener('click', function (e) {
        e.stopPropagation();
        if (this.classList.contains('far')) {
            this.classList.remove('far');
            this.classList.add('fas', 'text-purple-600', 'dark:text-purple-400');
        } else {
            this.classList.remove('fas', 'text-purple-600', 'dark:text-purple-400');
            this.classList.add('far');
        }
    });
});

// Follow button toggle
const followBtn = document.querySelector('button.bg-purple-600');
followBtn.addEventListener('click', function () {
    if (this.textContent.includes('Follow')) {
        this.innerHTML = '<i class="fas fa-check"></i> Following';
        this.classList.remove('bg-purple-600', 'hover:bg-purple-700');
        this.classList.add('bg-green-600', 'hover:bg-green-700');
    } else {
        this.innerHTML = '<i class="fas fa-plus"></i> Follow';
        this.classList.remove('bg-green-600', 'hover:bg-green-700');
        this.classList.add('bg-purple-600', 'hover:bg-purple-700');
    }
});