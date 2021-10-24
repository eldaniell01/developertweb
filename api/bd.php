<?php
    
    

    class conexion{
        
        public function getconexion(){
            $host = 'localhost:3306';
            $dbname = 'hotelfinal';
            $username = 'root';
            $password = '12Intercambios';
            try{
                $conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
                return $conn;
            }catch(PDOException $e){
                echo "error".$e;
                return $conn;
            }
            
            
            
        }

    }

    
    

    
?>