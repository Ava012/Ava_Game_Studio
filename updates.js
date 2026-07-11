document.querySelectorAll(".column-box").forEach(function (box) {
    const buttons = box.querySelectorAll(".tab-button");
    const slides = box.querySelectorAll(".tab-slide");

    buttons.forEach(function (button) {
        button.addEventListener("click", function () {
            buttons.forEach(function (btn) {
                btn.classList.remove("active");
            });

            slides.forEach(function (slide) {
                slide.classList.remove("active");
            });

            button.classList.add("active");

            const targetId = button.getAttribute("data-tab");
            const targetSlide = box.querySelector("#" + targetId);

            if (targetSlide) {
                targetSlide.classList.add("active");
            }
        });
    });
});