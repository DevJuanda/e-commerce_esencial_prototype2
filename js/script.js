document.addEventListener("DOMContentLoaded", function() {
    var header = document.getElementById("sticky-header");
    var content = document.getElementById("content");
    var scrollThreshold = 31.59;

    window.addEventListener("scroll", function() {
    var scrollY = window.scrollY || window.pageYOffset;

    if (scrollY > scrollThreshold) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
      // Set background color based on scroll position
    var opacity = Math.min(scrollY / scrollThreshold, 1);
    header.style.backgroundColor = "rgba(0, 0, 0, " + opacity + ")";
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var header = document.getElementById("sticky-header2");
    var content = document.getElementById("content");
    var scrollThreshold = 31.59;

    window.addEventListener("scroll", function() {
    var scrollY = window.scrollY || window.pageYOffset;

    if (scrollY > scrollThreshold) {
        header.classList.add("sticky2");
    } else {
        header.classList.remove("sticky2");
    }
      // Set background color based on scroll position
    var opacity = Math.min(scrollY / scrollThreshold, 1);
    header.style.backgroundColor = "rgba(0, 0, 0, " + opacity + ")";
    });
});

function redirectToPage() {
    // Change the URL to the desired page
    window.location.href = 'https://www.example.com/another-page';
}