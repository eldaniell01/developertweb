<?php
    include 'bd/bd.php';
    header('Access-Control-Allow-Origin: *');
    if($_SERVER['REQUEST_METHOD']=='GET'){
        if(isset($_GET['id'])){
            $query="select * from usuario where id=".$_GET['id'];
            $resultado=metodoget($query);
            echo json_encode($resultado->fetch(PDO::FETCH_ASSOC));
        }else{
            $query="select * from usuario";
            $resultado=metodoget($query);
            echo json_encode($resultado->fetchAll());
        }
        header(("HTTP/1.1 200 OK"));
        exit();
    }
    if($_SERVER['METHOD']=='POST'){
        unset($_POST['METHOD']);
        $nombre = $_POST['nombre'];
        $apellido=$_post['apellido'];
        $direccion=$_post['dirección'];
        $telefono=$_post['telefono'];
        $dpi=$_post['dpi'];
        $correo=$_post['correo'];
        $pass=$_post['pass'];
        $query = "insert into usuario values('$nombre', '$apellido', '$direccion', '$telefono', '$dpi', '$correo', '$pass')";
        $queryincrement="select MAX() as id from usuario";
        $resultado = postDate($query, $queryincrement);
        echo json_encode($resultado);
        header(("HTTP/1.1 200 OK"));
        exit();
    }

    if($_SERVER['METHOD']=='PUT'){
        unset($_POST['METHOD']);
        $id=$_GET['id'];
        $nombre = $_POST['nombre'];
        $apellido=$_post['apellido'];
        $direccion=$_post['dirección'];
        $telefono=$_post['telefono'];
        $dpi=$_post['dpi'];
        $correo=$_post['correo'];
        $pass=$_post['pass'];
        $query = "update usuario set nombre='$nombre', apellido='$apellido', dirección='$direccion', telefono='$telefono', dpi='$dpi', correo='$correo', pass='$pass' where id='$id";
        $resultado = putDate($query);
        echo json_encode($resultado);
        header(("HTTP/1.1 200 OK"));
        exit();
    }

    if($_SERVER['METHOD']=='DELETE'){
        unset($_POST['METHOD']);
        $id=$_GET['id'];
        $query = "delete from usuario where id='$id";
        $resultado = delateDate($query);
        echo json_encode($resultado);
        header(("HTTP/1.1 200 OK"));
        exit();
    }
    header("HTTP/1.1 400 Bad Request");
?>