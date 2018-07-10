// text ausklappen
$(document).ready(function() {
  $(".flip").click(function() {
    $(this).next().slideToggle("slow");
  });
});