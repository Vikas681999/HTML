<?php
    include "connect.php";
    $student_id = $_POST["id"];


    $eve = "DELETE FROM student WHERE  sid = {$student_id}";

       if (mysqli_query($conn, $eve))
        {
            echo 1;
        }else {
            echo 0;
        }

?>
