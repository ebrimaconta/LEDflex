<?php
require_once("connect.php");

$errorMSG = "";


/* NAME */
if (empty($_POST["name"])) {
    $errorMSG = "Name is required ";
} else {
    $name = $_POST["name"];
}


/* EMAIL */
if (empty($_POST["email"])) {
    $errorMSG .= "Email is required";
} 
else if(!empty($_POST["email"]) && filter_var($_POST["email"], FILTER_VALIDATE_EMAIL) === false) {
    $errorMSG .= "Invalid email format";
}else {
    $email = $_POST["email"];
}
 

if(empty($errorMSG)){
	$stmt = $conn->prepare("INSERT INTO vistor (name, email) VALUES (:name, :email)");
    $stmt->bindParam(':name', $name);
    $stmt->bindParam(':email', $email);
    
    $stmt->execute();
    $msg ="Name " .$name ."<br />"."Email ".$email ;
	echo json_encode(['code'=>200, 'msg'=>$msg]);
	exit;
}


echo json_encode(['code'=>404, 'msg'=>$errorMSG]);