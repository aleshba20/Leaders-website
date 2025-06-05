// Counter Animation
const counters = document.querySelectorAll(".counter");

const runCounter = (counter) => {
  const updateCount = () => {
    const target = +counter.getAttribute("data-target");
    const count = +counter.innerText;
    const speed = 100;
    const increment = target / speed;

    if (count < target) {
      counter.innerText = Math.ceil(count + increment);
      setTimeout(updateCount, 10);
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
window.addEventListener("load", handleScroll);

// Testimonials Slider
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

  showSlide(current);

  let interval = setInterval(() => {
    current = (current + 1) % testimonials.length;
    showSlide(current);
  }, 3000);

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      clearInterval(interval);
      current = index;
      showSlide(current);
      interval = setInterval(() => {
        current = (current + 1) % testimonials.length;
        showSlide(current);
      }, 7000);
    });
  });
});

// Navbar Hamburger Toggle
const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Soft Skills Page: Auto Toggle Section Based on Hash
function toggleCourse(courseId) {
  const courses = document.querySelectorAll(".course-detail");
  courses.forEach((course) => (course.style.display = "none"));

  const target = document.getElementById(courseId);
  if (target) {
    target.style.display = "block";
    target.scrollIntoView({ behavior: "smooth" });
  }
}

window.addEventListener("load", () => {
  const hash = window.location.hash.substring(1);
  if (hash && document.getElementById(hash)) {
    toggleCourse(hash);
  } else if (document.querySelector(".course-detail")) {
    toggleCourse("leadership");
  }
});

const phone = "97477706704";
const defaultMessage = encodeURIComponent(
  "Hi, I'm messaging from the Leaders Education website: *Please Type your following enquiry after this text*"
);
const whatsappLink = `https://wa.me/${phone}?text=${defaultMessage}`;
document.getElementById("whatsappLink").setAttribute("href", whatsappLink);
