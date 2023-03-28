$(".more-projects").hide();
$(".show-more").click(function () {
  $(".show-more").text("Show more");
  $(".more-projects").toggle(
    function () {
      $(".show-more").text("Show more");
      $(".more-projects").show();
    },
    function () {
      $(".show-more").text("Show less");
    }
  );
});

// $(".pushme").toggle(
//   function () {
//     $(this).text("DON'T PUSH ME");
//   },
//   function () {
//     $(this).text("PUSH ME");
//   }
// );
