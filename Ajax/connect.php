<?php
$host ="localhost";
$user ="root";
$pass ="home1234";
$db ="test";

$conn = new mysqli ($host, $user, $pass, $db);

if ($conn)
{
    //echo"DB is connect";
    
}else {
    echo "DB is not connect";
}
?>