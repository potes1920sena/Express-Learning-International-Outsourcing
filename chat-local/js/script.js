$(function(){
    setInterval(leer,2000);
});

function leer(){
    $('#conversaciones').load("leer.php");
    $("#conversaciones").scrollTop($("#conversaciones")[0].scrollHeight);
}

function escribir(){
    var mensaje = $('textarea').val();
    var usuario = $('input:text').val();
    var fecha = $('#fecha').val();
    $.ajax({
        type:"POST",
        url:"escribir.php",
        data:{"mensaje":mensaje, "usuario":usuario, "fecha":fecha},
        success:function(){
            leer();
            $("#conversaciones").scrollTop($("#conversaciones")[0].scrollHeight);
            if(mensaje!="" && usuario!=""){
            var audio = document.getElementById("audio");
            audio.play();
            }else{
                alert("Ingresa tu Nombre seguido de tu comentario inquietud o queja para nuestros Administradores");
            }
        }
    });
}




