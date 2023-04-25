<?php

echo "Today is ". date("y/m/d"). "<br>";
echo "Today is ". date("y-m-d"). "<br>";
echo "Today is ". date("y.m.d"). "<br>";


$d=strtotime("10:30pm April 15 2014");
echo "Created date is " . date("Y-m-d h:i:sa", $d);

?>