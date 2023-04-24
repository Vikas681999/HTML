<?php
echo"<h1> Functions </h1>";

echo"<h3>1. Function With parameters</h3>";  
 function sum($a,$b)
    {
        echo "Example 1. = ";
        echo  $a  + $b ."<br>";
    }

    sum(10,77);

   

    function hello($fname,$lname)
    {
        echo "Example 2. = ";
        echo "Hello $fname $lname.<br>";
    }

    hello("Bill", "Gates")
?>