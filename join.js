const form = document.getElementById("feedbackForm");
const message = document.getElementById("thankYouMessage");

form.addEventListener("submit", function(event){

    event.preventDefault();

    message.style.display = "block";
    message.textContent = "Thank you for your feedback! We appreciate your support.";

    form.reset();

});