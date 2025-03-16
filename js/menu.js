document.addEventListener("DOMContentLoaded", function () {
  let timer;

  const profile = document.querySelector(".profile-icon");
  const prof_d = document.querySelector(".profile-description");

  profile.addEventListener("mouseenter", function () {
    timer = setTimeout(function () {
      prof_d.style.display = "block";
    }, 1000);
  });

  profile.addEventListener("mouseleave", function () {
    clearTimeout(timer); // Cancel the timer
    prof_d.style.display = "none";
  });

  const about_prof = document.querySelector(".first-option");
  const about_prof_d = document.querySelector(".first-option-description");

  about_prof.addEventListener("mouseenter", function () {
    timer = setTimeout(function () {
      about_prof_d.style.display = "block";
    }, 1000);
  });

  about_prof.addEventListener("mouseleave", function () {
    clearTimeout(timer);
    about_prof_d.style.display = "none";
  });

  const univ = document.querySelector(".second-option");
  const univ_d = document.querySelector(".second-option-description");

  univ.addEventListener("mouseenter", function () {
    timer = setTimeout(function () {
      univ_d.style.display = "block";
    }, 1000);
  });

  univ.addEventListener("mouseleave", function () {
    clearTimeout(timer);
    univ_d.style.display = "none";
  });

  const tests = document.querySelector(".third-option");
  const tests_d = document.querySelector(".third-option-description");

  tests.addEventListener("mouseenter", function () {
    timer = setTimeout(function () {
      tests_d.style.display = "block";
    }, 1000);
  });

  tests.addEventListener("mouseleave", function () {
    clearTimeout(timer);
    tests_d.style.display = "none";
  });

  const google_t = document.querySelector(".google-t-pos");
  const google_t_d = document.querySelector(".google-t-description");

  google_t.addEventListener("mouseenter", function () {
    timer = setTimeout(function () {
      google_t_d.style.display = "block";
    }, 1000);
  });

  google_t.addEventListener("mouseleave", function () {
    clearTimeout(timer);
    google_t_d.style.display = "none";
  });

  // const element = document.getElementById("hoverElement");
  // const description = document.getElementById("description");
  // element.addEventListener("mouseenter", function () {
  //   timer = setTimeout(function () {
  //     description.style.display = "block";
  //   }, 1000); // Show after 3 seconds
  // });

  // element.addEventListener("mouseleave", function () {
  //   clearTimeout(timer); // Cancel timer if mouse leaves early
  //   description.style.display = "none";
  // });
});
