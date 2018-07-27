<?php
require_once("connect.php");

$errorMSG = "";
if (empty($_POST["pin"])) {
    $errorMSG .= "Please fill all the fields with one number";
} 
else if(strlen($_POST["pin"])  < 4) {
    $errorMSG .= "Please make sure all the fields are filled.";
}else {
    $pin = $_POST["pin"];
}


if(empty($errorMSG)){
		$stmt = $conn->prepare("SELECT * FROM staff WHERE password = ?");
		$stmt->execute([$_POST['pin']]);
		$user = $stmt->fetch();
		if($_POST['pin'] !== $user['password']){
			$msg ="Your password is not correct";
		    echo json_encode(['code'=>404, 'msg'=>$msg]);	
	        exit;
		}
			$msg ="Hello ".$user["staff"]." ";
		    echo json_encode(['code'=>200, 'msg'=>$msg]);	
	        exit;
		
     	
}


echo json_encode(['code'=>404, 'msg'=>$errorMSG]);