// hover 1 second

const res = document.querySelector(".result");
const res_d = document.querySelector(".result-description");
console.log(res_d);
if (res) {
  res.addEventListener("mouseenter", function () {
    // Check if 'res_d' exists before modifying its style
    if (res_d) {
      timer = setTimeout(function () {
        res_d.style.display = "block";
      }, 1000);
    }
  });

  res.addEventListener("mouseleave", function () {
    clearTimeout(timer);
    if (res_d) {
      res_d.style.display = "none";
    }
  });
}
