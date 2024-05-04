$(document).ready(function () {
  $("#mainButton").click(function () {
    $(".floating-items").toggleClass("active");

    var itemCount = $(".floating-items button").length;
    var angle = 360 / itemCount;
    var radius = 100; // Sesuaikan jarak tombol dengan tombol plus

    $(".floating-items button").each(function (index) {
      var posX = radius * Math.cos(angle * index * (Math.PI / 180));
      var posY = radius * Math.sin(angle * index * (Math.PI / 180));

      $(this).css({
        transform:
          "translate(-50%, -50%) translate(" + posX + "px, " + posY + "px)",
      });
    });
  });
});
