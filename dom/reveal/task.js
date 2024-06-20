const reveal = document.querySelectorAll(".reveal");
const border = document.documentElement.clientHeight;

window.addEventListener('scroll', function() {
  reveal.forEach((el) => {
    if (el.getBoundingClientRect().top < border) {
      el.classList.add("reveal_active");
    } else {
      el.classList.remove("reveal_active");
    }
  });
});
