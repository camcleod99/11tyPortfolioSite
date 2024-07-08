document.addEventListener("DOMContentLoaded", function() {
  let acc = document.getElementsByClassName("accordion_title");

  for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      // Get the next sibling element, which is the accordion content
      let content = this.nextElementSibling;
      // Toggle the open class
      content.classList.toggle("open");
      // Close all other open accordion contents
      closeOtherAccordions(content);
    });
  }

});

function closeOtherAccordions(currentContent) {
  // Get all elements with class 'accordion_list'
  let accordions = document.getElementsByClassName("accordion_list");

  // Iterate over all accordion_list elements
  for (let j = 0; j < accordions.length; j++) {
    // Check if it's not the currently clicked accordion content
    if (accordions[j] !== currentContent) {
      // Remove the 'open' class if present
      accordions[j].classList.remove("open");
    }
  }
}