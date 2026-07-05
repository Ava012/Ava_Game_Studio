document.querySelectorAll(".slider").forEach(function(slider) {
    const left = slider.querySelector(".left");
    const right = slider.querySelector(".right");
    const container = slider.querySelector(".creature-container");
    const card = slider.querySelector(".creature-card");

    const moveAmount = card.offsetWidth + 25;

    right.addEventListener("click", function() {
        container.scrollBy({
            left: moveAmount,
            behavior: "smooth"
        });
    });

    left.addEventListener("click", function() {
        container.scrollBy({
            left: -moveAmount,
            behavior: "smooth"
        });
    });
});