<?php
if ($_POST) {
    $to = "info@cancelamostudeudaencanarias.com";// 
    $subject = 'Contacto Web';
    $nombre = $_POST['nombre'];
    $ciudad = $_POST['ciudad'];
    $email = $_POST['email'];
    $telf = $_POST['telf'];
    $msj = $_POST['msj'];
  $headers  = 'MIME-Version: 1.0' . "\r\n";
  $headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";
    $message = "
        <p>El siguiente contacto ha solicitado más información a través de la web:<p>
        
        <br>
        
        <b>Nombre</b>:  $nombre <br>
        <b>Población</b>:  $ciudad <br>
        <b>Email</b>:  $email <br>
        <b>Telf</b>:  $telf <br>
        <br>Mensaje</br>:  $msj";

    $success = mail($to, $subject, $message, $headers);
    if ($success) {
        echo "success";
    }
    else {
        echo "fail";
    }
}
?>