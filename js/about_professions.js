document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("searchInput");
  const universityContainers = document.querySelectorAll(".content");

  searchInput.addEventListener("input", function () {
    const searchText = searchInput.value.toLowerCase();

    universityContainers.forEach((container) => {
      const universityName = container
        .querySelector(".content-name")
        .textContent.toLowerCase();

      if (universityName.includes(searchText)) {
        container.style.display = "block";
      } else {
        container.style.display = "none";
      }
    });
  });
});
