<?php
   header('Access-Control-Allow-Origin: *');
   header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
   header("Content-Type: text/html; charset=utf-8"); 
    

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