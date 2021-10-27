<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Content-Type: text/html; charset=utf-8");
$method = $_SERVER['REQUEST_METHOD'];

function conectarDB()
{
    $servidor = "localhost:3306";
    $usuario = "root";
    $password = "12Intercambios";
    $bd = "hotelfinal";
    //$bd = "cajaherr_datos";
    echo "qui";
    $conexion = mysqli_connect($servidor, $usuario, $password, $bd);

    if ($conexion) {
        echo "conexion exitosa";
    } else {
        echo 'Ha sucedido un error inexperado en la conexion de la base de datos';
    }

    return $conexion;
}
