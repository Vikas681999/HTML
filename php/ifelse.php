<?php
     echo"<h1>Ifelse</h1>";  
 // If esle Condition

    $name = "Neel";
    $gender = "Male";
    
    if($gender == "Male")
    {
        echo "Hello Mr. " .$name ;
    }else{
        echo "Hello Miss. ".$name;


    }

 // If elseif statement
 
    $per =95;

    if($per >=80 && $per <=100):
        echo " Your are in Merit.";
   
        elseif($per >=60 && $per <= 80):
        echo " Your are in Ist Division.";
  
        elseif($per >=45 && $per <=60):
        echo " Your are in IInd Division.";
   
        elseif($per >=33 && $per <=45):
        echo " Your are in IIIrd Division.";

        elseif($per < 33 ):
        echo " Your are Fail.";
    else:
        echo "Enter Valid percentage";
        
    endif;


?>