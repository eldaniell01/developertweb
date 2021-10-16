<?php
    require_once('./bd/bd.php');
    require_once('./bd/cors.php');
    require_once('./bd/executes.php');
    $method =$_SERVER['REQUEST_METHOD'];
    if($method =="GET"){
        if(!empty($_get['id'])){
            $id=$_GET['id'];
            $api = new executes();
            $obj =$api->getmultiusers($id);
            $json = json_encode($obj);
            echo $json;
        }else{
            $vector = array();
            $api = new executes();
            $vector = $api->getusers();
            $json = json_encode($vector);
            echo $json;
        }
    }

    if($method=="POST"){
        $json = null;
        $data = json_decode(file_get_contents("php://input"), true);
        $nombre = $data['nombre'];
        $apellido = $data['apellido'];
        $direccion = $data['direccion'];
        $telefono = $data['telefono'];
        $dpi = $data['dpi'];
        $correo = $data['correo'];
        $pass = $data['pass'];
        
        $api = new executes();
        $json = $api->adduser($nombre, $apellido, $direccion, $telefono, $dpi, $correo, $pass);
        echo $json;
    }
?>