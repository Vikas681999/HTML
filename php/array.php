<?php
echo"<h1> Arrays </h1>";

// simple array 
echo"<h3>1. array</h3>";  


$car = array("Tata ", "Honda ", "BMW" );

echo"<h5>1.1 Output form Index Number</h5>";  
echo $car[0];
echo $car[1];
echo $car[2]."<br>";

echo"<h5>1.2 Output form print_r and use HTML pre teg</h5>"; 
    echo "<pre>";
    print_r($car);
    echo "</pre>";

echo"<h5>1.3 Output form for loop</h5>";  
echo "<ul>";
for ($i= 0; $i<3; $i++)
    {
        echo "<li>$car[$i] </li>";
    }
    echo "</ul>";


// Associative array 
echo"<h3>2. Associative array</h3>";  
$a= array(
    "Neel"=>25,
    "Rahul" =>27,
    "vikas"=>23
); 
echo $a["vikas"];

// Associative array 
echo"<h3>3. ForEach Loop</h3>"; 

$colors =[
    "red",
    "green",
    "blue"
];
    foreach($colors as $value)
    {
        echo $value."<br>";
    };


// Maltidimensional array 
echo"<h3>4. Maltidimensional Array</h3>";

    $emp = [
        [1, "Neel", "Web Dev", 22],
        [2, "Rahul", "Php Dev", 27],
        [3, "Vikas", "Web Dev", 23]
];
    for ($row =0; $row < 3; $row++)
    {
        for ($col =0; $col < 4; $col++)
        {
            echo $emp [$row] [$col]. " ";
        }
        echo "<br>";
    }
echo"<h5>4.1 Maltidimensional Array / Foreach loop</h5>";
    foreach($emp as $value1)
    {
        foreach($value1 as $value2)
        {
            echo $value2. " ";
        }
        echo "<br>";
    }



echo"<h5>4.2 Maltidimensional Array / Foreach loop with list</h5>";


echo "<table border='1px' cellpadding='15px cellspacings='50px''> ";
    foreach($emp as list($SNO, $name, $Dig, $salary))
    {
        echo "<tr><td>$SNO</td> <td>$name</td> <td>$Dig</td> <td>$salary</td> </tr>";
    }
    echo "</table>";

?> 