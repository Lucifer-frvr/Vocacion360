<?php

$u = $_REQUEST["upd"];
$A = $_REQUEST["Act"];

$Cont = new PDO("mysql:host=localhost:3306;dbname=vocacion","root","");

$Res = $Cont->query("UPDATE `login` SET `Contraseña` ='$u' WHERE Contraseña = '$A'");

?>