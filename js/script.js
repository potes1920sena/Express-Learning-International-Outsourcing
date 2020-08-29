$(document).ready(function () {
  $(".caja-1").show();
  $(".footer").show();
  $("#r-img-1").show();
  $("#r-img-2").hide();
  $("#r-img-3").hide();
  $("#r-img-4").hide();
  $(".caja-6").hide();
  $("#iframe-chat").hide();
  $("#btn-chat-off").hide();
  $("#btn-chat-on").show();

  var altura = $(".menu").offset().top;

  $(window).on("scroll", function () {
    if ($(window).scrollTop() > altura) {
      $(".menu").addClass("menu-fixed");
      $(".container-fluid").addClass("container-fluid-cambio");
      $(".logo").addClass("logo-modificado");
      $(".logo-aliados").addClass("logo-aliados-modificado");
      $(".caja-1").addClass(".caja-1-c");
      $(".caja-2").addClass(".caja-2-c");
      $(".caja-3").addClass(".caja-3-c");
      $(".caja-4").addClass(".caja-4-c");
      $(".caja-5").addClass(".caja-5-c");
      $(".caja-6").addClass(".caja-6-c");
    } else {
      $(".menu").removeClass("menu-fixed");
      $(".container-fluid").removeClass("container-fluid-cambio");
      $(".logo").removeClass("logo-modificado");
      $(".logo-aliados").removeClass("logo-aliados-modificado");
      $(".caja-1").removeClass(".caja-1-c");
      $(".caja-2").removeClass(".caja-2-c");
      $(".caja-3").removeClass(".caja-3-c");
      $(".caja-4").removeClass(".caja-4-c");
      $(".caja-5").removeClass(".caja-5-c");
      $(".caja-6").removeClass(".caja-6-c");
    }
  });

  $(document).on("click", "#home", function () {
    $(".caja-1").show();
    $(".caja-2").show();
    $(".caja-3").show();
    $(".caja-4").hide();
    $(".caja-5").show();
    $(".caja-6").hide();
    $(".footer").show();
  });
  $(document).on("click", "#blog", function () {
    $(".caja-1").hide();
    $(".caja-2").show();
    $(".caja-3").hide();
    $(".caja-4").hide();
    $(".caja-5").hide();
    $(".caja-6").hide();
    $(".footer").hide();
    setTimeout(showAll, 400);
  });
  $(document).on("click", "#programas", function () {
    $(".caja-1").hide();
    $(".caja-2").hide();
    $(".caja-3").show();
    $(".caja-4").hide();
    $(".caja-5").hide();
    $(".caja-6").hide();
    $(".footer").hide();
  });
  $(document).on("click", "#alumnos", function () {
    $(".caja-1").hide();
    $(".caja-2").hide();
    $(".caja-3").hide();
    $(".caja-4").show();
    $(".caja-5").hide();
    $(".caja-6").hide();
    $(".footer").hide();
  });
  $(document).on("click", "#nosotros", function () {
    $(".caja-1").hide();
    $(".caja-2").hide();
    $(".caja-3").hide();
    $(".caja-4").hide();
    $(".caja-5").show();
    $(".caja-6").hide();
    $(".footer").hide();
  });
  $(document).on("click", "#contacto", function () {
    $(".caja-1").hide();
    $(".caja-2").hide();
    $(".caja-3").hide();
    $(".caja-4").hide();
    $(".caja-5").hide();
    $(".caja-6").show();
    $(".footer").hide();
  });

  // BOTON DEL CHAT ================================

  $(document).on("click", "#btn-chat-on", function () {
    $("#iframe-chat").show();
    $("#btn-chat-off").show();
    $("#btn-chat-on").hide();
  });

  $(document).on("click", "#btn-chat-off", function () {
    $("#iframe-chat").hide();
    $("#btn-chat-on").show();
    $("#btn-chat-off").hide();
  });

  $(document).on("click", "#ubicacion-actual", function () {
    $("#r-img-1").show();
    $("#r-img-2").hide();
    $("#r-img-3").hide();
    $("#r-img-4").hide();
  });

  $(document).on("click", "#centro-buga", function () {
    $("#r-img-1").hide();
    $("#r-img-2").show();
    $("#r-img-3").hide();
    $("#r-img-4").hide();
  });

  $(document).on("click", "#basilica", function () {
    $("#r-img-1").hide();
    $("#r-img-2").hide();
    $("#r-img-3").show();
    $("#r-img-4").hide();
  });

  $(document).on("click", "#terminal", function () {
    $("#r-img-1").hide();
    $("#r-img-2").hide();
    $("#r-img-3").hide();
    $("#r-img-4").show();
  });

  /***************************carrousel contenedor simple************************************/

  var imagenes = [
    "img/img(1).jpg",
    "img/img(2).jpg",
    "img/img(3).jpg",
    "img/img(4).jpg",
    "img/img(5).jpg",
    "img/img(6).jpg",
    "img/img(7).jpg",
  ];

  cont = 0;

  function carrousel(contenedor) {
    contenedor.addEventListener("click", (e) => {
      let atras = contenedor.querySelector(".atras"),
        adelante = contenedor.querySelector(".adelante"),
        img = contenedor.querySelector("img"),
        tgt = e.target;

      if (tgt == atras) {
        if (cont > 0) {
          img.src = imagenes[cont - 1];
          cont--;
        } else {
          img = imagenes[imagenes.length - 1];
          cont = imagenes.length - 1;
        }
      } else if (tgt == adelante) {
        if (cont < imagenes.length - 1) {
          img.src = imagenes[cont + 1];
          cont++;
        } else {
          img = imagenes[0];
          cont = 0;
        }
      }
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    let contenedor = document.querySelector(".contenedor");

    carrousel(contenedor);
  });
});
