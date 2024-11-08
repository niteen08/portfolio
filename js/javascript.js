
        const darkModeToggle = document.getElementById('darkModeToggle');
        const dark = document.querySelectorAll(".dark")
        console.log(dark);
        const body = document.body;
        const isDarkMode = localStorage.getItem('darkMode') === 'enabled';
        if (isDarkMode) {
            body.classList.add('dark-mode');
            darkModeToggle.checked = true;
        }
        darkModeToggle.addEventListener('change', () => {
            if (darkModeToggle.checked) {
                body.classList.add('dark-mode');
                localStorage.setItem('darkMode', 'enabled');
                // dark.forEach(element => {
                //     element.style.color = "#FFFF"; // Set text color to white
                // });
            } else {
                body.classList.remove('dark-mode');
                localStorage.setItem('darkMode', 'disabled');
                // dark.forEach(element => {
                //     element.style.color = "black"; // Set text color to white
                // });
            }
        });
    
        
// Ensure the DOM is loaded before accessing elements
document.addEventListener("DOMContentLoaded", function() {
    const btn = document.querySelector("#submit-btn");
    
    // Add event listener to the submit button
    btn.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the default form submission

        console.log(username.value);
        console.log(email.value);
        console.log(subject.value);
        console.log(message.value);


        // Validate form fields
        if (username === "" || email === "" || subject === "" || message === "") {
            alert("Please fill out all required fields.");
            return; // Exit the function if any field is empty
        }
        
        // Initialize EmailJS
        emailjs.init("4comUS0riNdTyKVy2"); // Replace YOUR_USER_ID with your actual EmailJS user ID
        
        // Get form data
        var params = {
            username: document.getElementById("username").value,
            email: document.getElementById("email").value,
            subject: document.getElementById("subject").value,
            message: document.getElementById("message").value
        };
        
        const serviceID = "service_1ys3fhn"; // Replace YOUR_EMAILJS_SERVICE_ID with your actual EmailJS service ID
        const templateID = "template_itch0m8"; // Replace YOUR_EMAILJS_TEMPLATE_ID with your actual EmailJS template ID
        
        // Send email
        emailjs.send(serviceID, templateID, params)
            .then(function(response) {
                console.log("Email sent successfully:", response);
                // Clear form fields after successful submission
                document.getElementById("username").value = "";
                document.getElementById("email").value = "";
                document.getElementById("subject").value = "";
                document.getElementById("message").value = "";
                // Alert the user
                alert("Thank you, " + params.username + "! Your message has been sent.");
            }, function(error) {
                console.error("Email failed to send:", error);
            });
    });
});
