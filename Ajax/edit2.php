<?php

include "connect.php";
$student_id = $_POST["id"];
$firstname = $_POST["first_name"];
$lastname = $_POST["last_name"];

$eve = "update student set s_first_name ='{$firstname}', s_last_name ='{$lastname}' WHERE  sid = {$student_id}";
if (mysqli_query($conn, $eve))
        {
            echo 1;
        }else {
            echo 0;
        }



?>