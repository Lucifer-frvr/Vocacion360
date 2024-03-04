<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers:  Content-Type, X-Auth-Token, Authorization, Origin');
header('Access-Control-Allow-Methods:  POST, PUT, GET');

$Name = $_REQUEST["nom"];
$Lastn = $_REQUEST["apel"];
$Mail = $_REQUEST["corr"];
$Pass = $_REQUEST["cont"];

$Cont = new PDO("mysql:host=localhost:3306;dbname=vocacion","root","");

$Res = $Cont->query("INSERT INTO `login` (`Nombre`, `Apellido`, `Correo`, `Contraseña`,`Carrera`) VALUES ('$Name','$Lastn','$Mail','$Pass', 'null')");

?>