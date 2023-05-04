<?php

include "connect.php";

$search_value = $_POST["search"];
$sql = "select * from student where s_first_name LIKE '%{$search_value}%' OR s_last_name LIKE '%{$search_value}%'";
$re = mysqli_query($conn, $sql);
$output  ="";

if (mysqli_num_rows($re) > 0 )
{
    $output = '<table border="1" width="100%" cellspacing="0" cellpadding="10px">
                <tr>
                <th>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Edit</th>
                <th>Delete</th>
                </tr> ';

                while($rt = mysqli_fetch_assoc($re)) 
                {
                    $output .="<tr><td>{$rt ["sid"]}</td><td>{$rt ["s_first_name"]}</td><td>{$rt ["s_last_name"]}</td><td><button class='edit-btn' data-eid='{$rt ["sid"]}'>Edit</button></td><td><button class='delete-btn' data-id='{$rt ["sid"]}'>Delete</button></td></tr>";
                }
                $output .= "</table>";
                mysqli_close($conn);

                echo $output;

}else{
            echo "<h2>No Record Found</h2>";
}


?>