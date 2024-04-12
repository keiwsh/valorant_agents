let scrollAmount = 0;

const scrollContainer = document.querySelector(".scroll-container");
const edgeWidth = 150; // Width of the edge area in pixels.

scrollContainer.addEventListener("mousemove", (e) => {
  const rect = scrollContainer.getBoundingClientRect();
  const x = e.clientX - rect.left; // x position within the element.
  const width = rect.right - rect.left;

  // Check if the mouse is within the edge area.
  if (x < edgeWidth) {
    // Scroll left.
    scrollAmount = -10;
  } else if (x > width - edgeWidth) {
    // Scroll right.
    scrollAmount = 10;
  } else {
    scrollAmount = 0;
  }
});

function scrollSmoothly() {
  if (scrollAmount !== 0) {
    scrollContainer.scrollLeft += scrollAmount;
  }
  requestAnimationFrame(scrollSmoothly);
}

requestAnimationFrame(scrollSmoothly);
