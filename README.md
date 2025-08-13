1. How to validate form inputs in JavaScript?
Get input values using document.getElementById() or document.querySelector().
Use conditions to check if the values meet requirements (e.g., not empty, correct length, correct pattern).
Show error messages if validation fails.
Example:
if (name.trim() === "") {
  alert("Name is required");
}



2. What is event.preventDefault()?
A method that stops the browser’s default action for an event.
Example: Preventing a form from submitting so you can validate first.
form.addEventListener("submit", function(e) {
  e.preventDefault(); // Stops default submit

});


3. How to check email format with regex?
Use a regular expression to match email patterns.
Example:
let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailPattern.test(email)) {
  alert("Invalid email format");
}



4. Difference between client-side and server-side validation?
Client-Side	Server-Side
Done in browser using JavaScript or HTML5.	Done on server using backend language (PHP, Node.js, etc.).
Faster feedback for user.	Slower feedback (after form submission).
Can be bypassed if JavaScript is disabled.	More secure as user cannot bypass server rules.



5. How to show error messages dynamically?
Select an error container element and update its text when validation fails.
Example:
document.getElementById("errorMsg").textContent = "Please enter a valid name";
You can also style it with CSS to highlight the field.



6. What is form submission?
The process of sending form data to the server for processing.
Can be done traditionally (page reload) or via AJAX (without reloading).



7. How to improve form accessibility?
Use <label> tags linked to inputs via for attribute.
Provide descriptive placeholder or aria-label.
Ensure proper color contrast.
Allow keyboard navigation.



8. How to handle form reset?
Use form.reset() to clear all fields.
You can also reset custom error messages and styles after reset.
document.getElementById("myForm").reset();


9. What are common security issues with forms?
SQL Injection – malicious database queries.
XSS (Cross-Site Scripting) – injecting malicious scripts.
CSRF (Cross-Site Request Forgery) – unauthorized form submissions.
Data Tampering – modifying hidden form fields.
✅ Always sanitize and validate data on the server.



10. How does HTML5 built-in validation differ from JS validation?
HTML5 Validation	JavaScript Validation
Uses attributes like required, pattern, min, type="email".	Uses custom logic with JS functions.
No extra code needed; browser handles it.	Full control over rules and messages.
Limited customization of error messages.	Fully customizable behavior and UI
