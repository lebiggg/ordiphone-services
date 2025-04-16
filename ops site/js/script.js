document.addEventListener('DOMContentLoaded', function() {
    // Toggle menu on mobile
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('nav ul');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('show');
        });
    }
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInsideNav = navMenu.contains(event.target);
        const isClickOnHamburger = hamburger.contains(event.target);
        
        if (!isClickInsideNav && !isClickOnHamburger && navMenu.classList.contains('show')) {
            navMenu.classList.remove('show');
        }
    });
    
    // Handle contact form submission
    const contactForm = document.getElementById('contactForm');
    const formSuccess = document.getElementById('formSuccess');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            // In a real implementation, you would send the form data to a server here
            // For demonstration purposes, we'll just show the success message
            contactForm.style.display = 'none';
            
            if (formSuccess) {
                formSuccess.style.display = 'block';
                // Scroll to the success message
                formSuccess.scrollIntoView({ behavior: 'smooth' });
            }
            
            // Reset form
            contactForm.reset();
            
            // For a real implementation, you would use something like:
            /*
            const formData = new FormData(contactForm);
            
            fetch('your-server-endpoint', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                contactForm.style.display = 'none';
                formSuccess.style.display = 'block';
            })
            .catch(error => {
                console.error('Error:', error);
                // Show error message
            });
            */
        });
    }
    
    // Active navigation highlighting
    const currentLocation = window.location.pathname;
    const navLinks = document.querySelectorAll('nav ul li a');
    
    navLinks.forEach(link => {
        // Get filename from link href
        const linkPath = link.getAttribute('href');
        
        // Check if current page matches the nav link
        if (currentLocation.includes(linkPath) && linkPath !== 'index.html') {
            link.classList.add('active');
        } else if (currentLocation.endsWith('/') || currentLocation.endsWith('index.html')) {
            // If we're on the home page
            if (linkPath === 'index.html') {
                link.classList.add('active');
            }
        }
    });
}); 