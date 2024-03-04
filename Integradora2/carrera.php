<?php

$C = $_REQUEST["Car"];
$N = $_REQUEST["Nom"];

$Cont = new PDO("mysql:host=localhost:3306;dbname=vocacion","root","");

$Res = $Cont->query("UPDATE `login` SET `Carrera` = '$C' WHERE `Nombre` = '$N'");

?>