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
                    "direccion"=>$fila['direccion'],
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
                    "direccion"=>$fila['direccion'],
                    "telefono"=>$fila['telefono'],
                    "dpi"=>$fila['dpi'],
                    "correo"=>$fila['correo'],
                    "pass"=>$fila['pass'],
                );
            }
            return $vector[0];
        }

        public function adduser($nombre, $apellido, $direccion, $telefono, $dpi, $correo, $pass){
  
            $conexion = new conexion();
            $bd = $conexion->getconexion();
            $sql = "INSERT INTO usuario (nombre, apellido, direccion, telefono, dpi, correo, pass) VALUES(:nombre, :apellido, :direccion, :telefono, :dpi, :correo, :pass)";
            $consult = $bd->prepare($sql);
            $consult->bindParam(':nombre', $nombre);
            $consult->bindParam(':apellido', $apellido);
            $consult->bindParam(':direccion', $direccion);
            $consult->bindParam(':telefono', $telefono);
            $consult->bindParam(':dpi', $dpi);
            $consult->bindParam(':correo', $correo);
            $consult->bindParam(':pass', $pass);
            if($consult!=null){
                $consult->execute();
          
                return '{"msg":" usuario registrado"}';
            }else{
                return '{"msg":" error al registrar"}';
            }
           
          }

          public function deleteuser($id){
  
            $conexion = new conexion();
            $bd = $conexion->getconexion();
            $sql = "DELETE FROM producto WHERE id=:id";
            $consult = $bd->prepare($sql);
            $consult->bindParam(':id', $id); 
            $consult->execute();
            
            return '{"msg":"usuario eliminado"}';
          }
    }
?>