document.addEventListener("DOMContentLoaded", function() {
  // Add event listener to sidebar toggle button
  let sidebarToggleBtn = document.getElementById("sidebar_toggle_button");
  let sidebar = document.getElementById("sidebar")
  let header = document.getElementById("sidebar_toggle")
  if (sidebarToggleBtn) {
    sidebarToggleBtn.addEventListener("click", function () {
      sidebar.classList.toggle("hidden");
      if (header.classList.contains("pushed")){
        header.style.paddingLeft = "0px";
        header.classList.remove("pushed");
      } else {
        header.style.paddingLeft = "260px";
        header.classList.add("pushed");
      }
    });
  }
});