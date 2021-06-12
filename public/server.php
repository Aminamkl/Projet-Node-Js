<?php
$conn = mysqli_connect("localhost", "root", "", "database_development");

if(isset($_POST['done'])){
    $username= mysql_escape_string($_POST['username']);
    $email= mysql_escape_string($_POST['email']);
    $password= mysql_escape_string($_POST['password']);

    mysql_query("INSERT INTO users(username,email,password) values ('{$name}','{$email}','{$password}')");
    exit();
}
?>