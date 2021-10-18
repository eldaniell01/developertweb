<?php
    
    

    class conexion{
        
        public function getconexion(){
            $host = 'localhost:3306';
            $dbname = 'hotelfinal';
            $username = 'root';
            $password = '12Intercambios';
            $conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);

            return $conn;
            
        }

    }

    
    

    
?>