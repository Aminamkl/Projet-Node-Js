<?php  
 $connect = mysqli_connect("localhost", "root", "", "database_development");  
 $sql = "INSERT INTO users(username,email,password,role) VALUES('".$_POST["username"]."', '".$_POST["email"]."','".$_POST["password"]."','".$_POST["role"]."')";  
 if(mysqli_query($connect, $sql))  
 {  
      echo 'Data Inserted';  
 }  
 ?> 