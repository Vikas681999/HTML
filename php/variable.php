<?php
    $WebName ="Adroit Infosol";  //Straing
    $NumDev =15;
    $Num_tester = 10;
    $Num_admin_staff =10;                
    $Totel_Empl = $NumDev+$Num_admin_staff+$Num_tester;

    echo"<h1>"."Variable Example"."</h1>"."<br>";

     echo "Comapny Name :"."<b>".$WebName."</b>"."<br>";
     echo "Number Of Devloper : <b>".$NumDev."</b>"."<br>";
     echo "Number Of Tester : <b>".$Num_tester."</b>"."<br>";
     echo "Number Of Admin Staff : <b>".$Num_admin_staff."</b>"."<br>";
     echo "Number Of Total Employee : <b>".$Totel_Empl."</b>";

     echo"<br><br>";

     // Contant Variable 
     
         define ("Name","<b>Adroi_Infosol</b>");
     
         echo Name." : THIS IS CONTANT VARIABLE & its global ";
     
     

?>