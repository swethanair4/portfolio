// Dark mode toggle
document.addEventListener('DOMContentLoaded', () => {
    const darkModeCheckbox = document.getElementById('darkModeCheckbox');

    // Initialize based on saved theme
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
        darkModeCheckbox.checked = true;
    }

    darkModeCheckbox.addEventListener('change', () => {
        if (darkModeCheckbox.checked) {
            document.body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
        }
    });
    
    document.addEventListener('DOMContentLoaded', () => {
        GLightbox({ selector: '.glightbox' });
    
        const darkModeCheckbox = document.getElementById('darkModeCheckbox');
        if (localStorage.getItem('theme') === 'dark') {
            document.body.classList.add('dark-mode');
            darkModeCheckbox.checked = true;
        }
    
        darkModeCheckbox.addEventListener('change', () => {
            document.body.classList.toggle('dark-mode');
            localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
        });
    });

    // form submission code 



    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('emailAddr').value.trim();
            const message = document.getElementById('message').value.trim();

            if (name && email && message) {
                alert("Message sent successfully! Thank you for contacting.");
                form.reset();
            } else {
                alert("Please fill in all fields correctly.");
            }
        });
    }
    document.addEventListener("DOMContentLoaded", () => {
        const form = document.getElementById("contactForm");
        const name = document.getElementById("name");
        const email = document.getElementById("emailAddr");
        const message = document.getElementById("message");
      
        const nameError = document.getElementById("nameError");
        const emailError = document.getElementById("emailError");
        const messageError = document.getElementById("messageError");
      
        form.addEventListener("submit", (e) => {
          let valid = true;
      
          // Name
          if (name.value.trim() === "") {
            name.classList.add("invalid");
            nameError.textContent = "Please enter your name.";
            nameError.style.display = "block";
            valid = false;
          } else {
            name.classList.remove("invalid");
            nameError.style.display = "none";
          }
      
          // Email
          if (!email.value.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/)) {
            email.classList.add("invalid");
            emailError.textContent = "Enter a valid email address.";
            emailError.style.display = "block";
            valid = false;
          } else {
            email.classList.remove("invalid");
            emailError.style.display = "none";
          }
      
          // Message
          if (message.value.trim() === "") {
            message.classList.add("invalid");
            messageError.textContent = "Please enter your message.";
            messageError.style.display = "block";
            valid = false;
          } else {
            message.classList.remove("invalid");
            messageError.style.display = "none";
          }
      
          if (!valid) {
            e.preventDefault();
          } else {
            alert("Form submitted successfully!");
          }
        });
      });
      form.addEventListener("reset", () => {
        // Clear invalid styles
        name.classList.remove("invalid");
        email.classList.remove("invalid");
        message.classList.remove("invalid");
      
        // Hide error messages
        nameError.style.display = "none";
        emailError.style.display = "none";
        messageError.style.display = "none";
      });
      
      
});