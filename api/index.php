<?php
    require_once('./cors.php');
    require_once('./bd.php');
    require_once('./executes.php');
    $method =$_SERVER['REQUEST_METHOD'];
    if($method =="GET"){
        if(!empty($_GET['id'])){
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
        $JSONData = file_get_contents("php://input");
        $data = json_decode($JSONData);
        $nombre = $data->nombre;
        $apellido = $data->apellido;
        $direccion = $data->direccion;
        $telefono = $data->telefono;
        $dpi = $data->dpi;
        $correo = $data->correo;
        $pass = $data->passw;
        echo $nombre;
        $api = new executes();
        $json = $api->adduser($nombre, $apellido, $direccion, $telefono, $dpi, $correo, $pass);
        echo $json;
    }

    if($method=="DELETE"){
        $json = null;
        $id = $_REQUEST['id'];
        $api = new executes();
        $json = $api->deleteuser($id);
        echo $json;
    }
?>