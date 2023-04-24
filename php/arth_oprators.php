<?php
echo"<h1>Arithmetic Opratiors</h1>";
 // + Addition   
    $a =5;
    $b =3;

    $add = $a + $b;
    
    echo "1. "."$a "."+ "."$b "."= "."$add";
    echo " ( + Addition ) "."<br>";

    // - Subtration   
    $sub = $a -$b;
    echo "2. "."$a "."- "."$b "."= "."$sub";
    echo " ( - Subtration ) "."<br>";

    // * Multiplication   
    $multi = $a * $b;
    echo "3. "."$a "."* "."$b "."= "."$multi";
    echo " ( * Multiplication ) "."<br>";

    // ** Exponentition   
    $sub = $a ** $b;
    echo "4. "."$a "."** "."$b "."= "."$sub";
    echo " ( * Exponentition ) "."<br>";

    // % Division   
    $divi = $a / $b;
    echo "5. "."$a "."% "."$b "."= "."$divi";
    echo " ( / Division ) "."<br>";

    // % Modular   
    $modu = $a % $b;
    echo "6. "."$a "."% "."$b "."= "."$modu";
    echo " ( % Modular ) "."<br>";

     // ++ Increment operator  

     echo "6. ".$a." ++ Increment operator = ";
        $a++;
        echo $a."<br>";
     
    // -- Decrement operator  

    echo "7. ".$a." -- Decrement operator = ";
    $a--;
    echo $a;


?>