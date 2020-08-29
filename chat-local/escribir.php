<?php
    $file = file_get_contents("chat.txt");
    if(($_POST['usuario']!="") && ($_POST['mensaje']!="")){
    $mensaje = "<div id='margen'><p id='fecha-actual'> ".$_POST['fecha']. "<span>" .$_POST['usuario']." :</span></p><p>".$_POST['mensaje']."</p></div><br>";
    $file = file_put_contents("chat.txt", $file.$mensaje);
    $file = file_get_contents("chat.txt");
    }
?>

