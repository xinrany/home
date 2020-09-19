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
