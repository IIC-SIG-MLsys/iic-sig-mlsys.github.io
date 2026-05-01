(function () {
  document.addEventListener("DOMContentLoaded", function () {
    var moreBtn = document.getElementById("news-more-btn");
    var lessBtn = document.getElementById("news-less-btn");
    var allLink = document.getElementById("news-all-link");
    if (!moreBtn || !lessBtn) return;

    moreBtn.addEventListener("click", function () {
      var hidden = document.querySelectorAll(".news-item-hidden");
      hidden.forEach(function (el) {
        el.classList.remove("d-none");
      });
      moreBtn.classList.add("d-none");
      lessBtn.classList.remove("d-none");
      if (allLink) allLink.classList.remove("d-none");
    });

    lessBtn.addEventListener("click", function () {
      var hidden = document.querySelectorAll(".news-item-hidden");
      hidden.forEach(function (el) {
        el.classList.add("d-none");
      });
      lessBtn.classList.add("d-none");
      moreBtn.classList.remove("d-none");
      if (allLink) allLink.classList.add("d-none");
    });
  });
})();
