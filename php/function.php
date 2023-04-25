<?php
echo"<h1> Functions </h1>";

//Function With parameters
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

    hello("Bill", "Gates");

//Function With Returning Value
    echo"<h3>2. Function With Returning Value</h3>"; 

    function subjects($math, $Eng, $Scr, $Hindi, $Com)
    {
        $sum = $math + $Eng + $Scr + $Hindi + $Com;

        return $sum;
    }
    function percentage($st)
    {
        $per = $st /5;

        echo $per."%";

    }


     $total = subjects(45,88,65,77,66);

     percentage($total);

//Function Argument by Reference
     echo"<h3>3. Function Argument by Reference</h3>"; 

    function tetsting(&$string)
    {
        $string .=" and Something extra.";
    }

    $str = "This is string";
    tetsting($str);
    echo $str;


// Variable Function
echo"<h3>4  . Variable Function</h3>"; 

    function wow($name)
    {
        echo "Hello $name";
    }
    $func ="WOW";
    $func("Vikas");

// Recursive Function
echo"<h3>4  . Recursive Function</h3>"; 

    function display($number)
    {
        if ($number <= 5)
        {
            echo "$number <br>";
            display($number + 1);
        }
    }
    display(1);
echo"<h4> Factorial Function</h4>"; 

    function factorial($n)
    {
         if ($n == 0)
         {
            return 1;
         }else{
            return ($n * factorial($n -1));
         }
    }
echo factorial(6);
?>