const hamburger = document.getElementById('hamburger');
const menu = document.querySelector('.menu');
hamburger.addEventListener('click', function () {
    const hamIcon = this.querySelector('.hamburger-icon');
    const crossIcon = this.querySelector('.cross-icon');
    if (hamIcon.computedStyleMap.display === "none") {
        hamIcon.computedStyleMap.display = "inline-block"
        menu.computedStyleMap.display = "none"
        crossIcon.computedStyleMap.display = "none"
    }
    else {
        crossIcon.computedStyleMap.display = "inline-block"
        hamIcon.computedStyleMap.display = "none"
        menu.computedStyleMap.display = "block"
    }
});
