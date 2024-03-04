<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers:  Content-Type, X-Auth-Token, Authorization, Origin');
header('Access-Control-Allow-Methods:  POST, PUT, GET');

$us = $_REQUEST["u"];

$Cont = new PDO("mysql:host=localhost:3306;dbname=vocacion","root","");

$Res = $Cont->query("SELECT * FROM `login` WHERE `Correo` = '$us'");

$datos=array();
foreach ($Res as $row) {
	$datos[]=$row;
}

	echo json_encode($datos);

?>