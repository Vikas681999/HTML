<?php

include "connect.php";
$student_id = $_POST["id"];



$sql = "select * from student where  sid = {$student_id}";
$re = mysqli_query($conn, $sql);
$output  ="";

if (mysqli_num_rows($re) > 0 )
{
    
                while($rt = mysqli_fetch_assoc($re)) 
                {
                    $output .="
                    <tr>
                    <td>First Name</td>
                    <td>
                        <input type='text' id='edit-fname' value='{$rt['s_first_name']}' >
                        <input type='text' id='edit-id' hidden value='{$rt['sid']}' >
                    </td>
                    </tr>
                    <tr>
                        <td>Last Name</td>
                        <td style='padding-top: 15px;'><input type='text' id='edit-lname' value='{$rt['s_last_name']}'></td>
                        
                    </tr>
                    <tr>
                    <td></td>
                    
                        <td style='padding-top: 15px;'><input class='btn btn-success' type='submit' id='edit-submit' value='save'></td>
                    </tr>";
                }
             
                mysqli_close($conn);

                echo $output;

}else{
            echo "<h2>No Record Found</h2>";
}


?>