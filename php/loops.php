<?php
 echo"<h1>Loops</h1>";  

 echo"<h3>1. while loop</h3>";  
    $a=1;

    while($a <=5)
    {
        echo $a .".) Hello wolrd<br>";
        $a++;
    }

    echo"<h3>2. Do while loop</h3>";  


    $x=1;

    do{
        echo $x.".) Hello <br>";
        $x++;

    }while ($x <=10);

    echo"<h3>2.For loop</h3>";   

    for($a=1; $a<=20; $a++)
    {
        echo $a.".) This is for loop<br>";
    }

    echo"<h3>2.Nested loop</h3>";  

    for ($a=1; $a<=100; $a=$a+ 10)
    {
        for ($b=$a; $b <$a +10; $b++)
        {
            echo $b ." ";
        }
        echo "<br>";

    }
?>