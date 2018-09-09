document.addEventListener("DOMContentLoaded", event => {
    // Landing section slider and cards
    var counter = 1;
    setInterval(() => {
        switch (counter) {
            case 0:
                // Show scholarly slide
                $("#page-meter-slider-wrapper").toggleClass("show");
                $("#scholarly-slider-wrapper").toggleClass("show");
                // Make scholarly card active
                $("#page-meter-card").toggleClass("project-card-active");
                $("#scholarly-card").toggleClass("project-card-active");
                break;
            case 1:
                // Show js notifier slide
                $("#scholarly-slider-wrapper").toggleClass("show");
                $("#js-notifier-slider-wrapper").toggleClass("show");
                // Make scholarly card active
                $("#js-notifier-card").toggleClass("project-card-active");
                $("#scholarly-card").toggleClass("project-card-active");
                break;
            case 2:
                // Show page meter slide
                $("#js-notifier-slider-wrapper").toggleClass("show");
                $("#page-meter-slider-wrapper").toggleClass("show");
                // Make scholarly card active
                $("#page-meter-card").toggleClass("project-card-active");
                $("#js-notifier-card").toggleClass("project-card-active");
                break;
        }
        counter++;
        if (counter == 3) {
            counter = 0;
        }
    }, 5000);
})