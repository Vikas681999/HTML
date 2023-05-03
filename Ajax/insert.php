<?php
/*
if ($_POST['fname'] and $_POST['lname']){
    
    $num1 =$_POST['fname'];
    $num2 = $_POST['lname'];
    $sum =  $num2;
    echo "Sum is ". $sum;
}else{
    echo "Enter any value";
}*/


include "connect.php";
$fname = $_POST['fname'];
$lname = $_POST['lname'];

     $eve = "insert into student (s_first_name, s_last_name) values ('$fname', '$lname')";
     if (mysqli_query($conn, $eve))
        {
            echo 1;
        }else{
            echo 0;
        }
  


?>