// homepage selector
const portfolioItems = document.querySelectorAll(".portfolio-item-wrapper");

portfolioItems.forEach((portfolioItem) => {
  portfolioItem.addEventListener("mouseover", () => {
    portfolioItem.childNodes[3].classList.add("img-darken"); // 3 is the index of background image
  });

  portfolioItem.addEventListener("mouseout", () => {
    portfolioItem.childNodes[3].classList.remove("img-darken"); // 3 is the index of background image
  });
});

// accordion
const accordionItemHeaders = document.querySelectorAll(
  ".accordion-item-header"
);

// change between + and -
accordionItemHeaders.forEach((accordionItemHeader) => {
  accordionItemHeader.addEventListener("click", (event) => {
    accordionItemHeader.classList.toggle("active");
    // animation
    const accordionItemBody = accordionItemHeader.nextElementSibling;
    if (accordionItemHeader.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    } else {
      accordionItemBody.style.maxHeight = 0;
    }
  });
});

//back to top button
const backToTopButton = document.querySelector("#back-to-top-btn");

window.addEventListener("scroll", scrollFuction);

function scrollFuction() {
  if (window.pageYOffset > 100) {
    //Show backToTopButton
    if (!backToTopButton.classList.contains("btnEntrance")) {
      backToTopButton.classList.remove("btnExit");
      backToTopButton.classList.add("btnEntrance");
      backToTopButton.style.display = "block";
    }
  } else {
    //Hide backToTopButton
    if (backToTopButton.classList.contains("btnEntrance")) {
      backToTopButton.classList.remove("btnEntrance");
      backToTopButton.classList.add("btnExit");
      setTimeout(function () {
        backToTopButton.style.display = "none";
      }, 250);
    }
  }
}

backToTopButton.addEventListener("click", backToTop);

function backToTop() {
  window.scrollTo(0, 0);
}

// //smooth scrolling
// function smoothScrollBackToTop() {
//   const targetPosition = 0;
//   const startPosition = window.pageYOffset;
//   const distance = targetPosition - startPosition;
//   const duration = 750;
//   let start = null;

//   window.requestAnimationFrame(step);

//   function step(timestamp) {
//     if (!start) start = timestamp;
//     const progress = timestamp - start;
//     window.scrollTo(
//       0,
//       easeInOutCubic(progress, startPosition, distance, duration)
//     );
//     if (progress < duration) window.requestAnimationFrame(step);
//   }
// }

// fuction easeInOutCubic(t, b, c, d){
//   t /= d/2;
//   if (t < 1) return c/2*t*t*t + b;
//   t -= 2;
//   return c/2*(t*t*t + 2) + b;
// };
