<?php 
    class executes{
        public function getusers(){
            $vector =array();
            $conexion = new conexion();
            $bd = $conexion->getconexion();
            $sql = "select *from usuario";
            $consult = $bd->prepare($sql);
            $consult->execute();
            while($fila=$consult->fetch()){
                $vector[] = array(
                    "id" => $fila['id'],
                    "nombre"=> $fila['nombre'],
                    "apellido"=>$fila['apellido'],
                    "dirección"=>$fila['direccion'],
                    "telefono"=>$fila['telefono'],
                    "dpi"=>$fila['dpi'],
                    "correo"=>$fila['correo'],
                    "pass"=>$fila['pass'],
                );
            }
            return $vector;
        }
        public function getmultiusers($id){
            $vector =array();
            $conexion = new conexion();
            $bd = $conexion->getconexion();
            $sql = "select *from usuario where id=:id";
            $consult = $bd->prepare($sql);
            $consult->bindParam(':id', $id);
            $consult->execute();
            while($fila=$consult->fetch()){
                $vector[] = array(
                    "id" => $fila['id'],
                    "nombre"=> $fila['nombre'],
                    "apellido"=>$fila['apellido'],
                    "dirección"=>$fila['direccion'],
                    "telefono"=>$fila['telefono'],
                    "dpi"=>$fila['dpi'],
                    "correo"=>$fila['correo'],
                    "pass"=>$fila['pass'],
                );
            }
            return $vector[0];
        }

        public function addProducto($nombre, $apellido, $direccion, $telefono, $dpi, $correo, $pass){
  
            $conexion = new Conexion();
            $bd = $conexion->getconexion();
            $sql = "INSERT INTO producto (nombre, apellido, dirección, telefono, dpi, correo, pass) VALUES (:nombre, :apellido, :dirección, :telefono, :dpi, :correo, :pass)";
            $consult = $bd->prepare($sql);
            $consult->bindParam(':nombre', $nombre);
            $consult->bindParam(':apellido', $apellido);
            $consult->bindParam(':dirección', $apellido);
            $consult->bindParam(':telefono', $apellido);
            $consult->bindParam(':dpi', $apellido);
            $consult->bindParam(':correo', $apellido);
            $consult->bindParam(':pass', $apellido);
            $consult->execute();
          
            return '{"msg":" usuario registrado"}';
          }
    }
?>