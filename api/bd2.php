<?php
 
$mysqli = new mysqli("localhost:3306", "root", "12Intercambios", "hotelfinal");
 
if($mysqli->connect_errno) {
	echo "<b>Fallo al conectar a la BD: </b>" . $mysqli->connect_errno . "---" . $mysqli->connect_error;
}else{
    echo "<b>Fallo al conectar a la BD: </b>";
}
 
return $mysqli;
 
 ?>
