function initializeDemo() {
  var elements;
  var windowHeight;

  function init() {
    elements = document.querySelectorAll(".notification");
    windowHeight = window.innerHeight;
  }

  function checkPosition() {
    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];
      var positionFromTop = elements[i].getBoundingClientRect().top;

      if (positionFromTop - windowHeight <= 0) {
        element.classList.add("notification--visible");
      }
    }
  }

  window.addEventListener("scroll", checkPosition);
  window.addEventListener("resize", init);

  init();
  checkPosition();
}

document.addEventListener("DOMContentLoaded", initializeDemo);
