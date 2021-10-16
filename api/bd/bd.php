<?php
    
    

    class conexion{
        
        public function getconexion(){
            $host = 'localhost:3306';
            $dbname = 'hotelfinal';
            $username = 'root';
            $password = '12Intercambios';
            try {
                $conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
                echo "Connected to $dbname at $host successfully.";
            } catch (PDOException $pe) {
                die("Could not connect to the database $dbname :" . $pe->getMessage());
            }
        }

    }

    
    

    
?>