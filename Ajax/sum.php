<?php
if ($_POST['num_1'] and $_POST['num_2']){
    
   $num1 =$_POST['num_1'];
    $num2 = $_POST['num_2'];
    $sum = $num1 + $num2;
    echo "Sum is ". $sum;
}else{
    echo "Enter any value";
}

/*
$x=$value_1;  
$y=$value_2;  
$z=$x+$y;  
echo "Sum: ",$z;  

*/

   



?>
