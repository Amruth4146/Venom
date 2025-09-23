$(document).ready(function () {
  $(".filter-item").click(function (e) {
    e.preventDefault();
    const value = $(this).attr("data-filter");
    console.log("Filtering by:", value);

    $(".filter-item").removeClass("active-filter");
    $(this).addClass("active-filter");

    if (value === "all") {
      $(".post-box").show("1000");
    } else {
      $(".post-box").hide("1000");
      $(".post-box." + value).show("1000");
    }

    // Scroll to post section
    $('html, body').animate({
      scrollTop: $(".post").offset().top
    }, 500);
  });
});

// // Header Background change on scroll
// let header = document.querySelector("header");
// window.addEventListener("scroll", () => {
//   header.classList.toggle("shadow", window.scrollY > 0);
// });

header.addEventListener("scroll",function(){
  header.style.backgroundColor="white";
})