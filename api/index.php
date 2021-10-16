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
?>