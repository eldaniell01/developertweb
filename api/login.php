<?php
	require_once('./cors.php');
	
	
	
	if(isset($_POST['refUser'])){
		$usuario = $_POST['refUser'];
		if(isset($_POST['refPassword'])){
			$password = $_POST['refPassword'];
			
			if($usuario ===''|| $password===''){
				echo json_encode("error");
			}else{
				echo json_encode("correcto");
			}
		}else{
			echo "no";
		}
	}else{
		echo "nsi";
	}
	

?>