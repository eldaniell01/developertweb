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
    }
?>