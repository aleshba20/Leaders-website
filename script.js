const counters = document.querySelectorAll(".counter");

const runCounter = (counter) => {
  const updateCount = () => {
    const target = +counter.getAttribute("data-target");
    const count = +counter.innerText;
    const speed = 100; // ↓ reduced speed value (faster)

    const increment = target / speed;

    if (count < target) {
      counter.innerText = Math.ceil(count + increment);
      setTimeout(updateCount, 10); // ↓ faster interval (from 20ms → 10ms)
    } else {
      counter.innerText =
        target.toLocaleString() + (target === 100 ? "%" : "+");
    }
  };

  updateCount();
};

const handleScroll = () => {
  counters.forEach((counter) => {
    const rect = counter.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
    if (isVisible && !counter.classList.contains("counted")) {
      counter.classList.add("counted");
      runCounter(counter);
    }
  });
};

window.addEventListener("scroll", handleScroll);
window.addEventListener("load", handleScroll); // trigger on load as well

// Testimonials sections

document.addEventListener("DOMContentLoaded", () => {
  const testimonials = document.querySelectorAll(".testimonial");
  const dots = document.querySelectorAll(".dot");
  let current = 0;

  function showSlide(index) {
    testimonials.forEach((testimonial, i) => {
      testimonial.style.display = i === index ? "block" : "none";
      dots[i].classList.toggle("active", i === index);
    });
  }

  // Initial display
  showSlide(current);

  // Auto-slide
  let interval = setInterval(() => {
    current = (current + 1) % testimonials.length;
    showSlide(current);
  }, 3000);

  // Manual navigation
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      clearInterval(interval); // Pause auto-slide on click
      current = index;
      showSlide(current);
      interval = setInterval(() => {
        current = (current + 1) % testimonials.length;
        showSlide(current);
      }, 7000);
    });
  });
});
