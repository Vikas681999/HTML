<?php
echo"<h1>Switch Case</h1>";
$weekdays = 7;

    switch($weekdays){
        case 1:
           echo"Today is Monday"; 
        break;
        case 2:
            echo"Today is Tuesday"; 
         break;
         case 3:
            echo"Today is wednesday"; 
         break;
         case 4:
            echo"Today is Thursday"; 
         break;
         case 5:
            echo"Today is Friday"; 
         break;
         case 6:
            echo"Today is Saturday"; 
         break;
         case 7:
            echo"Today is Sunday"; 
         break;
         default:
            echo"Enter Vaild Number"; 
         break;

}


echo "<br>";
echo"<h1>Ternary Operator</h1>";
$x = 10;
 $z = ($x>20)? "Greater":"Smaller";
 echo $z;



?>