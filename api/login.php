<?php
	require_once('./cors.php');
    require_once('./bd.php');
    require_once('./executes.php');
    $method =$_SERVER['REQUEST_METHOD'];
	if($method=="POST"){
		$json = null;
        $JSONData = file_get_contents("php://input");
        $data = json_decode(file_get_contents("php://input"), true);
        $correo = $data['usuario'];
        $pass = $data['clave'];
		$vector = array();
		$api = new executes();
		$vector = $api->login($correo, $pass);
		$json =json_encode($vector);
		echo $json;
	}

?>